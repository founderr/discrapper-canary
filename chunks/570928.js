var r,
    t,
    i,
    l,
    a = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(207341);
class h extends (l = o.PureComponent) {
    render() {
        let { tag: e, children: s, hoverText: n, className: r, forceHover: t, ...i } = this.props;
        return (0, a.jsxs)('div', {
            ...i,
            className: d()(r, u.hoverRoll, {
                [u.disabled]: null == n,
                [u.forceHover]: t
            }),
            children: [
                (0, a.jsx)(e, {
                    className: u.hovered,
                    children: n
                }),
                (0, a.jsx)(e, {
                    className: u.default,
                    children: s
                })
            ]
        });
    }
}
(i = {
    tag: 'div',
    forceHover: !1
}),
    (t = 'defaultProps') in (r = h)
        ? Object.defineProperty(r, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[t] = i),
    (s.Z = h);
