var s,
    r,
    i,
    l,
    a = t(200651),
    o = t(192379),
    c = t(120356),
    d = t.n(c),
    u = t(714909);
class h extends (l = o.PureComponent) {
    render() {
        let { tag: e, children: n, hoverText: t, className: s, forceHover: r, ...i } = this.props;
        return (0, a.jsxs)('div', {
            ...i,
            className: d()(s, u.hoverRoll, {
                [u.disabled]: null == t,
                [u.forceHover]: r
            }),
            children: [
                (0, a.jsx)(e, {
                    className: u.hovered,
                    children: t
                }),
                (0, a.jsx)(e, {
                    className: u.default,
                    children: n
                })
            ]
        });
    }
}
(i = {
    tag: 'div',
    forceHover: !1
}),
    (r = 'defaultProps') in (s = h)
        ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = i),
    (n.Z = h);
