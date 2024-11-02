n(653041), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    r = n(325432),
    o = n(391690),
    c = n(424218),
    h = n(998502),
    d = n(388032),
    u = n(346438);
function p(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let m = 'select';
class f extends i.PureComponent {
    fetchAllDirectoryMetadata() {
        let { installationPaths: t } = this.props,
            e = t.map((t) => {
                let { path: e } = t;
                return e;
            }),
            { newInstallationPath: n } = this.state;
        for (let t of (null != n && e.push(n), (e = e.filter((t) => !this.fetchedMetadataPaths.has(t))), (0, r.ec)(e), e)) this.fetchedMetadataPaths.add(t);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(t) {
        this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== t.requiredDiskKB || this.props.installationPathsMetadata !== t.installationPathsMetadata) && this.sendChange(this.props.value);
    }
    getOptions() {
        let { installationPaths: t } = this.props,
            { newInstallationPath: e } = this.state,
            n = t.map((t) => {
                let { path: e, label: n } = t;
                return {
                    value: e,
                    label: this.renderLabel(e, n)
                };
            });
        return (
            null != e &&
                n.push({
                    value: e,
                    label: this.renderLabel(e)
                }),
            n.push({
                value: m,
                label: d.intl.string(d.t['cL/rrq'])
            }),
            n
        );
    }
    hasEnoughDiskSpace(t) {
        let { requiredDiskKB: e, installationPathsMetadata: n } = this.props,
            l = null != n[t] ? n[t].availableKB : null;
        return null == e || null == l || e < l;
    }
    sendChange(t) {
        let { installationPathsMetadata: e, onChange: n } = this.props,
            l = null != e[t] && !1 === e[t].hasPermission;
        n(t, l || !this.hasEnoughDiskSpace(t));
    }
    renderError() {
        let { value: t, installationPathsMetadata: e } = this.props;
        return null != e[t] && !1 === e[t].hasPermission
            ? (0, l.jsx)('div', {
                  className: u.error,
                  children: d.intl.string(d.t.cEUT8P)
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)('div', {
                    className: u.error,
                    children: d.intl.string(d.t.duXbEx)
                });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: n } = this.props,
            l = null != e ? e : t;
        return null != n[t] && null != n[t].availableKB
            ? d.intl.formatToPlainString(d.t['Y+M3rq'], {
                  path: l,
                  size: (0, c.BU)(n[t].availableKB, { useKibibytes: !0 })
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: n } = this.props;
        return (0, l.jsxs)('div', {
            className: e,
            children: [
                (0, l.jsx)(a.FormTitle, {
                    tag: 'h5',
                    children: d.intl.string(d.t.WTJuNj)
                }),
                (0, l.jsx)(a.SingleSelect, {
                    autoFocus: n,
                    options: this.getOptions(),
                    value: t,
                    onChange: this.handleChange
                }),
                this.renderError()
            ]
        });
    }
    constructor(...t) {
        super(...t),
            p(this, 'state', { newInstallationPath: null }),
            p(this, 'fetchedMetadataPaths', new Set()),
            p(this, 'handleChange', (t) => {
                t === m
                    ? h.ZP.showOpenDialog(['openDirectory']).then((t) => {
                          if (null != t && t.length > 0) {
                              let e = t[0];
                              this.setState({
                                  newInstallationPath:
                                      null !=
                                      this.props.installationPaths.find((t) => {
                                          let { path: n } = t;
                                          return n === e;
                                      })
                                          ? null
                                          : e
                              }),
                                  this.sendChange(e);
                          }
                      })
                    : this.sendChange(t);
            });
    }
}
e.Z = s.ZP.connectStores([o.Z], () => ({
    installationPaths: o.Z.installationPaths,
    installationPathsMetadata: o.Z.installationPathsMetadata
}))(f);
