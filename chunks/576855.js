var i,
    r,
    l,
    o,
    a = n(200651),
    s = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    h = n(388032),
    f = n(275906);
let p = {
    BLOCK: f.block,
    INLINE: f.inline
};
class m extends (o = s.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: i = p.BLOCK, style: r } = this.props;
        return (0, a.jsxs)('div', {
            className: c()(t, i),
            style: r,
            children: [
                (0, a.jsxs)(d.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: f.pro,
                    children: [h.intl.string(h.t['8tvIiI']), ':']
                }),
                (0, a.jsx)(d.Text, {
                    className: c()(f.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(i = m),
    (r = 'Types'),
    (l = p),
    r in i
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = m);
