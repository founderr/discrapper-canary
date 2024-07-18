n.d(t, {
  l: function() {
return _;
  }
}), n(177593);
var r, i, a = n(692401),
  s = n(459005),
  o = n(398463);
let l = null !== (r = window.requestIdleCallback) && void 0 !== r ? r : e => setImmediate(() => e()),
  u = null !== (i = window.cancelIdleCallback) && void 0 !== i ? i : clearTimeout;

function c(e) {
  return null == e ? new o.Lj(o.HO, !0) : new o.Lj(e.timeRemaining(), e.didTimeout);
}
class d extends a.W {
  _queueIdleCallback() {
this.telemetry.time(s.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._flushIdleHandler = l(e => {
  var t;
  if ((null == e ? void 0 : e.didTimeout) ? (this.telemetry.track(s.ug.FIRED_DUE_TO_MAX_TIMEOUT), this.telemetry.clearTime(s.JV.TIME_TO_FIRE_IDLE_CALLBACK)) : this.telemetry.timeEnd(s.JV.TIME_TO_FIRE_IDLE_CALLBACK), (null !== (t = null == e ? void 0 : e.timeRemaining()) && void 0 !== t ? t : o.HO) < o.HO)
    this.telemetry.track(s.ug.DEADLINE_TOO_SHORT), this.telemetry.time(s.JV.TIME_TO_FIRE_IDLE_CALLBACK), this._flushIdleHandler = l(e => {
      this.telemetry.timeEnd(s.JV.TIME_TO_FIRE_IDLE_CALLBACK);
      let t = c(e),
        n = null == t ? void 0 : t.timeRemaining();
      null != n && this.telemetry.timeTrack(s.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
    }, {
      timeout: o.Hb / 5
    });
  else {
    this.telemetry.timeEnd(s.JV.TIME_TO_FIRE_IDLE_CALLBACK);
    let t = c(e),
      n = null == t ? void 0 : t.timeRemaining();
    null != n && this.telemetry.timeTrack(s.JV.DEADLINE_INITIAL_TIME_REMAINING, n), this._processWorkCallback(t);
  }
}, {
  timeout: o.Hb
});
  }
  _clearIdleCallback() {
null != this._flushIdleHandler && (u(this._flushIdleHandler), this._flushIdleHandler = null);
  }
}

function _() {
  return new d();
}