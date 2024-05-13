"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("668781"),
  o = n("431583"),
  u = n("91372"),
  d = n("19780"),
  c = n("943461"),
  f = n("264674"),
  h = n("502568"),
  E = n("35818"),
  m = n("689938"),
  p = n("504891");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class S extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: !1
    } : null
  }
  handleDownloadApps() {
    (0, i.openModal)(e => (0, a.jsx)(o.default, {
      source: "Links",
      ...e
    }))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, a.jsx)(h.Icon, {
          hideOnClick: !1,
          tooltip: m.default.Messages.UPDATE_AVAILABLE,
          foreground: p.downloadArrow,
          background: p.cloud,
          icon: f.default
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, a.jsx)(h.Icon, {
          tooltip: m.default.Messages.UPDATE_DOWNLOADED,
          foreground: p.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: c.default
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      memoizedMode: this.props.mode,
      clicked: !1
    }), g(this, "handleInstallDownload", () => {
      d.default.isConnected() ? r.default.show({
        title: m.default.Messages.UPDATE_DURING_CALL_TITLE,
        body: m.default.Messages.UPDATE_DURING_CALL_BODY,
        onConfirm: this.doUpdate,
        cancelText: m.default.Messages.CANCEL,
        confirmText: m.default.Messages.UPDATE_DURING_CALL_CONTINUE
      }) : this.doUpdate()
    }), g(this, "doUpdate", () => {
      !this.state.clicked && (this.setState({
        clicked: !0
      }), (0, E.quitAndInstall)())
    })
  }
}
t.default = s.default.connectStores([u.default], () => ({
  mode: u.default.getState()
}))(S)