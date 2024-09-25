n.d(t, {
    BP: function () {
        return J;
    },
    DK: function () {
        return W;
    },
    G3: function () {
        return h;
    },
    Ho: function () {
        return H;
    },
    Ib: function () {
        return p;
    },
    P8: function () {
        return b;
    },
    PJ: function () {
        return Y;
    },
    Rp: function () {
        return K;
    },
    Uq: function () {
        return Z;
    },
    Y4: function () {
        return V;
    },
    hn: function () {
        return g;
    },
    iA: function () {
        return G;
    },
    ib: function () {
        return L;
    },
    lh: function () {
        return ee;
    },
    mF: function () {
        return X;
    },
    ub: function () {
        return U;
    },
    v1: function () {
        return B;
    },
    x6: function () {
        return k;
    },
    zi: function () {
        return $;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(392711);
var o = n(913527),
    s = n.n(o),
    l = n(859334),
    u = n(594174),
    c = n(70956),
    d = n(709054),
    _ = n(849464),
    E = n(765305),
    f = n(689938);
let h = 365,
    p = 366,
    m = 'ddd MMM Do \xB7 LT',
    I = 'ddd MMM Do, YYYY \xB7 LT',
    T = 'LT',
    g = 4,
    S = [l.Ci.MO.weekday, l.Ci.TU.weekday, l.Ci.WE.weekday, l.Ci.TH.weekday, l.Ci.FR.weekday],
    A = [l.Ci.SU.weekday, l.Ci.MO.weekday, l.Ci.TU.weekday, l.Ci.WE.weekday, l.Ci.TH.weekday],
    v = [l.Ci.TU.weekday, l.Ci.WE.weekday, l.Ci.TH.weekday, l.Ci.FR.weekday, l.Ci.SA.weekday],
    N = [l.Ci.SA.weekday, l.Ci.SU.weekday],
    O = [l.Ci.FR.weekday, l.Ci.SA.weekday],
    R = [l.Ci.SU.weekday, l.Ci.MO.weekday],
    C = [l.Ci.SU.weekday, l.Ci.MO.weekday, l.Ci.TU.weekday, l.Ci.WE.weekday, l.Ci.TH.weekday, l.Ci.FR.weekday, l.Ci.SA.weekday],
    y = new Set([0, 6]);
function b(e) {
    var t;
    let n = e.toDate(),
        r = Math.ceil(n.getDate() / 7),
        i = e.format('dddd'),
        a = [
            {
                value: _.z.NONE,
                label: f.Z.Messages.CREATE_EVENT_RECUR_NONE
            },
            {
                value: _.z.WEEKLY,
                label: f.Z.Messages.CREATE_EVENT_RECUR_WEEKLY.format({ weekday: i })
            },
            {
                value: _.z.BIWEEKLY,
                label: f.Z.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({ weekday: i })
            },
            {
                value: _.z.MONTHLY,
                label: f.Z.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                    nth: r,
                    weekday: i
                })
            },
            {
                value: _.z.YEARLY,
                label: f.Z.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                    date: n.toLocaleString(f.Z.getLocale(), {
                        month: 'short',
                        day: '2-digit'
                    })
                })
            }
        ];
    return (
        y.has(n.getDay())
            ? (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) &&
              a.push({
                  value: _.z.WEEKEND_ONLY,
                  label: f.Z.Messages.CREATE_EVENT_RECUR_WEEKENDS
              })
            : a.push({
                  value: _.z.WEEKDAY_ONLY,
                  label: f.Z.Messages.CREATE_EVENT_RECUR_WEEKDAYS
              }),
        a
    );
}
let L = () => {
    let e = s()().add(1, 'hour'),
        t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0);
};
function D(e, t) {
    let n = t - (e.minutes() % t);
    return moment(e).add(n, 'minutes').seconds(0);
}
let M = (e, t) => e.format(e.get('years') === t.get('years') ? m : I),
    P = (e, t) => (e.diff(t, 'days') > 1 ? M(e, t) : e.calendar(t));
function U(e, t, n) {
    null == n && (n = s()());
    let r = s()(e),
        i = null != t && '' !== t ? s()(t) : void 0,
        a = null != t && r.isSame(i, 'day');
    return {
        startDateTimeString: P(r, n),
        endDateTimeString: null != i ? (a ? i.format(T) : M(i, n)) : void 0,
        currentOrPastEvent: r <= n,
        upcomingEvent: r <= s()().add(1, 'hour'),
        withinStartWindow: r <= s()().add(15, 'minute'),
        diffMinutes: r.diff(n, 'minutes')
    };
}
function w(e) {
    return new l.OG(C[e]);
}
function x(e, t) {
    let n;
    return (
        null != e &&
            ((n = {
                startDate: s()(e),
                endDate: void 0
            }),
            null != t && (n.endDate = s()(t))),
        n
    );
}
function G(e, t) {
    let n = F(t),
        r = s()(d.default.extractTimestamp(e)),
        i = (null == n ? void 0 : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : void 0;
    return {
        startDate: r,
        endDate: i
    };
}
function k(e, t) {
    var n;
    if (null == t) return e;
    let r = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
    return {
        startDate: null != t.scheduled_start_time ? s()(t.scheduled_start_time) : e.startDate,
        endDate: null != r ? s()(r) : void 0
    };
}
function B(e) {
    return x(e.scheduledStartTime, e.scheduledEndTime);
}
function F(e) {
    return x(e.scheduled_start_time, e.scheduled_end_time);
}
function Z(e, t) {
    return null == e || null == t ? null == e && null == t : e.isSame(t);
}
function V(e, t) {
    return null == e || null == t ? null == e && null == t : Z(e.startDate, t.startDate) && Z(e.endDate, t.endDate);
}
function H(e) {
    var t;
    let n = null != e.byWeekday ? [...e.byWeekday] : null,
        r = null === (t = e.byNWeekday) || void 0 === t ? void 0 : t.map((e) => new l.OG(e.day, e.n)),
        i = new Date(e.start);
    return (
        i.setMilliseconds(0),
        new l.Ci({
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
function Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = [],
        a = n;
    a.setMilliseconds(0);
    let o = new Date();
    o.setFullYear(o.getFullYear() + g);
    for (let n = 0; n < e && a < o; n++) {
        let e = t.after(a, 0 === n && !r);
        if (null == e) break;
        (a = e), i.push(e);
    }
    return i;
}
function j(e) {
    return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time);
}
function W(e) {
    if (null == e) return null;
    let t = j(e);
    return null != t ? d.default.fromTimestamp(Math.floor(t.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND) : null;
}
function K(e, t) {
    if (null == t || null == e) return !1;
    let n = new Date(e.start),
        r = new Date(d.default.extractTimestamp(t));
    if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) return !1;
    switch (e.frequency) {
        case l.Ci.WEEKLY:
            return n.getUTCDay() === r.getUTCDay();
        case l.Ci.YEARLY:
            return n.getUTCDate() === r.getUTCDate();
        default:
            return !0;
    }
}
function z(e) {
    let t = w(e.toDate().getDay()),
        n = w(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? A : S;
}
function q(e) {
    let t = w(e.toDate().getDay()),
        n = w(e.toDate().getUTCDay());
    return n.weekday - t.weekday > 0 ? R : n.weekday - t.weekday < 0 ? O : N;
}
function Q(e, t) {
    let n = z(t),
        r = q(t),
        i = w(t.toDate().getUTCDay()),
        a = Math.ceil(t.toDate().getUTCDate() / 7),
        o = t.toDate();
    switch ((o.setMilliseconds(0), e)) {
        case _.z.NONE:
            return null;
        case _.z.WEEKLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.WEEKLY
            });
        case _.z.BIWEEKLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.WEEKLY,
                interval: 2
            });
        case _.z.MONTHLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.MONTHLY,
                byweekday: [i.nth(a)]
            });
        case _.z.YEARLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.YEARLY
            });
        case _.z.WEEKDAY_ONLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.DAILY,
                byweekday: n
            });
        case _.z.WEEKEND_ONLY:
            return new l.Ci({
                dtstart: o,
                freq: l.Ci.DAILY,
                byweekday: r
            });
    }
}
function X(e, t) {
    let n = Q(e, t);
    if (null == n) return null;
    let { dtstart: r, until: i, freq: a, interval: o, byweekday: s, bynweekday: l, bymonth: u, bymonthday: c, byyearday: d, count: _ } = n.options,
        E =
            null == l
                ? void 0
                : l.map((e) => ({
                      n: e[1],
                      day: e[0]
                  }));
    return {
        start: r.toISOString(),
        end: null == i ? void 0 : i.toISOString(),
        frequency: a,
        interval: o,
        byWeekday: s,
        byNWeekday: E,
        byMonth: u,
        byMonthDay: c,
        byYearDay: d,
        count: _
    };
}
function $(e, t) {
    if (null == t) return _.z.NONE;
    let n = H(t);
    switch (n.options.freq) {
        case l.Ci.WEEKLY:
            if (n.options.interval < 1 || n.options.interval > 2) return _.z.NONE;
            return 1 === n.options.interval ? _.z.WEEKLY : _.z.BIWEEKLY;
        case l.Ci.YEARLY:
            return _.z.YEARLY;
        case l.Ci.MONTHLY:
            return _.z.MONTHLY;
        case l.Ci.DAILY:
            if ((0, a.isEqual)(n.options.byweekday, z(e))) return _.z.WEEKDAY_ONLY;
            if ((0, a.isEqual)(n.options.byweekday, q(e))) return _.z.WEEKEND_ONLY;
            return _.z.NONE;
        default:
            return _.z.NONE;
    }
}
function J(e, t) {
    return (null == e ? void 0 : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, a.isEqual)(e.recurrence_rule, t.recurrenceRule);
}
function ee(e, t, n) {
    return (null == e ? void 0 : e.is_canceled) ? E.p1.CANCELED : t < n ? E.p1.COMPLETED : null != e ? E.p1.SCHEDULED : null;
}
