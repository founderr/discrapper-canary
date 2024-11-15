n.d(t, {
    Cm: function () {
        return p;
    },
    HS: function () {
        return r;
    },
    ZP: function () {
        return g;
    },
    aV: function () {
        return h;
    },
    z6: function () {
        return u;
    }
});
var i,
    r,
    l = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    o = n(100621),
    c = n(481060),
    d = n(593407);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, l.jsx)(o.animated.div, {
        className: d.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
        }
    });
}
function h(e) {
    let { icon: t } = e;
    return (0, l.jsx)(t, {
        className: d.icon,
        color: c.tokens.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
((i = r || (r = {})).DEFAULT = 'default'), (i.OVERLAY = 'overlay');
let m = (e) => {
    if ('overlay' === e) return d.iconBackgroundOverlay;
    return d.iconBackgroundDefault;
};
function p(e) {
    let { onClick: t, icon: n, variant: i = 'default' } = e;
    return (0, l.jsx)(c.Clickable, {
        className: s()(d.iconButton, m(i)),
        onClick: t,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'sm'
        })
    });
}
function g(e) {
    let { className: t, children: n } = e;
    return (0, l.jsx)('div', {
        className: s()(d.headerBar, t),
        children: n
    });
}
