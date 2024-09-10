t.d(n, {
    Z: function () {
        return c;
    }
});
var o = t(735250);
t(470079);
var r = t(120356),
    a = t.n(r),
    i = t(524994);
function c(e) {
    let { icon: n, iconClassName: t, description: r, color: c } = e;
    return (0, o.jsxs)('div', {
        className: i.perkRow,
        children: [
            (0, o.jsx)('div', {
                className: i.perkIconContainer,
                children: (0, o.jsx)(n, {
                    color: null != c ? c : 'currentColor',
                    className: a()(i.perkIcon, t)
                })
            }),
            (0, o.jsx)('div', {
                className: i.perkDescription,
                children: r
            })
        ]
    });
}
