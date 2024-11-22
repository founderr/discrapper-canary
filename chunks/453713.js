n.d(t, {
    P: function () {
        return C;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(404759),
    o = n.n(l),
    c = n(866442),
    d = n(481060),
    u = n(429368),
    m = n(724994),
    p = n(388032),
    h = n(591014);
let f = o()((e) => {
        let t = !1;
        if (null != e && (0, c.FX)(e)) {
            let n = (0, c._i)(e);
            null != n && (t = 0.3 >= (0, c.Bd)(n));
        }
        return t ? d.tokens.unsafe_rawColors.PRIMARY_700.css : d.tokens.unsafe_rawColors.PRIMARY_200.css;
    }),
    g = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: l, selectedVariantIndex: o, onEnter: c, onLeave: g, minimal: C } = e,
            { isPurchased: b } = (0, m.L)(n),
            v = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, u.$)(t, i);
                },
                [t, i]
            );
        return (0, r.jsx)(d.Tooltip, {
            text: p.intl.string(p.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !C && b,
            children: (e) =>
                (0, r.jsx)(d.Clickable, {
                    tag: 'li',
                    onMouseEnter: () => {
                        var t;
                        c(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onMouseLeave: () => {
                        var t;
                        g(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onClick: v,
                    className: h.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: s()(h.colorSwatch, {
                            [h.open]: !C,
                            [h.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: l - i
                        },
                        children: b
                            ? (0, r.jsx)(d.CheckmarkSmallBoldIcon, {
                                  className: h.purchasedIndicator,
                                  color: f(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    C = (e) => {
        var t, n, a;
        let { variantGroupProduct: i, className: l, previewingVariantIndexProps: o, setIsHoveringOnSwitch: c, minimal: m, purchases: f } = e,
            C = (0, u.o)(i, f),
            b = o.previewingVariantIndex,
            v = null === (t = i.variants) || void 0 === t ? void 0 : t[C],
            x = null !== b ? (null === (n = i.variants) || void 0 === n ? void 0 : n[b]) : void 0;
        if (null == v) return null;
        let _ = null != x ? x.variantLabel : null == v ? void 0 : v.variantLabel;
        return (0, r.jsxs)('div', {
            className: s()(h.variantsPanel, l, { [h.minimalState]: m }),
            onMouseEnter: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            children: [
                (0, r.jsx)('ol', {
                    className: h.variantsList,
                    children:
                        null === (a = i.variants) || void 0 === a
                            ? void 0
                            : a.map((e, t) => {
                                  var n, a;
                                  return (0, r.jsx)(
                                      g,
                                      {
                                          variantGroupProduct: i,
                                          variant: e,
                                          variantIndex: t,
                                          selectedVariantIndex: C,
                                          totalVariants: null !== (a = null === (n = i.variants) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0,
                                          onEnter: () => o.handleEntering(t),
                                          onLeave: o.handleLeaving,
                                          minimal: m
                                      },
                                      t
                                  );
                              })
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    className: h.variantLabel,
                    children: m ? p.intl.string(p.t.wbgaj4) : _
                })
            ]
        });
    };
