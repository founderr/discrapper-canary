n.d(t, {
    ZP: function () {
        return _;
    },
    aV: function () {
        return u;
    },
    z6: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(100621),
    o = n(481060),
    c = n(25912);
function d(e) {
    let { scrollPosition: t, minOpacity: n = 0 } = e;
    return (0, i.jsx)(l.animated.div, {
        className: c.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [n, 1])
        }
    });
}
function u(e) {
    let { onClick: t, icon: n } = e,
        [s, l] = a.useState(!1),
        d = a.useCallback(() => l(!0), []),
        u = a.useCallback(() => l(!1), []);
    return null != t
        ? (0, i.jsx)(o.Clickable, {
              className: r()(c.clickable, c.icon),
              onClick: t,
              onMouseEnter: d,
              onMouseLeave: u,
              children: (0, i.jsx)(n, {
                  color: s ? o.tokens.colors.INTERACTIVE_HOVER : o.tokens.colors.INTERACTIVE_NORMAL,
                  size: 'md'
              })
          })
        : (0, i.jsx)(n, {
              className: c.icon,
              color: o.tokens.colors.HEADER_PRIMARY,
              size: 'md'
          });
}
function _(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)('div', {
        className: r()(c.headerBar, t),
        children: n
    });
}
