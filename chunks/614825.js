n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(873546),
    d = n(442837),
    u = n(481060),
    m = n(568836),
    h = n(100527),
    f = n(906732),
    p = n(963249),
    _ = n(594174),
    g = n(78839),
    E = n(55935),
    C = n(63063),
    I = n(74538),
    x = n(276444),
    N = n(790368),
    v = n(786397),
    T = n(474936),
    S = n(981631),
    A = n(388032),
    b = n(806320);
class j extends r.Component {
    renderTitle(e, t, n) {
        let { trialOffer: i } = this.props,
            r = _.default.getUser(i.user_id),
            l = null != r ? r.username : '???',
            a = _.default.getUser(i.referrer_id),
            o = null != a ? a.username : '???';
        if (e && void 0 === i.redeemed_at) return A.intl.formatToPlainString(A.t.Mptau7, { username: l });
        if (t) return n ? A.intl.string(A.t['9SNdf3']) : A.intl.formatToPlainString(A.t['H0+MxM'], { userName: o });
        return A.intl.formatToPlainString(A.t.IiWKws, {
            senderUserName: o,
            recipientUserName: l
        });
    }
    renderBody(e, t, n) {
        let { trialOffer: i } = this.props;
        return e && !n && void 0 === i.redeemed_at ? A.intl.format(A.t.LwCwT0, { helpdeskArticle: C.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM) }) : t ? null : A.intl.string(A.t.lQLlOT);
    }
    renderActions(e, t, n) {
        let { trialOffer: r, currentUser: l, analyticsLocations: a } = this.props,
            o = {
                onClick: () => {
                    this.handleStartTrial(r, a);
                },
                color: u.Button.Colors.BRAND
            },
            s = l.id !== r.user_id || (0, I.I5)(l) || !l.verified || (0, v.B)(r),
            c = this.renderExpirationDate(e, t, n);
        return (
            (o.disabled = s),
            (0, i.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.Button, {
                            ...o,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, p.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: T.Si.TIER_2,
                                    analyticsLocations: a,
                                    trialId: r.trial_id,
                                    referralTrialOfferId: r.id
                                });
                            },
                            children: A.intl.string(A.t.O0etsL)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: b.metadata,
                        children: c
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: i, trialEndsAt: r } = this.props;
        if (void 0 !== i.redeemed_at && !n && null !== r) return A.intl.formatToPlainString(A.t.nP0ivb, { date: (0, E.vc)(s()(r), 'LL') });
        if (e || void 0 === i.expires_at) return null;
        let l = s()(i.expires_at);
        if (t) return A.intl.formatToPlainString(A.t.PuSHfX, { date: (0, E.vc)(s()(l), 'LL') });
        let a = l.diff(s()(), 'h');
        if (a > 48) {
            let e = l.diff(s()(), 'd');
            return A.intl.formatToPlainString(A.t['g9s+dH'], { numDays: e });
        }
        if (a > 1) return A.intl.formatToPlainString(A.t.k9v339, { numHours: a });
        let o = l.diff(s()(), 'minutes');
        return A.intl.formatToPlainString(A.t['/d0GmZ'], { numMinutes: o });
    }
    renderMedia(e) {
        return (0, i.jsx)('div', {
            className: a()({
                [b.referral]: !e,
                [b.birthdayReferral]: e
            })
        });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n, shouldShowBirthdayUX: r } = this.props,
            l = (0, v.B)(e),
            o = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: a()(b.tile, b.container),
            children: [
                (0, i.jsx)('div', {
                    className: b.media,
                    children: this.renderMedia(r)
                }),
                (0, i.jsxs)('div', {
                    className: b.description,
                    children: [
                        (0, i.jsx)(u.H, {
                            className: b.title,
                            children: this.renderTitle(n, l, o)
                        }),
                        (0, i.jsx)('div', {
                            className: b.tagline,
                            children: this.renderBody(n, l, o)
                        }),
                        (0, i.jsx)('div', {
                            className: b.actions,
                            children: this.renderActions(n, l, o)
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
                (0, p.Z)({
                    initialPlanId: null,
                    subscriptionTier: T.Si.TIER_2,
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
function Z(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: r, isResolving: l } = (0, d.cj)(
            [x.Z],
            () => ({
                trialOffer: n ? x.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && x.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = _.default.getCurrentUser(),
        o = (0, d.e7)([_.default], () => null != r && (0, I.I5)(void 0 !== a && r.user_id === a.id ? a : _.default.getUser(r.user_id))),
        s = (0, d.e7)([g.ZP], () => {
            var e;
            return o ? (null === (e = g.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: u } = (0, f.ZP)(h.Z.SHARE_NITRO_EMBED),
        { enabled: p } = N.Z.useExperiment({ location: 'f4ff1d_1' }, { autoTrackExposure: !0 });
    return l
        ? (0, i.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != r && void 0 !== a
          ? (0, i.jsx)(j, {
                trialOffer: r,
                currentUser: a,
                recipientHasNitro: o,
                trialEndsAt: s,
                analyticsLocations: u,
                shouldShowBirthdayUX: p,
                ...e
            })
          : (0, i.jsx)('div', {
                className: b.invalidWrapper,
                children: (0, i.jsx)('div', { className: b.invalid })
            });
}
