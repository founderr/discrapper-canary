n.d(t, {
    g: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(622535),
    s = n(481060),
    o = n(884697),
    c = n(297651),
    d = n(215023),
    u = n(388032),
    m = n(218142);
let h = (e) => {
    var t;
    let { category: n, badgeText: a, handleTransition: h } = e,
        { handleCardVisibilityChange: p } = (0, c.E)(n.skuId, 'home', 'marketing'),
        g = (0, o.uV)(null !== (t = null == n ? void 0 : n.featuredBlock) && void 0 !== t ? t : '', {
            size: d.J0,
            format: 'png'
        });
    return (0, r.jsx)(l.$, {
        onChange: p,
        threshold: 0,
        children: (0, r.jsxs)(s.Clickable, {
            className: i()(m.featuredBlock),
            style: { backgroundImage: 'url('.concat(g, ')') },
            onClick: () => h('shop marketing tile', null == n ? void 0 : n.skuId),
            children: [
                null != a &&
                    (0, r.jsx)(s.TextBadge, {
                        disableColor: !0,
                        text: a,
                        className: m.featuredBlockBadge
                    }),
                (0, r.jsx)(s.Button, {
                    className: m.featuredBlockButton,
                    color: s.ButtonColors.WHITE,
                    onClick: () => {},
                    children: u.intl.string(u.t.jVcuVV)
                })
            ]
        })
    });
};
