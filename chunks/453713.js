n.d(t, {
    P: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(429368),
    o = n(724994),
    c = n(388032),
    d = n(724806);
let u = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: a, selectedVariantIndex: c, minimal: u } = e,
            { isPurchased: m } = (0, o.L)(n);
        return (0, r.jsxs)(s.Clickable, {
            tag: 'li',
            onMouseEnter: () => {
                (0, l.$O)(t, a);
            },
            onClick: () => {
                (0, l.$O)(t, a);
            },
            className: i()(d.colorVariant, { [d.selectedVariant]: a === c }),
            children: [
                (0, r.jsx)('div', {
                    className: i()(d.colorSwatch, { [d.mask]: u && 0 !== a }),
                    style: { backgroundColor: n.variantValue }
                }),
                !u && m ? (0, r.jsx)('span', { className: d.purchasedIndicator }) : null
            ]
        });
    },
    m = (e) => {
        var t, n;
        let { product: a, className: o, minimal: m } = e,
            h = (0, l.o0)(a),
            p = null === (t = a.variants) || void 0 === t ? void 0 : t[h];
        if (null == p) return null;
        let f = null == p ? void 0 : p.variantLabel;
        return (0, r.jsxs)('div', {
            className: i()(d.variantsPanel, o, { [d.minimalState]: m }),
            onMouseEnter: () => (0, l.B2)(a, !0),
            onMouseLeave: () => (0, l.B2)(a, !1),
            children: [
                (0, r.jsx)('ol', {
                    className: d.variantsList,
                    children:
                        null === (n = a.variants) || void 0 === n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, r.jsx)(
                                      u,
                                      {
                                          variantGroupProduct: a,
                                          variant: e,
                                          variantIndex: t,
                                          selectedVariantIndex: h,
                                          minimal: m
                                      },
                                      t
                                  )
                              )
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    className: d.variantLabel,
                    children: m ? c.intl.string(c.t.wbgaj4) : f
                })
            ]
        });
    };
