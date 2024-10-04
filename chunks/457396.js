n.d(t, {
    g: function () {
        return B;
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
    u = n(605236),
    _ = n(243778),
    E = n(819640),
    h = n(594174),
    m = n(351402),
    I = n(78839),
    p = n(626135),
    g = n(74538),
    T = n(502087),
    f = n(650032),
    S = n(104494),
    C = n(639119),
    N = n(655525),
    A = n(314684),
    v = n(52188),
    Z = n(248042),
    L = n(924540),
    R = n(649765),
    O = n(565626),
    x = n(976465),
    b = n(701910),
    M = n(938736),
    P = n(227140),
    D = n(474936),
    y = n(981631),
    j = n(921944),
    U = n(689938),
    G = n(618226);
let w = 'NitroTabButton',
    k = 1209600000;
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD');
let B = (e) => {
    let t,
        n,
        i,
        { selected: a, route: B, locationState: V, ...H } = e,
        F = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        Y = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        z = (0, g.Qo)(F, Y),
        W = (0, r.JA)('nitro'),
        K = (0, C.N)(),
        q = (0, S.Ng)(),
        Q = (0, l.e7)([I.ZP], () => I.ZP.inReverseTrial()),
        X = (0, l.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == K,
        J = (0, Z.Vi)(),
        $ = (0, O.ZP)(),
        ee = (0, A.$_)(),
        et = (0, x.V6)(),
        en = (0, M.Kn)(w),
        ei = (0, M.vx)(w),
        ea = (0, M.wG)(w),
        es = (0, l.e7)([T.Z], () => T.Z.getCreatedAtOverride()),
        er = (0, l.e7)([E.Z], () => E.Z.hasLayers()),
        el = null != es ? es : null == F ? void 0 : F.createdAt,
        eo = a || null != K || null != q || J || ei || ea || $ || null != ee || null != et || z,
        { enabled: ec } = f._.useExperiment({ location: w }, { autoTrackExposure: !1 }),
        ed = ec && (null == K ? void 0 : K.trial_id) === D.a7,
        [eu, e_] = (0, _.US)(Q ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eo = eo || (null != F && null != el && Date.now() - el.getTime() > k))) return null;
    ei
        ? ((t = G.referralIncentive), (i = 7))
        : ea
          ? ((n = (0, s.jsx)(b.Z, { copy: U.Z.Messages.REWARD })), (i = 8))
          : J
            ? ((n = (0, s.jsx)(N.Z, {})), (i = 0))
            : null != eu && eu === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
              ? ((n = (0, s.jsx)(P.Z, {
                    copy: U.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                    showStars: !1
                })),
                (i = 4))
              : null != ee
                ? ((n = (0, s.jsx)(b.Z, { copy: ee })), (i = 1))
                : null != et
                  ? ((n = (0, s.jsx)(b.Z, { copy: et })), (i = 1))
                  : $
                    ? ((n = (0, s.jsx)(b.Z, {})), (i = 2))
                    : null != q
                      ? ((n = (0, s.jsx)(L.GN, {
                            userDiscount: q,
                            isTabSelected: a,
                            includesAmountOff: !1
                        })),
                        (i = 3))
                      : null == K || ed
                        ? en
                            ? ((n = (0, s.jsx)(R.ZP, {
                                  isSelected: a,
                                  onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: j.L.TAKE_ACTION })
                              })),
                              (i = 6))
                            : X && ((n = (0, s.jsx)(v.k, { entryPoint: v.U.PrivateMessages })), !a && (t = G.localizeBadge), (i = 5))
                        : ((n = (0, s.jsx)(L.$H, {
                              trialOffer: K,
                              isTabSelected: a
                          })),
                          (i = 4));
    let eE = (0, s.jsx)(d.Qj, {
        selected: a,
        route: B,
        icon: c.NitroWheelIcon,
        text: U.Z.Messages.PREMIUM,
        locationState: V,
        onClick: () => {
            p.default.track(y.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: z
            }),
                ei || ea ? ((0, u.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: j.L.TAKE_ACTION }), ea && (0, u.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: j.L.TAKE_ACTION })) : null != eu && e_(j.L.USER_DISMISS);
        },
        ...H,
        ...W,
        className: t,
        children: n
    });
    return en ? (0, s.jsx)(R.Em, { children: eE }) : ei && !er ? (0, s.jsx)(R.A7, { children: () => eE }) : eE;
};
