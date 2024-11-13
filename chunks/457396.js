n.d(t, {
    g: function () {
        return en;
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
    A = n(78839),
    b = n(626135),
    x = n(74538),
    Z = n(502087),
    L = n(657041),
    y = n(769415),
    R = n(650032),
    O = n(767870),
    P = n(104494),
    j = n(639119),
    D = n(655525),
    M = n(314684),
    w = n(52188),
    k = n(346497),
    U = n(924540),
    G = n(474486),
    B = n(976465),
    V = n(701910),
    H = n(938736),
    F = n(227140),
    z = n(474936),
    Y = n(981631),
    W = n(921944),
    K = n(388032),
    q = n(618226),
    X = n(693988),
    Q = n(155357),
    J = n(513885),
    $ = n(547970);
let ee = 'NitroTabButton',
    et = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let en = (e) => {
    let t,
        n,
        i,
        r,
        { selected: s, route: en, locationState: ei, ...er } = e,
        el = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        ea = (0, d.e7)([A.ZP], () => A.ZP.getPremiumTypeSubscription()),
        es = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
        eo = (0, h.ap)((0, f.ZP)()),
        [ec, ed] = a.useState(!1),
        eu = (0, x.Qo)(el, ea),
        eh = (0, c.JA)('nitro'),
        em = (0, j.N)(),
        ep = (0, P.Ng)(),
        eg = (0, d.e7)([A.ZP], () => A.ZP.inReverseTrial()),
        ef = (null == em ? void 0 : em.trial_id) === z.jz,
        e_ = (0, d.e7)([T.Z], () => T.Z.isLocalizedPromoEnabled) && null == em,
        eE = (0, k.Vi)(),
        { enabled: eI } = (0, L.Z)();
    (0, g.Z)(new Date(2024, 10, 21), 1000, void 0, !eI);
    let eC = (0, M.$_)(),
        ev = (0, B.V6)(),
        eS = (0, H.Kn)(ee),
        eN = (0, H.vx)(ee),
        eT = (0, H.wG)(ee),
        eA = (0, d.e7)([Z.Z], () => Z.Z.getCreatedAtOverride()),
        eb = (0, d.e7)([S.Z], () => S.Z.hasLayers()),
        { fractionalState: ex, endsAt: eZ } = (0, I.Z)({ forceFetch: !0 }),
        eL = null != eA ? eA : null == el ? void 0 : el.createdAt,
        ey = s || null != em || null != ep || eE || eN || eT || null != eC || null != ev || eu,
        { enabled: eR } = R._.useExperiment({ location: ee }, { autoTrackExposure: !1 }),
        { enabled: eO } = y.Z.useExperiment(
            { location: ee },
            {
                autoTrackExposure: ef,
                disable: !ef
            }
        ),
        eP = eR && (null == em ? void 0 : em.trial_id) === z.a7,
        [ej, eD] = (0, v.US)(eg ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
    if (!(ey = ey || (null != el && null != eL && Date.now() - eL.getTime() > et))) return null;
    if (
        (ex !== z.a$.NONE &&
            ((r = 9),
            (i = (0, l.jsx)(O.Z, {
                className: '',
                endsAt: eZ,
                messageStyle: E.a.SHORT_TIME,
                upperCase: !0
            }))),
        ef)
    ) {
        var eM, ew, ek;
        (n = q.trialForAllButton),
            (r = 10),
            (i = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(G.dX, {
                        isSelected: s,
                        trialOffer: em,
                        q4MarketingEnabled: eO
                    }),
                    eO &&
                        (0, l.jsx)('div', {
                            className: q.tabBackground,
                            children: (0, l.jsx)('img', {
                                className: o()(q.tabBackgroundImage, { [q.tabBackgroundImageHovered]: ec }),
                                src: ((eM = es), (ew = eo), (ek = ec), ew ? (eM || !ek ? $.Z : J.Z) : eM || !ek ? Q.Z : X.Z),
                                alt: ''
                            })
                        })
                ]
            }));
    } else
        eN
            ? ((t = q.referralIncentive), (r = 7))
            : eT
              ? ((i = (0, l.jsx)(V.Z, { copy: K.intl.string(K.t.jyYgZ2) })), (r = 8))
              : eE
                ? ((i = (0, l.jsx)(D.Z, {})), (r = 0))
                : null != ej && ej === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                  ? ((i = (0, l.jsx)(F.Z, {
                        copy: K.intl.string(K.t.HwUCnp),
                        showStars: !1
                    })),
                    (r = 4))
                  : null != eC
                    ? ((i = (0, l.jsx)(V.Z, { copy: eC })), (r = 1))
                    : null != ev
                      ? ((i = (0, l.jsx)(V.Z, { copy: ev })), (r = 1))
                      : null != ep
                        ? ((i = (0, l.jsx)(U.GN, {
                              userDiscount: ep,
                              isTabSelected: s,
                              includesAmountOff: !1
                          })),
                          (r = 3))
                        : null == em || eP
                          ? eS
                              ? ((i = (0, l.jsx)(G.lH, {
                                    isSelected: s,
                                    onSelect: () => (0, C.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: W.L.TAKE_ACTION })
                                })),
                                (r = 6))
                              : e_ && ((i = (0, l.jsx)(w.k, { entryPoint: w.U.PrivateMessages })), !s && (t = q.localizeBadge), (r = 5))
                          : ((i = (0, l.jsx)(U.$H, {
                                trialOffer: em,
                                isTabSelected: s
                            })),
                            (r = 4));
    let eU = (0, l.jsx)(p.Qj, {
        selected: s,
        route: en,
        icon: m.NitroWheelIcon,
        text: K.intl.string(K.t.Ipxkoq),
        locationState: ei,
        onClick: () => {
            b.default.track(Y.rMx.NITRO_TAB_VISITED, {
                badge_decorator: r,
                has_premium: eu
            }),
                eN || eT ? ((0, C.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: W.L.TAKE_ACTION }), eT && (0, C.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: W.L.TAKE_ACTION })) : null != ej && eD(W.L.USER_DISMISS);
        },
        onMouseEnter: () => {
            ed(!0);
        },
        onMouseLeave: () => {
            ed(!1);
        },
        ...er,
        ...eh,
        className: t,
        avatarWithTextClassName: n,
        children: i
    });
    return ef && eO
        ? (0, l.jsx)(G.CI, {
              variant: G.j$.TRIAL_FOR_ALL,
              trialOffer: em,
              children: eU
          })
        : eS
          ? (0, l.jsx)(G.CI, {
                variant: G.j$.REFERRAL_PROGRAM,
                children: eU
            })
          : eN && !eb
            ? (0, l.jsx)(G.A7, { children: () => eU })
            : eU;
};
