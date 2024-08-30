var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(358085),
    c = t(998502),
    d = t(689938),
    u = t(224499);
function _(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
class E extends a.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await c.ZP.getSetting('OPEN_ON_STARTUP', !0),
            startMinimized: await c.ZP.getSetting('START_MINIMIZED', !1),
            minimizeToTray: await c.ZP.getSetting('MINIMIZE_TO_TRAY', !0)
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: s, minimizeToTray: t } = this.state,
            a = (0, l.isLinux)() ? d.Z.Messages.USER_SETTINGS_LINUX_SETTINGS : d.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS;
        return (0, n.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H1,
            title: a,
            children: [
                (0, n.jsx)(o.FormTitle, { children: d.Z.Messages.USER_SETTINGS_STARTUP_BEHAVIOR }),
                (0, n.jsx)(o.FormSwitch, {
                    className: u.marginBottom20,
                    value: e,
                    note: d.Z.Messages.USER_SETTINGS_OPEN_ON_STARTUP_BODY,
                    onChange: this.handleToggleOpenOnStartup,
                    children: d.Z.Messages.USER_SETTINGS_OPEN_ON_STARTUP_LABEL
                }),
                (0, l.isWindows)()
                    ? (0, n.jsx)(o.FormSwitch, {
                          disabled: !e,
                          className: r()(u.marginTop8, u.marginBottom20),
                          value: !!e && s,
                          note: d.Z.Messages.USER_SETTINGS_START_MINIMIZED_BODY,
                          onChange: this.handleToggleStartMinimized,
                          children: d.Z.Messages.USER_SETTINGS_START_MINIMIZED_LABEL
                      })
                    : null,
                (0, n.jsx)(o.FormTitle, {
                    className: r()(u.marginTop20, u.marginBottom8),
                    children: d.Z.Messages.USER_SETTINGS_CLOSE_BUTTON
                }),
                (0, n.jsx)(o.FormSwitch, {
                    className: u.marginBottom20,
                    value: t,
                    note: d.Z.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_BODY,
                    onChange: this.handleToggleMinimizeToTray,
                    children: d.Z.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_LABEL
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            _(this, 'handleToggleOpenOnStartup', () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), c.ZP.send('TOGGLE_OPEN_ON_STARTUP', e);
            }),
            _(this, 'handleToggleStartMinimized', () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), c.ZP.send('TOGGLE_START_MINIMIZED', e);
            }),
            _(this, 'handleToggleMinimizeToTray', () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), c.ZP.send('TOGGLE_MINIMIZE_TO_TRAY', e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0
            });
    }
}
s.Z = E;
