n.d(t, {
    g: function () {
        return W;
    }
}),
    n(47120);
var i,
    a,
    s = n(200651);
n(192379);
var r = n(91192),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(515753),
    u = n(774078),
    _ = n(927359),
    E = n(975298),
    h = n(605236),
    m = n(243778),
    I = n(819640),
    p = n(594174),
    g = n(351402),
    T = n(78839),
    f = n(626135),
    C = n(74538),
    S = n(502087),
    N = n(657041),
    A = n(769415),
    v = n(650032),
    Z = n(767870),
    L = n(104494),
    R = n(639119),
    O = n(655525),
    x = n(314684),
    b = n(52188),
    M = n(248042),
    P = n(924540),
    D = n(474486),
    y = n(565626),
    j = n(976465),
    U = n(701910),
    G = n(938736),
    w = n(227140),
    k = n(474936),
    B = n(981631),
    H = n(921944),
    V = n(689938),
    F = n(618226);
let Y = 'NitroTabButton',
    z = 1209600000;
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (a[(a.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (a[(a.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let W = (e) => {
    let t,
        n,
        i,
        { selected: a, route: W, locationState: K, ...q } = e,
        Q = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        X = (0, l.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        J = (0, C.Qo)(Q, X),
        $ = (0, r.JA)('nitro'),
        ee = (0, R.N)(),
        et = (0, L.Ng)(),
        en = (0, l.e7)([T.ZP], () => T.ZP.inReverseTrial()),
        ei = (null == ee ? void 0 : ee.trial_id) === k.jz,
        ea = (0, l.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == ee,
        es = (0, M.Vi)(),
        { enabled: er } = (0, N.Z)();
    (0, u.Z)(new Date(2024, 10, 21), 1000, void 0, !er);
    let el = (0, y.ZP)(),
        eo = (0, x.$_)(),
        ec = (0, j.V6)(),
        ed = (0, G.Kn)(Y),
        eu = (0, G.vx)(Y),
        e_ = (0, G.wG)(Y),
        eE = (0, l.e7)([S.Z], () => S.Z.getCreatedAtOverride()),
        eh = (0, l.e7)([I.Z], () => I.Z.hasLayers()),
        { fractionalState: em, endsAt: eI } = (0, E.Z)({ forceFetch: !0 }),
        ep = null != eE ? eE : null == Q ? void 0 : Q.createdAt,
        eg = a || null != ee || null != et || es || eu || e_ || el || null != eo || null != ec || J,
        { enabled: eT } = v._.useExperiment({ location: Y }, { autoTrackExposure: !1 }),
        { enabled: ef } = A.Z.useExperiment({ location: Y }, { autoTrackExposure: !1 }),
        eC = eT && (null == ee ? void 0 : ee.trial_id) === k.a7,
        [eS, eN] = (0, m.US)(en ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eg = eg || (null != Q && null != ep && Date.now() - ep.getTime() > z))) return null;
    em !== k.a$.NONE &&
        ((i = 9),
        (n = (0, s.jsx)(Z.Z, {
            className: '',
            endsAt: eI,
            messageStyle: _.a.SHORT_TIME,
            upperCase: !0
        }))),
        ei
            ? ((i = 10),
              (n = (0, s.jsx)(D.dX, {
                  isSelected: a,
                  trialOffer: ee,
                  q4MarketingEnabled: ef
              })))
            : eu
              ? ((t = F.referralIncentive), (i = 7))
              : e_
                ? ((n = (0, s.jsx)(U.Z, { copy: V.Z.Messages.REWARD })), (i = 8))
                : es
                  ? ((n = (0, s.jsx)(O.Z, {})), (i = 0))
                  : null != eS && eS === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                    ? ((n = (0, s.jsx)(w.Z, {
                          copy: V.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                          showStars: !1
                      })),
                      (i = 4))
                    : null != eo
                      ? ((n = (0, s.jsx)(U.Z, { copy: eo })), (i = 1))
                      : null != ec
                        ? ((n = (0, s.jsx)(U.Z, { copy: ec })), (i = 1))
                        : el
                          ? ((n = (0, s.jsx)(U.Z, {})), (i = 2))
                          : null != et
                            ? ((n = (0, s.jsx)(P.GN, {
                                  userDiscount: et,
                                  isTabSelected: a,
                                  includesAmountOff: !1
                              })),
                              (i = 3))
                            : null == ee || eC
                              ? ed
                                  ? ((n = (0, s.jsx)(D.lH, {
                                        isSelected: a,
                                        onSelect: () => (0, h.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: H.L.TAKE_ACTION })
                                    })),
                                    (i = 6))
                                  : ea && ((n = (0, s.jsx)(b.k, { entryPoint: b.U.PrivateMessages })), !a && (t = F.localizeBadge), (i = 5))
                              : ((n = (0, s.jsx)(P.$H, {
                                    trialOffer: ee,
                                    isTabSelected: a
                                })),
                                (i = 4));
    let eA = (0, s.jsx)(d.Qj, {
        selected: a,
        route: W,
        icon: c.NitroWheelIcon,
        text: V.Z.Messages.PREMIUM,
        locationState: K,
        onClick: () => {
            f.default.track(B.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: J
            }),
                eu || e_ ? ((0, h.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: H.L.TAKE_ACTION }), e_ && (0, h.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: H.L.TAKE_ACTION })) : null != eS && eN(H.L.USER_DISMISS);
        },
        ...q,
        ...$,
        className: t,
        children: n
    });
    return ei && ef
        ? (0, s.jsx)(D.CI, {
              variant: D.j$.TRIAL_FOR_ALL,
              trialOffer: ee,
              children: eA
          })
        : ed
          ? (0, s.jsx)(D.CI, {
                variant: D.j$.REFERRAL_PROGRAM,
                children: eA
            })
          : eu && !eh
            ? (0, s.jsx)(D.A7, { children: () => eA })
            : eA;
};
