var l,
    o,
    t,
    s,
    c,
    a = n(200651),
    i = n(192379),
    d = n(120356),
    u = n.n(d),
    p = n(600164),
    m = n(682792);
function f(e, r, n) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = n),
        e
    );
}
((l = t || (t = {})).PRIMARY = 'primary'), (l.SECONDARY = 'secondary'), (l.WARNING = 'warning'), (l.ERROR = 'error'), ((o = s || (s = {})).SMALL = 'small'), (o.LARGE = 'large'), (o.NONE = 'none');
let h = {
        primary: m.colorPrimary,
        secondary: m.colorSecondary,
        warning: m.colorWarning,
        error: m.colorError
    },
    x = {
        small: m.small,
        large: m.large,
        none: null
    };
class N extends (c = i.PureComponent) {
    render() {
        let { icon: e, color: r, children: n, iconSize: l, className: o, iconClassName: t } = this.props;
        return (0, a.jsxs)(p.Z, {
            className: u()(m.note, h[r], o),
            align: p.Z.Align.CENTER,
            children: [
                (0, a.jsx)(e, {
                    className: u()(m.icon, x[l], t),
                    color: 'currentColor'
                }),
                (0, a.jsx)('div', { children: n })
            ]
        });
    }
}
f(N, 'Colors', t), f(N, 'Sizes', s), (r.Z = N);
