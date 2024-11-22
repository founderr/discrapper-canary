n.d(t, {
    P: function () {
        return h;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(481060),
    o = n(429368),
    c = n(724994),
    d = n(388032),
    u = n(591014);
let m = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: m, selectedVariantIndex: h, onEnter: p, onLeave: f, minimal: g } = e,
            { isPurchased: C } = (0, c.L)(n),
            b = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, o.$)(t, i);
                },
                [t, i]
            );
        return (0, r.jsx)(l.Tooltip, {
            text: d.intl.string(d.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !g && C,
            children: (e) =>
                (0, r.jsx)(l.Clickable, {
                    tag: 'li',
                    onMouseEnter: () => {
                        var t;
                        p(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onMouseLeave: () => {
                        var t;
                        f(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onClick: b,
                    className: u.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: s()(u.colorSwatch, {
                            [u.open]: !g,
                            [u.selected]: i === h
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: m - i
                        },
                        children: C
                            ? (0, r.jsx)(l.CheckmarkSmallBoldIcon, {
                                  className: u.purchasedIndicator,
                                  color: l.tokens.colors.BACKGROUND_TERTIARY
                              })
                            : null
                    })
                })
        });
    },
    h = (e) => {
        var t, n, a;
        let { variantGroupProduct: i, className: c, previewingVariantIndexProps: h, setIsHoveringOnSwitch: p, minimal: f, purchases: g } = e,
            C = (0, o.o)(i, g),
            b = h.previewingVariantIndex,
            v = null === (t = i.variants) || void 0 === t ? void 0 : t[C],
            x = null !== b ? (null === (n = i.variants) || void 0 === n ? void 0 : n[b]) : void 0;
        if (null == v) return null;
        let _ = null != x ? x.variantLabel : null == v ? void 0 : v.variantLabel;
        return (0, r.jsxs)('div', {
            className: s()(u.variantsPanel, c, { [u.minimalState]: f }),
            onMouseEnter: () => (null == p ? void 0 : p(!0)),
            onMouseLeave: () => (null == p ? void 0 : p(!1)),
            children: [
                (0, r.jsx)('ol', {
                    className: u.variantsList,
                    children:
                        null === (a = i.variants) || void 0 === a
                            ? void 0
                            : a.map((e, t) => {
                                  var n, a;
                                  return (0, r.jsx)(
                                      m,
                                      {
                                          variantGroupProduct: i,
                                          variant: e,
                                          variantIndex: t,
                                          selectedVariantIndex: C,
                                          totalVariants: null !== (a = null === (n = i.variants) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0,
                                          onEnter: () => h.handleEntering(t),
                                          onLeave: h.handleLeaving,
                                          minimal: f
                                      },
                                      t
                                  );
                              })
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    className: u.variantLabel,
                    children: f ? d.intl.string(d.t.wbgaj4) : _
                })
            ]
        });
    };
