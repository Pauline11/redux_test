/*
 * @Author:  
 * @Date: 2022-12-01
 * @Description: 
 */

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from "qs"
import _  from 'lodash';
import { AutoComplete, message, Input, Tag, Tooltip } from 'antd';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
// import Helper from '../../common';
// import IconFont from 'commonComponents/IconFont';
// import IconFont from '../iconfont';

import './index.css';

const regMatch = /^[ ]*$/;

// function getPathMatchParams() {
//     const matchRes = match(config.url.app.searchRes.path, { decode: decodeURIComponent })(window.location.pathname);
//     const matchParams = matchRes ? (matchRes as { params: { keyword: '' } })?.params : {};
//     return matchParams;
// }

const Practice = () => {

    const [options, setOptions] = useState([]); // 关联下拉项
    const [isLoading, setIsLoading] = useState(false);
    const [tag, setTag] = useState([]); // 实体标签
    const { keyword: matK, tab } = {matK: 'key', tab: 1 };
    const [keyword, setKeyword] = useState(matK ? matK : ''); // 检索关键字
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 检索下拉框是否展示
    const [focused, setFocused] = useState(false); // 标识检索框的focus状态
    const [initialFlag, setInitialFlag] = useState(true); // 标识刚进入页面的状态

    /**
     * @description: 获取关联搜索列表和标签
     * @param {string} value
     * @return {*}
     */
    const getRelationInfo = (val) => {
        setIsLoading(true);
        const value = val;
        // 高亮处理
        const formatHtml = (valA) => {
            const formatVal = valA.replace(value, `<span style='color: #3388FF; font-weight: 500' }}>${value}</span>`);
            return <span dangerouslySetInnerHTML={{ __html: formatVal }} />;
        };
        // 获取关联搜索列表
        // getRelatedSearchRes({ params: { keyword: value ? value : '' } })
        //     .then((res) => {
        //         const list = res.relationList.map((item) => ({ value: item, label: formatHtml(item) }));
        //         if (value === '') {
        //             setTag([]);
        //             setOptions([]);
        //             setIsDropdownOpen(false);
        //         } else {
        //             setOptions(list);
        //             setTag(res.intentCns);
        //         }
        //     })
        //     .catch(() => {
        //         setTag([]);
        //         setOptions([]);
        //         setIsDropdownOpen(false);
        //     })
        //     .finally(() => {
        //         setIsLoading(false);
        //     });

            setTag([]);
            // setOptions([]);
            setOptions([
                {value: '111', label: '11'},
                {value: '222', label: '22'},
                {value: '333', label: '33'},
            ]);
            // setIsDropdownOpen(false); 
            setIsLoading(false);
    };

    /**
     * @description: 检索输入框变化时的回调
     * @param {*} value
     * @return {*}
     */
    const handleInputChange = _.debounce((val) => {
        setKeyword(val);
        const a = !val || val.search(regMatch) !== -1 ? '' : val;
        if (a === '') {
            setTag([]);
            setOptions([]);
        } else {
            getRelationInfo(a);
        }
    }, 300);

    /**
     * @description: 点击关联检索下拉列表项时的回调
     * @param {string} value
     * @return {*}
     */
    const onSelect = (value) => {
        setKeyword('');
        getSearchRes(value, undefined, 'select');
    };
    /**
     * @description: 点击检索按钮或回车的回调
     * @param {string} value
     * @return {*}
     */
    const getSearchRes = ( value, e, flag ) => {
        // const { tab } = Helper.getPathMatchParams();
        const tab = 'word';
        e?.stopPropagation?.();
        const iinput = document.querySelector('input');
        iinput.blur();
        setIsDropdownOpen(false);
        if (!value || value.search(regMatch) !== -1) {
            message.error('输入内容不能为空');
        } else {
            const keyword = value.trim();
            const param = { keyword, tab };
            // 跳转到检索结果页
            // handleSearchJump(param, Date.now());
            // sendLog({
            //     opId: flag ? 2002 : 2001,
            //     content: keyword
            // });
        }
    };

    const handleBlur = () => {
        setIsDropdownOpen(false);
        setFocused(false);
    };
    const handleFocus = () => {
        if (initialFlag && keyword !== '') {
            getRelationInfo(keyword);
            setInitialFlag(false);
        }
        setFocused(true);
    };

    useEffect(() => {
        setIsDropdownOpen(focused && options.length > 0);
    }, [focused, options.length]);

    // 检索框右侧更多tag标签
    const tagContent = <div>{tag.slice(2).join('，')}</div>;

    return (
        <div >
           <div className="input-search-wrapper">
            <AutoComplete
                allowClear
                defaultValue={keyword}
                backfill
                style={{ width: 560 }}
                options={options}
                open={isDropdownOpen}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSelect={onSelect}
                onChange={handleInputChange}
                dropdownClassName="main-search-dropdown-container"
                getPopupContainer={() => document.querySelector('.input-search-wrapper')}>
                <Input.Search
                    // value={keyword}
                    placeholder="请输入"
                    enterButton={
                        isLoading ? <LoadingOutlined /> : <SearchOutlined />
                    }
                    suffix={
                        <div className="input-search-knowl-srch-suffix">
                            {tag.slice(0, 2).map((item, index) => (
                                <Tag key={index} className="suffix-tag">
                                    {item}
                                </Tag>
                            ))}
                            {tag.length > 2 && (
                                <Tooltip title={tagContent} arrowPointAtCenter placement="bottom">
                                    <Tag className="more-tag">···</Tag>
                                </Tooltip>
                            )}
                        </div>
                    }
                    onSearch={getSearchRes}
                />
            </AutoComplete>
        </div>
        </div>
    )
}

export default  Practice ;