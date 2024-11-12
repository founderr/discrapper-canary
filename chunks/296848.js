n.d(t, {
    AT: function () {
        return _;
    },
    GY: function () {
        return p;
    },
    R4: function () {
        return m;
    },
    oE: function () {
        return f;
    },
    yb: function () {
        return g;
    }
}),
    n(47120),
    n(653041),
    n(192379);
var i = n(512722),
    r = n.n(i),
    s = n(913527),
    a = n.n(s),
    l = n(99945);
n(442837);
var o = n(821849),
    c = n(509545),
    u = n(74538),
    d = n(981631),
    h = n(474936);
function g(e) {
    return e.items
        .map((e) => {
            let t = c.Z.get(e.planId);
            return r()(null != t, 'Unable to fetch plan'), t;
        })
        .map((e) => e.skuId);
}
function m(e, t, n) {
    let i = e.getCurrentSubscriptionPlanIdForGroup(n);
    return (e.type === d.NYc.PREMIUM && null == i) || (r()(null != i, 'Current subscription has no plan in group'), r()(!(i === h.Xh.PREMIUM_YEAR_TIER_1 && t === h.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), n.indexOf(i) < n.indexOf(t));
}
function p(e, t, n) {
    return !m(e, t, n);
}
function f(e, t) {
    let n = c.Z.get(e);
    if (null == n) {
        let n = h.GP[e];
        r()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
        let i = (0, u.Wz)(n.skuId);
        !c.Z.isFetchingForSKU(i) && (0, o.GZ)(i, t);
    }
    return n;
}
function _(e) {
    let t = Object.keys(l.T).filter((e) => isNaN(Number(e)));
    if (e.status !== d.O0b.PAUSED)
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
        let n = a()(e.currentPeriodStart),
            i = Math.round(a()(e.pauseEndsAt).diff(n, 'days', !0)),
            r = [];
        for (let e of t) l.T[e] > i && r.push(e);
        return {
            durations: r,
            currentDaysPaused: i
        };
    }
}
