n(47120);
var l,
    r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    o = n(274616),
    d = n(560587),
    c = n(388032);
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
class u extends (l = i.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, o.Z)(e), null == n || n(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            l = n.length > 0;
        null != t && l !== e.branches.length > 0 && t(l);
    }
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: i, className: s } = this.props;
        if (0 === e.length || i) return null;
        let o = l ? e : e.filter((e) => e.id !== n);
        return (0, r.jsx)(a.SingleSelect, {
            options: o.map((e) => ({
                label: e.getName(n),
                value: e.id
            })),
            placeholder: c.intl.string(c.t.Sw7pHB),
            value: t,
            onChange: this.handleChange,
            className: s
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleChange', (e) => {
                this.props.onChange(e);
            });
    }
}
h(u, 'defaultProps', { includeMaster: !1 }),
    (t.Z = s.ZP.connectStores([d.Z], (e) => {
        let { applicationId: t } = e;
        return { branches: d.Z.getBranches(t) };
    })(u));
