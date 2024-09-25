var o,
    l,
    s,
    c,
    a,
    t = n(735250),
    i = n(470079),
    d = n(120356),
    u = n.n(d),
    p = n(600164),
    _ = n(865857);
function m(e, r, n) {
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
((o = s || (s = {})).PRIMARY = 'primary'), (o.SECONDARY = 'secondary'), (o.WARNING = 'warning'), (o.ERROR = 'error'), ((l = c || (c = {})).SMALL = 'small'), (l.LARGE = 'large'), (l.NONE = 'none');
let E = {
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
class h extends (a = i.PureComponent) {
    render() {
        let { icon: e, color: r, children: n, iconSize: o, className: l, iconClassName: s } = this.props;
        return (0, t.jsxs)(p.Z, {
            className: u()(_.note, E[r], l),
            align: p.Z.Align.CENTER,
            children: [
                (0, t.jsx)(e, {
                    className: u()(_.icon, N[o], s),
                    color: 'currentColor'
                }),
                (0, t.jsx)('div', { children: n })
            ]
        });
    }
}
m(h, 'Colors', s), m(h, 'Sizes', c), (r.Z = h);
