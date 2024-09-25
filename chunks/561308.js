n.d(t, {
    GE: function () {
        return L;
    },
    GL: function () {
        return g;
    },
    Jd: function () {
        return P;
    },
    Nq: function () {
        return C;
    },
    Ol: function () {
        return N;
    },
    PJ: function () {
        return A;
    },
    T_: function () {
        return I;
    },
    V5: function () {
        return y;
    },
    ap: function () {
        return D;
    },
    bT: function () {
        return M;
    },
    dw: function () {
        return b;
    },
    ig: function () {
        return G;
    },
    kr: function () {
        return v;
    },
    n2: function () {
        return O;
    },
    q_: function () {
        return w;
    },
    qy: function () {
        return k;
    },
    vU: function () {
        return U;
    },
    yA: function () {
        return R;
    },
    yh: function () {
        return S;
    },
    zo: function () {
        return x;
    }
});
var r = n(47120);
var i = n(164369),
    a = n(913527),
    o = n.n(a),
    s = n(884439),
    l = n(442837),
    u = n(876215),
    c = n(317381),
    d = n(835473),
    _ = n(70956),
    E = n(709054),
    f = n(719247),
    h = n(689938);
let p = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / _.Z.Millis.SECOND,
            i = Math.floor(r) % _.Z.Seconds.MINUTE,
            a = Math.floor(r / _.Z.Seconds.MINUTE) % _.Z.Seconds.MINUTE,
            o = Math.floor(r / _.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: a,
            hours: o,
            days: Math.floor(r / _.Z.Seconds.DAY)
        };
    },
    m = (e, t) => {
        let n = 'id' in e ? E.default.extractTimestamp(e.id) : e.start;
        return p({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    I = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = m(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    T = {
        secondsAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({ count: e }),
        minutesAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({ count: e }),
        hoursAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({ count: e }),
        daysAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({ count: e }),
        weeksAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({ count: e }),
        monthsAgo: (e) => h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MONTHS_AGO.format({ count: e })
    },
    g = function (e, t, n) {
        let { formatSet: r = T } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = o()(n),
            a = o()(E.default.extractTimestamp(e.id)),
            s = i.diff(a, 's');
        if (s < _.Z.Seconds.MINUTE) return r.secondsAgo(s);
        if (s < _.Z.Seconds.HOUR) {
            let e = Math.round(s / _.Z.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (s < 12 * _.Z.Seconds.HOUR) {
            let e = Math.round(s / _.Z.Seconds.HOUR);
            return r.hoursAgo(e);
        } else if (s < 9 * _.Z.Seconds.DAY) {
            let e = Math.round(s / _.Z.Seconds.DAY);
            return r.daysAgo(e);
        } else if (s < 4 * _.Z.Seconds.WEEK) {
            let e = Math.round(s / (7 * _.Z.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let l = Math.round(s / _.Z.Seconds.DAYS_30);
        return r.monthsAgo(l);
    },
    S = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return v(e) ? I(e, n) : g(e, t, n, r);
    };
function A(e, t) {
    return e.traits.find((e) => e.type === t);
}
function v(e) {
    var t, n;
    return null !== (n = null === (t = A(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function N(e) {
    var t, n;
    return null !== (n = null === (t = A(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function O(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function R(e) {
    var t;
    return null === (t = A(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function C(e) {
    var t;
    return null === (t = A(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function y(e) {
    var t;
    return null === (t = A(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function b(e) {
    let t = A(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function L(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: r = 0
    } = (0, i.Z)({
        start: e,
        end: new Date()
    });
    return h.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : r
    });
}
function D(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : h.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function M(e, t) {
    var n, r, i, a;
    let o = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        s = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != o && null != s
                ? h.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
                      count: o,
                      max: s
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function P(e) {
    return e.content_type === u.s.TOP_GAME;
}
function U(e) {
    var t;
    return null === (t = A(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function w(e) {
    let t = U(e);
    if (null == t || t < 3) return !1;
    let n = E.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * _.Z.Millis.HOUR) && !0;
}
function x(e) {
    let t = R(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / _.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON_TIME.format({ hours: n }),
              tooltipText: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({ hours: n })
          };
}
function G(e) {
    var t;
    return null === (t = A(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function k(e) {
    let t = (0, l.e7)([f.Z], () => f.Z.getMatchingActivity(e)),
        [n, r] = (0, d.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]),
        i = (0, l.e7)([c.ZP], () => c.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id));
    return {
        activity: t,
        embeddedActivity: i,
        anyMatchingApplication: null != n ? n : r,
        activityApplication: n,
        fallbackApplication: r
    };
}
