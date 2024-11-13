n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(522474),
    l = n(566620),
    u = n(287545),
    c = n(317381),
    d = n(318891),
    f = n(719296),
    _ = n(981631),
    p = n(388032);
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
let m = !1;
class g extends u.Z {
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
                    title: p.intl.formatToPlainString(p.t.hbiAOz, { code: t }),
                    body: n,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, i.openModalLazy)(
            async () => (t) =>
                (0, r.jsx)(s.default, {
                    title: p.intl.string(p.t.PtobXV),
                    body: e,
                    ...t
                })
        );
    }
    leaveActivity(e) {
        let { channelId: t, applicationId: n, showFeedback: r } = e;
        a.Z.wait(() => {
            (0, l.mW)({
                channelId: t,
                applicationId: n,
                showFeedback: r
            });
        });
    }
    hidePIPEmbed(e) {
        let { channelId: t, applicationId: n } = e,
            r = (0, f.Z)(t, n);
        (0, d.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            h(this, 'handleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            }),
            h(this, 'handlePopoutWindowUpdate', () => {
                let e = m,
                    t = o.Z.getWindowOpen(_.KJ3.ACTIVITY_POPOUT);
                if (e && !t) {
                    let e = c.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            channelId: e.channelId,
                            applicationId: e.applicationId
                        });
                }
                m = t;
            });
    }
}
t.Z = new g();
