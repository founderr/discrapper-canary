n.d(t, {
    g: function () {
        return ei;
    },
    i: function () {
        return en;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
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
    N = n(819640),
    S = n(594174),
    T = n(351402),
    b = n(78839),
    x = n(626135),
    A = n(74538),
    Z = n(502087),
    L = n(657041),
    P = n(769415),
    y = n(650032),
    O = n(767870),
    R = n(104494),
    j = n(639119),
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
    W = n(981631),
    Y = n(921944),
    K = n(388032),
    q = n(398645),
    X = n(693988),
    Q = n(155357),
    J = n(513885),
    $ = n(547970);
let ee = 'NitroTabButton',
    et = 1209600000;
((r = i || (i = {}))[(r.BOGO_PROMOTION = 0)] = 'BOGO_PROMOTION'), (r[(r.TENURE_REWARD = 1)] = 'TENURE_REWARD'), (r[(r.NEW_PERKS_BADGE = 2)] = 'NEW_PERKS_BADGE'), (r[(r.DISCOUNT_OFFER = 3)] = 'DISCOUNT_OFFER'), (r[(r.TRIAL_OFFER = 4)] = 'TRIAL_OFFER'), (r[(r.LOCALIZED_PRICING = 5)] = 'LOCALIZED_PRICING'), (r[(r.REFERRAL_PROGRAM = 6)] = 'REFERRAL_PROGRAM'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY = 7)] = 'REFERRAL_PROGRAM_INCENTIVE_FIRST_DISCOVERY'), (r[(r.REFERRAL_PROGRAM_INCENTIVE_AWARD = 8)] = 'REFERRAL_PROGRAM_INCENTIVE_AWARD'), (r[(r.FRACTIONAL_PREMIUM_COUNTDOWN_TIMER = 9)] = 'FRACTIONAL_PREMIUM_COUNTDOWN_TIMER'), (r[(r.TRIAL_FOR_ALL_OFFER = 10)] = 'TRIAL_FOR_ALL_OFFER');
let en = (e) => {
        let { selected: t } = e,
            n = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
            i = (0, d.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            r = (0, j.N)(),
            l = (0, R.Ng)(),
            a = (0, k.Vi)(),
            o = (0, V.vx)(ee),
            s = (0, V.wG)(ee),
            c = (0, M.$_)(),
            u = (0, B.V6)(),
            h = (0, A.Qo)(n, i),
            m = (0, d.e7)([Z.Z], () => Z.Z.getCreatedAtOverride()),
            p = t || null != r || null != l || a || o || s || null != c || null != u || h,
            g = null != m ? m : null == n ? void 0 : n.createdAt;
        return (p = p || (null != n && null != g && Date.now() - g.getTime() > et));
    },
    ei = (e) => {
        let t,
            n,
            i,
            r,
            { selected: o, route: Z, locationState: et, ...ei } = e,
            er = (0, d.e7)([S.default], () => S.default.getCurrentUser()),
            el = (0, d.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
            ea = (0, d.e7)([_.Z], () => _.Z.useReducedMotion),
            eo = (0, h.ap)((0, f.ZP)()),
            [es, ec] = a.useState(!1),
            ed = (0, A.Qo)(er, el),
            eu = (0, c.JA)('nitro'),
            eh = (0, j.N)(),
            em = (0, R.Ng)(),
            ep = (0, d.e7)([b.ZP], () => b.ZP.inReverseTrial()),
            eg = (null == eh ? void 0 : eh.trial_id) === z.jz,
            ef = (0, d.e7)([T.Z], () => T.Z.isLocalizedPromoEnabled) && null == eh,
            e_ = (0, k.Vi)(),
            { enabled: eE } = (0, L.Z)();
        (0, g.Z)(new Date(2024, 10, 21), 1000, void 0, !eE);
        let eI = (0, M.$_)(),
            eC = (0, B.V6)(),
            ev = (0, V.Kn)(ee),
            eN = (0, V.vx)(ee),
            eS = (0, V.wG)(ee),
            eT = (0, d.e7)([N.Z], () => N.Z.hasLayers()),
            { fractionalState: eb, endsAt: ex, currentEntitlementId: eA } = (0, I.Z)({ forceFetch: !0 }),
            [eZ, eL] = (0, v.XR)(eb !== z.a$.NONE ? u.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL : null, eb !== z.a$.NONE ? Number(eA) : 0),
            { enabled: eP } = y._.useExperiment({ location: ee }, { autoTrackExposure: !1 }),
            { enabled: ey } = P.Z.useExperiment(
                { location: ee },
                {
                    autoTrackExposure: eg,
                    disable: !eg
                }
            ),
            eO = eP && (null == eh ? void 0 : eh.trial_id) === z.a7,
            [eR, ej] = (0, v.US)(ep ? [u.z.REVERSE_TRIAL_NITRO_TAB_BADGE] : [], void 0, !0);
        if (!en({ selected: o })) return null;
        if (
            (eb !== z.a$.NONE &&
                ((r = 9),
                (i = (0, l.jsx)(O.Z, {
                    className: '',
                    endsAt: ex,
                    messageStyle: E.a.SHORT_TIME,
                    upperCase: !0,
                    currentEntitlementId: eA
                }))),
            eg)
        ) {
            var eD, eM, ew;
            (n = q.trialForAllButton),
                (r = 10),
                (i = (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.dX, {
                            isSelected: o,
                            trialOffer: eh,
                            q4MarketingEnabled: ey
                        }),
                        ey &&
                            (0, l.jsx)('div', {
                                className: q.tabBackground,
                                children: (0, l.jsx)('img', {
                                    className: s()(q.tabBackgroundImage, { [q.tabBackgroundImageHovered]: es }),
                                    src: ((eD = ea), (eM = eo), (ew = es), eM ? (eD || !ew ? $.Z : J.Z) : eD || !ew ? Q.Z : X.Z),
                                    alt: ''
                                })
                            })
                    ]
                }));
        } else
            eN
                ? ((t = q.referralIncentive), (r = 7))
                : eS
                  ? ((i = (0, l.jsx)(H.Z, { copy: K.intl.string(K.t.jyYgZ2) })), (r = 8))
                  : e_
                    ? ((i = (0, l.jsx)(D.Z, {})), (r = 0))
                    : null != eR && eR === u.z.REVERSE_TRIAL_NITRO_TAB_BADGE
                      ? ((i = (0, l.jsx)(F.Z, {
                            copy: K.intl.string(K.t.HwUCnp),
                            showStars: !1
                        })),
                        (r = 4))
                      : null != eI
                        ? ((i = (0, l.jsx)(F.Z, {
                              copy: eI,
                              showStars: !1
                          })),
                          (r = 1))
                        : null != eC
                          ? ((i = (0, l.jsx)(F.Z, {
                                copy: eC,
                                showStars: !1
                            })),
                            (r = 1))
                          : null != em
                            ? ((i = (0, l.jsx)(U.GN, {
                                  userDiscount: em,
                                  isTabSelected: o,
                                  includesAmountOff: !1
                              })),
                              (r = 3))
                            : null == eh || eO
                              ? ev
                                  ? ((i = (0, l.jsx)(G.lH, {
                                        isSelected: o,
                                        onSelect: () => (0, C.EW)(u.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, { dismissAction: Y.L.TAKE_ACTION })
                                    })),
                                    (r = 6))
                                  : ef && ((i = (0, l.jsx)(w.k, { entryPoint: w.U.PrivateMessages })), !o && (t = q.localizeBadge), (r = 5))
                              : ((i = (0, l.jsx)(U.$H, {
                                    trialOffer: eh,
                                    isTabSelected: o
                                })),
                                (r = 4));
        let ek = (0, l.jsx)(p.Qj, {
            selected: o,
            route: Z,
            icon: m.NitroWheelIcon,
            text: K.intl.string(K.t.Ipxkoq),
            locationState: et,
            onClick: () => {
                eZ === u.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL && eL(Y.L.TAKE_ACTION),
                    x.default.track(W.rMx.NITRO_TAB_VISITED, {
                        badge_decorator: r,
                        has_premium: ed
                    }),
                    eN || eS ? ((0, C.EW)(u.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: Y.L.TAKE_ACTION }), eS && (0, C.EW)(u.z.REFERRAL_INCENTIVE_AWARDED_INFO, { dismissAction: Y.L.TAKE_ACTION })) : null != eR && ej(Y.L.USER_DISMISS);
            },
            onMouseEnter: () => {
                ec(!0);
            },
            onMouseLeave: () => {
                ec(!1);
            },
            ...ei,
            ...eu,
            className: t,
            avatarWithTextClassName: n,
            children: i
        });
        return eg && ey
            ? (0, l.jsx)(G.CI, {
                  variant: G.j$.TRIAL_FOR_ALL,
                  trialOffer: eh,
                  children: ek
              })
            : ev
              ? (0, l.jsx)(G.CI, {
                    variant: G.j$.REFERRAL_PROGRAM,
                    children: ek
                })
              : eN && !eT
                ? (0, l.jsx)(G.A7, { children: () => ek })
                : ek;
    };
