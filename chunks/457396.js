n.d(t, {
    g: function () {
        return X;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(91192),
    d = n(442837),
    u = n(704215),
    h = n(481060),
    m = n(515753),
    p = n(774078),
    g = n(927359),
    f = n(975298),
    _ = n(605236),
    E = n(243778),
    I = n(819640),
    C = n(594174),
    v = n(351402),
    S = n(78839),
    N = n(626135),
    T = n(74538),
    x = n(502087),
    A = n(657041),
    b = n(769415),
    Z = n(650032),
    y = n(767870),
    L = n(104494),
    R = n(639119),
    j = n(655525),
    O = n(314684),
    P = n(52188),
    D = n(346497),
    M = n(924540),
    w = n(474486),
    k = n(565626),
    U = n(976465),
    G = n(701910),
    B = n(938736),
    H = n(227140),
    V = n(474936),
    F = n(981631),
    z = n(921944),
    Y = n(388032),
    W = n(618226);
let K = 'NitroTabButton',
    q = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let X = (e) => {
    let t,
        n,
        i,
        r,
        { selected: s, route: X, locationState: Q, ...J } = e,
        $ = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        [et, en] = a.useState(!1),
        ei = (0, T.Qo)($, ee),
        er = (0, c.JA)('nitro'),
        el = (0, R.N)(),
        ea = (0, L.Ng)(),
        es = (0, d.e7)([S.ZP], () => S.ZP.inReverseTrial()),
        eo = (null == el ? void 0 : el.trial_id) === V.jz,
        ec = (0, d.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == el,
        ed = (0, D.Vi)(),
        { enabled: eu } = (0, A.Z)();
    (0, p.Z)(new Date(2024, 10, 21), 1000, void 0, !eu);
    let eh = (0, k.ZP)(),
        em = (0, O.$_)(),
        ep = (0, U.V6)(),
        eg = (0, B.Kn)(K),
        ef = (0, B.vx)(K),
        e_ = (0, B.wG)(K),
        eE = (0, d.e7)([x.Z], () => x.Z.getCreatedAtOverride()),
        eI = (0, d.e7)([I.Z], () => I.Z.hasLayers()),
        { fractionalState: eC, endsAt: ev } = (0, f.Z)({ forceFetch: !0 }),
        eS = null != eE ? eE : null == $ ? void 0 : $.createdAt,
        eN = s || null != el || null != ea || ed || ef || e_ || eh || null != em || null != ep || ei,
        { enabled: eT } = Z._.useExperiment({ location: K }, { autoTrackExposure: !1 }),
        { enabled: ex } = b.Z.useExperiment({ location: K }, { autoTrackExposure: !1 }),
        eA = eT && (null == el ? void 0 : el.trial_id) === V.a7,
        [eb, eZ] = (0, E.US)(es ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eN = eN || (null != $ && null != eS && Date.now() - eS.getTime() > q))) return null;
    eC !== V.a$.NONE &&
        ((r = 9),
        (i = (0, l.jsx)(y.Z, {
            className: '',
            endsAt: ev,
            messageStyle: g.a.SHORT_TIME,
            upperCase: !0
        }))),
        eo
            ? ((n = W.trialForAllButton),
              (r = 10),
              (i = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(w.dX, {
                          isSelected: s,
                          trialOffer: el,
                          q4MarketingEnabled: ex
                      }),
                      ex &&
                          (0, l.jsx)('div', {
                              className: W.tabBackground,
                              children: (0, l.jsx)('img', {
                                  className: o()(W.tabBackgroundImage, { [W.tabBackgroundImageHovered]: et }),
                                  src: 'https://cdn.discordapp.com/assets/content/a54566c3cb032ffe64e8b1d63f93e41e4291f26b3696659096b9c7ffddf797dd.png',
                                  alt: ''
                              })
                          })
                  ]
              })))
            : ef
              ? ((t = W.referralIncentive), (r = 7))
              : e_
                ? ((i = (0, l.jsx)(G.Z, { copy: Y.intl.string(Y.t.jyYgZ2) })), (r = 8))
                : ed
                  ? ((i = (0, l.jsx)(j.Z, {})), (r = 0))
                  : null != eb && eb === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                    ? ((i = (0, l.jsx)(H.Z, {
                          copy: Y.intl.string(Y.t.HwUCnp),
                          showStars: !1
                      })),
                      (r = 4))
                    : null != em
                      ? ((i = (0, l.jsx)(G.Z, { copy: em })), (r = 1))
                      : null != ep
                        ? ((i = (0, l.jsx)(G.Z, { copy: ep })), (r = 1))
                        : eh
                          ? ((i = (0, l.jsx)(G.Z, {})), (r = 2))
                          : null != ea
                            ? ((i = (0, l.jsx)(M.GN, {
                                  userDiscount: ea,
                                  isTabSelected: s,
                                  includesAmountOff: !1
                              })),
                              (r = 3))
                            : null == el || eA
                              ? eg
                                  ? ((i = (0, l.jsx)(w.lH, {
                                        isSelected: s,
                                        onSelect: () => (0, _.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: z.L.TAKE_ACTION })
                                    })),
                                    (r = 6))
                                  : ec && ((i = (0, l.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), !s && (t = W.localizeBadge), (r = 5))
                              : ((i = (0, l.jsx)(M.$H, {
                                    trialOffer: el,
                                    isTabSelected: s
                                })),
                                (r = 4));
    let ey = (0, l.jsx)(m.Qj, {
        selected: s,
        route: X,
        icon: h.NitroWheelIcon,
        text: Y.intl.string(Y.t.Ipxkoq),
        locationState: Q,
        onClick: () => {
            N.default.track(F.rMx.NITRO_TAB_VISITED, {
                badge_decorator: r,
                has_premium: ei
            }),
                ef || e_ ? ((0, _.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: z.L.TAKE_ACTION }), e_ && (0, _.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: z.L.TAKE_ACTION })) : null != eb && eZ(z.L.USER_DISMISS);
        },
        onMouseEnter: () => {
            en(!0);
        },
        onMouseLeave: () => {
            en(!1);
        },
        ...J,
        ...er,
        className: t,
        avatarWithTextClassName: n,
        children: i
    });
    return eo && ex
        ? (0, l.jsx)(w.CI, {
              variant: w.j$.TRIAL_FOR_ALL,
              trialOffer: el,
              children: ey
          })
        : eg
          ? (0, l.jsx)(w.CI, {
                variant: w.j$.REFERRAL_PROGRAM,
                children: ey
            })
          : ef && !eI
            ? (0, l.jsx)(w.A7, { children: () => ey })
            : ey;
};
