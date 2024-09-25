n.d(t, {
    JV: function () {
        return i;
    },
    aA: function () {
        return a;
    },
    mA: function () {
        return f;
    },
    ug: function () {
        return r;
    }
});
var r,
    i,
    a,
    o = n(47120);
var s = n(724458);
var l = n(392711);
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
!(function (e) {
    (e.LONGER_DISPATCH = 'longer_dispatch'), (e.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = 'exceeded_max_consecutive_flushes'), (e.FIRED_DUE_TO_MAX_TIMEOUT = 'fired_due_to_max_timeout'), (e.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = 'skip_idle_callback_due_to_backgrounded');
})(r || (r = {})),
    !(function (e) {
        (e.TIME_TO_FIRE_IDLE_CALLBACK = 'time_to_fire_idle_callback'), (e.TIME_TO_QUEUE_EMPTY = 'time_to_flush_all_work'), (e.TIME_OVER_DEADLINE = 'time_over_deadline'), (e.DEADLINE_INITIAL_TIME_REMAINING = 'initial_time_of_deadline');
    })(i || (i = {})),
    !(function (e) {
        (e.COUNT_DISPATCHES_LEFT_AFTER_YIELD = 'count_dispatches_left_after_yield'), (e.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = 'count_flush_before_queue_empty'), (e.COUNT_INITIAL_DISPATCHS_LENGTH = 'count_initial_dispatches_length');
    })(a || (a = {}));
let c = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null
    }),
    d = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0]
    }),
    _ = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0]
    }),
    E = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0
    });
class f {
    reset() {
        (this._timeTracking = (0, l.cloneDeep)(c)), (this._timingStats = (0, l.cloneDeep)(d)), (this._measurements = (0, l.cloneDeep)(_)), (this._eventCounts = (0, l.cloneDeep)(E));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, t) {
        let [n, r] = this._timingStats[e];
        this._timingStats[e] = [(n * r + t) / (r + 1), r + 1];
    }
    time(e) {
        if (!!this._enabled) this._timeTracking[e] = performance.now();
    }
    timeEnd(e) {
        if (!this._enabled) return;
        let t = this._timeTracking[e];
        if (null == t) return;
        let n = performance.now() - t;
        this._storeTimeValue(e, n), (this._timeTracking[e] = null);
    }
    timeTrack(e, t) {
        if (!!this._enabled) this._storeTimeValue(e, t);
    }
    measure(e, t) {
        if (!this._enabled) return;
        let [n, r] = this._measurements[e];
        this._measurements[e] = [(n * r + t) / (r + 1), r + 1];
    }
    track(e) {
        if (!!this._enabled) this._eventCounts[e] += 1;
    }
    toggleTelemetry(e) {
        this._enabled = e;
    }
    get isTelemetryEnabled() {
        return this._enabled;
    }
    generateTelemetry() {
        let e = Object.entries(this._timingStats).reduce((e, t) => {
                let [n, [r]] = t;
                return (e['avg_'.concat(n)] = ''.concat(r.toFixed(2), 'ms')), e;
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [r]] = t;
                return (e['avg_'.concat(n)] = ''.concat(r.toFixed(2))), e;
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, r] = t;
                return (e['count_'.concat(n)] = ''.concat(r)), e;
            }, {}),
            ...e,
            ...t
        };
    }
    constructor() {
        u(this, '_timeTracking', (0, l.cloneDeep)(c)), u(this, '_timingStats', (0, l.cloneDeep)(d)), u(this, '_measurements', (0, l.cloneDeep)(_)), u(this, '_eventCounts', (0, l.cloneDeep)(E)), u(this, '_enabled', !1);
    }
}
