n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(481060),
    r = n(283836),
    l = n(728345),
    o = n(689938),
    c = n(364060);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: s } = (0, l.I)(t);
    return null == s
        ? null
        : (0, i.jsx)(d, {
              app: s,
              guildId: n
          });
}
function d(e) {
    let { app: t, guildId: l } = e;
    (0, r.q)(t.id);
    let u = s.useCallback(() => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('44797')]).then(n.bind(n, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: t.id,
                    onlySubscribeServerSubForGuildId: l,
                    ...n
                });
        });
    }, [t, l]);
    return (0, i.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        onClick: u,
        children: (0, i.jsxs)('div', {
            className: c.button,
            children: [
                (0, i.jsx)(a.ShopSparkleIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                o.Z.Messages.STOREFRONT_TITLE.format({ appName: t.name })
            ]
        })
    });
}
