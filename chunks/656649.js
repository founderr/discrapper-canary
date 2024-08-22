t.d(n, {
    KJ: function () {
        return d;
    },
    UV: function () {
        return u;
    },
    vJ: function () {
        return c;
    }
});
var s = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
    o = t(726542),
    i = t(981631),
    a = t(145301);
function c(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: n, platformType: t } = e,
        r = o.Z.get(t);
    return (0, s.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, s.jsxs)('div', {
            children: [(0, s.jsx)(d, { platform: r }), n]
        })
    });
}
function d(e) {
    let { platform: n, className: t } = e;
    return (0, s.jsxs)('div', {
        className: l()(a.logos, t),
        children: [
            (0, s.jsx)('div', { className: l()(a.logo, a.logoDiscord) }),
            (0, s.jsx)('div', { className: a.logosDivider }),
            (0, s.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
