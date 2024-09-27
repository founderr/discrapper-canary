t.d(n, {
    KJ: function () {
        return f;
    },
    UV: function () {
        return u;
    },
    vJ: function () {
        return s;
    }
});
var r = t(735250);
t(470079);
var c = t(120356),
    o = t.n(c),
    l = t(726542),
    a = t(981631),
    i = t(642827);
function s(e) {
    return null != e && Object.values(a.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: n, platformType: t } = e,
        c = l.Z.get(t);
    return (0, r.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(f, { platform: c }), n]
        })
    });
}
function f(e) {
    let { platform: n, className: t } = e;
    return (0, r.jsxs)('div', {
        className: o()(i.logos, t),
        children: [
            (0, r.jsx)('div', { className: o()(i.logo, i.logoDiscord) }),
            (0, r.jsx)('div', { className: i.logosDivider }),
            (0, r.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
