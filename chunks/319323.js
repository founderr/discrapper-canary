n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(283836),
    l = n(728345),
    o = n(689938),
    c = n(364060);
function u(e) {
    let { applicationId: t, guildId: n } = e,
        { data: a } = (0, l.IX)(t);
    return null == a
        ? null
        : (0, i.jsx)(d, {
              app: a,
              guildId: n
          });
}
function d(e) {
    let { app: t, guildId: l } = e;
    (0, r.q)(t.id);
    let u = a.useCallback(() => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: t.id,
                    guildId: l,
                    ...n
                });
        });
    }, [t, l]);
    return (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        onClick: u,
        children: (0, i.jsxs)('div', {
            className: c.button,
            children: [
                (0, i.jsx)(s.ShopSparkleIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                o.Z.Messages.STOREFRONT_TITLE.format({ appName: t.name })
            ]
        })
    });
}
