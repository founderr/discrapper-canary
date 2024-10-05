n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(913527),
    o = n.n(r),
    c = n(873546),
    d = n(442837),
    u = n(481060),
    _ = n(568836),
    E = n(100527),
    I = n(906732),
    m = n(963249),
    T = n(594174),
    N = n(78839),
    h = n(55935),
    C = n(63063),
    p = n(74538),
    f = n(276444),
    g = n(790368),
    A = n(786397),
    S = n(474936),
    M = n(981631),
    x = n(689938),
    O = n(526387);
class R extends a.Component {
    renderTitle(e, t, n) {
        let { trialOffer: i } = this.props,
            a = T.default.getUser(i.user_id),
            s = null != a ? a.username : '???',
            l = T.default.getUser(i.referrer_id),
            r = null != l ? l.username : '???';
        if (e && void 0 === i.redeemed_at) return x.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({ username: s });
        if (t) return n ? x.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : x.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({ userName: r });
        return x.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
            senderUserName: r,
            recipientUserName: s
        });
    }
    renderBody(e, t, n) {
        let { trialOffer: i } = this.props;
        return e && !n && void 0 === i.redeemed_at ? x.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({ helpdeskArticle: C.Z.getArticleURL(M.BhN.REFERRAL_PROGRAM) }) : t ? null : x.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY;
    }
    renderActions(e, t, n) {
        let { trialOffer: a, currentUser: s, analyticsLocations: l } = this.props,
            r = {
                onClick: () => {
                    this.handleStartTrial(a, l);
                },
                color: u.Button.Colors.BRAND
            },
            o = s.id !== a.user_id || (0, p.I5)(s) || !s.verified || (0, A.B)(a),
            c = this.renderExpirationDate(e, t, n);
        return (
            (r.disabled = o),
            (0, i.jsxs)('div', {
                className: O.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.Button, {
                            ...r,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, m.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: S.Si.TIER_2,
                                    analyticsLocations: l,
                                    trialId: a.trial_id,
                                    referralTrialOfferId: a.id
                                });
                            },
                            children: x.Z.Messages.START_TRIAL
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: O.metadata,
                        children: c
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: i, trialEndsAt: a } = this.props;
        if (void 0 !== i.redeemed_at && !n && null !== a) return x.Z.Messages.TRIAL_EXPIRES.format({ date: (0, h.vc)(o()(a), 'LL') });
        if (e || void 0 === i.expires_at) return null;
        let s = o()(i.expires_at);
        if (t) return x.Z.Messages.EXPIRED_DATE.format({ date: (0, h.vc)(o()(s), 'LL') });
        let l = s.diff(o()(), 'h');
        if (l > 48) {
            let e = s.diff(o()(), 'd');
            return x.Z.Messages.EXPIRES_DAYS.format({ numDays: e });
        }
        if (l > 1) return x.Z.Messages.EXPIRES_HOURS.format({ numHours: l });
        let r = s.diff(o()(), 'minutes');
        return x.Z.Messages.EXPIRES_MINUTES.format({ numMinutes: r });
    }
    renderMedia(e) {
        return (0, i.jsx)('div', {
            className: l()({
                [O.referral]: !e,
                [O.birthdayReferral]: e
            })
        });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n, shouldShowBirthdayUX: a } = this.props,
            s = (0, A.B)(e),
            r = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: l()(O.tile, O.container),
            children: [
                (0, i.jsx)('div', {
                    className: O.media,
                    children: this.renderMedia(a)
                }),
                (0, i.jsxs)('div', {
                    className: O.description,
                    children: [
                        (0, i.jsx)(u.H, {
                            className: O.title,
                            children: this.renderTitle(n, s, r)
                        }),
                        (0, i.jsx)('div', {
                            className: O.tagline,
                            children: this.renderBody(n, s, r)
                        }),
                        (0, i.jsx)('div', {
                            className: O.actions,
                            children: this.renderActions(n, s, r)
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
                    subscriptionTier: S.Si.TIER_2,
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
function v(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: a, isResolving: s } = (0, d.cj)(
            [f.Z],
            () => ({
                trialOffer: n ? f.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && f.Z.isResolving(t)
            }),
            [n, t]
        ),
        l = T.default.getCurrentUser(),
        r = (0, d.e7)([T.default], () => null != a && (0, p.I5)(void 0 !== l && a.user_id === l.id ? l : T.default.getUser(a.user_id))),
        o = (0, d.e7)([N.ZP], () => {
            var e;
            return r ? (null === (e = N.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: u } = (0, I.ZP)(E.Z.SHARE_NITRO_EMBED),
        { enabled: m } = g.Z.useExperiment({ location: 'f4ff1d_1' }, { autoTrackExposure: !0 });
    return s
        ? (0, i.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != a && void 0 !== l
          ? (0, i.jsx)(R, {
                trialOffer: a,
                currentUser: l,
                recipientHasNitro: r,
                trialEndsAt: o,
                analyticsLocations: u,
                shouldShowBirthdayUX: m,
                ...e
            })
          : (0, i.jsx)('div', {
                className: O.invalidWrapper,
                children: (0, i.jsx)('div', { className: O.invalid })
            });
}
