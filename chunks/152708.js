var l,
    i,
    r,
    s = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(600164),
    u = n(97398);
function f(e, t, n) {
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
((l = i || (i = {})).WRAP = 'wrap'), (l.STACK = 'stack');
class h extends (r = a.PureComponent) {
    renderChildren() {
        let e;
        let { children: t, layout: n, columns: l } = this.props;
        switch (n) {
            case 'stack':
                e = '100%';
                break;
            case 'wrap':
                e = ''.concat((1 / l) * 100, '%');
        }
        return t.map((t, n) =>
            (0, s.jsx)(
                d.Z.Child,
                {
                    className: u.tile,
                    basis: e,
                    grow: 0,
                    children: t
                },
                n
            )
        );
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(d.Z, {
            className: c()(e, u.grid),
            wrap: d.Z.Wrap.WRAP,
            children: this.renderChildren()
        });
    }
}
f(h, 'Layout', i),
    f(h, 'defaultProps', {
        children: [],
        layout: 'wrap',
        columns: 4
    }),
    (t.Z = h);
