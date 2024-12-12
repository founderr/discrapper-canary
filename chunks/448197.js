r.d(n, {
    Q: function () {
        return s;
    }
});
var i = r(823379),
    a = r(228168);
let s = (e) => {
    switch (e) {
        case a.n_.ACTIVITY:
            return {
                sendReact: 'SEND_REACT_ACTIVITY',
                pressReact: 'PRESS_REACT_ACTIVITY',
                sendReply: 'SEND_REPLY_ACTIVITY',
                pressReply: 'PRESS_REPLY_ACTIVITY'
            };
        case a.n_.AVATAR:
            return {
                sendReact: 'SEND_REACT_AVATAR',
                pressReact: 'PRESS_REACT_AVATAR',
                sendReply: 'SEND_REPLY_AVATAR',
                pressReply: 'PRESS_REPLY_AVATAR'
            };
        case a.n_.STATUS:
            return {
                sendReact: 'SEND_REACT_CUSTOM_STATUS',
                pressReact: 'PRESS_REACT_CUSTOM_STATUS',
                sendReply: 'SEND_REPLY_CUSTOM_STATUS',
                pressReply: 'PRESS_REPLY_CUSTOM_STATUS'
            };
        default:
            (0, i.vE)(e);
    }
};
