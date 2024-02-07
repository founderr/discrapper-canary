"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), n("424973"), n("70102");
var s, i, r, a = n("446674"),
  o = n("605250"),
  d = n("313915"),
  u = n("509065"),
  l = n("41642"),
  f = n("342797");
let _ = new o.default("GatewaySocket"),
  c = new Set(["READY", "INITIAL_GUILD"]),
  g = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
(r = s || (s = {}))[r.Loading = 0] = "Loading", r[r.Loaded = 1] = "Loaded", i = class {
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
    var s;
    if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
    let i = null === (s = this.getDispatchHandler(t)) || void 0 === s ? void 0 : s.preload(e),
      r = {
        data: e,
        type: t,
        compressionAnalytics: n,
        status: null == i ? 1 : 0,
        preloadPromise: i,
        preloadedData: null
      };
    this.queue.push(r), null != i ? i.then(e => {
      r.preloadedData = e, r.status = 1, this.scheduleFlush(t)
    }).catch(e => this.socket.resetSocketOnError(e, t)) : this.scheduleFlush(t)
  }
  scheduleFlush(e) {
    !this.paused && (c.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
  }
  dispatchMultiple(e) {
    let t = "none",
      n = !1;
    try {
      this.socket.connectionState === l.default.RESUMING && a.default.Emitter.pause(150), a.default.Emitter.batched(() => {
        e.forEach(e => {
          t = e.type, n = n || g.has(e.type), this.dispatchOne(e)
        }), u.default.flush()
      }), n && a.default.Emitter.resume()
    } catch (e) {
      this.socket.resetSocketOnError(e, t)
    }
  }
  dispatchOne(e) {
    var t, n, s;
    let {
      data: i,
      type: r,
      compressionAnalytics: a,
      preloadedData: o
    } = e, c = performance.now();
    if (this.socket.connectionState === l.default.RESUMING) {
      let e = c - this.resumeAnalytics.lastUpdateTime;
      0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = c, this.resumeAnalytics.numEvents += 1
    }
    if (d.default.isLoggingGatewayEvents && _.verboseDangerously("<~", r, i), u.default.flush(r, i), "READY" === r) {
      let e = (0, f.getReadyPayloadByteSizeAnalytics)(i);
      null === (t = this.getDispatchHandler(r)) || void 0 === t || t.dispatch(i, r, o), (0, f.logReadyPayloadReceived)(this.socket, i, c, a, e)
    } else "RESUMED" === r ? (null === (n = this.getDispatchHandler(r)) || void 0 === n || n.dispatch(i, r, o), (0, f.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, f.createResumeAnalytics)(), this.socket.handleResumeDispatched()) : null === (s = this.getDispatchHandler(r)) || void 0 === s || s.dispatch(i, r, o);
    this.socket.connectionState === l.default.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - c)
  }
  clear() {
    this.paused = !1, this.queue.length = 0
  }
  constructor(e) {
    this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, f.createResumeAnalytics)(), this.getDispatchHandler = null, this.flush = () => {
      if (this.paused) return;
      clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
      let e = Date.now(),
        t = 0;
      for (; t < this.queue.length && 1 === this.queue[t].status; t++);
      if (0 === t) return;
      let n = this.queue.splice(0, t);
      this.dispatchMultiple(n);
      let s = Date.now() - e;
      s > 100 ? (_.log("Dispatched ".concat(n.length, " messages in ").concat(s, "ms")), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33
    }
  }
}