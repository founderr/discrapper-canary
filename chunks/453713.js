n.d(t, {
    P: function () {
        return x;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(404759),
    o = n.n(s),
    c = n(91192),
    d = n(536895),
    u = n(866442),
    m = n(481060),
    h = n(209613),
    p = n(429368),
    g = n(724994),
    f = n(388032),
    C = n(474083);
let v = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? m.tokens.unsafe_rawColors.PRIMARY_700.css : m.tokens.unsafe_rawColors.PRIMARY_200.css;
    }),
    b = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: s, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: b } = e,
            { isPurchased: x } = (0, g.L)(n),
            { onFocus: _, ...k } = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            I = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), _();
                },
                [_, t, i]
            );
        return (0, r.jsx)(m.Tooltip, {
            text: f.intl.string(f.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !b && x,
            children: (e) =>
                (0, r.jsx)(m.Clickable, {
                    ...k,
                    tag: 'li',
                    onMouseEnter: () => {
                        var t;
                        u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onMouseLeave: () => {
                        var t;
                        h(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onFocus: () => {
                        var t;
                        u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onBlur: () => {
                        var t;
                        h(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onClick: I,
                    onKeyDown: (e) => {
                        e.key === d.R8.ENTER && I(e);
                    },
                    className: C.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: l()(C.colorSwatch, {
                            [C.open]: !b,
                            [C.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: s - i
                        },
                        children: x
                            ? (0, r.jsx)(m.CheckmarkSmallBoldIcon, {
                                  className: C.purchasedIndicator,
                                  color: v(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    x = (e) => {
        var t, n;
        let { variantGroupProduct: a, className: i, previewingVariantIndexProps: s, setIsHoveringOnSwitch: o, minimal: u, purchases: g } = e,
            v = (0, p.o)(a, g),
            x = s.previewingVariantIndex,
            _ = null === (t = a.variants) || void 0 === t ? void 0 : t[v],
            k = null !== x ? (null === (n = a.variants) || void 0 === n ? void 0 : n[x]) : void 0,
            I = (0, h.Z)('shop-variants-group-'.concat(a.storeListingId), d.hy.HORIZONTAL);
        if (null == _) return null;
        let S = null != k ? k.variantLabel : null == _ ? void 0 : _.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: I,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t;
                    let { ref: n, ...c } = e;
                    return (0, r.jsxs)('div', {
                        ref: n,
                        ...c,
                        className: l()(C.variantsPanel, i, { [C.minimalState]: u }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, r.jsx)('ol', {
                                className: C.variantsList,
                                children:
                                    null === (t = a.variants) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var n, i;
                                              return (0, r.jsx)(
                                                  b,
                                                  {
                                                      variantGroupProduct: a,
                                                      variant: e,
                                                      variantIndex: t,
                                                      selectedVariantIndex: v,
                                                      totalVariants: null !== (i = null === (n = a.variants) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0,
                                                      onEnter: () => s.handleEntering(t),
                                                      onLeave: s.handleLeaving,
                                                      minimal: u
                                                  },
                                                  t
                                              );
                                          })
                            }),
                            (0, r.jsx)(m.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: C.variantLabel,
                                children: u ? f.intl.string(f.t.wbgaj4) : S
                            })
                        ]
                    });
                }
            })
        });
    };
