n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(668781),
  o = n(431583),
  c = n(91372),
  u = n(19780),
  d = n(502568),
  E = n(35818),
  _ = n(689938),
  I = n(656847);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends i.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: !1
    } : null
  }
  handleDownloadApps() {
    (0, a.openModal)(e => (0, s.jsx)(o.default, {
      source: "Links",
      ...e
    }))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, s.jsx)(d.JO, {
          hideOnClick: !1,
          tooltip: _.Z.Messages.UPDATE_AVAILABLE,
          foreground: I.downloadArrow,
          background: I.cloud,
          icon: a.DownloadIcon
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, s.jsx)(d.JO, {
          tooltip: _.Z.Messages.UPDATE_DOWNLOADED,
          foreground: I.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: a.DownloadIcon
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      memoizedMode: this.props.mode,
      clicked: !1
    }), T(this, "handleInstallDownload", () => {
      u.Z.isConnected() ? r.Z.show({
        title: _.Z.Messages.UPDATE_DURING_CALL_TITLE,
        body: _.Z.Messages.UPDATE_DURING_CALL_BODY,
        onConfirm: this.doUpdate,
        cancelText: _.Z.Messages.CANCEL,
        confirmText: _.Z.Messages.UPDATE_DURING_CALL_CONTINUE
      }) : this.doUpdate()
    }), T(this, "doUpdate", () => {
      !this.state.clicked && (this.setState({
        clicked: !0
      }), (0, E.Q)())
    })
  }
}
t.Z = l.ZP.connectStores([c.Z], () => ({
  mode: c.Z.getState()
}))(m)