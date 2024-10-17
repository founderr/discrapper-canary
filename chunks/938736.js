n.d(t, {
    $s: function () {
        return S;
    },
    AV: function () {
        return T;
    },
    Hg: function () {
        return h;
    },
    Kn: function () {
        return M;
    },
    Nq: function () {
        return E;
    },
    Q_: function () {
        return u;
    },
    TW: function () {
        return g;
    },
    bD: function () {
        return R;
    },
    pn: function () {
        return N;
    },
    uv: function () {
        return A;
    },
    vx: function () {
        return m;
    },
    wG: function () {
        return p;
    }
});
var s = n(442837),
    a = n(704215),
    r = n(605236),
    i = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(898997),
    _ = n(981631),
    d = n(689938);
let E = '40%',
    u = 3,
    T = 8,
    I = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: s, helpdeskArticle: a } = e;
        return t
            ? d.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({ helpdeskArticle: a })
            : n
              ? d.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
                    numFriends: u - s,
                    helpdeskArticle: a
                })
              : d.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
                    numFriends: u,
                    helpdeskArticle: a
                });
    },
    R = (e) => {
        let { enabled: t, eligibleToFetch: n } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, c.B)(e, !n);
        let a = (0, s.e7)([i.Z], () => i.Z.getIsEligibleToSendReferrals());
        return t && a;
    },
    g = (e) => {
        let t = A(e);
        return null != t && t !== _.g2L.NOT_ELIGIBLE;
    },
    N = (e) => {
        let t = g(e),
            n = R('PremiumManagementSettings'),
            a = (0, s.e7)([i.Z], () => i.Z.getRecipientStatus());
        if (!t) return !1;
        if (!n) return !!(a.size > 0) || !1;
        return !0;
    },
    m = (e) => {
        let t = C(e),
            n = (0, r.wE)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    C = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            a = (0, s.e7)([i.Z], () => i.Z.getIsSenderEligibleForIncentive());
        return t && n && a;
    },
    A = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            a = (0, s.e7)([i.Z], () => i.Z.getIsFetchingReferralIncentiveEligibility()),
            r = (0, s.e7)([i.Z], () => i.Z.getSenderIncentiveState());
        return a ? _.g2L.NOT_ELIGIBLE : n && t ? r : _.g2L.NOT_ELIGIBLE;
    },
    f = (e) => {
        let t = A(e);
        return t === _.g2L.COOLDOWN || t === _.g2L.UNAPPLIED || t === _.g2L.QUALIFIED;
    },
    p = (e) => {
        let t = f(e),
            n = (0, r.wE)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    M = (e) => {
        let t = g(e),
            n = R(e),
            s = (0, r.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !s;
    },
    S = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: s } = e;
        switch (t) {
            case _.g2L.NOT_ELIGIBLE:
                return n ? d.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : d.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS;
            case _.g2L.ELIGIBLE:
                if (s.sent < 2) return d.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({ discountRate: E });
                if (s.redeemed === u) return d.Z.Messages.REFERRAL_INCENTIVE_NITRO_FRIEND_PASSES_INCOMING;
                return d.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_KEEP_GOING.format({ discountRate: E });
            case _.g2L.QUALIFIED:
            case _.g2L.COOLDOWN:
            case _.g2L.UNAPPLIED:
                return s.redeemed === u ? d.Z.Messages.REFERRAL_INCENTIVE_NITRO_FRIEND_PASSES_INCOMING : d.Z.Messages.REFERRAL_INCENTIVE_DISCOUNT_UNLOCKED;
        }
    },
    h = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: s, isWithinCountdownRange: a } = e;
        switch (n) {
            case _.g2L.NOT_ELIGIBLE:
                return I({
                    hasSentAll: s.sent >= u,
                    hasSentAtLeastOne: s.sent >= 1,
                    numSentUsers: s.sent,
                    helpdeskArticle: t
                });
            case _.g2L.ELIGIBLE:
                let r = {
                    discountRate: E,
                    learnMoreLink: t,
                    subscriptionInterval: d.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                };
                if (s.redeemed <= 1) return d.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_CONVERT_GET_INCENTIVE.format(r);
                return d.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_REDEEMED.format(r);
            case _.g2L.QUALIFIED:
            case _.g2L.COOLDOWN:
            case _.g2L.UNAPPLIED:
                if (s.redeemed < u) return d.Z.Messages.REFERRAL_INCENTIVE_KEEP_SHARING_TO_EARN_ANOTHER_DISCOUNT.format({ learnMoreLink: t });
                if (!a)
                    return d.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASS_COUNTDOWN_HAS_BEGUN.format({
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: d.Z.Messages.GIFT_CONFIRMATION_NITRO_TIME_FRAME_MONTHS.format({ time: 6 })
                    });
                return d.Z.Messages.REFERRAL_INCENTIVE_MORE_FRIEND_PASSES_ALMOST_HERE.format({ learnMoreLink: t });
        }
    };
