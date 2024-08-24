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
    f = n(650032),
    S = n(104494),
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
((a = i || (i = {}))[(a.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (a[(a.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (a[(a.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (a[(a.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (a[(a.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (a[(a.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (a[(a.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM');
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
        z = (0, S.Ng)(),
        K = (0, l.e7)([m.ZP], () => m.ZP.inReverseTrial()),
        q = (0, l.e7)([E.Z], () => E.Z.isLocalizedPromoEnabled) && null == W,
        Q = (0, Z.Vi)(),
        X = (0, R.ZP)(),
        J = (0, A.$_)(),
        $ = (0, b.Kn)(G),
        ee = (0, l.e7)([p.Z], () => p.Z.getCreatedAtOverride()),
        et = null != ee ? ee : null == H ? void 0 : H.createdAt,
        en = a || null != W || null != z || Q || X || null != J || F,
        { enabled: ei } = f._.useExperiment({ location: G }, { autoTrackExposure: !1 }),
        ea = ei && (null == W ? void 0 : W.trial_id) === M.a7,
        es = (0, T.N9)({
            location: 'NitroTabButton',
            showTabForOtherReasons: en
        }),
        [er, el] = (0, _.US)(K ? [o.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(en = en || (null != H && null != et && Date.now() - et.getTime() > es))) return null;
    Q
        ? ((n = (0, s.jsx)(N.Z, {})), (i = 0))
        : null != er && er === o.z.REVERSE_TRIAL_NITRO_TAB_BADGE
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
                : null == W || ea
                  ? $
                      ? ((n = (0, s.jsx)(O.Z, {
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
    let eo = (0, s.jsx)(d.Qj, {
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
                null != er && el(y.L.USER_DISMISS);
        },
        ...B,
        ...Y,
        className: t,
        children: n
    });
    return $ ? (0, s.jsx)(O.E, { children: eo }) : eo;
};
