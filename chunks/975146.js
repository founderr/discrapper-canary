n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(871499),
    o = n(388032),
    c = n(540236);
function d(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(c.root, c.comboIcon, t),
        children: [
            (0, i.jsx)(a.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon
            }),
            (0, i.jsx)(a.Text, {
                color: 'none',
                className: c.count,
                variant: 'text-md/normal',
                children: n
            })
        ]
    });
}
function u(e) {
    let { count: t, ...n } = e;
    return (0, i.jsx)(s.Z, {
        label: o.intl.string(o.t.jNqDh4),
        iconComponent: (e) => {
            let { className: n } = e;
            return (0, i.jsx)(d, {
                className: n,
                count: t
            });
        },
        tooltipPosition: 'bottom',
        ...n
    });
}
