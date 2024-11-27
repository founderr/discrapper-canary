n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(522474),
    l = n(788983),
    u = n(636449),
    c = n(566620),
    d = n(287545),
    f = n(317381),
    _ = n(318891),
    p = n(719296),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
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
let E = !1;
class v extends d.Z {
    _initialize() {
        super._initialize(), o.Z.addChangeListener(this.handlePopoutWindowUpdate);
    }
    _terminate() {
        super._terminate(), o.Z.removeChangeListener(this.handlePopoutWindowUpdate);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, i.openModalLazy)(
            async () => (e) =>
                (0, r.jsx)(s.default, {
                    title: m.intl.formatToPlainString(m.t.hbiAOz, { code: t }),
                    body: n,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, i.openModalLazy)(
            async () => (t) =>
                (0, r.jsx)(s.default, {
                    title: m.intl.string(m.t.PtobXV),
                    body: e,
                    ...t
                })
        );
    }
    leaveActivity(e) {
        let { channelId: t, applicationId: n, showFeedback: r } = e;
        a.Z.wait(() => {
            (0, c.mW)({
                channelId: t,
                applicationId: n,
                showFeedback: r
            });
        }),
            (0, u.R)() && (0, l.xv)(h.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { channelId: t, applicationId: n } = e,
            r = (0, p.Z)(t, n);
        (0, _.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            g(this, 'handleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            }),
            g(this, 'handlePopoutWindowUpdate', () => {
                let e = E,
                    t = o.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT);
                if (e && !t) {
                    let e = f.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            channelId: e.channelId,
                            applicationId: e.applicationId
                        });
                }
                E = t;
            });
    }
}
t.Z = new v();
