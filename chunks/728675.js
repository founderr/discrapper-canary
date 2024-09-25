n.d(t, {
    Z: function () {
        return i;
    }
});
var r = n(47120);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { onBeforeBatch: r } = n,
        i = new Set();
    function a(e) {
        null != e.channel_id && i.has(e.channel_id) && t(e);
    }
    function o() {
        i.clear();
    }
    function s(e) {
        let { channelId: t } = e;
        null != t && i.add(t);
    }
    function l(e) {
        let { message: t } = e;
        if (null != t.channel_id && !!i.has(t.channel_id)) null == r || r(), a(t);
    }
    function u(e) {
        let { channelId: t, messages: n } = e;
        i.add(t), null == r || r(), n.forEach((e) => a(e));
    }
    function c(e) {
        let { messages: n } = e;
        null == r || r(), n.forEach((e) => t(e));
    }
    function d(e) {
        let { messages: n } = e;
        null == r || r(), n.forEach((e) => t(e));
    }
    function _(e) {
        null == r || r(),
            e.messages.forEach((e) => {
                e.forEach((e) => t(e));
            });
    }
    e.actions = {
        ...e.actions,
        POST_CONNECTION_OPEN: o,
        MESSAGE_CREATE: {
            callback: l,
            autoSubscribe: !1
        },
        MESSAGE_UPDATE: l,
        LOAD_MESSAGES_SUCCESS: u,
        LOAD_MESSAGES_AROUND_SUCCESS: u,
        LOAD_RECENT_MENTIONS_SUCCESS: c,
        LOAD_PINNED_MESSAGES_SUCCESS: d,
        SEARCH_FINISH: _,
        MOD_VIEW_SEARCH_FINISH: _,
        CHANNEL_SELECT: {
            callback: s,
            autoSubscribe: !1
        }
    };
}
