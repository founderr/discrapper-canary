n.d(t, {
    s: function () {
        return l;
    }
});
var r = n(704215),
    i = n(570140),
    a = n(605236),
    o = n(592125),
    s = n(305587);
function l(e) {
    let { channelId: t, location: n } = e,
        l = o.Z.getChannel(t),
        u = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
    if (null != l && !!l.isDM() && !u)
        (0, s.Xs)(n) &&
            i.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: l
            });
}
