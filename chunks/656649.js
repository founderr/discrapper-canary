t.d(n, {
    KJ: function () {
        return d;
    },
    UV: function () {
        return u;
    },
    vJ: function () {
        return a;
    }
});
var r = t(735250);
t(470079);
var o = t(120356),
    c = t.n(o),
    l = t(726542),
    s = t(981631),
    i = t(145301);
function a(e) {
    return null != e && Object.values(s.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: n, platformType: t } = e,
        o = l.Z.get(t);
    return (0, r.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(d, { platform: o }), n]
        })
    });
}
function d(e) {
    let { platform: n, className: t } = e;
    return (0, r.jsxs)('div', {
        className: c()(i.logos, t),
        children: [
            (0, r.jsx)('div', { className: c()(i.logo, i.logoDiscord) }),
            (0, r.jsx)('div', { className: i.logosDivider }),
            (0, r.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
