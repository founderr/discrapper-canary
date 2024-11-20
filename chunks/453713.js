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
    u = n(724806);
let m = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, selectedVariantIndex: d, minimal: m } = e,
            { isPurchased: p } = (0, c.L)(n),
            h = a.useCallback(() => {
                (0, o.tg)(t, i);
            }, [t, i]),
            f = a.useCallback(() => {
                (0, o.tg)(t, null);
            }, [t]),
            g = a.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, o.$O)(t, i);
                },
                [t, i]
            );
        return (0, r.jsxs)(l.Clickable, {
            tag: 'li',
            onMouseEnter: h,
            onMouseLeave: f,
            onClick: g,
            className: s()(u.colorVariant, { [u.selectedVariant]: i === d }),
            children: [
                (0, r.jsx)('div', {
                    className: s()(u.colorSwatch, { [u.mask]: m && 0 !== i }),
                    style: { backgroundColor: n.variantValue }
                }),
                !m && p ? (0, r.jsx)('span', { className: u.purchasedIndicator }) : null
            ]
        });
    },
    p = (e) => {
        var t, n, i;
        let { variantGroupProduct: c, className: p, minimal: h } = e,
            f = (0, o.o0)(c),
            g = (0, o.ff)(c),
            C = null === (t = c.variants) || void 0 === t ? void 0 : t[f],
            b = null !== g ? (null === (n = c.variants) || void 0 === n ? void 0 : n[g]) : void 0,
            x = a.useCallback(() => {
                (0, o.B2)(c, !0);
            }, [c]),
            v = a.useCallback(() => {
                (0, o.B2)(c, !1);
            }, [c]);
        if (null == C) return null;
        let _ = null != b ? b.variantLabel : null == C ? void 0 : C.variantLabel;
        return (0, r.jsxs)('div', {
            className: s()(u.variantsPanel, p, { [u.minimalState]: h }),
            onMouseEnter: x,
            onMouseLeave: v,
            children: [
                (0, r.jsx)('ol', {
                    className: u.variantsList,
                    children:
                        null === (i = c.variants) || void 0 === i
                            ? void 0
                            : i.map((e, t) =>
                                  (0, r.jsx)(
                                      m,
                                      {
                                          variantGroupProduct: c,
                                          variant: e,
                                          variantIndex: t,
                                          selectedVariantIndex: f,
                                          minimal: h
                                      },
                                      t
                                  )
                              )
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    className: u.variantLabel,
                    children: h ? d.intl.string(d.t.wbgaj4) : _
                })
            ]
        });
    };
