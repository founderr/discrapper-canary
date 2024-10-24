t.d(n, {
    Z: function () {
        return c;
    },
    s: function () {
        return o;
    }
});
var i = t(200651),
    a = t(704215),
    s = t(481060),
    u = t(570140),
    r = t(605236),
    l = t(592125),
    d = t(305587);
function o(e) {
    let { channelId: n, location: t } = e,
        i = l.Z.getChannel(n),
        s = (0, r.un)(a.z.USER_DM_MUTE_FEEDBACK);
    if (null != i && !!i.isDM() && !s)
        (0, d.Xs)(t) &&
            u.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: i
            });
}
function c() {
    (0, s.openModalLazy)(async () => {
        let { default: e } = await t.e('87995').then(t.bind(t, 180970));
        return (n) => (0, i.jsx)(e, { ...n });
    });
}
