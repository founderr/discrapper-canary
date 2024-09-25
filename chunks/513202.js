var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(570140),
    s = n(468026),
    l = n(566620),
    u = n(287545),
    c = n(318891),
    d = n(719296),
    _ = n(689938);
function E(e, t, n) {
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
class f extends u.Z {
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, a.openModalLazy)(
            async () => (e) =>
                (0, i.jsx)(s.default, {
                    title: _.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({ code: t }),
                    body: n,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, a.openModalLazy)(
            async () => (t) =>
                (0, i.jsx)(s.default, {
                    title: _.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
                    body: e,
                    ...t
                })
        );
    }
    leaveActivity(e) {
        let { channelId: t, applicationId: n, showFeedback: r } = e;
        o.Z.wait(() => {
            (0, l.mW)({
                channelId: t,
                applicationId: n,
                showFeedback: r
            });
        });
    }
    hidePIPEmbed(e) {
        let { channelId: t, applicationId: n } = e,
            r = (0, d.Z)(t, n);
        (0, c.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            E(this, 'handleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            });
    }
}
t.Z = new f();
