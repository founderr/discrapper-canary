var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(318713),
    l = n(928028);
function u(e) {
    let { icon: t, iconNode: n, timestamp: i, className: o, children: u, contentClassName: c, iconClassName: d, iconContainerClassName: _, compact: E = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(o, {
            [l.container]: !0,
            [l.compact]: E,
            [l.cozy]: !E
        }),
        children: [
            null != n &&
                (0, r.jsx)('div', {
                    className: a()(l.iconContainer, _),
                    children: n
                }),
            null != t &&
                (0, r.jsx)('div', {
                    className: l.iconContainer,
                    children: (0, r.jsx)('div', {
                        'data-accessibility': 'desaturate',
                        className: a()(l.icon, l.iconSize, d),
                        style: { backgroundImage: "url('".concat(t, "')") }
                    })
                }),
            (0, r.jsxs)('div', {
                className: a()(c, l.content),
                children: [u, null != i && (0, r.jsx)(s.Z, { timestamp: i })]
            })
        ]
    });
}
let c = (e) => {
    let { onClick: t, children: n } = e;
    return (0, r.jsxs)('span', {
        className: l.action,
        children: [
            '\u2014',
            (0, r.jsx)(o.Anchor, {
                onClick: t,
                className: l.actionAnchor,
                children: n
            })
        ]
    });
};
(u.Action = c), (t.Z = u);
