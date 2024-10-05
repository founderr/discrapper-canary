E.d(_, {
    E: function () {
        return a;
    }
});
var s = E(442837),
    n = E(650774),
    t = E(206583),
    r = E(981631);
function a(e) {
    return (0, s.e7)([n.Z], () => {
        if (null == e) return;
        let _ = n.Z.getMemberCount(e.id),
            E = e.hasFeature(r.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
            s = e.hasFeature(r.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
            a = null != _ && _ < t.k4;
        return E || s ? E : a;
    });
}
