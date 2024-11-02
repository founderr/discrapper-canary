var r,
    s,
    i,
    l,
    a = t(200651),
    o = t(192379),
    c = t(120356),
    d = t.n(c),
    u = t(207341);
class h extends (l = o.PureComponent) {
    render() {
        let { tag: e, children: n, hoverText: t, className: r, forceHover: s, ...i } = this.props;
        return (0, a.jsxs)('div', {
            ...i,
            className: d()(r, u.hoverRoll, {
                [u.disabled]: null == t,
                [u.forceHover]: s
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
    (s = 'defaultProps') in (r = h)
        ? Object.defineProperty(r, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = i),
    (n.Z = h);
