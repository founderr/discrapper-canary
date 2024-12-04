n.d(t, {
    GE: function () {
        return N;
    },
    GL: function () {
        return h;
    },
    Jd: function () {
        return O;
    },
    Jg: function () {
        return T;
    },
    Nq: function () {
        return S;
    },
    Ol: function () {
        return v;
    },
    PJ: function () {
        return g;
    },
    T_: function () {
        return _;
    },
    V5: function () {
        return y;
    },
    ap: function () {
        return C;
    },
    bT: function () {
        return R;
    },
    dw: function () {
        return A;
    },
    ig: function () {
        return w;
    },
    kr: function () {
        return E;
    },
    n2: function () {
        return I;
    },
    q_: function () {
        return L;
    },
    vU: function () {
        return D;
    },
    yA: function () {
        return b;
    },
    yh: function () {
        return m;
    },
    zo: function () {
        return x;
    }
});
var r = n(164369),
    i = n(913527),
    a = n.n(i),
    s = n(884439),
    o = n(876215),
    l = n(70956),
    u = n(709054),
    c = n(388032);
let d = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / l.Z.Millis.SECOND,
            i = Math.floor(r) % l.Z.Seconds.MINUTE,
            a = Math.floor(r / l.Z.Seconds.MINUTE) % l.Z.Seconds.MINUTE,
            s = Math.floor(r / l.Z.Seconds.HOUR);
        return {
            seconds: i,
            minutes: a,
            hours: s,
            days: Math.floor(r / l.Z.Seconds.DAY)
        };
    },
    f = (e, t) => {
        let n = 'id' in e ? u.default.extractTimestamp(e.id) : e.start;
        return d({
            start: n,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        });
    },
    _ = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = f(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return c.intl.formatToPlainString(c.t['l5PP//'], {
            hours: i,
            minutes: i > 0 ? a(r) : r,
            seconds: a(n)
        });
    },
    p = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.EOrEJi, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.LRNgHh, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.raJpz8, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.KkvKho, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t.sDtO6O, { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.ITymoq, { count: e })
    },
    h = function (e, t, n) {
        let { formatSet: r = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            s = a()(u.default.extractTimestamp(e.id)),
            o = i.diff(s, 's');
        if (o < l.Z.Seconds.MINUTE) return r.secondsAgo(o);
        if (o < l.Z.Seconds.HOUR) {
            let e = Math.round(o / l.Z.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (o < 12 * l.Z.Seconds.HOUR) {
            let e = Math.round(o / l.Z.Seconds.HOUR);
            return r.hoursAgo(e);
        } else if (o < 9 * l.Z.Seconds.DAY) {
            let e = Math.round(o / l.Z.Seconds.DAY);
            return r.daysAgo(e);
        } else if (o < 4 * l.Z.Seconds.WEEK) {
            let e = Math.round(o / (7 * l.Z.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let c = Math.round(o / l.Z.Seconds.DAYS_30);
        return r.monthsAgo(c);
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return E(e) ? _(e, n) : h(e, t, n, r);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function E(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function v(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function I(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function T(e) {
    return E(e) && !I(e);
}
function b(e) {
    var t;
    return null === (t = g(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function S(e) {
    var t;
    return null === (t = g(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function y(e) {
    var t;
    return null === (t = g(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function A(e) {
    let t = g(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function N(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return c.intl.formatToPlainString(c.t.NXBtjI, {
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function C(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : c.intl.formatToPlainString(c.t['ijVm6+'], {
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function R(e, t) {
    var n, r, i, a;
    let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
        o = null !== (a = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== a ? a : void 0,
        l =
            null != s && null != o
                ? c.intl.formatToPlainString(c.t.wmUSi4, {
                      count: s,
                      max: o
                  })
                : void 0;
    return null != l && null != e ? ''.concat(e, ' (').concat(l, ')') : null != e ? e : l;
}
function O(e) {
    return e.content_type === o.s.TOP_GAME;
}
function D(e) {
    var t;
    return null === (t = g(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function L(e) {
    let t = D(e);
    if (null == t || t < 3) return !1;
    let n = u.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.Z.Millis.HOUR) && !0;
}
function x(e) {
    let t = b(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / l.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: c.intl.formatToPlainString(c.t.vZaMen, { hours: n }),
              tooltipText: c.intl.formatToPlainString(c.t['S5F48/'], { hours: n })
          };
}
function w(e) {
    var t;
    return null === (t = g(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
