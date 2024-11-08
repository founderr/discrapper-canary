n.d(t, {
    Z: function () {
        return d;
    },
    s: function () {
        return s;
    }
});
var i = n(200651),
    o = n(704215),
    a = n(481060),
    r = n(570140),
    c = n(605236),
    l = n(592125),
    u = n(305587);
function s(e) {
    let { channelId: t, location: n } = e,
        i = l.Z.getChannel(t),
        a = (0, c.un)(o.z.USER_DM_MUTE_FEEDBACK);
    if (null != i && !!i.isDM() && !a)
        (0, u.Xs)(n) &&
            r.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: i
            });
}
function d() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
