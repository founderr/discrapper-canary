n.d(t, {
    r: function () {
        return c;
    }
});
var i = n(355467),
    a = n(78839),
    s = n(295226),
    r = n(937579),
    l = n(533990),
    o = n(474936);
async function c(e) {
    !a.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (await (0, i.ou)());
    let t = a.ZP.getMostRecentPremiumTypeSubscription(),
        n = l.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).isFollowup;
    if ((null == t ? void 0 : t.trialId) != null && o.h8.includes(t.trialId)) {
        if ((null == e && (await (0, r.T)()), null != s.Z.getUserTrialOffer(o.Rt))) return o.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL;
        if (null != t && !n) return o.cd.REVERSE_TRIAL_ENDED_UPSELL;
    }
}
