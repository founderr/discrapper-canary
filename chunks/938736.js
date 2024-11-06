n.d(t, {
    $s: function () {
        return I;
    },
    AV: function () {
        return f;
    },
    Hg: function () {
        return S;
    },
    Kn: function () {
        return N;
    },
    Nq: function () {
        return g;
    },
    Q_: function () {
        return m;
    },
    TW: function () {
        return h;
    },
    bD: function () {
        return _;
    },
    pn: function () {
        return E;
    },
    uv: function () {
        return C;
    },
    vx: function () {
        return x;
    },
    wG: function () {
        return T;
    }
});
var i = n(442837),
    r = n(704215),
    a = n(605236),
    s = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(898997),
    d = n(981631),
    u = n(388032);
let g = '40%',
    m = 3,
    f = 8,
    p = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: r } = e;
        return t
            ? u.intl.format(u.t['3OYZMT'], { helpdeskArticle: r })
            : n
              ? u.intl.format(u.t.EkWiZm, {
                    numFriends: m - i,
                    helpdeskArticle: r
                })
              : u.intl.format(u.t.FjrXCg, {
                    numFriends: m,
                    helpdeskArticle: r
                });
    },
    _ = (e) => {
        let { enabled: t, eligibleToFetch: n } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, c.B)(e, !n);
        let r = (0, i.e7)([s.Z], () => s.Z.getIsEligibleToSendReferrals());
        return t && r;
    },
    h = (e) => {
        let t = C(e);
        return null != t && t !== d.g2L.NOT_ELIGIBLE;
    },
    E = (e) => {
        let t = h(e),
            n = _('PremiumManagementSettings'),
            r = (0, i.e7)([s.Z], () => s.Z.getRecipientStatus());
        if (!t) return !1;
        if (!n) return !!(r.size > 0) || !1;
        return !0;
    },
    x = (e) => {
        let t = b(e),
            n = (0, a.wE)(r.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    b = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([s.Z], () => s.Z.getIsSenderEligibleForIncentive());
        return t && n && r;
    },
    C = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            r = (0, i.e7)([s.Z], () => s.Z.getIsFetchingReferralIncentiveEligibility()),
            a = (0, i.e7)([s.Z], () => s.Z.getSenderIncentiveState());
        return r ? d.g2L.NOT_ELIGIBLE : n && t ? a : d.g2L.NOT_ELIGIBLE;
    },
    v = (e) => {
        let t = C(e);
        return t === d.g2L.COOLDOWN || t === d.g2L.UNAPPLIED || t === d.g2L.QUALIFIED;
    },
    T = (e) => {
        let t = v(e),
            n = (0, a.wE)(r.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    N = (e) => {
        let t = h(e),
            n = _(e),
            i = (0, a.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !i;
    },
    I = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: i } = e;
        switch (t) {
            case d.g2L.NOT_ELIGIBLE:
                return n ? u.intl.string(u.t.M47CJS) : u.intl.string(u.t.USo4s7);
            case d.g2L.ELIGIBLE:
                if (i.sent < 2) return u.intl.formatToPlainString(u.t.md2GU1, { discountRate: g });
                if (i.redeemed === m) return u.intl.string(u.t.SRJkUV);
                return u.intl.formatToPlainString(u.t.O8mswM, { discountRate: g });
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                return i.redeemed === m ? u.intl.string(u.t.SRJkUV) : u.intl.string(u.t.MoKnzc);
        }
    },
    S = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: i, isWithinCountdownRange: r } = e;
        switch (n) {
            case d.g2L.NOT_ELIGIBLE:
                return p({
                    hasSentAll: i.sent >= m,
                    hasSentAtLeastOne: i.sent >= 1,
                    numSentUsers: i.sent,
                    helpdeskArticle: t
                });
            case d.g2L.ELIGIBLE:
                let a = {
                    discountRate: g,
                    learnMoreLink: t,
                    subscriptionInterval: u.intl.string(u.t.FPybU1)
                };
                if (i.redeemed <= 1) return u.intl.format(u.t.nysttb, a);
                return u.intl.format(u.t.nHuzUF, a);
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                if (i.redeemed < m) return u.intl.format(u.t.HGO89v, { learnMoreLink: t });
                if (!r)
                    return u.intl.format(u.t.iGlQKi, {
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: u.intl.formatToPlainString(u.t['7r7VxM'], { time: 6 })
                    });
                return u.intl.format(u.t.Kq6hc3, { learnMoreLink: t });
        }
    };
