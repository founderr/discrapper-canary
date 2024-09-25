n.d(t, {
    Z: function () {
        return M;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(873546),
    d = n(442837),
    _ = n(481060),
    E = n(568836),
    f = n(100527),
    h = n(906732),
    p = n(963249),
    m = n(594174),
    I = n(78839),
    T = n(55935),
    g = n(63063),
    S = n(74538),
    A = n(276444),
    v = n(790368),
    N = n(786397),
    O = n(474936),
    R = n(981631),
    C = n(689938),
    y = n(526387);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let L = '???';
class D extends a.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = m.default.getUser(r.user_id),
            a = null != i ? i.username : L,
            o = m.default.getUser(r.referrer_id),
            s = null != o ? o.username : L;
        if (e && void 0 === r.redeemed_at) return C.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({ username: a });
        if (t) return n ? C.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : C.Z.Messages.REFERRAL_PROGRAM_EMBED_TIRAL_EXPIRED.format({ userName: s });
        return C.Z.Messages.REFERRAL_PROGRAM_EMBED_HEADER.format({
            senderUserName: s,
            recipientUserName: a
        });
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        return e && !n && void 0 === r.redeemed_at ? C.Z.Messages.REFERRAL_PROGRAM_LEARN_MORE_ABOUT_SHARING.format({ helpdeskArticle: g.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM) }) : t ? null : C.Z.Messages.REFERRAL_PROGRAM_EMBED_BODY;
    }
    renderActions(e, t, n) {
        let { trialOffer: r, currentUser: a, analyticsLocations: o } = this.props,
            s = {
                onClick: () => {
                    this.handleStartTrial(r, o);
                },
                color: _.Button.Colors.BRAND
            },
            l = a.id !== r.user_id || (0, S.I5)(a) || !a.verified || (0, N.B)(r),
            u = this.renderExpirationDate(e, t, n);
        return (
            (s.disabled = l),
            (0, i.jsxs)('div', {
                className: y.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(_.Button, {
                            ...s,
                            size: _.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, p.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: O.Si.TIER_2,
                                    analyticsLocations: o,
                                    trialId: r.trial_id,
                                    referralTrialOfferId: r.id
                                });
                            },
                            children: C.Z.Messages.START_TRIAL
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: y.metadata,
                        children: u
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return C.Z.Messages.TRIAL_EXPIRES.format({ date: (0, T.vc)(u()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let a = u()(r.expires_at);
        if (t) return C.Z.Messages.EXPIRED_DATE.format({ date: (0, T.vc)(u()(a), 'LL') });
        let o = a.diff(u()(), 'h');
        if (o > 48) {
            let e = a.diff(u()(), 'd');
            return C.Z.Messages.EXPIRES_DAYS.format({ numDays: e });
        }
        if (o > 1) return C.Z.Messages.EXPIRES_HOURS.format({ numHours: o });
        let s = a.diff(u()(), 'minutes');
        return C.Z.Messages.EXPIRES_MINUTES.format({ numMinutes: s });
    }
    renderMedia(e) {
        return (0, i.jsx)('div', {
            className: s()({
                [y.referral]: !e,
                [y.birthdayReferral]: e
            })
        });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n, shouldShowBirthdayUX: r } = this.props,
            a = (0, N.B)(e),
            o = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: s()(y.tile, y.container),
            children: [
                (0, i.jsx)('div', {
                    className: y.media,
                    children: this.renderMedia(r)
                }),
                (0, i.jsxs)('div', {
                    className: y.description,
                    children: [
                        (0, i.jsx)(_.H, {
                            className: y.title,
                            children: this.renderTitle(n, a, o)
                        }),
                        (0, i.jsx)('div', {
                            className: y.tagline,
                            children: this.renderBody(n, a, o)
                        }),
                        (0, i.jsx)('div', {
                            className: y.actions,
                            children: this.renderActions(n, a, o)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleStartTrial', (e, t) => {
                (0, p.Z)({
                    initialPlanId: null,
                    subscriptionTier: O.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            });
    }
}
function M(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: r, isResolving: a } = (0, d.cj)(
            [A.Z],
            () => ({
                trialOffer: n ? A.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && A.Z.isResolving(t)
            }),
            [n, t]
        ),
        o = m.default.getCurrentUser(),
        s = (0, d.e7)([m.default], () => null != r && (0, S.I5)(void 0 !== o && r.user_id === o.id ? o : m.default.getUser(r.user_id))),
        l = (0, d.e7)([I.ZP], () => {
            var e;
            return s ? (null === (e = I.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: u } = (0, h.ZP)(f.Z.SHARE_NITRO_EMBED),
        { enabled: _ } = v.Z.useExperiment({ location: 'f4ff1d_1' }, { autoTrackExposure: !0 });
    return a
        ? (0, i.jsx)(E.OR, { isHorizontal: !c.tq })
        : n && null != r && void 0 !== o
          ? (0, i.jsx)(D, {
                trialOffer: r,
                currentUser: o,
                recipientHasNitro: s,
                trialEndsAt: l,
                analyticsLocations: u,
                shouldShowBirthdayUX: _,
                ...e
            })
          : (0, i.jsx)('div', {
                className: y.invalidWrapper,
                children: (0, i.jsx)('div', { className: y.invalid })
            });
}
