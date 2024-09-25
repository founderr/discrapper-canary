n.d(t, {
    Z: function () {
        return O;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(411104);
var s = n(733860);
var l = n(442837),
    u = n(710845),
    c = n(483012),
    d = n(138859),
    _ = n(206776),
    E = n(91247),
    f = n(459005),
    h = n(398463);
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
let m = new u.Z('GatewaySocket'),
    I = new Set(['INITIAL_GUILD', 'READY']),
    T = new Set(['READY', 'INITIAL_GUILD']),
    g = new Set(['READY', 'READY_SUPPLEMENTAL', 'RESUMED']),
    S = new Set(['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE']);
!(function (e) {
    (e[(e.NotStarted = 0)] = 'NotStarted'), (e[(e.Loading = 1)] = 'Loading'), (e[(e.Loaded = 2)] = 'Loaded');
})(r || (r = {}));
let A = {};
function v(e, t) {
    var n;
    let [r, i] = null !== (n = A[e]) && void 0 !== n ? n : [0, 0];
    A[e] = [(r * i + t) / (i + 1), i + 1];
}
function N(e, t, n) {
    var r;
    if (null == n) return !1;
    let i = e[t],
        a = e.length - 1,
        o = t < a ? e[t + 1] : null,
        s = null !== (r = null == n ? void 0 : n.timeRemaining()) && void 0 !== r ? r : 0,
        l = null != n && s <= 0,
        u = i.type === (null == o ? void 0 : o.type),
        c = t === a;
    return !!l && !u && !c && !0;
}
class O {
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status; ) t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler) throw Error('getDispatchHandler needs to be passed in first!');
        let r = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null
        };
        this.queue.push(r), !this.maybePreload(r) && this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !I.has(e.type)) return !1;
        if (0 === e.status) {
            var t;
            let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
            if (((e.status = null == n ? 2 : 1), (e.preloadPromise = n), null != n))
                return (
                    n
                        .then((t) => {
                            (e.preloadedData = t), (e.status = 2), this.scheduleFlush(e.type);
                        })
                        .catch((t) =>
                            this.socket.resetSocketOnDispatchError({
                                error: t,
                                action: e.type
                            })
                        ),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused && (T.has(e) ? (this.scheduler.clearWorkTimeout(), this.flush()) : !this.scheduler.hasWorkScheduled && this.scheduler.requestWorkTimeout(this.flush), S.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    getDispatchTimings() {
        return A;
    }
    getSchedulerTelemetry() {
        return this.scheduler.telemetry;
    }
    getIsSchedulerBackgrounded() {
        return this.scheduler.isBackgrounded;
    }
    toggleRequestIdleCallback(e) {
        this.scheduler.toggleRequestIdleCallback(e);
    }
    getIsRequestIdleCallbackEnabled() {
        return this.scheduler.isRequestIdleCallbackEnabled;
    }
    dispatchMultiple(e, t) {
        if (0 === e.length) return !0;
        let n = 'none',
            r = !1;
        this.scheduler.telemetry.measure(f.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let i = [];
            this.socket.connectionState === d.Z.RESUMING && l.ZP.Emitter.pause(150);
            let a = 0;
            if (
                (l.ZP.Emitter.batched(() => {
                    for (let o = 0; o < e.length; o++) {
                        let s = e[o];
                        (n = s.type), (r = r || g.has(s.type));
                        let l = performance.now();
                        if ((this.dispatchOne(s), (a = performance.now() - l), v(s.type, a), N(e, o, t))) {
                            (i = e.slice(o + 1)), null != t && 0 >= t.timeRemaining() && this.scheduler.telemetry.timeTrack(f.JV.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    c.Z.flush();
                }),
                r && l.ZP.Emitter.resume(),
                i.length > 0)
            )
                return this.scheduler.telemetry.measure(f.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, i.length), this.queue.unshift(...i), this.scheduler.requestWorkTimeout(this.flush, !0), !1;
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: n
            });
        }
        return !0;
    }
    dispatchOne(e) {
        var t, n, r;
        let { data: i, type: a, compressionAnalytics: o, preloadedData: s } = e,
            l = performance.now();
        if (this.socket.connectionState === d.Z.RESUMING) {
            let e = l - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents ? (this.resumeAnalytics.initialWaitTime = e) : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), (this.resumeAnalytics.totalWaitTime += e), (this.resumeAnalytics.lastUpdateTime = l), (this.resumeAnalytics.numEvents += 1);
        }
        if ((c.Z.flush(a, i), 'READY' === a)) {
            let e = (0, E.vW)(i);
            null === (t = this.getDispatchHandler(a)) || void 0 === t || t.dispatch(i, a, s), (0, E.dm)(this.socket, i, l, o, e);
        } else 'RESUMED' === a ? (null === (n = this.getDispatchHandler(a)) || void 0 === n || n.dispatch(i, a, s), (0, E.uB)(this.resumeAnalytics), (this.resumeAnalytics = (0, E.zH)()), this.socket.handleResumeDispatched()) : null === (r = this.getDispatchHandler(a)) || void 0 === r || r.dispatch(i, a, s);
        this.socket.connectionState === d.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - l);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
    constructor(e) {
        p(this, 'socket', void 0),
            p(this, 'scheduler', void 0),
            p(this, 'queue', void 0),
            p(this, 'paused', void 0),
            p(this, 'resumeAnalytics', void 0),
            p(this, 'getDispatchHandler', void 0),
            p(this, 'flush', void 0),
            (this.socket = e),
            (this.scheduler = (0, _.l)()),
            (this.queue = []),
            (this.paused = !0),
            (this.resumeAnalytics = (0, E.zH)()),
            (this.getDispatchHandler = null),
            (this.flush = (e) => {
                if (this.paused) return !0;
                let t = performance.now(),
                    n = 0;
                for (; n < this.queue.length && 2 === this.queue[n].status; n++);
                if (0 === n) return !0;
                let r = this.queue.splice(0, n),
                    i = this.dispatchMultiple(r, e);
                i && this.scheduler.telemetry.timeEnd(f.JV.TIME_TO_QUEUE_EMPTY);
                let a = performance.now() - t;
                return a > h.TC && !i && m.log('Dispatched '.concat(r.length, ' messages in ').concat(a, 'ms')), i;
            });
    }
}
