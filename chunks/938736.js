s.d(t, {
    $s: function () {
        return O;
    },
    AV: function () {
        return x;
    },
    Hg: function () {
        return T;
    },
    Kn: function () {
        return A;
    },
    Nq: function () {
        return p;
    },
    Q_: function () {
        return f;
    },
    TW: function () {
        return _;
    },
    bD: function () {
        return g;
    },
    pn: function () {
        return h;
    },
    uv: function () {
        return v;
    },
    vx: function () {
        return m;
    },
    wG: function () {
        return E;
    }
});
var n = s(442837),
    r = s(704215),
    i = s(605236),
    o = s(276444),
    a = s(822070),
    l = s(520540),
    c = s(898997),
    d = s(981631),
    u = s(388032);
let p = '40%',
    f = 3,
    x = 8,
    C = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: s, numSentUsers: n, helpdeskArticle: r } = e;
        return t
            ? u.intl.format(u.t['3OYZMT'], { helpdeskArticle: r })
            : s
              ? u.intl.format(u.t.EkWiZm, {
                    numFriends: f - n,
                    helpdeskArticle: r
                })
              : u.intl.format(u.t.FjrXCg, {
                    numFriends: f,
                    helpdeskArticle: r
                });
    },
    g = (e) => {
        let { enabled: t, eligibleToFetch: s } = l.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, c.B)(e, !s);
        let r = (0, n.e7)([o.Z], () => o.Z.getIsEligibleToSendReferrals());
        return t && r;
    },
    _ = (e) => {
        let t = v(e);
        return null != t && t !== d.g2L.NOT_ELIGIBLE;
    },
    h = (e) => {
        let t = _(e),
            s = g('PremiumManagementSettings'),
            r = (0, n.e7)([o.Z], () => o.Z.getRecipientStatus());
        if (!t) return !1;
        if (!s) return !!(r.size > 0) || !1;
        return !0;
    },
    m = (e) => {
        let t = L(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !s;
    },
    L = (e) => {
        let { enabled: t } = l.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: s } = a.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, n.e7)([o.Z], () => o.Z.getIsSenderEligibleForIncentive());
        return t && s && r;
    },
    v = (e) => {
        let { enabled: t } = l.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: s } = a.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, n.e7)([o.Z], () => o.Z.getIsFetchingReferralIncentiveEligibility()),
            i = (0, n.e7)([o.Z], () => o.Z.getSenderIncentiveState());
        return r ? d.g2L.NOT_ELIGIBLE : s && t ? i : d.g2L.NOT_ELIGIBLE;
    },
    j = (e) => {
        let t = v(e);
        return t === d.g2L.COOLDOWN || t === d.g2L.UNAPPLIED || t === d.g2L.QUALIFIED;
    },
    E = (e) => {
        let t = j(e),
            s = (0, i.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !s;
    },
    A = (e) => {
        let t = _(e),
            s = g(e),
            n = (0, i.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && s && !n;
    },
    O = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: s, referralsStatuses: n } = e;
        switch (t) {
            case d.g2L.NOT_ELIGIBLE:
                return s ? u.intl.string(u.t.M47CJS) : u.intl.string(u.t.USo4s7);
            case d.g2L.ELIGIBLE:
                if (n.sent < 2) return u.intl.formatToPlainString(u.t.md2GU1, { discountRate: p });
                if (n.redeemed === f) return u.intl.string(u.t.SRJkUV);
                return u.intl.formatToPlainString(u.t.O8mswM, { discountRate: p });
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                return n.redeemed === f ? u.intl.string(u.t.SRJkUV) : u.intl.string(u.t.MoKnzc);
        }
    },
    T = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: s, referralsStatuses: n, isWithinCountdownRange: r } = e;
        switch (s) {
            case d.g2L.NOT_ELIGIBLE:
                return C({
                    hasSentAll: n.sent >= f,
                    hasSentAtLeastOne: n.sent >= 1,
                    numSentUsers: n.sent,
                    helpdeskArticle: t
                });
            case d.g2L.ELIGIBLE:
                let i = {
                    discountRate: p,
                    learnMoreLink: t,
                    subscriptionInterval: u.intl.string(u.t.FPybU1)
                };
                if (n.redeemed <= 1) return u.intl.format(u.t.nysttb, i);
                return u.intl.format(u.t.nHuzUF, i);
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                if (n.redeemed < f) return u.intl.format(u.t.HGO89v, { learnMoreLink: t });
                if (!r)
                    return u.intl.format(u.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: u.intl.formatToPlainString(u.t['7r7VxM'], { time: 6 })
                    });
                return u.intl.format(u.t.Kq6hc3, { learnMoreLink: t });
        }
    };
