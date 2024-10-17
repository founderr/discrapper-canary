var n,
    s,
    r,
    l,
    o,
    i = t(735250),
    c = t(470079),
    u = t(120356),
    d = t.n(u),
    E = t(600164),
    _ = t(865857);
function A(e, a, t) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = t),
        e
    );
}
((n = r || (r = {})).PRIMARY = 'primary'), (n.SECONDARY = 'secondary'), (n.WARNING = 'warning'), (n.ERROR = 'error'), ((s = l || (l = {})).SMALL = 'small'), (s.LARGE = 'large'), (s.NONE = 'none');
let m = {
        primary: _.colorPrimary,
        secondary: _.colorSecondary,
        warning: _.colorWarning,
        error: _.colorError
    },
    N = {
        small: _.small,
        large: _.large,
        none: null
    };
class p extends (o = c.PureComponent) {
    render() {
        let { icon: e, color: a, children: t, iconSize: n, className: s, iconClassName: r } = this.props;
        return (0, i.jsxs)(E.Z, {
            className: d()(_.note, m[a], s),
            align: E.Z.Align.CENTER,
            children: [
                (0, i.jsx)(e, {
                    className: d()(_.icon, N[n], r),
                    color: 'currentColor'
                }),
                (0, i.jsx)('div', { children: t })
            ]
        });
    }
}
A(p, 'Colors', r), A(p, 'Sizes', l), (a.Z = p);
