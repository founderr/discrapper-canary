e.d(t, {
    Z: function () {
        return s;
    },
    s: function () {
        return d;
    }
});
var i = e(200651),
    a = e(704215),
    r = e(481060),
    l = e(570140),
    u = e(605236),
    o = e(592125),
    c = e(305587);
function d(n) {
    let { channelId: t, location: e } = n,
        i = o.Z.getChannel(t),
        r = (0, u.un)(a.z.USER_DM_MUTE_FEEDBACK);
    if (null != i && !!i.isDM() && !r)
        (0, c.Xs)(e) &&
            l.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: i
            });
}
function s() {
    (0, r.openModalLazy)(async () => {
        let { default: n } = await e.e('87995').then(e.bind(e, 180970));
        return (t) => (0, i.jsx)(n, { ...t });
    });
}
