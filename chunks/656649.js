t.d(n, {
    KJ: function () {
        return d;
    },
    UV: function () {
        return u;
    },
    vJ: function () {
        return s;
    }
});
var o = t(735250);
t(470079);
var r = t(120356),
    c = t.n(r),
    l = t(726542),
    i = t(981631),
    a = t(145301);
function s(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: n, platformType: t } = e,
        r = l.Z.get(t);
    return (0, o.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, o.jsxs)('div', {
            children: [(0, o.jsx)(d, { platform: r }), n]
        })
    });
}
function d(e) {
    let { platform: n, className: t } = e;
    return (0, o.jsxs)('div', {
        className: c()(a.logos, t),
        children: [
            (0, o.jsx)('div', { className: c()(a.logo, a.logoDiscord) }),
            (0, o.jsx)('div', { className: a.logosDivider }),
            (0, o.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
