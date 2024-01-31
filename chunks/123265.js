"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007"), n("424973"), n("70102");
var i, s, r, a = n("446674"),
  o = n("605250"),
  l = n("313915"),
  u = n("509065"),
  d = n("41642"),
  c = n("342797");
let f = new o.default("GatewaySocket"),
  _ = new Set(["READY", "INITIAL_GUILD"]),
  h = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
(r = i || (i = {}))[r.Loading = 0] = "Loading", r[r.Loaded = 1] = "Loaded", s = class {
  hasStuffToDispatchNow() {
    return this.queue.length > 0 && 1 === this.queue[0].status
  }
  processFirstQueuedDispatch(e) {
    let t = [];
    for (; this.queue.length > 0 && e.has(this.queue[0].type) && 1 === this.queue[0].status;) t.push(this.queue.shift());
    this.dispatchMultiple(t)
  }
  unpauseDispatchQueue() {
    this.paused = !1, this.flush()
  }
  receiveDispatch(e, t, n) {
    var i;
    if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
    let s = null === (i = this.getDispatchHandler(t)) || void 0 === i ? void 0 : i.preload(e),
      r = {
        data: e,
        type: t,
        compressionAnalytics: n,
        status: null == s ? 1 : 0,
        preloadPromise: s,
        preloadedData: null
      };
    this.queue.push(r), null != s ? s.then(e => {
      r.preloadedData = e, r.status = 1, this.scheduleFlush(t)
    }).catch(e => this.socket.resetSocketOnError(e, t)) : this.scheduleFlush(t)
  }
  scheduleFlush(e) {
    !this.paused && (_.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
  }
  dispatchMultiple(e) {
    let t = "none",
      n = !1;
    try {
      this.socket.connectionState === d.default.RESUMING && a.default.Emitter.pause(150), a.default.Emitter.batched(() => {
        e.forEach(e => {
          t = e.type, n = n || h.has(e.type), this.dispatchOne(e)
        }), u.default.flush()
      }), n && a.default.Emitter.resume()
    } catch (e) {
      this.socket.resetSocketOnError(e, t)
    }
  }
  dispatchOne(e) {
    var t, n, i;
    let {
      data: s,
      type: r,
      compressionAnalytics: a,
      preloadedData: o
    } = e, _ = performance.now();
    if (this.socket.connectionState === d.default.RESUMING) {
      let e = _ - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = _, this.resumeAnalytics.numEvents += 1
    }
    if (l.default.isLoggingGatewayEvents && f.verboseDangerously("<~", r, s), u.default.flush(r, s), "READY" === r) {
      let e = (0, c.getReadyPayloadByteSizeAnalytics)(s);
      null === (t = this.getDispatchHandler(r)) || void 0 === t || t.dispatch(s, r, o), (0, c.logReadyPayloadReceived)(this.socket, s, _, a, e)
    } else "RESUMED" === r ? (null === (n = this.getDispatchHandler(r)) || void 0 === n || n.dispatch(s, r, o), (0, c.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, c.createResumeAnalytics)(), this.socket.handleResumeDispatched()) : null === (i = this.getDispatchHandler(r)) || void 0 === i || i.dispatch(s, r, o);
    this.socket.connectionState === d.default.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - _)
  }
  clear() {
    this.paused = !1, this.queue.length = 0
  }
  constructor(e) {
    this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, c.createResumeAnalytics)(), this.getDispatchHandler = null, this.flush = () => {
      if (this.paused) return;
      clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
      let e = Date.now(),
        t = 0;
      for (; t < this.queue.length && 1 === this.queue[t].status; t++);
      if (0 === t) return;
      let n = this.queue.splice(0, t);
      this.dispatchMultiple(n);
      let i = Date.now() - e;
      i > 100 ? (f.log("Dispatched ".concat(n.length, " messages in ").concat(i, "ms")), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33
    }
  }
}