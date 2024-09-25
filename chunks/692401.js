n.d(t, {
    W: function () {
        return d;
    }
});
var r = n(411104);
var i = n(512722),
    a = n.n(i),
    o = n(710845),
    s = n(459005),
    l = n(398463);
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
let c = new o.Z('DispatcherWorkScheduler');
class d {
    _trackAppBackgrounded(e) {
        if (this._isBackgrounded === e) return;
        if (((this._isBackgrounded = e), !!this._isBackgrounded)) this.hasWorkScheduled && (this.telemetry.track(s.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback());
    }
    _queueIdleCallback() {
        throw Error('Not implemented');
    }
    _clearIdleCallback() {
        throw Error('Not implemented');
    }
    get _hasExceededMaxConsecutiveFlushes() {
        return this._consecutiveFlushesBeforeQueueEmpty >= l.OT;
    }
    _processWorkCallback(e) {
        if (null == this._workCallbackFn) return;
        if (this._hasExceededMaxConsecutiveFlushes) {
            c.log('Unable to fully flush work queue after max retries, skipping future deadline.'), this._workCallbackFn(), this.clearWorkTimeout(), this.telemetry.measure(s.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty), this.telemetry.track(s.ug.EXCEEDED_MAX_CONSECUTIVE_FLUSHES), (this._consecutiveFlushesBeforeQueueEmpty = 0), (this._nextDispatchTimeout = l.II);
            return;
        }
        let t = performance.now(),
            n = this._workCallbackFn(e),
            r = performance.now();
        this.clearWorkTimeout(), r - t > l.TC ? (this._nextDispatchTimeout = l.II) : (this._nextDispatchTimeout = l.Lu), n ? (this._consecutiveFlushesBeforeQueueEmpty > 0 && this.telemetry.measure(s.aA.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt(''.concat(this._consecutiveFlushesBeforeQueueEmpty))), (this._consecutiveFlushesBeforeQueueEmpty = 0), (this._criticalWorkScheduled = !1)) : (this._consecutiveFlushesBeforeQueueEmpty += 1);
    }
    markCriticalWorkScheduled() {
        (this._criticalWorkScheduled = !0), null != this._flushIdleHandler && (this._clearIdleCallback(), this._processWorkCallback());
    }
    toggleRequestIdleCallback(e) {
        (this._enableRequestIdleCallback = e), !e && this.hasWorkScheduled && (this._clearIdleCallback(), this._processWorkCallback());
    }
    get isBackgrounded() {
        return this._isBackgrounded;
    }
    get hasWorkScheduled() {
        return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
    }
    get isRequestIdleCallbackEnabled() {
        return this._enableRequestIdleCallback;
    }
    clearWorkTimeout() {
        null != this._flushTimeoutHandler && (clearTimeout(this._flushTimeoutHandler), (this._flushTimeoutHandler = null)), this._clearIdleCallback(), (this._nextDispatchTimeout = l.Lu), (this._workCallbackFn = null);
    }
    requestWorkTimeout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (((this._workCallbackFn = e), !this.hasWorkScheduled)) {
            if ((this.telemetry.time(s.JV.TIME_TO_QUEUE_EMPTY), this._nextDispatchTimeout === l.II && this.telemetry.track(s.ug.LONGER_DISPATCH), t)) {
                this._queueIdleCallback();
                return;
            }
            this._flushTimeoutHandler = setTimeout(() => {
                if ((a()(null != this._workCallbackFn, 'Work callback should be set'), this._isBackgrounded)) return this.telemetry.track(s.ug.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
                this._queueIdleCallback();
            }, this._nextDispatchTimeout);
        }
    }
    constructor() {
        u(this, '_flushTimeoutHandler', null), u(this, '_flushIdleHandler', null), u(this, '_nextDispatchTimeout', l.Lu), u(this, '_workCallbackFn', null), u(this, '_consecutiveFlushesBeforeQueueEmpty', 0), u(this, '_isBackgrounded', !1), u(this, '_enableRequestIdleCallback', !1), u(this, '_criticalWorkScheduled', !1), u(this, 'telemetry', new s.mA()), u(this, '_logger', c);
    }
}
