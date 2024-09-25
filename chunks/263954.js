n.d(r, {
    Z: function () {
        return a;
    }
});
var o = n(735250);
n(470079);
var l = n(120356),
    s = n.n(l),
    c = n(524994);
function a(e) {
    let { icon: r, iconClassName: n, description: l, color: a } = e;
    return (0, o.jsxs)('div', {
        className: c.perkRow,
        children: [
            (0, o.jsx)('div', {
                className: c.perkIconContainer,
                children: (0, o.jsx)(r, {
                    color: null != a ? a : 'currentColor',
                    className: s()(c.perkIcon, n)
                })
            }),
            (0, o.jsx)('div', {
                className: c.perkDescription,
                children: l
            })
        ]
    });
}
