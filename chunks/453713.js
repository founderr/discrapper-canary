n.d(t, {
    P: function () {
        return p;
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
        let { variantGroupProduct: t, variant: n, variantIndex: i, selectedVariantIndex: d, onEnter: m, onLeave: p, minimal: h } = e,
            { isPurchased: f } = (0, c.L)(n),
            g = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, o.$)(t, i);
                },
                [t, i]
            );
        return (0, r.jsxs)(l.Clickable, {
            tag: 'li',
            onMouseEnter: m,
            onMouseLeave: p,
            onClick: g,
            className: s()(u.colorVariant, { [u.selectedVariant]: i === d }),
            children: [
                (0, r.jsx)('div', {
                    className: s()(u.colorSwatch, { [u.mask]: h && 0 !== i }),
                    style: { backgroundColor: n.variantValue }
                }),
                !h && f ? (0, r.jsx)('span', { className: u.purchasedIndicator }) : null
            ]
        });
    },
    p = (e) => {
        var t, n, a;
        let { variantGroupProduct: i, className: c, previewingVariantIndexProps: p, setIsHoveringOnSwitch: h, minimal: f, purchases: g } = e,
            C = (0, o.o)(i, g),
            b = p.previewingVariantIndex,
            v = null === (t = i.variants) || void 0 === t ? void 0 : t[C],
            x = null !== b ? (null === (n = i.variants) || void 0 === n ? void 0 : n[b]) : void 0;
        if (null == v) return null;
        let _ = null != x ? x.variantLabel : null == v ? void 0 : v.variantLabel;
        return (0, r.jsxs)('div', {
            className: s()(u.variantsPanel, c, { [u.minimalState]: f }),
            onMouseEnter: () => (null == h ? void 0 : h(!0)),
            onMouseLeave: () => (null == h ? void 0 : h(!1)),
            children: [
                (0, r.jsx)('ol', {
                    className: u.variantsList,
                    children:
                        null === (a = i.variants) || void 0 === a
                            ? void 0
                            : a.map((e, t) =>
                                  (0, r.jsx)(
                                      m,
                                      {
                                          variantGroupProduct: i,
                                          variant: e,
                                          variantIndex: t,
                                          selectedVariantIndex: C,
                                          onEnter: () => p.handleEntering(t),
                                          onLeave: p.handleLeaving,
                                          minimal: f
                                      },
                                      t
                                  )
                              )
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
