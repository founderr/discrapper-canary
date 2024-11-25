n.d(t, {
    P: function () {
        return C;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(404759),
    o = n.n(s),
    c = n(866442),
    d = n(481060),
    u = n(429368),
    m = n(724994),
    h = n(388032),
    p = n(474083);
let f = o()((e) => {
        let t = !1;
        if (null != e && (0, c.FX)(e)) {
            let n = (0, c._i)(e);
            null != n && (t = 0.3 >= (0, c.Bd)(n));
        }
        return t ? d.tokens.unsafe_rawColors.PRIMARY_700.css : d.tokens.unsafe_rawColors.PRIMARY_200.css;
    }),
    g = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: s, selectedVariantIndex: o, onEnter: c, onLeave: g, minimal: C } = e,
            { isPurchased: v } = (0, m.L)(n),
            b = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, u.$)(t, i);
                },
                [t, i]
            );
        return (0, r.jsx)(d.Tooltip, {
            text: h.intl.string(h.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !C && v,
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
                    onClick: b,
                    className: p.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: l()(p.colorSwatch, {
                            [p.open]: !C,
                            [p.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: s - i
                        },
                        children: v
                            ? (0, r.jsx)(d.CheckmarkSmallBoldIcon, {
                                  className: p.purchasedIndicator,
                                  color: f(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    C = (e) => {
        var t, n, a;
        let { variantGroupProduct: i, className: s, previewingVariantIndexProps: o, setIsHoveringOnSwitch: c, minimal: m, purchases: f } = e,
            C = (0, u.o)(i, f),
            v = o.previewingVariantIndex,
            b = null === (t = i.variants) || void 0 === t ? void 0 : t[C],
            x = null !== v ? (null === (n = i.variants) || void 0 === n ? void 0 : n[v]) : void 0;
        if (null == b) return null;
        let _ = null != x ? x.variantLabel : null == b ? void 0 : b.variantLabel;
        return (0, r.jsxs)('div', {
            className: l()(p.variantsPanel, s, { [p.minimalState]: m }),
            onMouseEnter: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            children: [
                (0, r.jsx)('ol', {
                    className: p.variantsList,
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
                    className: p.variantLabel,
                    children: m ? h.intl.string(h.t.wbgaj4) : _
                })
            ]
        });
    };
