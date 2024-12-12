r.d(n, {
    Z: function () {
        return o;
    },
    t: function () {
        return l;
    }
});
var i = r(442837),
    a = r(160404),
    s = r(981631);
function o(e) {
    return (
        (0, i.e7)([a.Z], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let n = a.Z.isFullServerPreview(e.id),
                r = a.Z.isOnboardingEnabled(e.id);
            return n && r;
        }) || (null == e ? void 0 : e.hasFeature(s.oNc.GUILD_ONBOARDING_HAS_PROMPTS))
    );
}
function l(e) {
    if (null == e) return !1;
    let n = a.Z.isFullServerPreview(e.id),
        r = a.Z.isOnboardingEnabled(e.id);
    return (n && r) || e.hasFeature(s.oNc.GUILD_ONBOARDING_HAS_PROMPTS);
}
