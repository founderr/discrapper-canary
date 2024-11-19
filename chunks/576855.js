var r,
    i,
    u,
    l,
    s = n(200651),
    o = n(192379),
    a = n(120356),
    d = n.n(a),
    c = n(481060),
    E = n(388032),
    S = n(275906);
let _ = {
    BLOCK: S.block,
    INLINE: S.inline
};
class f extends (l = o.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: i } = this.props;
        return (0, s.jsxs)('div', {
            className: d()(t, r),
            style: i,
            children: [
                (0, s.jsxs)(c.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: S.pro,
                    children: [E.intl.string(E.t['8tvIiI']), ':']
                }),
                (0, s.jsx)(c.Text, {
                    className: d()(S.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
(r = f),
    (i = 'Types'),
    (u = _),
    i in r
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = f);
