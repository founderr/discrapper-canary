n.d(t, {
    a: function () {
        return l;
    },
    g: function () {
        return a;
    }
});
var i = n(570140);
function l(e, t) {
    i.Z.dispatch({
        guildId: e,
        channelId: t,
        type: 'UNREAD_SETTING_NOTICE_CHANNEL_VISIT'
    });
}
function a(e, t) {
    i.Z.dispatch({
        guildId: e,
        channelId: t,
        type: 'UNREAD_SETTING_NOTICE_RENDERED'
    });
}
