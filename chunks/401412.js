_.d(E, {
    s: function () {
        return a;
    }
});
var t = _(570140),
    n = _(592125),
    s = _(305587);
function a(e) {
    let { channelId: E, location: _ } = e,
        a = (0, s.Xs)(_),
        M = n.Z.getChannel(E);
    a &&
        null != M &&
        M.isDM() &&
        t.Z.dispatch({
            type: 'USER_DM_MUTE_SHOW_FEEDBACK',
            channel: M
        });
}
