n.d(t, {
    Mn: function () {
        return o;
    },
    WM: function () {
        return u;
    },
    _2: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(722029);
let o = 16;
function c(e) {
    let { description: t, name: n, icon: l, onNavigate: c, className: u, missingNavIcon: d } = e;
    return (0, i.jsxs)(s.Clickable, {
        onClick: c,
        className: r()(a.modInfoItem, null != c && a.modInfoAction, u),
        children: [
            null != l &&
                (0, i.jsx)('div', {
                    className: a.modInfoItemIcon,
                    children: l
                }),
            null != n &&
                (0, i.jsx)('div', {
                    className: a.modInfoItemName,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: a.modInfoItemDescription,
                children: t
            }),
            null != c &&
                (0, i.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: (0, i.jsx)(s.ChevronLargeRightIcon, {
                        size: 'custom',
                        width: o,
                        height: o
                    })
                }),
            null == c &&
                null != d &&
                (0, i.jsx)('div', {
                    className: a.modInfoItemActionIcon,
                    children: d
                })
        ]
    });
}
function u(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: a.modInfoItemContainer,
        children: t
    });
}
