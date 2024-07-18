n.d(t, {
  Z: function() {
return g;
  }
}), n(47120), n(653041), n(411104), n(733860);
var r, i, a = n(442837),
  s = n(710845),
  o = n(483012),
  l = n(138859),
  u = n(206776),
  c = n(91247),
  d = n(459005),
  _ = n(398463);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = new s.Z('GatewaySocket'),
  h = new Set([
'INITIAL_GUILD',
'READY'
  ]),
  p = new Set([
'READY',
'INITIAL_GUILD'
  ]),
  m = new Set([
'READY',
'READY_SUPPLEMENTAL',
'RESUMED'
  ]),
  I = new Set([
'READY',
'INITIAL_GUILD',
'READY_SUPPLEMENTAL',
'RESUMED'
  ]);
(i = r || (r = {}))[i.NotStarted = 0] = 'NotStarted', i[i.Loading = 1] = 'Loading', i[i.Loaded = 2] = 'Loaded';
let T = {};
class g {
  hasStuffToDispatchNow() {
return this.queue.length > 0 && 2 === this.queue[0].status;
  }
  processFirstQueuedDispatch(e) {
let t = [];
for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;)
  t.push(this.queue.shift());
this.dispatchMultiple(t);
  }
  unpauseDispatchQueue() {
for (let e of (this.paused = !1, this.queue))
  this.maybePreload(e);
this.flush();
  }
  receiveDispatch(e, t, n) {
if (null == this.getDispatchHandler)
  throw Error('getDispatchHandler needs to be passed in first!');
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
if (this.paused && !h.has(e.type))
  return !1;
if (0 === e.status) {
  var t;
  let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
  if (e.status = null == n ? 2 : 1, e.preloadPromise = n, null != n)
    return n.then(t => {
      e.preloadedData = t, e.status = 2, this.scheduleFlush(e.type);
    }).catch(t => this.socket.resetSocketOnDispatchError({
      error: t,
      action: e.type
    })), !0;
}
return !1;
  }
  scheduleFlush(e) {
!this.paused && (p.has(e) ? (this.scheduler.clearWorkTimeout(), this.flush()) : !this.scheduler.hasWorkScheduled && this.scheduler.requestWorkTimeout(this.flush));
  }
  getDispatchTimings() {
return T;
  }
  getSchedulerTelemetry() {
return this.scheduler.telemetry;
  }
  dispatchMultiple(e, t) {
if (0 === e.length)
  return !0;
let n = 'none',
  r = !1;
this.scheduler.telemetry.measure(d.aA.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
try {
  let i = [];
  this.socket.connectionState === l.Z.RESUMING && a.ZP.Emitter.pause(150);
  let s = 0;
  if (a.ZP.Emitter.batched(() => {
      let a = e.some(e => I.has(e.type));
      for (let o = 0; o < e.length; o++) {
        let l = e[o];
        n = l.type, r = r || m.has(l.type);
        let u = performance.now();
        if (this.dispatchOne(l), s = performance.now() - u, ! function(e, t) {
            var n;
            let [r, i] = null !== (n = T[e]) && void 0 !== n ? n : [
              0,
              0
            ];
            T[e] = [
              (r * i + t) / (i + 1),
              i + 1
            ];
          }(l.type, s), !a) {
          if (function(e, t, n) {
              var r;
              let i = e[t],
                a = e.length - 1,
                s = t < a ? e[t + 1] : null,
                o = null !== (r = null == n ? void 0 : n.timeRemaining()) && void 0 !== r ? r : 0,
                l = null != n && o <= 0,
                u = i.type === (null == s ? void 0 : s.type);
              if (l && !u && t !== a)
                return !0;
              let c = null != s && function(e, t) {
                var n, r;
                return (null !== (r = null === (n = T[e]) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : 1) > t + _.Lx;
              }(s.type, o);
              return null != n && !!c && !u || !1;
            }(e, o, t)) {
            i = e.slice(o + 1), null != t && 0 >= t.timeRemaining() && (this.scheduler.telemetry.timeTrack(d.JV.TIME_OVER_DEADLINE, t.timeSinceExpiration), this.scheduler.telemetry.track(d.ug.EXCEEDED_DEADLINE));
            break;
          }
        }
      }
      o.Z.flush();
    }), r && a.ZP.Emitter.resume(), i.length > 0)
    return this.scheduler.telemetry.measure(d.aA.COUNT_DISPATCHES_LEFT_AFTER_YIELD, i.length), this.queue.unshift(...i), this.scheduler.requestWorkTimeout(this.flush), !1;
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
let {
  data: i,
  type: a,
  compressionAnalytics: s,
  preloadedData: u
} = e, d = performance.now();
if (this.socket.connectionState === l.Z.RESUMING) {
  let e = d - this.resumeAnalytics.lastUpdateTime;
  0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = d, this.resumeAnalytics.numEvents += 1;
}
if (o.Z.flush(a, i), 'READY' === a) {
  let e = (0, c.vW)(i);
  null === (t = this.getDispatchHandler(a)) || void 0 === t || t.dispatch(i, a, u), (0, c.dm)(this.socket, i, d, s, e);
} else
  'RESUMED' === a ? (null === (n = this.getDispatchHandler(a)) || void 0 === n || n.dispatch(i, a, u), (0, c.uB)(this.resumeAnalytics), this.resumeAnalytics = (0, c.zH)(), this.socket.handleResumeDispatched()) : null === (r = this.getDispatchHandler(a)) || void 0 === r || r.dispatch(i, a, u);
this.socket.connectionState === l.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d);
  }
  clear() {
this.paused = !1, this.queue.length = 0;
  }
  constructor(e) {
E(this, 'socket', void 0), E(this, 'scheduler', void 0), E(this, 'queue', void 0), E(this, 'paused', void 0), E(this, 'resumeAnalytics', void 0), E(this, 'getDispatchHandler', void 0), E(this, 'flush', void 0), this.socket = e, this.scheduler = (0, u.l)(), this.queue = [], this.paused = !0, this.resumeAnalytics = (0, c.zH)(), this.getDispatchHandler = null, this.flush = e => {
  if (this.paused)
    return !0;
  let t = performance.now(),
    n = 0;
  for (; n < this.queue.length && 2 === this.queue[n].status; n++);
  if (0 === n)
    return !0;
  let r = this.queue.splice(0, n),
    i = this.dispatchMultiple(r, e);
  i && this.scheduler.telemetry.timeEnd(d.JV.TIME_TO_QUEUE_EMPTY);
  let a = performance.now() - t;
  return a > _.TC && !i && f.log('Dispatched '.concat(r.length, ' messages in ').concat(a, 'ms')), i;
};
  }
}