t.d(n, {
    C: function () {
        return d;
    }
});
var i = t(200651),
    l = t(120356),
    r = t.n(l),
    s = t(481060),
    a = t(473608),
    c = t(698700),
    o = t(719953);
let u = (e) => {
        let { sku: n } = e;
        return (0, i.jsxs)('div', {
            className: c.collectiblePreview,
            children: [
                (0, i.jsx)(a.O, {
                    sku: n,
                    fallbackLabel: null
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    children: n.name
                })
            ]
        });
    },
    d = (e) => {
        let { sku: n, value: t, className: l } = e;
        return (0, i.jsxs)('div', {
            className: r()(o.row, l),
            children: [
                (0, i.jsx)('div', {
                    className: o.rowLabel,
                    children: (0, i.jsx)(u, { sku: n })
                }),
                (0, i.jsx)('div', {
                    className: o.rowAmount,
                    children: t
                })
            ]
        });
    };
