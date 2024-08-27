n.d(t, {
    g: function () {
        return k;
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
    h = n(594174),
    E = n(351402),
    m = n(78839),
    I = n(626135),
    g = n(74538),
    p = n(502087),
    T = n(647265),
    S = n(650032),
    f = n(104494),
    C = n(639119),
    N = n(655525),
    A = n(314684),
    v = n(52188),
    Z = n(248042),
    L = n(924540),
    O = n(649765),
    R = n(565626),
    x = n(701910),
    b = n(938736),
    P = n(227140),
    M = n(474936),
    D = n(981631),
    y = n(921944),
    j = n(689938),
    U = n(54463);
let G = 'NitroTabButton';
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (a[(a.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD');
let k = (e) => {
    let t,
        n,
        i,
        { selected: a, route: k, locationState: w, ...B } = e,
        H = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        V = (0, l.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        F = (0, g.Qo)(H, V),
        Y = (0, r.JA)('nitro'),
        W = (0, C.N)(),
        z = (0, f.Ng)(),
        K = (0, l.e7)([m.ZP], () => m.ZP.inReverseTrial()),
        q = (0, l.e7)([E.Z], () => E.Z.isLocalizedPromoEnabled) && null == W,
        Q = (0, Z.Vi)(),
        X = (0, R.ZP)(),
        J = (0, A.$_)(),
        $ = (0, b.Kn)(G),
        ee = (0, b.vx)(G),
        et = (0, b.wG)(G),
        en = (0, l.e7)([p.Z], () => p.Z.getCreatedAtOverride()),
        ei = null != en ? en : null == H ? void 0 : H.createdAt,
        ea = a || null != W || null != z || Q || ee || et || X || null != J || F,
        { enabled: es } = S._.useExperiment({ location: G }, { autoTrackExposure: !1 }),
        er = es && (null == W ? void 0 : W.trial_id) === M.a7,
        el = (0, T.N9)({
            location: 'NitroTabButton',
            showTabForOtherReasons: ea
        }),
        [eo, ec] = (0, _.US)(K ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(ea = ea || (null != H && null != ei && Date.now() - ei.getTime() > el))) return null;
    ee
        ? ((t = U.referralIncentive), (i = 7))
        : et
          ? ((n = (0, s.jsx)(x.Z, { copy: j.Z.Messages.REWARD })), (i = 8))
          : Q
            ? ((n = (0, s.jsx)(N.Z, {})), (i = 0))
            : null != eo && eo === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
              ? ((n = (0, s.jsx)(P.Z, {
                    copy: j.Z.Messages.PREMIUM_REVERSE_TRIAL_BADGE,
                    showStars: !1
                })),
                (i = 4))
              : null != J
                ? ((n = (0, s.jsx)(x.Z, { copy: J })), (i = 1))
                : X
                  ? ((n = (0, s.jsx)(x.Z, {})), (i = 2))
                  : null != z
                    ? ((n = (0, s.jsx)(L.GN, {
                          userDiscount: z,
                          isTabSelected: a,
                          includesAmountOff: !1
                      })),
                      (i = 3))
                    : null == W || er
                      ? $
                          ? ((n = (0, s.jsx)(O.ZP, {
                                isSelected: a,
                                onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: y.L.TAKE_ACTION })
                            })),
                            (i = 6))
                          : q && ((n = (0, s.jsx)(v.k, { entryPoint: v.U.PrivateMessages })), !a && (t = U.localizeBadge), (i = 5))
                      : ((n = (0, s.jsx)(L.$H, {
                            trialOffer: W,
                            isTabSelected: a
                        })),
                        (i = 4));
    let ed = (0, s.jsx)(d.Qj, {
        selected: a,
        route: k,
        icon: c.NitroWheelIcon,
        text: j.Z.Messages.PREMIUM,
        locationState: w,
        onClick: () => {
            I.default.track(D.rMx.NITRO_TAB_VISITED, {
                badge_decorator: i,
                has_premium: F
            }),
                ee || et ? ((0, u.EW)(o.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: y.L.TAKE_ACTION }), et && (0, u.EW)(o.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: y.L.TAKE_ACTION })) : null != eo && ec(y.L.USER_DISMISS);
        },
        ...B,
        ...Y,
        className: t,
        children: n
    });
    return $ ? (0, s.jsx)(O.Em, { children: ed }) : ee ? (0, s.jsx)(O.A7, { children: () => ed }) : ed;
};
