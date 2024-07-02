n.d(t, {
    Mn: function () {
        return o;
    },
    WM: function () {
        return d;
    },
    _2: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(347099);
let o = 16;
function c(e) {
    let {
        description: t,
        name: n,
        icon: a,
        onNavigate: c,
        className: d,
        missingNavIcon: u
    } = e;
    return (0, i.jsxs)(l.Clickable, {
        onClick: c,
        className: s()(r.modInfoItem, null != c && r.modInfoAction, d),
        children: [
            null != a && (0, i.jsx)('div', {
                className: s()(r.modInfoItemIcon),
                children: a
            }),
            null != n && (0, i.jsx)('div', {
                className: s()(r.modInfoItemName),
                children: n
            }),
            (0, i.jsx)('div', {
                className: s()(r.modInfoItemDescription),
                children: t
            }),
            null != c && (0, i.jsx)('div', {
                className: s()(r.modInfoItemActionIcon),
                children: (0, i.jsx)(l.ChevronLargeRightIcon, {
                    size: 'custom',
                    width: o,
                    height: o
                })
            }),
            null == c && null != u && (0, i.jsx)('div', {
                className: s()(r.modInfoItemActionIcon),
                children: u
            })
        ]
    });
}
function d(e) {
    let {children: t} = e;
    return (0, i.jsx)('div', {
        className: s()(r.modInfoItemContainer),
        children: t
    });
}
