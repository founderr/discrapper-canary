var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(668781),
    u = n(431583),
    c = n(91372),
    d = n(19780),
    _ = n(35818),
    E = n(665149),
    f = n(689938),
    h = n(228856);
function p(e, t, n) {
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
class m extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1
              }
            : null;
    }
    handleDownloadApps() {
        (0, s.openModal)((e) =>
            (0, i.jsx)(u.default, {
                source: 'Links',
                ...e
            })
        );
    }
    render() {
        switch (this.props.mode) {
            case 'UPDATE_AVAILABLE':
                return (0, i.jsx)(E.JO, {
                    hideOnClick: !1,
                    tooltip: f.Z.Messages.UPDATE_AVAILABLE,
                    foreground: h.downloadArrow,
                    background: h.cloud,
                    icon: s.DownloadIcon
                });
            case 'UPDATE_MANUALLY':
            case 'UPDATE_DOWNLOADED':
                return (0, i.jsx)(E.JO, {
                    tooltip: f.Z.Messages.UPDATE_DOWNLOADED,
                    foreground: h.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: s.DownloadIcon
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                memoizedMode: this.props.mode,
                clicked: !1
            }),
            p(this, 'handleInstallDownload', () => {
                d.Z.isConnected()
                    ? l.Z.show({
                          title: f.Z.Messages.UPDATE_DURING_CALL_TITLE,
                          body: f.Z.Messages.UPDATE_DURING_CALL_BODY,
                          onConfirm: this.doUpdate,
                          cancelText: f.Z.Messages.CANCEL,
                          confirmText: f.Z.Messages.UPDATE_DURING_CALL_CONTINUE
                      })
                    : this.doUpdate();
            }),
            p(this, 'doUpdate', () => {
                !this.state.clicked && (this.setState({ clicked: !0 }), (0, _.Q)());
            });
    }
}
t.Z = o.ZP.connectStores([c.Z], () => ({ mode: c.Z.getState() }))(m);
