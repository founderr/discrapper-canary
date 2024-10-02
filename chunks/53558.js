n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(970321),
    s = n(283836),
    l = n(621853),
    u = n(475413),
    c = n(689938);
function d(e) {
    let { user: t, onClick: n, ...i } = e;
    return (
        (0, s.q)(t.id),
        (0, r.jsx)(u.tG, {
            action: 'PRESS_APP_STOREFRONT',
            icon: a.ShopIcon,
            text: c.Z.Messages.STOREFRONT,
            color: a.ButtonColors.BRAND,
            themeColor: 'none',
            onClick: n,
            ...i
        })
    );
}
function _(e) {
    var t;
    let { user: s, guildId: u, ...c } = e,
        _ = (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
        }),
        E = (0, o.R)(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : '');
    if (null == _ || !E) return null;
    let f = () => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
            return (t) =>
                (0, r.jsx)(e, {
                    appId: _.id,
                    guildId: u,
                    ...t
                });
        });
    };
    return (0, r.jsx)(d, {
        user: s,
        guildId: u,
        onClick: f,
        ...c
    });
}
