t.d(n, {
    KJ: function () {
        return f;
    },
    UV: function () {
        return s;
    },
    vJ: function () {
        return u;
    }
});
var r = t(735250);
t(470079);
var c = t(120356),
    o = t.n(c),
    l = t(726542),
    i = t(981631),
    a = t(642827);
function u(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function s(e) {
    let { children: n, platformType: t } = e,
        c = l.Z.get(t);
    return (0, r.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(f, { platform: c }), n]
        })
    });
}
function f(e) {
    let { platform: n, className: t } = e;
    return (0, r.jsxs)('div', {
        className: o()(a.logos, t),
        children: [
            (0, r.jsx)('div', { className: o()(a.logo, a.logoDiscord) }),
            (0, r.jsx)('div', { className: a.logosDivider }),
            (0, r.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
