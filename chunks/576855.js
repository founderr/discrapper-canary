var r,
    i,
    u,
    l,
    o = n(200651),
    s = n(192379),
    d = n(120356),
    a = n.n(d),
    c = n(481060),
    E = n(388032),
    S = n(323822);
let f = {
    BLOCK: S.block,
    INLINE: S.inline
};
class _ extends (l = s.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: i } = this.props;
        return (0, o.jsxs)('div', {
            className: a()(t, r),
            style: i,
            children: [
                (0, o.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: S.pro,
                    children: [E.intl.string(E.t['8tvIiI']), ':']
                }),
                (0, o.jsx)(c.Text, {
                    className: a()(S.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = _),
    (i = 'Types'),
    (u = f),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = _);
