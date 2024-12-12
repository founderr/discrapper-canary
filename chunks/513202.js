var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(570140),
    l = r(468026),
    u = r(522474),
    c = r(788983),
    d = r(636449),
    f = r(566620),
    _ = r(287545),
    h = r(317381),
    p = r(318891),
    m = r(719296),
    g = r(981631),
    E = r(388032);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = !1;
class T extends _.Z {
    _initialize() {
        super._initialize(), u.Z.addChangeListener(this.handlePopoutWindowUpdate);
    }
    _terminate() {
        super._terminate(), u.Z.removeChangeListener(this.handlePopoutWindowUpdate);
    }
    showErrorModal(e) {
        let { code: n, message: r } = e;
        (0, s.openModalLazy)(
            async () => (e) =>
                (0, a.jsx)(l.default, {
                    title: E.intl.formatToPlainString(E.t.hbiAOz, { code: n }),
                    body: r,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, s.openModalLazy)(
            async () => (n) =>
                (0, a.jsx)(l.default, {
                    title: E.intl.string(E.t.PtobXV),
                    body: e,
                    ...n
                })
        );
    }
    leaveActivity(e) {
        let { channelId: n, applicationId: r, showFeedback: i } = e;
        o.Z.wait(() => {
            (0, f.mW)({
                channelId: n,
                applicationId: r,
                showFeedback: i
            });
        }),
            (0, d.R)() && (0, c.xv)(g.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { channelId: n, applicationId: r } = e,
            i = (0, m.Z)(n, r);
        (0, p.RI)(i);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            v(this, 'handleRPCDisconnect', (e) => {
                let { reason: n, application: r } = e;
                this.superHandleRPCDisconnect({
                    reason: n,
                    application: r
                });
            }),
            v(this, 'handlePopoutWindowUpdate', () => {
                let e = I,
                    n = u.Z.getWindowOpen(g.KJ3.ACTIVITY_POPOUT);
                if (e && !n) {
                    let e = h.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            channelId: e.channelId,
                            applicationId: e.applicationId
                        });
                }
                I = n;
            });
    }
}
n.Z = new T();
