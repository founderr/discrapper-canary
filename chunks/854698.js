n.d(t, {
    BP: function () {
        return Y;
    },
    DK: function () {
        return G;
    },
    G3: function () {
        return p;
    },
    Ho: function () {
        return U;
    },
    Ib: function () {
        return h;
    },
    P8: function () {
        return A;
    },
    PJ: function () {
        return B;
    },
    Rp: function () {
        return Z;
    },
    Uq: function () {
        return M;
    },
    Y4: function () {
        return k;
    },
    hn: function () {
        return m;
    },
    iA: function () {
        return x;
    },
    ib: function () {
        return N;
    },
    lh: function () {
        return W;
    },
    mF: function () {
        return j;
    },
    ub: function () {
        return O;
    },
    v1: function () {
        return P;
    },
    x6: function () {
        return w;
    },
    zi: function () {
        return H;
    }
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(913527),
    a = n.n(i),
    s = n(859334),
    o = n(594174),
    l = n(55935),
    u = n(70956),
    c = n(709054),
    d = n(849464),
    f = n(765305),
    _ = n(388032);
let p = 365,
    h = 366,
    m = 4,
    g = [s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday],
    E = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday],
    v = [s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    I = [s.Ci.SA.weekday, s.Ci.SU.weekday],
    T = [s.Ci.FR.weekday, s.Ci.SA.weekday],
    b = [s.Ci.SU.weekday, s.Ci.MO.weekday],
    S = [s.Ci.SU.weekday, s.Ci.MO.weekday, s.Ci.TU.weekday, s.Ci.WE.weekday, s.Ci.TH.weekday, s.Ci.FR.weekday, s.Ci.SA.weekday],
    y = new Set([0, 6]);
function A(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format('dddd'),
        a = [
            {
                value: d.z.NONE,
                label: _.intl.string(_.t['0bK0Bw'])
            },
            {
                value: d.z.WEEKLY,
                label: _.intl.formatToPlainString(_.t['B8/yfn'], { weekday: i })
            },
            {
                value: d.z.BIWEEKLY,
                label: _.intl.formatToPlainString(_.t['z+aIub'], { weekday: i })
            },
            {
                value: d.z.MONTHLY,
                label: _.intl.formatToPlainString(_.t.mjOEBg, {
                    nth: r,
                    weekday: i
                })
            },
            {
                value: d.z.YEARLY,
                label: _.intl.formatToPlainString(_.t['5DFcVl'], {
                    date: n.toLocaleString(_.intl.currentLocale, {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        y.has(n.getDay())
            ? (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
              a.push({
                  value: d.z.WEEKEND_ONLY,
                  label: _.intl.string(_.t.hRpynZ)
              })
            : a.push({
                  value: d.z.WEEKDAY_ONLY,
                  label: _.intl.string(_.t['jYR/MT'])
              }),
        a
    );
}
let N = () => {
        let e = a()().add(1, 'hour'),
            t = e.hour();
        return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
    },
    C = (e, t) => (0, l.vc)(e, e.get('years') === t.get('years') ? 'ddd MMM Do \xB7 LT' : 'ddd MMM Do, YYYY \xB7 LT'),
    R = (e, t) => {
        let n = (0, l.wY)(e.toDate(), t.toDate());
        return n > 1 || n < 0 ? C(e, t) : (0, l.vc)(e, e.localeData().calendar(n < 1 ? 'sameDay' : 'nextDay', e, t));
    };
function O(e, t, n) {
    null == n && (n = a()());
    let r = a()(e),
        i = null != t && '' !== t ? a()(t) : void 0,
        s = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: R(r, n),
        endDateTimeString: null != i ? (s ? i.format('LT') : C(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= a()().add(1, 'hour'),
        withinStartWindow: r <= a()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function D(e) {
    return new s.OG(S[e]);
}
function L(e, t) {
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
function x(e, t) {
    let n = (function (e) {
            return L(e.scheduled_start_time, e.scheduled_end_time);
        })(t),
        r = a()(c.default.extractTimestamp(e)),
        i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i
    };
}
function w(e, t) {
    var n;
    if (null == t) return e;
    let r = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? a()(r) : void 0
    };
}
function P(e) {
    return L(e.scheduledStartTime, e.scheduledEndTime);
}
function M(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function k(e, t) {
    return null == e || null == t ? null == e && null == t : M(e.startDate, t.startDate) && M(e.endDate, t.endDate);
}
function U(e) {
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
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = [],
        a = n;
    a.setMilliseconds(0);
    let s = new Date();
    s.setFullYear(s.getFullYear() + m);
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
    return null != n ? c.default.fromTimestamp(Math.floor(n.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND) : null;
}
function Z(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(c.default.extractTimestamp(t));
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
function F(e) {
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? E : g;
}
function V(e) {
    let t = D(e.toDate().getDay()),
        n = D(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? b : n.weekday - t.weekday < 0 ? T : I;
}
function j(e, t) {
    let n = (function (e, t) {
        let n = F(t),
            r = V(t),
            i = D(t.toDate().getUTCDay()),
            a = Math.ceil(t.toDate().getUTCDate() / 7),
            o = t.toDate();
        switch ((o.setMilliseconds(0), e)) {
            case d.z.NONE:
                return null;
            case d.z.WEEKLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.WEEKLY
                });
            case d.z.BIWEEKLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.WEEKLY,
                    interval: 2
                });
            case d.z.MONTHLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.MONTHLY,
                    byweekday: [i.nth(a)]
                });
            case d.z.YEARLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.YEARLY
                });
            case d.z.WEEKDAY_ONLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.DAILY,
                    byweekday: n
                });
            case d.z.WEEKEND_ONLY:
                return new s.Ci({
                    dtstart: o,
                    freq: s.Ci.DAILY,
                    byweekday: r
                });
        }
    })(e, t);
    if (null == n) return null;
    let { dtstart: r, until: i, freq: a, interval: o, byweekday: l, bynweekday: u, bymonth: c, bymonthday: f, byyearday: _, count: p } = n.options,
        h =
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
        byNWeekday: h,
        byMonth: c,
        byMonthDay: f,
        byYearDay: _,
        count: p
    };
}
function H(e, t) {
    if (null == t) return d.z.NONE;
    let n = U(t);
    switch (n.options.freq) {
        case s.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
            return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
        case s.Ci.YEARLY:
            return d.z.YEARLY;
        case s.Ci.MONTHLY:
            return d.z.MONTHLY;
        case s.Ci.DAILY:
            if ((0, r.isEqual)(n.options.byweekday, F(e))) return d.z.WEEKDAY_ONLY;
            if ((0, r.isEqual)(n.options.byweekday, V(e))) return d.z.WEEKEND_ONLY;
            return d.z.NONE;
        default:
            return d.z.NONE;
    }
}
function Y(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function W(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? f.p1.CANCELED : t < n ? f.p1.COMPLETED : null != e ? f.p1.SCHEDULED : null;
}
