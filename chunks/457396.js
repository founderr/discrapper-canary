n.d(t, {
    g: function () {
        return z;
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
    S = n(626135),
    f = n(74538),
    C = n(502087),
    N = n(657041),
    A = n(650032),
    v = n(767870),
    Z = n(104494),
    L = n(639119),
    R = n(655525),
    O = n(314684),
    x = n(52188),
    b = n(248042),
    M = n(924540),
    P = n(649765),
    D = n(565626),
    y = n(976465),
    j = n(701910),
    U = n(938736),
    G = n(227140),
    w = n(474936),
    k = n(981631),
    B = n(921944),
    H = n(689938),
    V = n(618226);
let F = 'NitroTabButton',
    Y = 1209600000;
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (a[(a.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER');
let z = (e) => {
    let t,
        n,
        i,
        { selected: a, route: z, locationState: W, ...K } = e,
        q = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        Q = (0, l.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        X = (0, f.Qo)(q, Q),
        J = (0, r.JA)('nitro'),
        $ = (0, L.N)(),
        ee = (0, Z.Ng)(),
        et = (0, l.e7)([T.ZP], () => T.ZP.inReverseTrial()),
        en = (0, l.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == $,
        ei = (0, b.Vi)(),
        { enabled: ea } = (0, N.Z)();
    (0, u.Z)(new Date(2024, 10, 21), 1000, void 0, !ea);
    let es = (0, D.ZP)(),
        er = (0, O.$_)(),
        el = (0, y.V6)(),
        eo = (0, U.Kn)(F),
        ec = (0, U.vx)(F),
        ed = (0, U.wG)(F),
        eu = (0, l.e7)([C.Z], () => C.Z.getCreatedAtOverride()),
        e_ = (0, l.e7)([I.Z], () => I.Z.hasLayers()),
        { fractionalState: eE, endsAt: eh } = (0, E.Z)({ forceFetch: !0 }),
        em = null != eu ? eu : null == q ? void 0 : q.createdAt,
        eI = a || null != $ || null != ee || ei || ec || ed || es || null != er || null != el || X,
        { enabled: ep } = A._.useExperiment({ location: F }, { autoTrackExposure: !1 }),
        eg = ep && (null == $ ? void 0 : $.trial_id) === w.a7,
        [eT, eS] = (0, m.US)(et ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eI = eI || (null != q && null != em && Date.now() - em.getTime() > Y))) return null;
    eE !== w.a$.NONE
        ? ((i = 9),
          (n = (0, s.jsx)(v.Z, {
              className: '',
              endsAt: eh,
              messageStyle: _.a.SHORT_TIME,
              upperCase: !0
          })))
        : ec
          ? ((t = V.referralIncentive), (i = 7))
          : ed
            ? ((n = (0, s.jsx)(j.Z, { copy: H.Z.Messages.REWARD })), (i = 8))
            : ei
              ? ((n = (0, s.jsx)(R.Z, {})), (i = 0))
              : null != eT && eT === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                ? ((n = (0, s.jsx)(G.Z, {
                      copy: H.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                      showStars: !1
                  })),
                  (i = 4))
                : null != er
                  ? ((n = (0, s.jsx)(j.Z, { copy: er })), (i = 1))
                  : null != el
                    ? ((n = (0, s.jsx)(j.Z, { copy: el })), (i = 1))
                    : es
                      ? ((n = (0, s.jsx)(j.Z, {})), (i = 2))
                      : null != ee
                        ? ((n = (0, s.jsx)(M.GN, {
                              userDiscount: ee,
                              isTabSelected: a,
                              includesAmountOff: !1
                          })),
                          (i = 3))
                        : null == $ || eg
                          ? eo
                              ? ((n = (0, s.jsx)(P.ZP, {
                                    isSelected: a,
                                    onSelect: () => (0, h.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: B.L.TAKE_ACTION })
                                })),
                                (i = 6))
                              : en && ((n = (0, s.jsx)(x.k, { entryPoint: x.U.PrivateMessages })), !a && (t = V.localizeBadge), (i = 5))
                          : ((n = (0, s.jsx)(M.$H, {
                                trialOffer: $,
                                isTabSelected: a
                            })),
                            (i = 4));
    let ef = (0, s.jsx)(d.Qj, {
        selected: a,
        route: z,
        icon: c.NitroWheelIcon,
        text: H.Z.Messages.PREMIUM,
        locationState: W,
        onClick: () => {
            S.default.track(k.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: X
            }),
                ec || ed ? ((0, h.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: B.L.TAKE_ACTION }), ed && (0, h.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: B.L.TAKE_ACTION })) : null != eT && eS(B.L.USER_DISMISS);
        },
        ...K,
        ...J,
        className: t,
        children: n
    });
    return eo ? (0, s.jsx)(P.Em, { children: ef }) : ec && !e_ ? (0, s.jsx)(P.A7, { children: () => ef }) : ef;
};
