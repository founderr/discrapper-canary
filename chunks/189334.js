var r = n(47120);
var i = n(147913),
    a = n(282397),
    o = n(626135),
    s = n(131595),
    l = n(475774),
    u = n(981631);
function c(e, t, n) {
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
let d = 'interaction_iframe_modal';
async function _(e) {
    let { openInteractionModal: t } = await n.e('31453').then(n.bind(n, 440934));
    t(e),
        o.default.track(u.rMx.OPEN_MODAL, {
            type: 'interaction_modal',
            application_id: e.application.id
        });
}
function E(e) {
    (0, l.Z)(e),
        o.default.track(u.rMx.OPEN_MODAL, {
            type: d,
            application_id: e.application.id
        });
}
function f(e) {
    let { application: t } = e,
        n = a.ZP.getIFrameModalApplicationId(),
        r = a.ZP.getIFrameModalKey();
    t.id === n && null != n && (0, s.Z)(n, r);
}
function h(e, t) {
    let n = null != t ? Date.now() - t : void 0;
    o.default.track(u.rMx.MODAL_DISMISSED, {
        type: d,
        application_id: e.applicationId,
        duration_open_ms: n
    });
}
class p extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, 'iframeModalOpenTimeMs', void 0),
            c(this, 'actions', {
                INTERACTION_MODAL_CREATE: (e) => {
                    _(e);
                },
                INTERACTION_IFRAME_MODAL_CREATE: (e) => {
                    (this.iframeModalOpenTimeMs = Date.now()), E(e);
                },
                INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
                    h(e, this.iframeModalOpenTimeMs), (this.iframeModalOpenTimeMs = void 0);
                },
                RPC_APP_DISCONNECTED: (e) => {
                    f(e);
                }
            });
    }
}
t.Z = new p();
