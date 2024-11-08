n.d(t, {
    BP: function () {
        return H;
    },
    DK: function () {
        return G;
    },
    G3: function () {
        return _;
    },
    Ho: function () {
        return k;
    },
    Ib: function () {
        return h;
    },
    P8: function () {
        return y;
    },
    PJ: function () {
        return U;
    },
    Rp: function () {
        return B;
    },
    Uq: function () {
        return M;
    },
    Y4: function () {
        return P;
    },
    hn: function () {
        return p;
    },
    iA: function () {
        return L;
    },
    ib: function () {
        return A;
    },
    lh: function () {
        return Y;
    },
    mF: function () {
        return V;
    },
    ub: function () {
        return R;
    },
    v1: function () {
        return w;
    },
    x6: function () {
        return x;
    },
    zi: function () {
        return j;
    }
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(913527),
    a = n.n(i),
    s = n(859334),
    o = n(594174),
    l = n(70956),
    u = n(709054),
    c = n(849464),
    d = n(765305),
    f = n(388032);
let _ = 365,
    h = 366,
    p = 4,
    m = [s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday],
    g = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday],
    E = [s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    v = [s.Ci.SA.weekday, s.Ci.SU.weekday],
    I = [s.Ci.FR.weekday, s.Ci.SA.weekday],
    S = [s.Ci.SU.weekday, s.Ci.MO.weekday],
    b = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    T = new Set([0, 6]);
function y(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format('dddd'),
        a = [
            {
                value: c.z.NONE,
                label: f.intl.string(f.t['0bK0Bw'])
            },
            {
                value: c.z.WEEKLY,
                label: f.intl.formatToPlainString(f.t['B8/yfn'], { weekday: i })
            },
            {
                value: c.z.BIWEEKLY,
                label: f.intl.formatToPlainString(f.t['z+aIub'], { weekday: i })
            },
            {
                value: c.z.MONTHLY,
                label: f.intl.formatToPlainString(f.t.mjOEBg, {
                    nth: r,
                    weekday: i
                })
            },
            {
                value: c.z.YEARLY,
                label: f.intl.formatToPlainString(f.t['5DFcVl'], {
                    date: n.toLocaleString(f.intl.currentLocale, {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        T.has(n.getDay())
            ? (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
              a.push({
                  value: c.z.WEEKEND_ONLY,
                  label: f.intl.string(f.t.hRpynZ)
              })
            : a.push({
                  value: c.z.WEEKDAY_ONLY,
                  label: f.intl.string(f.t['jYR/MT'])
              }),
        a
    );
}
let A = () => {
        let e = a()().add(1, 'hour'),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    N = (e, t) => e.format(e.get('years') === t.get('years') ? 'ddd MMM Do \xB7 LT' : 'ddd MMM Do, YYYY \xB7 LT'),
    C = (e, t) => (e.diff(t, 'days') > 1 ? N(e, t) : e.calendar(t));
function R(e, t, n) {
    null == n && (n = a()());
    let r = a()(e),
        i = null != t && '' !== t ? a()(t) : void 0,
        s = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: C(r, n),
        endDateTimeString: null != i ? (s ? i.format('LT') : N(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, 'hour'),
        withinStartWindow: r <= a()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function O(e) {
    return new s.OG(b[e]);
}
function D(e, t) {
    let n;
    return (
        null != e &&
            ((n = {
                startDate: a()(e),
                endDate: void 0
            }),
            null != t && (n.endDate = a()(t))),
        n
    );
}
function L(e, t) {
    let n = (function (e) {
            return D(e.scheduled_start_time, e.scheduled_end_time);
        })(t),
        r = a()(u.default.extractTimestamp(e)),
        i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i
    };
}
function x(e, t) {
    var n;
    if (null == t) return e;
    let r = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? a()(r) : void 0
    };
}
function w(e) {
    return D(e.scheduledStartTime, e.scheduledEndTime);
}
function M(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function P(e, t) {
    return null == e || null == t ? null == e && null == t : M(e.startDate, t.startDate) && M(e.endDate, t.endDate);
}
function k(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        r = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map((e) => new s.OG(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new s.Ci({
            dtstart: i,
            until: null != e.end ? new Date(e.end) : null,
            freq: e.frequency,
            interval: e.interval,
            byweekday: null != n ? n : r,
            bymonth: null != e.byMonth ? [...e.byMonth] : null,
            bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
            byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
            count: e.count
        })
    );
}
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = [],
        a = n;
    a.setMilliseconds(0);
    let s = new Date();
    s.setFullYear(s.getFullYear() + p);
    for (let n = 0; n < e && a < s; n++) {
        let e = t.after(a, 0 === n && !r);
        if (null == e) break;
        (a = e), i.push(e);
    }
    return i;
}
function G(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
    return null != n ? u.default.fromTimestamp(Math.floor(n.getTime() / l.Z.Millis.SECOND) * l.Z.Millis.SECOND) : null;
}
function B(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(u.default.extractTimestamp(t));
    if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case s.Ci.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case s.Ci.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function Z(e) {
    let t = O(e.toDate().getDay()),
        n = O(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? E : n.weekday - t.weekday < 0 ? g : m;
}
function F(e) {
    let t = O(e.toDate().getDay()),
        n = O(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? I : v;
}
function V(e, t) {
    let n = (function (e, t) {
        let n = Z(t),
            r = F(t),
            i = O(t.toDate().getUTCDay()),
            a = Math.ceil(t.toDate().getUTCDate() / 7),
            o = t.toDate();
        switch ((o.setMilliseconds(0), e)) {
            case c.z.NONE:
                return null;
            case c.z.WEEKLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.WEEKLY
                });
            case c.z.BIWEEKLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.WEEKLY,
                    interval: 2
                });
            case c.z.MONTHLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.MONTHLY,
                    byweekday: [i.nth(a)]
                });
            case c.z.YEARLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.YEARLY
                });
            case c.z.WEEKDAY_ONLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.DAILY,
                    byweekday: n
                });
            case c.z.WEEKEND_ONLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.DAILY,
                    byweekday: r
                });
        }
    })(e, t);
    if (null == n) return null;
    let { dtstart: r, until: i, freq: a, interval: o, byweekday: l, bynweekday: u, bymonth: d, bymonthday: f, byyearday: _, count: h } = n.options,
        p =
            null == u
                ? void 0
                : u.map((e) => ({
                      n: e[1],
                      day: e[0]
                  }));
    return {
        start: r.toISOString(),
        end: null == i ? void 0 : i.toISOString(),
        frequency: a,
        interval: o,
        byWeekday: l,
        byNWeekday: p,
        byMonth: d,
        byMonthDay: f,
        byYearDay: _,
        count: h
    };
}
function j(e, t) {
    if (null == t) return c.z.NONE;
    let n = k(t);
    switch (n.options.freq) {
        case s.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return c.z.NONE;
            return 1 === n.options.interval ? c.z.WEEKLY : c.z.BIWEEKLY;
        case s.Ci.YEARLY:
            return c.z.YEARLY;
        case s.Ci.MONTHLY:
            return c.z.MONTHLY;
        case s.Ci.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, Z(e))) return c.z.WEEKDAY_ONLY;
            if ((0, r.isEqual)(n.options.byweekday, F(e))) return c.z.WEEKEND_ONLY;
            return c.z.NONE;
        default:
            return c.z.NONE;
    }
}
function H(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function Y(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? d.p1.CANCELED : t < n ? d.p1.COMPLETED : null != e ? d.p1.SCHEDULED : null;
}
