n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(283836),
    s = n(728345),
    l = n(689938),
    u = n(364060);
function c(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, s.I)(t);
    return null == i
        ? null
        : (0, r.jsx)(d, {
              app: i,
              guildId: n
          });
}
function d(e) {
    let { app: t, guildId: s } = e;
    (0, o.q)(t.id);
    let c = i.useCallback(() => {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e('98538').then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    appId: t.id,
                    guildId: s,
                    ...n
                });
        });
    }, [t, s]);
    return (0, r.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        onClick: c,
        children: (0, r.jsxs)('div', {
            className: u.button,
            children: [
                (0, r.jsx)(a.ShopSparkleIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                l.Z.Messages.STOREFRONT_TITLE.format({ appName: t.name })
            ]
        })
    });
}
