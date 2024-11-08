n.d(t, {
    g: function () {
        return q;
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
    k = n(976465),
    U = n(701910),
    G = n(938736),
    B = n(227140),
    H = n(474936),
    V = n(981631),
    F = n(921944),
    z = n(388032),
    Y = n(825504);
let W = 'NitroTabButton',
    K = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let q = (e) => {
    let t,
        n,
        i,
        r,
        { selected: s, route: q, locationState: X, ...Q } = e,
        J = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        $ = (0, d.e7)([S.ZP], () => S.ZP.getPremiumTypeSubscription()),
        [ee, et] = a.useState(!1),
        en = (0, T.Qo)(J, $),
        ei = (0, c.JA)('nitro'),
        er = (0, R.N)(),
        el = (0, L.Ng)(),
        ea = (0, d.e7)([S.ZP], () => S.ZP.inReverseTrial()),
        es = (null == er ? void 0 : er.trial_id) === H.jz,
        eo = (0, d.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == er,
        ec = (0, D.Vi)(),
        { enabled: ed } = (0, A.Z)();
    (0, p.Z)(new Date(2024, 10, 21), 1000, void 0, !ed);
    let eu = (0, O.$_)(),
        eh = (0, k.V6)(),
        em = (0, G.Kn)(W),
        ep = (0, G.vx)(W),
        eg = (0, G.wG)(W),
        ef = (0, d.e7)([x.Z], () => x.Z.getCreatedAtOverride()),
        e_ = (0, d.e7)([I.Z], () => I.Z.hasLayers()),
        { fractionalState: eE, endsAt: eI } = (0, f.Z)({ forceFetch: !0 }),
        eC = null != ef ? ef : null == J ? void 0 : J.createdAt,
        ev = s || null != er || null != el || ec || ep || eg || null != eu || null != eh || en,
        { enabled: eS } = Z._.useExperiment({ location: W }, { autoTrackExposure: !1 }),
        { enabled: eN } = b.Z.useExperiment(
            { location: W },
            {
                autoTrackExposure: es,
                disable: !es
            }
        ),
        eT = eS && (null == er ? void 0 : er.trial_id) === H.a7,
        [ex, eA] = (0, E.US)(ea ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(ev = ev || (null != J && null != eC && Date.now() - eC.getTime() > K))) return null;
    eE !== H.a$.NONE &&
        ((r = 9),
        (i = (0, l.jsx)(y.Z, {
            className: '',
            endsAt: eI,
            messageStyle: g.a.SHORT_TIME,
            upperCase: !0
        }))),
        es
            ? ((n = Y.trialForAllButton),
              (r = 10),
              (i = (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(w.dX, {
                          isSelected: s,
                          trialOffer: er,
                          q4MarketingEnabled: eN
                      }),
                      eN &&
                          (0, l.jsx)('div', {
                              className: Y.tabBackground,
                              children: (0, l.jsx)('img', {
                                  className: o()(Y.tabBackgroundImage, { [Y.tabBackgroundImageHovered]: ee }),
                                  src: 'https://cdn.discordapp.com/assets/content/a54566c3cb032ffe64e8b1d63f93e41e4291f26b3696659096b9c7ffddf797dd.png',
                                  alt: ''
                              })
                          })
                  ]
              })))
            : ep
              ? ((t = Y.referralIncentive), (r = 7))
              : eg
                ? ((i = (0, l.jsx)(U.Z, { copy: z.intl.string(z.t.jyYgZ2) })), (r = 8))
                : ec
                  ? ((i = (0, l.jsx)(j.Z, {})), (r = 0))
                  : null != ex && ex === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                    ? ((i = (0, l.jsx)(B.Z, {
                          copy: z.intl.string(z.t.HwUCnp),
                          showStars: !1
                      })),
                      (r = 4))
                    : null != eu
                      ? ((i = (0, l.jsx)(U.Z, { copy: eu })), (r = 1))
                      : null != eh
                        ? ((i = (0, l.jsx)(U.Z, { copy: eh })), (r = 1))
                        : null != el
                          ? ((i = (0, l.jsx)(M.GN, {
                                userDiscount: el,
                                isTabSelected: s,
                                includesAmountOff: !1
                            })),
                            (r = 3))
                          : null == er || eT
                            ? em
                                ? ((i = (0, l.jsx)(w.lH, {
                                      isSelected: s,
                                      onSelect: () => (0, _.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: F.L.TAKE_ACTION })
                                  })),
                                  (r = 6))
                                : eo && ((i = (0, l.jsx)(P.k, { entryPoint: P.U.PrivateMessages })), !s && (t = Y.localizeBadge), (r = 5))
                            : ((i = (0, l.jsx)(M.$H, {
                                  trialOffer: er,
                                  isTabSelected: s
                              })),
                              (r = 4));
    let eb = (0, l.jsx)(m.Qj, {
        selected: s,
        route: q,
        icon: h.NitroWheelIcon,
        text: z.intl.string(z.t.Ipxkoq),
        locationState: X,
        onClick: () => {
            N.default.track(V.rMx.NITRO_TAB_VISITED, {
                badge_decorator: r,
                has_premium: en
            }),
                ep || eg ? ((0, _.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: F.L.TAKE_ACTION }), eg && (0, _.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: F.L.TAKE_ACTION })) : null != ex && eA(F.L.USER_DISMISS);
        },
        onMouseEnter: () => {
            et(!0);
        },
        onMouseLeave: () => {
            et(!1);
        },
        ...Q,
        ...ei,
        className: t,
        avatarWithTextClassName: n,
        children: i
    });
    return es && eN
        ? (0, l.jsx)(w.CI, {
              variant: w.j$.TRIAL_FOR_ALL,
              trialOffer: er,
              children: eb
          })
        : em
          ? (0, l.jsx)(w.CI, {
                variant: w.j$.REFERRAL_PROGRAM,
                children: eb
            })
          : ep && !e_
            ? (0, l.jsx)(w.A7, { children: () => eb })
            : eb;
};
