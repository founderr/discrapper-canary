"use strict";
a.r(t), a("653041"), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  i = a("481060"),
  r = a("325432"),
  d = a("391690"),
  u = a("424218"),
  c = a("998502"),
  o = a("689938"),
  h = a("77143");

function p(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let I = "select";
class f extends s.PureComponent {
  fetchAllDirectoryMetadata() {
    let {
      installationPaths: e
    } = this.props, t = e.map(e => {
      let {
        path: t
      } = e;
      return t
    }), {
      newInstallationPath: a
    } = this.state;
    for (let e of (null != a && t.push(a), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, r.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
  }
  componentDidMount() {
    this.fetchAllDirectoryMetadata()
  }
  componentDidUpdate(e) {
    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value)
  }
  getOptions() {
    let {
      installationPaths: e
    } = this.props, {
      newInstallationPath: t
    } = this.state, a = e.map(e => {
      let {
        path: t,
        label: a
      } = e;
      return {
        value: t,
        label: this.renderLabel(t, a)
      }
    });
    return null != t && a.push({
      value: t,
      label: this.renderLabel(t)
    }), a.push({
      value: I,
      label: o.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
    }), a
  }
  hasEnoughDiskSpace(e) {
    let {
      requiredDiskKB: t,
      installationPathsMetadata: a
    } = this.props, l = null != a[e] ? a[e].availableKB : null;
    return null == t || null == l || t < l
  }
  sendChange(e) {
    let {
      installationPathsMetadata: t,
      onChange: a
    } = this.props, l = null != t[e] && !1 === t[e].hasPermission;
    a(e, l || !this.hasEnoughDiskSpace(e))
  }
  renderError() {
    let {
      value: e,
      installationPathsMetadata: t
    } = this.props;
    return null != t[e] && !1 === t[e].hasPermission ? (0, l.jsx)("div", {
      className: h.error,
      children: o.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
    }) : this.hasEnoughDiskSpace(e) ? null : (0, l.jsx)("div", {
      className: h.error,
      children: o.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
    })
  }
  renderLabel(e, t) {
    let {
      installationPathsMetadata: a
    } = this.props, l = null != t ? t : e;
    return null != a[e] && null != a[e].availableKB ? o.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
      path: l,
      size: (0, u.formatSize)(a[e].availableKB, {
        useKibibytes: !0
      })
    }) : l
  }
  render() {
    let {
      value: e,
      className: t,
      autoFocus: a
    } = this.props;
    return (0, l.jsxs)("div", {
      className: t,
      children: [(0, l.jsx)(i.FormTitle, {
        tag: "h5",
        children: o.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
      }), (0, l.jsx)(i.SingleSelect, {
        autoFocus: a,
        options: this.getOptions(),
        value: e,
        onChange: this.handleChange
      }), this.renderError()]
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      newInstallationPath: null
    }), p(this, "fetchedMetadataPaths", new Set), p(this, "handleChange", e => {
      e === I ? c.default.showOpenDialog(["openDirectory"]).then(e => {
        if (null != e && e.length > 0) {
          let t = e[0];
          this.setState({
            newInstallationPath: null != this.props.installationPaths.find(e => {
              let {
                path: a
              } = e;
              return a === t
            }) ? null : t
          }), this.sendChange(t)
        }
      }) : this.sendChange(e)
    })
  }
}
t.default = n.default.connectStores([d.default], () => ({
  installationPaths: d.default.installationPaths,
  installationPathsMetadata: d.default.installationPathsMetadata
}))(f)