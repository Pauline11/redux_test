/**
 * 功能：飞冰相关工具函数
 * 作者：冯刚
 * 日期：2020-12-08
 */
import { event } from '@ice/stark-data';

export const iceModuleRedirect = (
    { key = '', moduleKey = '', routeKey = '', openWin = undefined, params = {}, data = undefined },
    e: Event
) => {
    if (e?.preventDefault) {
        e.preventDefault();
    }
    event.emit('moduleJump', {
        key,
        moduleKey,
        routeKey,
        openWin,
        params,
        data
    });
};

export default {
    iceModuleRedirect
};
