n.d(t, {
    l: function () {
        return h;
    }
});
var r,
    i,
    a = n(570140),
    o = n(830917),
    s = n(692401),
    l = n(459005),
    u = n(398463);
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
let d =
        null !== (r = window.requestIdleCallback) && void 0 !== r
            ? r
            : (e) => {
                  let t = Date.now();
                  return setTimeout(() => {
                      e({
                          didTimeout: !1,
                          timeRemaining() {
                              let e = Date.now() - t;
                              return Math.max(0, u.Ls - e);
                          }
                      });
                  }, 1);
              },
    _ = null !== (i = window.cancelIdleCallback) && void 0 !== i ? i : clearTimeout;
function E(e) {
    return null == e ? new u.Lj(u.HO, !0) : new u.Lj(e.timeRemaining(), e.didTimeout);
}
class f extends s.W {
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    var t;
                    if (null == e ? void 0 : e.didTimeout) {
                        this.telemetry.track(l.ug.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(l.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._processWorkCallback();
                        return;
                    }
                    this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                    if ((null !== (t = null == e ? void 0 : e.timeRemaining()) && void 0 !== t ? t : u.HO) < u.HO)
                        this.telemetry.time(l.JV.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = E(e),
                                        n = null == t ? void 0 : t.timeRemaining();
                                    null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                                },
                                { timeout: u.Hb / 5 }
                            );
                    else {
                        this.telemetry.timeEnd(l.JV.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = E(e),
                            n = null == t ? void 0 : t.timeRemaining();
                        null != n && this.telemetry.timeTrack(l.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
                    }
                },
                { timeout: u.Hb }
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = d((t) => {
            this._clearIdleCallback(), e(t);
        })),
            (null == t ? void 0 : t.timeout) != null && this._scheduleMaxIdleCallback(t.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (_(this._flushIdleHandler), (this._flushIdleHandler = null)), null != this._flushIdleMaxTimeoutHandler && (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
    constructor() {
        super(),
            c(this, '_flushIdleMaxTimeoutHandler', null),
            a.Z.subscribe('WINDOW_VISIBILITY_CHANGE', (e) => {
                let { visible: t, windowId: n } = e;
                if (n === (0, o.UU)()) this._trackAppBackgrounded(!t);
            });
    }
}
function h() {
    return new f();
}
