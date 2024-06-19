var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(358085),
  c = t(998502),
  E = t(689938),
  d = t(331651);

function _(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class T extends i.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await c.ZP.getSetting("OPEN_ON_STARTUP", !0),
      startMinimized: await c.ZP.getSetting("START_MINIMIZED", !1),
      minimizeToTray: await c.ZP.getSetting("MINIMIZE_TO_TRAY", !0)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: s,
      minimizeToTray: t
    } = this.state, i = (0, o.isLinux)() ? E.Z.Messages.USER_SETTINGS_LINUX_SETTINGS : E.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS;
    return (0, n.jsxs)(r.FormSection, {
      tag: r.FormTitleTags.H1,
      title: i,
      children: [(0, n.jsx)(r.FormTitle, {
        children: E.Z.Messages.USER_SETTINGS_STARTUP_BEHAVIOR
      }), (0, n.jsx)(r.FormSwitch, {
        className: d.marginBottom20,
        value: e,
        note: E.Z.Messages.USER_SETTINGS_OPEN_ON_STARTUP_BODY,
        onChange: this.handleToggleOpenOnStartup,
        children: E.Z.Messages.USER_SETTINGS_OPEN_ON_STARTUP_LABEL
      }), (0, o.isWindows)() ? (0, n.jsx)(r.FormSwitch, {
        disabled: !e,
        className: l()(d.marginTop8, d.marginBottom20),
        value: !!e && s,
        note: E.Z.Messages.USER_SETTINGS_START_MINIMIZED_BODY,
        onChange: this.handleToggleStartMinimized,
        children: E.Z.Messages.USER_SETTINGS_START_MINIMIZED_LABEL
      }) : null, (0, n.jsx)(r.FormTitle, {
        className: l()(d.marginTop20, d.marginBottom8),
        children: E.Z.Messages.USER_SETTINGS_CLOSE_BUTTON
      }), (0, n.jsx)(r.FormSwitch, {
        className: d.marginBottom20,
        value: t,
        note: E.Z.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_BODY,
        onChange: this.handleToggleMinimizeToTray,
        children: E.Z.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_LABEL
      })]
    })
  }
  constructor(e) {
    super(e), _(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), c.ZP.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), _(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), c.ZP.send("TOGGLE_START_MINIMIZED", e)
    }), _(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), c.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: !0,
      startMinimized: !1,
      minimizeToTray: !0
    }
  }
}
s.Z = T