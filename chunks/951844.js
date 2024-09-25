var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(689938),
    c = n(720670);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = {
    BLOCK: c.block,
    INLINE: c.inline
};
class E extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: a } = this.props;
        return (0, i.jsxs)('div', {
            className: s()(t, r),
            style: a,
            children: [
                (0, i.jsxs)(l.Text, {
                    variant: 'text-sm/bold',
                    tag: 'div',
                    color: 'text-positive',
                    className: c.pro,
                    children: [u.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ':']
                }),
                (0, i.jsx)(l.Text, {
                    className: s()(c.tip, n),
                    variant: 'text-sm/normal',
                    children: e
                })
            ]
        });
    }
}
d(E, 'Types', _), (t.Z = E);
