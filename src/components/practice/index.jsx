/*
 * @Author: pangyue
 * @Date: 2022-11-11
 * @Description: 
 * 
 */
import { useEffect } from 'react';
import './index.css';
import Red from '../../redux.png';

const Practice = () => {

    // useEffect(() => {
    //     const d = document.getElementById('d');
    //     let flag = true;
    //     let left = 0;
    //     // var rafId = null;

    //     function render() {
    //         if(flag) {
    //             if(left >= 200) {
    //                 flag = false;
    //             }
    //             d.style.left = `${left++}px`;
    //         } else {
    //             if(left <= 0) {
    //                 flag = true;
    //             }
    //             d.style.left = `${left--}px`;
    //         }
    //     }
    //     (function animationLoop() {
    //         render();
    //         requestAnimationFrame(animationLoop);
    //         // const rafId = window.requestAnimationFrame(animationLoop);
    //         // if(left === 50) cancelAnimationFrame(rafId); 
    //     })();

    // }, []);
 


    return (
        <div >
            {/*<div className='move'>move right</div>
             <br/>
            <div className='parent'>
                <div className='top'>top</div>
                <div className='mid'>mid</div>
                <div className='bottom'>bottom</div>
            </div>
            <hr />
            溢出省略
            <div className='ellipse'>
                <span>askd老师都快马老师没打老妈的辣妈的辣妈的吗打卡啊来扩大</span>
            </div>
            画0.5px的线
            <hr />
            <div className='annam'>
                <div className="a">A</div>
                <div className="b">B</div>
            </div>
            图片
            <hr />
            <div>
                <img src={Red}  alt="dd"/>
            </div>
            
            requestAnimationFrame 测试 */}
            {/* <hr /> */}
            {/* <div id='c'>
                <div id="d"></div>
            </div> */}

             三栏布局<br />
             1.flex方案；  2.grid方案； 3.定位方案；4.浮动方案（2种）。
            <hr />
            {/* <div className='three-column'>
                <div className='left'>zuo</div>
                <div className='right'>you</div>
                <div className='middle'>
                    <div className='content'>zhong</div>
                </div>
            </div> */}
           <div className='three-column'>
                <div className='middle'>
                    <div className='content'>zhong</div>
                </div>
                <div className='left'>zuo</div>
                <div className='right'>you</div>
            </div>
        </div>
    )
}

export default  Practice ;