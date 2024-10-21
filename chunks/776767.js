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
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(722029);
let o = 16;
function c(e) {
    let { description: t, name: n, icon: s, onNavigate: c, className: u, missingNavIcon: d } = e;
    return (0, i.jsxs)(l.Clickable, {
        onClick: c,
        className: a()(r.modInfoItem, null != c && r.modInfoAction, u),
        children: [
            null != s &&
                (0, i.jsx)('div', {
                    className: r.modInfoItemIcon,
                    children: s
                }),
            null != n &&
                (0, i.jsx)('div', {
                    className: r.modInfoItemName,
                    children: n
                }),
            (0, i.jsx)('div', {
                className: r.modInfoItemDescription,
                children: t
            }),
            null != c &&
                (0, i.jsx)('div', {
                    className: r.modInfoItemActionIcon,
                    children: (0, i.jsx)(l.ChevronLargeRightIcon, {
                        size: 'custom',
                        width: o,
                        height: o
                    })
                }),
            null == c &&
                null != d &&
                (0, i.jsx)('div', {
                    className: r.modInfoItemActionIcon,
                    children: d
                })
        ]
    });
}
function u(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: r.modInfoItemContainer,
        children: t
    });
}
