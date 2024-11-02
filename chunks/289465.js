t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(481060),
    o = t(483337);
function s(e) {
    let { bar: n, children: t, className: l, inModal: s, title: d } = e;
    return (0, i.jsxs)(a.Card, {
        editable: !0,
        className: r()(o.card, l, { [o.inModal]: s }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(o.cardHeader, { [o.inModal]: s }),
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        className: o.title,
                        children: d
                    }),
                    (0, i.jsx)('div', { children: n })
                ]
            }),
            s ? (0, i.jsx)(a.FormDivider, {}) : null,
            t
        ]
    });
}
