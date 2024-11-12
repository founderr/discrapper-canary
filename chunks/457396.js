n.d(t, {
    g: function () {
        return ee;
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
    h = n(780384),
    m = n(481060),
    p = n(515753),
    g = n(774078),
    f = n(410030),
    _ = n(607070),
    E = n(927359),
    I = n(975298),
    C = n(605236),
    v = n(243778),
    S = n(819640),
    N = n(594174),
    T = n(351402),
    x = n(78839),
    A = n(626135),
    b = n(74538),
    Z = n(502087),
    y = n(657041),
    L = n(769415),
    R = n(650032),
    j = n(767870),
    O = n(104494),
    P = n(639119),
    D = n(655525),
    M = n(314684),
    w = n(52188),
    k = n(346497),
    U = n(924540),
    G = n(474486),
    B = n(976465),
    H = n(701910),
    V = n(938736),
    F = n(227140),
    z = n(474936),
    Y = n(981631),
    W = n(921944),
    K = n(388032),
    q = n(618226),
    X = n(155357),
    Q = n(547970);
let J = 'NitroTabButton',
    $ = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let ee = (e) => {
    let t,
        n,
        i,
        r,
        { selected: s, route: ee, locationState: et, ...en } = e,
        ei = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        er = (0, d.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        el = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
        ea = (0, h.ap)((0, f.ZP)()),
        [es, eo] = a.useState(!1),
        ec = (0, b.Qo)(ei, er),
        ed = (0, c.JA)('nitro'),
        eu = (0, P.N)(),
        eh = (0, O.Ng)(),
        em = (0, d.e7)([x.ZP], () => x.ZP.inReverseTrial()),
        ep = (null == eu ? void 0 : eu.trial_id) === z.jz,
        eg = (0, d.e7)([T.Z], () => T.Z.isLocalizedPromoEnabled) && null == eu,
        ef = (0, k.Vi)(),
        { enabled: e_ } = (0, y.Z)();
    (0, g.Z)(new Date(2024, 10, 21), 1000, void 0, !e_);
    let eE = (0, M.$_)(),
        eI = (0, B.V6)(),
        eC = (0, V.Kn)(J),
        ev = (0, V.vx)(J),
        eS = (0, V.wG)(J),
        eN = (0, d.e7)([Z.Z], () => Z.Z.getCreatedAtOverride()),
        eT = (0, d.e7)([S.Z], () => S.Z.hasLayers()),
        { fractionalState: ex, endsAt: eA } = (0, I.Z)({ forceFetch: !0 }),
        eb = null != eN ? eN : null == ei ? void 0 : ei.createdAt,
        eZ = s || null != eu || null != eh || ef || ev || eS || null != eE || null != eI || ec,
        { enabled: ey } = R._.useExperiment({ location: J }, { autoTrackExposure: !1 }),
        { enabled: eL } = L.Z.useExperiment(
            { location: J },
            {
                autoTrackExposure: ep,
                disable: !ep
            }
        ),
        eR = ey && (null == eu ? void 0 : eu.trial_id) === z.a7,
        [ej, eO] = (0, v.US)(em ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(eZ = eZ || (null != ei && null != eb && Date.now() - eb.getTime() > $))) return null;
    if (
        (ex !== z.a$.NONE &&
            ((r = 9),
            (i = (0, l.jsx)(j.Z, {
                className: '',
                endsAt: eA,
                messageStyle: E.a.SHORT_TIME,
                upperCase: !0
            }))),
        ep)
    ) {
        var eP;
        (n = q.trialForAllButton),
            (r = 10),
            (i = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(G.dX, {
                        isSelected: s,
                        trialOffer: eu,
                        q4MarketingEnabled: eL
                    }),
                    eL &&
                        (0, l.jsx)('div', {
                            className: q.tabBackground,
                            children: (0, l.jsx)('img', {
                                className: o()(q.tabBackgroundImage, { [q.tabBackgroundImageHovered]: es }),
                                src: ((eP = el), ea ? Q.Z : X.Z),
                                alt: ''
                            })
                        })
                ]
            }));
    } else
        ev
            ? ((t = q.referralIncentive), (r = 7))
            : eS
              ? ((i = (0, l.jsx)(H.Z, { copy: K.intl.string(K.t.jyYgZ2) })), (r = 8))
              : ef
                ? ((i = (0, l.jsx)(D.Z, {})), (r = 0))
                : null != ej && ej === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                  ? ((i = (0, l.jsx)(F.Z, {
                        copy: K.intl.string(K.t.HwUCnp),
                        showStars: !1
                    })),
                    (r = 4))
                  : null != eE
                    ? ((i = (0, l.jsx)(H.Z, { copy: eE })), (r = 1))
                    : null != eI
                      ? ((i = (0, l.jsx)(H.Z, { copy: eI })), (r = 1))
                      : null != eh
                        ? ((i = (0, l.jsx)(U.GN, {
                              userDiscount: eh,
                              isTabSelected: s,
                              includesAmountOff: !1
                          })),
                          (r = 3))
                        : null == eu || eR
                          ? eC
                              ? ((i = (0, l.jsx)(G.lH, {
                                    isSelected: s,
                                    onSelect: () => (0, C.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: W.L.TAKE_ACTION })
                                })),
                                (r = 6))
                              : eg && ((i = (0, l.jsx)(w.k, { entryPoint: w.U.PrivateMessages })), !s && (t = q.localizeBadge), (r = 5))
                          : ((i = (0, l.jsx)(U.$H, {
                                trialOffer: eu,
                                isTabSelected: s
                            })),
                            (r = 4));
    let eD = (0, l.jsx)(p.Qj, {
        selected: s,
        route: ee,
        icon: m.NitroWheelIcon,
        text: K.intl.string(K.t.Ipxkoq),
        locationState: et,
        onClick: () => {
            A.default.track(Y.rMx.NITRO_TAB_VISITED, {
                badge_decorator: r,
                has_premium: ec
            }),
                ev || eS ? ((0, C.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: W.L.TAKE_ACTION }), eS && (0, C.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: W.L.TAKE_ACTION })) : null != ej && eO(W.L.USER_DISMISS);
        },
        onMouseEnter: () => {
            eo(!0);
        },
        onMouseLeave: () => {
            eo(!1);
        },
        ...en,
        ...ed,
        className: t,
        avatarWithTextClassName: n,
        children: i
    });
    return ep && eL
        ? (0, l.jsx)(G.CI, {
              variant: G.j$.TRIAL_FOR_ALL,
              trialOffer: eu,
              children: eD
          })
        : eC
          ? (0, l.jsx)(G.CI, {
                variant: G.j$.REFERRAL_PROGRAM,
                children: eD
            })
          : ev && !eT
            ? (0, l.jsx)(G.A7, { children: () => eD })
            : eD;
};
