var a,
    r,
    l,
    i,
    s,
    o = n(200651),
    c = n(192379),
    u = n(120356),
    d = n.n(u),
    m = n(600164),
    p = n(865857);
function h(e, t, n) {
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
((a = l || (l = {})).PRIMARY = 'primary'), (a.SECONDARY = 'secondary'), (a.WARNING = 'warning'), (a.ERROR = 'error'), ((r = i || (i = {})).SMALL = 'small'), (r.LARGE = 'large'), (r.NONE = 'none');
let A = {
        primary: p.colorPrimary,
        secondary: p.colorSecondary,
        warning: p.colorWarning,
        error: p.colorError
    },
    E = {
        small: p.small,
        large: p.large,
        none: null
    };
class f extends (s = c.PureComponent) {
    render() {
        let { icon: e, color: t, children: n, iconSize: a, className: r, iconClassName: l } = this.props;
        return (0, o.jsxs)(m.Z, {
            className: d()(p.note, A[t], r),
            align: m.Z.Align.CENTER,
            children: [
                (0, o.jsx)(e, {
                    className: d()(p.icon, E[a], l),
                    color: 'currentColor'
                }),
                (0, o.jsx)('div', { children: n })
            ]
        });
    }
}
h(f, 'Colors', l), h(f, 'Sizes', i), (t.Z = f);
