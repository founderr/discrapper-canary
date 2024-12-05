n.d(t, {
    GG: function () {
        return i;
    },
    R2: function () {
        return o;
    },
    h7: function () {
        return s;
    },
    rh: function () {
        return r;
    }
});
var l = n(570140);
function s(e, t, n) {
    return new Promise((s) => {
        setTimeout(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_INVITE_MODAL_OPEN',
                activity: e,
                isPrivate: t,
                context: n,
                resolve: s
            });
        }, 0);
    });
}
function r(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_QUERY',
        query: e
    });
}
function i(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        channelId: e
    });
}
function o(e) {
    l.Z.dispatch({
        type: 'ACTIVITY_INVITE_MODAL_SEND',
        userId: e
    });
}
