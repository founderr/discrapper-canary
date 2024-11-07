var i,
    o,
    r,
    l,
    s = n(200651),
    a = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(714909);
class h extends (l = a.PureComponent) {
    render() {
        let { tag: e, children: t, hoverText: n, className: i, forceHover: o, ...r } = this.props;
        return (0, s.jsxs)('div', {
            ...r,
            className: c()(i, d.hoverRoll, {
                [d.disabled]: null == n,
                [d.forceHover]: o
            }),
            children: [
                (0, s.jsx)(e, {
                    className: d.hovered,
                    children: n
                }),
                (0, s.jsx)(e, {
                    className: d.default,
                    children: t
                })
            ]
        });
    }
}
(r = {
    tag: 'div',
    forceHover: !1
}),
    (o = 'defaultProps') in (i = h)
        ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = r),
    (t.Z = h);
