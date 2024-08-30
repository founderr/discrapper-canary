n.d(t, {
    GE: function () {
        return y;
    },
    GL: function () {
        return m;
    },
    Jd: function () {
        return b;
    },
    Nq: function () {
        return R;
    },
    Ol: function () {
        return A;
    },
    PJ: function () {
        return g;
    },
    T_: function () {
        return I;
    },
    V5: function () {
        return v;
    },
    ap: function () {
        return D;
    },
    bT: function () {
        return L;
    },
    dw: function () {
        return C;
    },
    ig: function () {
        return w;
    },
    kr: function () {
        return S;
    },
    n2: function () {
        return N;
    },
    q_: function () {
        return P;
    },
    qy: function () {
        return x;
    },
    vU: function () {
        return M;
    },
    yA: function () {
        return O;
    },
    yh: function () {
        return T;
    },
    zo: function () {
        return U;
    }
}),
    n(47120);
var r = n(164369),
    i = n(913527),
    a = n.n(i),
    s = n(884439),
    o = n(442837),
    l = n(876215),
    u = n(317381),
    c = n(835473),
    d = n(70956),
    _ = n(709054),
    E = n(719247),
    f = n(689938);
let h = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / d.Z.Millis.SECOND,
            i = Math.floor(r) % d.Z.Seconds.MINUTE,
            a = Math.floor(r / d.Z.Seconds.MINUTE) % d.Z.Seconds.MINUTE,
            s = Math.floor(r / d.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: a,
            hours: s,
            days: Math.floor(r / d.Z.Seconds.DAY)
        };
    },
    p = (e, t) => {
        let n = 'id' in e ? _.default.extractTimestamp(e.id) : e.start;
        return h({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    I = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = p(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    m = (e, t, n) => {
        let r = a()(n),
            i = a()(_.default.extractTimestamp(e.id)),
            s = r.diff(i, 's');
        if (s < d.Z.Seconds.MINUTE) return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({ count: s });
        if (s < d.Z.Seconds.HOUR) {
            let e = Math.round(s / d.Z.Seconds.MINUTE);
            return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({ count: e });
        }
        if (s < 12 * d.Z.Seconds.HOUR) {
            let e = Math.round(s / d.Z.Seconds.HOUR);
            return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({ count: e });
        } else if (s < 9 * d.Z.Seconds.DAY) {
            let e = Math.round(s / d.Z.Seconds.DAY);
            return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_DAYS_AGO.format({ count: e });
        } else if (s < 4 * d.Z.Seconds.WEEK) {
            let e = Math.round(s / (7 * d.Z.Seconds.DAY));
            return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({ count: e });
        }
        let o = Math.round(s / d.Z.Seconds.DAYS_30);
        return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MONTHS_AGO.format({ count: o });
    },
    T = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        return S(e) ? I(e, n) : m(e, t, n);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function S(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function A(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function N(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function O(e) {
    var t;
    return null === (t = g(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function R(e) {
    var t;
    return null === (t = g(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function v(e) {
    var t;
    return null === (t = g(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function C(e) {
    let t = g(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function y(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return f.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function D(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : f.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function L(e, t) {
    var n, r, i, a;
    let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        o = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != s && null != o
                ? f.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
                      count: s,
                      max: o
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function b(e) {
    return e.content_type === l.s.TOP_GAME;
}
function M(e) {
    var t;
    return null === (t = g(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function P(e) {
    let t = M(e);
    if (null == t || t < 3) return !1;
    let n = _.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * d.Z.Millis.HOUR) && !0;
}
function U(e) {
    let t = O(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / d.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON_TIME.format({ hours: n }),
              tooltipText: f.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({ hours: n })
          };
}
function w(e) {
    var t;
    return null === (t = g(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
function x(e) {
    let t = (0, o.e7)([E.Z], () => E.Z.getMatchingActivity(e)),
        [n, r] = (0, c.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]),
        i = (0, o.e7)([u.ZP], () => u.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id));
    return {
        activity: t,
        embeddedActivity: i,
        anyMatchingApplication: null != n ? n : r,
        activityApplication: n,
        fallbackApplication: r
    };
}
