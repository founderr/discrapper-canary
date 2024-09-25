var r,
    i,
    a = n(47120);
var o = n(470079),
    s = n(112724);
function l(e, t, n) {
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
function u(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
t.Z = (0, s.Z)(
    ((i = class extends (r = o.Component) {
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: r, maxColumns: i } = e,
                a = u(n, r, i);
            return a !== t.columns ? { columns: a } : null;
        }
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: r } = this.state;
            return n(r, e, t);
        }
        constructor(...e) {
            super(...e), l(this, 'state', { columns: u(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) });
        }
    }),
    l(i, 'defaultProps', { desiredItemWidth: 200 }),
    i)
);
