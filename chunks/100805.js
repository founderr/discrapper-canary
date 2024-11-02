var o = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(100621),
    i = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    C = n(617136),
    _ = n(272008),
    g = n(113434),
    f = n(569984),
    h = n(497505),
    E = n(918701),
    S = n(865364),
    T = n(585500),
    v = n(475595),
    N = n(566078),
    j = n(340100),
    A = n(611855),
    b = n(644646),
    B = n(78826),
    R = n(670638),
    y = n(667105),
    I = n(46140),
    M = n(981631),
    O = n(701488),
    w = n(689938),
    k = n(609706);
let P = s.forwardRef(function (e, t) {
    var n, r;
    let { children: S, className: P, collapsedHeight: U, expansionSpring: q, isExpanded: Z, isExpansionAnimationComplete: Q, onCtxMenuOpen: D, onCtxMenuClose: W, onCtxMenuSelect: H, quest: V, useReducedMotion: z } = e,
        G = (0, i.e7)([f.Z], () => f.Z.isEnrolling(V.id), [V]),
        F = (0, g.B6)(V.config.expiresAt),
        K = N.r.build(V.config),
        Y = (0, g.B6)(K.rewardsExpireAt),
        X = s.useMemo(() => (0, v.fh)(V, v.eC.HERO), [V]),
        J = (0, y.tP)(K.application.id),
        $ = K.features.has(I.S7.START_QUEST_CTA) ? C.jZ.START_QUEST : C.jZ.ACCEPT_QUEST,
        ee = K.features.has(I.S7.START_QUEST_CTA) ? w.Z.Messages.QUESTS_START_QUEST : w.Z.Messages.QUESTS_ACCEPT_QUEST,
        et = s.useCallback(() => {
            (0, _.AH)(V.id, {
                questContent: h.jn.QUEST_BAR,
                questContentCTA: $
            }),
                K.features.has(I.S7.START_QUEST_CTA) && (0, m.uL)(M.Z5c.ACTIVITY_DETAILS(O.In), void 0);
        }, [V, $, K.features]),
        en = (0, y.hf)({
            quest: V,
            location: h.jn.QUEST_BAR
        }),
        eo = s.useCallback(() => {
            (0, E.FE)(V, {
                content: h.jn.QUEST_BAR,
                ctaContent: C.jZ.OPEN_GAME_LINK
            });
        }, [V]),
        es = K.features.has(I.S7.POST_ENROLLMENT_CTA),
        er = (0, g.Rf)(V),
        ea = (0, g.Jf)(V),
        el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
        ei = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (r = V.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ed = s.useMemo(() => (0, E.Xv)(V.config), [V.config]),
        eu = Z && Q,
        ep = (0, T.D)({
            quest: V,
            taskDetails: er,
            location: I.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        em = (0, x.isWeb)(),
        ex = s.useMemo(() => {
            let e = (0, d.Qg)(V.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [V.config.colors.primary]);
    return (0, o.jsxs)(l.animated.div, {
        className: a()(P, k.contentExpanded, { [k.contentInteractable]: eu }),
        style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
                ? void 0
                : (0, l.to)(
                      [
                          q.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          q.to({
                              range: [0, 1],
                              output: [0, U]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            S,
            (0, o.jsx)('div', {
                'aria-hidden': !eu,
                children: ei
                    ? (0, o.jsxs)('div', {
                          className: k.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: k.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: k.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(b.Z, {
                                                  className: k.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: V,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsxs)('div', {
                                                  children: [
                                                      (0, o.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, E.AV)({
                                                              quest: V,
                                                              taskDetails: er,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, o.jsx)(u.Text, {
                                                          className: k.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? w.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Y }) : w.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: F })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(R.r, {
                                          onOpen: D,
                                          onClose: W,
                                          onSelect: H,
                                          questContent: h.jn.QUEST_BAR,
                                          quest: V,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, o.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: k.submenuWrapper,
                                                  'aria-label': w.Z.Messages.ACTIONS,
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: k.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(k.cta, k.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: w.Z.Messages.QUESTS_CLAIM_REWARD
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: k.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, o.jsx)(j.Z, { quest: V }),
                              !em && !el && !J && es && (0, o.jsx)(L, { onClick: eu ? eo : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: k.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: k.utils,
                                          children: [
                                              (0, o.jsx)(A.Z, { color: 'always-white' }),
                                              (0, o.jsx)(R.r, {
                                                  onOpen: D,
                                                  onClose: W,
                                                  onSelect: H,
                                                  questContent: h.jn.QUEST_BAR,
                                                  quest: V,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, o.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: k.submenuWrapper,
                                                          'aria-label': w.Z.Messages.ACTIONS,
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: k.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: k.details,
                                          children: [
                                              (0, o.jsx)(b.Z, {
                                                  className: k.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: V,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: k.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: w.Z.Messages.QUESTS_TITLE.format({ questName: V.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: k.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: k.cta,
                                          style: '1232852290197655573' !== V.id ? ex : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eu ? et : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: G,
                                          children: ee
                                      })
                                  ]
                              }),
                              (0, o.jsx)('div', {
                                  className: k.heroAssetWrapper,
                                  style: { color: V.config.colors.secondary },
                                  children: X.isAnimated
                                      ? (0, o.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !z,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: k.heroAsset,
                                                    controls: !1,
                                                    children: (0, o.jsx)('source', {
                                                        src: X.url,
                                                        type: null !== (t = X.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, o.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, o.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: k.heroAsset,
                                                    src: X.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
function L(e) {
    let { style: t, onClick: n } = e;
    return (0, S.O)({
        location: I.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: k.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: w.Z.Messages.QUESTS_GET_THIS_GAME
          })
        : null;
}
t.Z = P;
