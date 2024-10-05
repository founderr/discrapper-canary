t.d(n, {
    s: function () {
        return l;
    }
});
var i = t(704215),
    a = t(570140),
    s = t(605236),
    u = t(592125),
    r = t(305587);
function l(e) {
    let { channelId: n, location: t } = e,
        l = u.Z.getChannel(n),
        d = (0, s.un)(i.z.USER_DM_MUTE_FEEDBACK);
    if (null != l && !!l.isDM() && !d)
        (0, r.Xs)(t) &&
            a.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: l
            });
}
