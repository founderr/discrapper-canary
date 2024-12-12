r.d(n, {
    A6: function () {
        return o;
    },
    fE: function () {
        return a;
    },
    qx: function () {
        return s;
    }
});
var i = r(570140);
function a(e) {
    let { message: n, channel: r, shouldMention: a, showMentionToggle: s, source: o } = e;
    i.Z.dispatch({
        type: 'CREATE_PENDING_REPLY',
        message: n,
        channel: r,
        shouldMention: a,
        showMentionToggle: s,
        source: o
    });
}
function s(e, n) {
    i.Z.dispatch({
        type: 'SET_PENDING_REPLY_SHOULD_MENTION',
        channelId: e,
        shouldMention: n
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'DELETE_PENDING_REPLY',
        channelId: e
    });
}
