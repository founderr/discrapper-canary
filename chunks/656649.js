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
var o = t(735250);
t(470079);
var r = t(120356),
    c = t.n(r),
    l = t(726542),
    s = t(981631),
    i = t(145301);
function a(e) {
    return null != e && Object.values(s.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: n, platformType: t } = e,
        r = l.Z.get(t);
    return (0, o.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, o.jsxs)('div', {
            children: [(0, o.jsx)(d, { platform: r }), n]
        })
    });
}
function d(e) {
    let { platform: n, className: t } = e;
    return (0, o.jsxs)('div', {
        className: c()(i.logos, t),
        children: [
            (0, o.jsx)('div', { className: c()(i.logo, i.logoDiscord) }),
            (0, o.jsx)('div', { className: i.logosDivider }),
            (0, o.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
