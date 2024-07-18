n.d(t, {
  JV: function() {
return i;
  },
  aA: function() {
return a;
  },
  mA: function() {
return h;
  },
  ug: function() {
return r;
  }
}), n(47120), n(724458);
var r, i, a, s, o, l, u = n(392711);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(s = r || (r = {})).DISPATCH_REQUEST = 'dispatch_request', s.LONGER_DISPATCH = 'longer_dispatch', s.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = 'exceeded_max_consecutive_flushes', s.DEADLINE_TOO_SHORT = 'deadline_too_short', s.FIRED_DUE_TO_MAX_TIMEOUT = 'fired_due_to_max_timeout', s.EXCEEDED_DEADLINE = 'count_exceeded_deadline', (o = i || (i = {})).TIME_TO_FIRE_IDLE_CALLBACK = 'time_to_fire_idle_callback', o.TIME_TO_QUEUE_EMPTY = 'time_to_flush_all_work', o.TIME_OVER_DEADLINE = 'time_over_deadline', o.TASK_TIME_AFTER_DEADLINE_EXPIRED = 'task_time_after_deadline_expired', o.DEADLINE_INITIAL_TIME_REMAINING = 'initial_time_of_deadline', (l = a || (a = {})).COUNT_DISPATCHES_LEFT_AFTER_YIELD = 'count_dispatches_left_after_yield', l.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = 'count_flush_before_queue_empty', l.COUNT_INITIAL_DISPATCHS_LENGTH = 'count_initial_dispatches_length';
let d = Object.freeze({
time_to_fire_idle_callback: null,
time_to_flush_all_work: null,
time_over_deadline: null,
task_time_after_deadline_expired: null,
initial_time_of_deadline: null
  }),
  _ = Object.freeze({
time_to_fire_idle_callback: [
  0,
  0
],
time_to_flush_all_work: [
  0,
  0
],
time_over_deadline: [
  0,
  0
],
task_time_after_deadline_expired: [
  0,
  0
],
initial_time_of_deadline: [
  0,
  0
]
  }),
  E = Object.freeze({
count_flush_before_queue_empty: [
  0,
  0
],
count_dispatches_left_after_yield: [
  0,
  0
],
count_initial_dispatches_length: [
  0,
  0
]
  }),
  f = Object.freeze({
dispatch_request: 0,
longer_dispatch: 0,
exceeded_max_consecutive_flushes: 0,
deadline_too_short: 0,
fired_due_to_max_timeout: 0,
count_exceeded_deadline: 0
  });
class h {
  reset() {
this._timeTracking = (0, u.cloneDeep)(d), this._timingStats = (0, u.cloneDeep)(_), this._measurements = (0, u.cloneDeep)(E), this._eventCounts = (0, u.cloneDeep)(f);
  }
  clearTime(e) {
this._timeTracking[e] = null;
  }
  _storeTimeValue(e, t) {
let [n, r] = this._timingStats[e];
this._timingStats[e] = [
  (n * r + t) / (r + 1),
  r + 1
];
  }
  time(e) {
this._timeTracking[e] = performance.now();
  }
  timeEnd(e) {
let t = this._timeTracking[e];
if (null == t)
  return;
let n = performance.now() - t;
this._storeTimeValue(e, n), this._timeTracking[e] = null;
  }
  timeTrack(e, t) {
this._storeTimeValue(e, t);
  }
  measure(e, t) {
let [n, r] = this._measurements[e];
this._measurements[e] = [
  (n * r + t) / (r + 1),
  r + 1
];
  }
  track(e) {
this._eventCounts[e] += 1;
  }
  generateTelemetry() {
let e = Object.entries(this._timingStats).reduce((e, t) => {
    let [n, [r]] = t;
    return e['avg_'.concat(n)] = ''.concat(r.toFixed(2), 'ms'), e;
  }, {}),
  t = Object.entries(this._measurements).reduce((e, t) => {
    let [n, [r]] = t;
    return e['avg_'.concat(n)] = ''.concat(r.toFixed(2)), e;
  }, {});
return {
  ...Object.entries(this._eventCounts).reduce((e, t) => {
    let [n, r] = t;
    if ('dispatch_request' === n)
      return e['count_'.concat(n)] = ''.concat(r), e;
    let i = (r / this._eventCounts.dispatch_request * 100).toFixed(2);
    return e['avg_'.concat(n)] = ''.concat(i, '%'), e['count_'.concat(n)] = ''.concat(r), e;
  }, {}),
  ...e,
  ...t
};
  }
  constructor() {
c(this, '_timeTracking', (0, u.cloneDeep)(d)), c(this, '_timingStats', (0, u.cloneDeep)(_)), c(this, '_measurements', (0, u.cloneDeep)(E)), c(this, '_eventCounts', (0, u.cloneDeep)(f));
  }
}