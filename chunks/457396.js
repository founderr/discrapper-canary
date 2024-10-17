n.d(t, {
    g: function () {
        return H;
    }
}),
    n(47120);
var i,
    a,
    s = n(735250);
n(470079);
var r = n(91192),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(515753),
    u = n(774078),
    _ = n(605236),
    E = n(243778),
    h = n(819640),
    m = n(594174),
    I = n(351402),
    p = n(78839),
    g = n(626135),
    T = n(74538),
    S = n(502087),
    f = n(657041),
    C = n(650032),
    N = n(104494),
    A = n(639119),
    v = n(655525),
    Z = n(314684),
    L = n(52188),
    O = n(248042),
    R = n(924540),
    x = n(649765),
    b = n(565626),
    M = n(976465),
    P = n(701910),
    D = n(938736),
    y = n(227140),
    j = n(474936),
    U = n(981631),
    G = n(921944),
    w = n(689938),
    k = n(618226);
let B = 'NitroTabButton',
    V = 1209600000;
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD');
let H = (e) => {
    let t,
        n,
        i,
        { selected: a, route: H, locationState: F, ...Y } = e,
        z = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        W = (0, l.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        K = (0, T.Qo)(z, W),
        q = (0, r.JA)('nitro'),
        Q = (0, A.N)(),
        X = (0, N.Ng)(),
        J = (0, l.e7)([p.ZP], () => p.ZP.inReverseTrial()),
        $ = (0, l.e7)([I.Z], () => I.Z.isLocalizedPromoEnabled) && null == Q,
        ee = (0, O.Vi)(),
        { enabled: et } = (0, f.Z)();
    (0, u.Z)(new Date(2024, 10, 21), 1000, void 0, !et);
    let en = (0, b.ZP)(),
        ei = (0, Z.$_)(),
        ea = (0, M.V6)(),
        es = (0, D.Kn)(B),
        er = (0, D.vx)(B),
        el = (0, D.wG)(B),
        eo = (0, l.e7)([S.Z], () => S.Z.getCreatedAtOverride()),
        ec = (0, l.e7)([h.Z], () => h.Z.hasLayers()),
        ed = null != eo ? eo : null == z ? void 0 : z.createdAt,
        eu = a || null != Q || null != X || ee || er || el || en || null != ei || null != ea || K,
        { enabled: e_ } = C._.useExperiment({ location: B }, { autoTrackExposure: !1 }),
        eE = e_ && (null == Q ? void 0 : Q.trial_id) === j.a7,
        [eh, em] = (0, E.US)(J ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eu = eu || (null != z && null != ed && Date.now() - ed.getTime() > V))) return null;
    er
        ? ((t = k.referralIncentive), (i = 7))
        : el
          ? ((n = (0, s.jsx)(P.Z, { copy: w.Z.Messages.REWARD })), (i = 8))
          : ee
            ? ((n = (0, s.jsx)(v.Z, {})), (i = 0))
            : null != eh && eh === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
              ? ((n = (0, s.jsx)(y.Z, {
                    copy: w.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                    showStars: !1
                })),
                (i = 4))
              : null != ei
                ? ((n = (0, s.jsx)(P.Z, { copy: ei })), (i = 1))
                : null != ea
                  ? ((n = (0, s.jsx)(P.Z, { copy: ea })), (i = 1))
                  : en
                    ? ((n = (0, s.jsx)(P.Z, {})), (i = 2))
                    : null != X
                      ? ((n = (0, s.jsx)(R.GN, {
                            userDiscount: X,
                            isTabSelected: a,
                            includesAmountOff: !1
                        })),
                        (i = 3))
                      : null == Q || eE
                        ? es
                            ? ((n = (0, s.jsx)(x.ZP, {
                                  isSelected: a,
                                  onSelect: () => (0, _.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: G.L.TAKE_ACTION })
                              })),
                              (i = 6))
                            : $ && ((n = (0, s.jsx)(L.k, { entryPoint: L.U.PrivateMessages })), !a && (t = k.localizeBadge), (i = 5))
                        : ((n = (0, s.jsx)(R.$H, {
                              trialOffer: Q,
                              isTabSelected: a
                          })),
                          (i = 4));
    let eI = (0, s.jsx)(d.Qj, {
        selected: a,
        route: H,
        icon: c.NitroWheelIcon,
        text: w.Z.Messages.PREMIUM,
        locationState: F,
        onClick: () => {
            g.default.track(U.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: K
            }),
                er || el ? ((0, _.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: G.L.TAKE_ACTION }), el && (0, _.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: G.L.TAKE_ACTION })) : null != eh && em(G.L.USER_DISMISS);
        },
        ...Y,
        ...q,
        className: t,
        children: n
    });
    return es ? (0, s.jsx)(x.Em, { children: eI }) : er && !ec ? (0, s.jsx)(x.A7, { children: () => eI }) : eI;
};
