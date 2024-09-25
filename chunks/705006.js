var r = n(47120);
var i = n(443296),
    a = n(873741),
    o = n(866960),
    s = n(626135),
    l = n(981631);
function u(e, t, n) {
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
let c = 0.1;
function d(e) {
    if (Math.random() > c) return;
    let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        n = (0, a.d)();
    s.default.track(l.rMx.QUEST_DECISION_ROUNDTRIP, {
        ...(0, i.Z)(),
        endpoint: e.endpoint,
        was_successful: e.wasSuccessful,
        api_latency_ms: t,
        mobile_network_type: o.Z.getType(),
        ...(null != n && { mobile_signal_strength_level: n })
    });
}
class _ {
    recordQuestRequestAttempt(e) {
        let t = {
            initialSendTimestamp: Date.now(),
            endpoint: e,
            apiResponseTimestamp: null,
            wasSuccessful: !1
        };
        this.pendingRequests.set(e, t),
            setTimeout(() => {
                let t = this.pendingRequests.get(e);
                null != t && (d(t), this.pendingRequests.delete(e));
            }, 30000);
    }
    recordQuestRequestApiResponse(e, t) {
        let { wasSuccessful: n } = t,
            r = this.pendingRequests.get(e);
        null != r &&
            (d({
                ...r,
                apiResponseTimestamp: Date.now(),
                wasSuccessful: n
            }),
            this.pendingRequests.delete(e));
    }
    constructor() {
        u(this, 'pendingRequests', new Map());
    }
}
t.Z = new _();
