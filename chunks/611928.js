n.d(t, {
    Cm: function () {
        return p;
    },
    ZP: function () {
        return g;
    },
    _6: function () {
        return r;
    },
    aV: function () {
        return m;
    },
    z6: function () {
        return h;
    }
});
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(752877),
    d = n(481060),
    u = n(406014);
function h(e) {
    let { scrollPosition: t } = e;
    return (0, l.jsx)(c.animated.div, {
        className: u.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
        }
    });
}
function m(e) {
    let { icon: t } = e;
    return (0, l.jsx)(t, {
        className: u.icon,
        color: d.tokens.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
function p(e) {
    let { onClick: t, icon: n } = e;
    return (0, l.jsx)(d.Clickable, {
        className: u.iconButton,
        onClick: t,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'sm'
        })
    });
}
((i = r || (r = {})).OVERLAY = 'overlay'), (i.RELATIVE = 'relative');
function g(e) {
    let { className: t, variant: n, children: i } = e,
        r = a.useMemo(
            () =>
                (function (e) {
                    if ('overlay' === e) return u.overlay;
                    return u.relative;
                })(n),
            [n]
        );
    return (0, l.jsx)('div', {
        className: s()(u.headerBar, r, t),
        children: i
    });
}
