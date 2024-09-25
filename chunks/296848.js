n.d(t, {
    AT: function () {
        return g;
    },
    GY: function () {
        return I;
    },
    R4: function () {
        return m;
    },
    oE: function () {
        return T;
    },
    yb: function () {
        return p;
    }
});
var r = n(47120);
var i = n(653041);
n(470079);
var a = n(512722),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    u = n(99945);
n(442837);
var c = n(821849),
    d = n(509545),
    _ = n(74538),
    E = n(981631),
    f = n(474936);
function h(e) {
    return e.items.map((e) => {
        let t = d.Z.get(e.planId);
        return o()(null != t, 'Unable to fetch plan'), t;
    });
}
function p(e) {
    return h(e).map((e) => e.skuId);
}
function m(e, t, n) {
    let r = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (e.type === E.NYc.PREMIUM && null == r) || (o()(null != r, 'Current subscription has no plan in group'), o()(!(r === f.Xh.PREMIUM_YEAR_TIER_1 && t === f.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), n.indexOf(r) < n.indexOf(t));
}
function I(e, t, n) {
    return !m(e, t, n);
}
function T(e, t) {
    let n = d.Z.get(e);
    if (null == n) {
        let n = f.GP[e];
        o()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let r = (0, _.Wz)(n.skuId);
        !d.Z.isFetchingForSKU(r) && (0, c.GZ)(r, t);
    }
    return n;
}
function g(e) {
    let t = Object.keys(u.T).filter((e) => isNaN(Number(e)));
    if (e.status !== E.O0b.PAUSED)
        return {
            durations: t,
            currentDaysPaused: 0
        };
    if (null == e.pauseEndsAt)
        return {
            durations: [],
            currentDaysPaused: 0
        };
    {
        let n = l()(e.currentPeriodStart),
            r = Math.round(l()(e.pauseEndsAt).diff(n, 'days', !0)),
            i = [];
        for (let e of t) u.T[e] > r && i.push(e);
        return {
            durations: i,
            currentDaysPaused: r
        };
    }
}
