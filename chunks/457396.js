n.d(t, {
    g: function () {
        return W;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651);
n(192379);
var a = n(91192),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(515753),
    u = n(774078),
    h = n(927359),
    m = n(975298),
    p = n(605236),
    g = n(243778),
    f = n(819640),
    _ = n(594174),
    E = n(351402),
    I = n(78839),
    C = n(626135),
    v = n(74538),
    S = n(502087),
    N = n(657041),
    T = n(769415),
    x = n(650032),
    b = n(767870),
    A = n(104494),
    Z = n(639119),
    y = n(655525),
    L = n(314684),
    R = n(52188),
    P = n(248042),
    O = n(924540),
    j = n(474486),
    D = n(565626),
    M = n(976465),
    w = n(701910),
    k = n(938736),
    U = n(227140),
    G = n(474936),
    B = n(981631),
    H = n(921944),
    V = n(388032),
    F = n(618226);
let z = 'NitroTabButton',
    Y = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let W = (e) => {
    let t,
        n,
        i,
        { selected: r, route: W, locationState: K, ...q } = e,
        X = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        Q = (0, s.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        J = (0, v.Qo)(X, Q),
        $ = (0, a.JA)('nitro'),
        ee = (0, Z.N)(),
        et = (0, A.Ng)(),
        en = (0, s.e7)([I.ZP], () => I.ZP.inReverseTrial()),
        ei = (null == ee ? void 0 : ee.trial_id) === G.jz,
        er = (0, s.e7)([E.Z], () => E.Z.isLocalizedPromoEnabled) && null == ee,
        el = (0, P.Vi)(),
        { enabled: ea } = (0, N.Z)();
    (0, u.Z)(new Date(2024, 10, 21), 1000, void 0, !ea);
    let es = (0, D.ZP)(),
        eo = (0, L.$_)(),
        ec = (0, M.V6)(),
        ed = (0, k.Kn)(z),
        eu = (0, k.vx)(z),
        eh = (0, k.wG)(z),
        em = (0, s.e7)([S.Z], () => S.Z.getCreatedAtOverride()),
        ep = (0, s.e7)([f.Z], () => f.Z.hasLayers()),
        { fractionalState: eg, endsAt: ef } = (0, m.Z)({ forceFetch: !0 }),
        e_ = null != em ? em : null == X ? void 0 : X.createdAt,
        eE = r || null != ee || null != et || el || eu || eh || es || null != eo || null != ec || J,
        { enabled: eI } = x._.useExperiment({ location: z }, { autoTrackExposure: !1 }),
        { enabled: eC } = T.Z.useExperiment({ location: z }, { autoTrackExposure: !1 }),
        ev = eI && (null == ee ? void 0 : ee.trial_id) === G.a7,
        [eS, eN] = (0, g.US)(en ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eE = eE || (null != X && null != e_ && Date.now() - e_.getTime() > Y))) return null;
    eg !== G.a$.NONE &&
        ((i = 9),
        (n = (0, l.jsx)(b.Z, {
            className: '',
            endsAt: ef,
            messageStyle: h.a.SHORT_TIME,
            upperCase: !0
        }))),
        ei
            ? ((i = 10),
              (n = (0, l.jsx)(j.dX, {
                  isSelected: r,
                  trialOffer: ee,
                  q4MarketingEnabled: eC
              })))
            : eu
              ? ((t = F.referralIncentive), (i = 7))
              : eh
                ? ((n = (0, l.jsx)(w.Z, { copy: V.intl.string(V.t.jyYgZ2) })), (i = 8))
                : el
                  ? ((n = (0, l.jsx)(y.Z, {})), (i = 0))
                  : null != eS && eS === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                    ? ((n = (0, l.jsx)(U.Z, {
                          copy: V.intl.string(V.t.HwUCnp),
                          showStars: !1
                      })),
                      (i = 4))
                    : null != eo
                      ? ((n = (0, l.jsx)(w.Z, { copy: eo })), (i = 1))
                      : null != ec
                        ? ((n = (0, l.jsx)(w.Z, { copy: ec })), (i = 1))
                        : es
                          ? ((n = (0, l.jsx)(w.Z, {})), (i = 2))
                          : null != et
                            ? ((n = (0, l.jsx)(O.GN, {
                                  userDiscount: et,
                                  isTabSelected: r,
                                  includesAmountOff: !1
                              })),
                              (i = 3))
                            : null == ee || ev
                              ? ed
                                  ? ((n = (0, l.jsx)(j.lH, {
                                        isSelected: r,
                                        onSelect: () => (0, p.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: H.L.TAKE_ACTION })
                                    })),
                                    (i = 6))
                                  : er && ((n = (0, l.jsx)(R.k, { entryPoint: R.U.PrivateMessages })), !r && (t = F.localizeBadge), (i = 5))
                              : ((n = (0, l.jsx)(O.$H, {
                                    trialOffer: ee,
                                    isTabSelected: r
                                })),
                                (i = 4));
    let eT = (0, l.jsx)(d.Qj, {
        selected: r,
        route: W,
        icon: c.NitroWheelIcon,
        text: V.intl.string(V.t.Ipxkoq),
        locationState: K,
        onClick: () => {
            C.default.track(B.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: J
            }),
                eu || eh ? ((0, p.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: H.L.TAKE_ACTION }), eh && (0, p.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: H.L.TAKE_ACTION })) : null != eS && eN(H.L.USER_DISMISS);
        },
        ...q,
        ...$,
        className: t,
        children: n
    });
    return ei && eC
        ? (0, l.jsx)(j.CI, {
              variant: j.j$.TRIAL_FOR_ALL,
              trialOffer: ee,
              children: eT
          })
        : ed
          ? (0, l.jsx)(j.CI, {
                variant: j.j$.REFERRAL_PROGRAM,
                children: eT
            })
          : eu && !ep
            ? (0, l.jsx)(j.A7, { children: () => eT })
            : eT;
};
