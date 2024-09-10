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
    g = n(626135),
    p = n(74538),
    T = n(502087),
    S = n(647265),
    C = n(650032),
    f = n(104494),
    N = n(639119),
    A = n(655525),
    v = n(314684),
    L = n(52188),
    Z = n(248042),
    R = n(924540),
    O = n(649765),
    x = n(565626),
    b = n(976465),
    P = n(701910),
    M = n(938736),
    D = n(227140),
    y = n(474936),
    j = n(981631),
    U = n(921944),
    G = n(689938),
    w = n(618226);
let k = 'NitroTabButton';
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD');
let B = (e) => {
    let t,
        n,
        i,
        { selected: a, route: B, locationState: H, ...V } = e,
        F = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        Y = (0, l.e7)([I.ZP], () => I.ZP.getPremiumTypeSubscription()),
        W = (0, p.Qo)(F, Y),
        z = (0, r.JA)('nitro'),
        K = (0, N.N)(),
        q = (0, f.Ng)(),
        Q = (0, l.e7)([I.ZP], () => I.ZP.inReverseTrial()),
        X = (0, l.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == K,
        J = (0, Z.Vi)(),
        $ = (0, x.ZP)(),
        ee = (0, v.$_)(),
        et = (0, b.V6)(),
        en = (0, M.Kn)(k),
        ei = (0, M.vx)(k),
        ea = (0, M.wG)(k),
        es = (0, l.e7)([T.Z], () => T.Z.getCreatedAtOverride()),
        er = (0, l.e7)([E.Z], () => E.Z.hasLayers()),
        el = null != es ? es : null == F ? void 0 : F.createdAt,
        eo = a || null != K || null != q || J || ei || ea || $ || null != ee || null != et || W,
        { enabled: ec } = C._.useExperiment({ location: k }, { autoTrackExposure: !1 }),
        ed = ec && (null == K ? void 0 : K.trial_id) === y.a7,
        eu = (0, S.N9)({
            location: 'NitroTabButton',
            showTabForOtherReasons: eo
        }),
        [e_, eE] = (0, _.US)(Q ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eo = eo || (null != F && null != el && Date.now() - el.getTime() > eu))) return null;
    ei
        ? ((t = w.referralIncentive), (i = 7))
        : ea
          ? ((n = (0, s.jsx)(P.Z, { copy: G.Z.Messages.REWARD })), (i = 8))
          : J
            ? ((n = (0, s.jsx)(A.Z, {})), (i = 0))
            : null != e_ && e_ === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
              ? ((n = (0, s.jsx)(D.Z, {
                    copy: G.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                    showStars: !1
                })),
                (i = 4))
              : null != ee
                ? ((n = (0, s.jsx)(P.Z, { copy: ee })), (i = 1))
                : null != et
                  ? ((n = (0, s.jsx)(P.Z, { copy: et })), (i = 1))
                  : $
                    ? ((n = (0, s.jsx)(P.Z, {})), (i = 2))
                    : null != q
                      ? ((n = (0, s.jsx)(R.GN, {
                            userDiscount: q,
                            isTabSelected: a,
                            includesAmountOff: !1
                        })),
                        (i = 3))
                      : null == K || ed
                        ? en
                            ? ((n = (0, s.jsx)(O.ZP, {
                                  isSelected: a,
                                  onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: U.L.TAKE_ACTION })
                              })),
                              (i = 6))
                            : X && ((n = (0, s.jsx)(L.k, { entryPoint: L.U.PrivateMessages })), !a && (t = w.localizeBadge), (i = 5))
                        : ((n = (0, s.jsx)(R.$H, {
                              trialOffer: K,
                              isTabSelected: a
                          })),
                          (i = 4));
    let eh = (0, s.jsx)(d.Qj, {
        selected: a,
        route: B,
        icon: c.NitroWheelIcon,
        text: G.Z.Messages.PREMIUM,
        locationState: H,
        onClick: () => {
            g.default.track(j.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: W
            }),
                ei || ea ? ((0, u.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: U.L.TAKE_ACTION }), ea && (0, u.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: U.L.TAKE_ACTION })) : null != e_ && eE(U.L.USER_DISMISS);
        },
        ...V,
        ...z,
        className: t,
        children: n
    });
    return en ? (0, s.jsx)(O.Em, { children: eh }) : ei && !er ? (0, s.jsx)(O.A7, { children: () => eh }) : eh;
};
