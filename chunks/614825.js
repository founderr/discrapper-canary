n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    _ = n(568836),
    E = n(100527),
    I = n(906732),
    m = n(963249),
    f = n(594174),
    T = n(78839),
    h = n(55935),
    N = n(63063),
    p = n(74538),
    C = n(276444),
    g = n(790368),
    S = n(786397),
    A = n(474936),
    x = n(981631),
    R = n(689938),
    v = n(526387);
class O extends a.Component {
    renderTitle(e, t, n) {
        let { trialOffer: i } = this.props,
            a = f.default.getUser(i.user_id),
            s = null != a ? a.username : '???',
            r = f.default.getUser(i.referrer_id),
            l = null != r ? r.username : '???';
        if (e && void 0 === i.redeemed_at) return R.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({ username: s });
        if (t) return n ? R.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : R.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({ userName: l });
        return R.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
            senderUserName: l,
            recipientUserName: s
        });
    }
    renderBody(e, t, n) {
        let { trialOffer: i } = this.props;
        return e && !n && void 0 === i.redeemed_at ? R.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({ helpdeskArticle: N.Z.getArticleURL(x.BhN.REFERRAL_PROGRAM) }) : t ? null : R.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY;
    }
    renderActions(e, t, n) {
        let { trialOffer: a, currentUser: s, analyticsLocations: r } = this.props,
            l = {
                onClick: () => {
                    this.handleStartTrial(a, r);
                },
                color: d.Button.Colors.BRAND
            },
            o = s.id !== a.user_id || (0, p.I5)(s) || !s.verified || (0, S.B)(a),
            c = this.renderExpirationDate(e, t, n);
        return (
            (l.disabled = o),
            (0, i.jsxs)('div', {
                className: v.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Button, {
                            ...l,
                            size: d.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, m.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: A.Si.TIER_2,
                                    analyticsLocations: r,
                                    trialId: a.trial_id,
                                    referralTrialOfferId: a.id
                                });
                            },
                            children: R.Z.Messages.START_TRIAL
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.metadata,
                        children: c
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: i, trialEndsAt: a } = this.props;
        if (void 0 !== i.redeemed_at && !n && null !== a) return R.Z.Messages.TRIAL_EXPIRES.format({ date: (0, h.vc)(o()(a), 'LL') });
        if (e || void 0 === i.expires_at) return null;
        let s = o()(i.expires_at);
        if (t) return R.Z.Messages.EXPIRED_DATE.format({ date: (0, h.vc)(o()(s), 'LL') });
        let r = s.diff(o()(), 'h');
        if (r > 48) {
            let e = s.diff(o()(), 'd');
            return R.Z.Messages.EXPIRES_DAYS.format({ numDays: e });
        }
        if (r > 1) return R.Z.Messages.EXPIRES_HOURS.format({ numHours: r });
        let l = s.diff(o()(), 'minutes');
        return R.Z.Messages.EXPIRES_MINUTES.format({ numMinutes: l });
    }
    renderMedia(e) {
        return (0, i.jsx)('div', {
            className: r()({
                [v.referral]: !e,
                [v.birthdayReferral]: e
            })
        });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n, shouldShowBirthdayUX: a } = this.props,
            s = (0, S.B)(e),
            l = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: r()(v.tile, v.container),
            children: [
                (0, i.jsx)('div', {
                    className: v.media,
                    children: this.renderMedia(a)
                }),
                (0, i.jsxs)('div', {
                    className: v.description,
                    children: [
                        (0, i.jsx)(d.H, {
                            className: v.title,
                            children: this.renderTitle(n, s, l)
                        }),
                        (0, i.jsx)('div', {
                            className: v.tagline,
                            children: this.renderBody(n, s, l)
                        }),
                        (0, i.jsx)('div', {
                            className: v.actions,
                            children: this.renderActions(n, s, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleStartTrial'),
            (i = (e, t) => {
                (0, m.Z)({
                    initialPlanId: null,
                    subscriptionTier: A.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function M(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: a, isResolving: s } = (0, u.cj)(
            [C.Z],
            () => ({
                trialOffer: n ? C.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && C.Z.isResolving(t)
            }),
            [n, t]
        ),
        r = f.default.getCurrentUser(),
        l = (0, u.e7)([f.default], () => null != a && (0, p.I5)(void 0 !== r && a.user_id === r.id ? r : f.default.getUser(a.user_id))),
        o = (0, u.e7)([T.ZP], () => {
            var e;
            return l ? (null === (e = T.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, I.ZP)(E.Z.SHARE_NITRO_EMBED),
        { enabled: m } = g.Z.useExperiment({ location: 'f4ff1d_1' }, { autoTrackExposure: !0 });
    return s
        ? (0, i.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != a && void 0 !== r
          ? (0, i.jsx)(O, {
                trialOffer: a,
                currentUser: r,
                recipientHasNitro: l,
                trialEndsAt: o,
                analyticsLocations: d,
                shouldShowBirthdayUX: m,
                ...e
            })
          : (0, i.jsx)('div', {
                className: v.invalidWrapper,
                children: (0, i.jsx)('div', { className: v.invalid })
            });
}
