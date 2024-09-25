n.d(t, {
    K: function () {
        return c;
    }
});
var r = n(653041);
var i = n(392711),
    a = n.n(i),
    o = n(379649),
    s = n(126168),
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
class c {
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        this.current !== e &&
            ((this.current = e),
            this.history.push({
                state: e,
                startTime: (0, o.zO)()
            }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.zO)(),
            t = this.getStateDurations(e),
            n = (e) => a().sumBy(t, (t) => (t.state === e ? t.durationMs : 0));
        return {
            state_awaiting_endpoint_ms: n(l.hes.AWAITING_ENDPOINT),
            state_authenticating_ms: n(l.hes.AUTHENTICATING),
            state_connecting_ms: n(l.hes.CONNECTING),
            state_disconnected_ms: n(l.hes.DISCONNECTED),
            state_ice_checking_ms: n(l.hes.ICE_CHECKING),
            state_no_route_ms: n(l.hes.NO_ROUTE),
            state_rtc_connecting_ms: n(l.hes.RTC_CONNECTING),
            state_rtc_disconnected_ms: n(l.hes.RTC_DISCONNECTED)
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let t = (0, s.Z)(this.history, (e, t) => ({
                state: e.state,
                durationMs: t.startTime - e.startTime
            })),
            n = () => {
                let t = a().last(this.history);
                return {
                    state: t.state,
                    durationMs: e - t.startTime
                };
            };
        return t.push(n()), t;
    }
    constructor(e) {
        u(this, 'current', null), u(this, 'history', []), null != e && this.update(e);
    }
}
