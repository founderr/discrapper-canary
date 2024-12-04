n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(442837),
    i = n(317381),
    a = n(835473),
    s = n(719247);
function o(e) {
    let t = (0, r.e7)([s.Z], () => s.Z.getMatchingActivity(e)),
        [n, o] = (0, a.Z)([null == t ? void 0 : t.application_id, 'application_id' in e.extra ? e.extra.application_id : void 0]),
        l = (0, r.e7)([i.ZP], () => i.ZP.getEmbeddedActivityForUserId(e.author_id, null == n ? void 0 : n.id));
    return {
        activity: t,
        embeddedActivity: l,
        anyMatchingApplication: null != n ? n : o,
        activityApplication: n,
        fallbackApplication: o
    };
}
