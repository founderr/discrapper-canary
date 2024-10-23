t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    s = t(481060),
    o = t(483337);
function r(e) {
    let { bar: n, children: t, className: a, inModal: r, title: d } = e;
    return (0, i.jsxs)(s.Card, {
        editable: !0,
        className: l()(o.card, a, { [o.inModal]: r }),
        children: [
            (0, i.jsxs)('div', {
                className: l()(o.cardHeader, { [o.inModal]: r }),
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        className: o.title,
                        children: d
                    }),
                    (0, i.jsx)('div', { children: n })
                ]
            }),
            r ? (0, i.jsx)(s.FormDivider, {}) : null,
            t
        ]
    });
}
