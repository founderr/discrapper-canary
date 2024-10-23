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
    g = n(272008),
    _ = n(113434),
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
    R = n(78826),
    B = n(670638),
    I = n(667105),
    y = n(46140),
    M = n(981631),
    O = n(701488),
    k = n(689938),
    w = n(609706);
let L = s.forwardRef(function (e, t) {
    var n, r;
    let { children: S, className: L, collapsedHeight: q, expansionSpring: Z, isExpanded: P, isExpansionAnimationComplete: Q, onCtxMenuOpen: D, onCtxMenuClose: W, onCtxMenuSelect: H, quest: V, useReducedMotion: z } = e,
        G = (0, i.e7)([f.Z], () => f.Z.isEnrolling(V.id), [V]),
        F = (0, _.B6)(V.config.expiresAt),
        K = N.r.build(V.config),
        Y = (0, _.B6)(K.rewardsExpireAt),
        X = s.useMemo(() => (0, v.fh)(V, v.Bd.HERO), [V]),
        J = (0, I.tP)(K.application.id),
        $ = K.features.has(y.S7.START_QUEST_CTA) ? C.jZ.START_QUEST : C.jZ.ACCEPT_QUEST,
        ee = K.features.has(y.S7.START_QUEST_CTA) ? k.Z.Messages.QUESTS_START_QUEST : k.Z.Messages.QUESTS_ACCEPT_QUEST,
        et = s.useCallback(() => {
            (0, g.AH)(V.id, {
                questContent: h.jn.QUEST_BAR,
                questContentCTA: $
            }),
                K.features.has(y.S7.START_QUEST_CTA) && (0, m.uL)(M.Z5c.ACTIVITY_DETAILS(O.In), void 0);
        }, [V, $, K.features]),
        en = (0, I.hf)({
            quest: V,
            location: h.jn.QUEST_BAR
        }),
        eo = s.useCallback(() => {
            (0, E.FE)(V, {
                content: h.jn.QUEST_BAR,
                ctaContent: C.jZ.OPEN_GAME_LINK
            });
        }, [V]),
        es = K.features.has(y.S7.POST_ENROLLMENT_CTA),
        er = (0, _.Rf)(V),
        ea = (0, _.Jf)(V),
        el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
        ei = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (r = V.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ed = s.useMemo(() => (0, E.Xv)(V.config), [V.config]),
        eu = P && Q,
        ep = (0, T.D)({
            quest: V,
            taskDetails: er,
            location: y.dr.QUESTS_BAR,
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
        className: a()(L, w.contentExpanded, { [w.contentInteractable]: eu }),
        style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
                ? void 0
                : (0, l.to)(
                      [
                          Z.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          Z.to({
                              range: [0, 1],
                              output: [0, q]
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
                          className: w.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: w.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: w.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(b.Z, {
                                                  className: w.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: V,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: y.dr.QUESTS_BAR
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
                                                          className: w.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? k.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Y }) : k.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: F })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(B.r, {
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
                                                  className: w.submenuWrapper,
                                                  'aria-label': k.Z.Messages.ACTIONS,
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: w.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(w.cta, w.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: k.Z.Messages.QUESTS_CLAIM_REWARD
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: w.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, o.jsx)(j.Z, { quest: V }),
                              !em && !el && !J && es && (0, o.jsx)(U, { onClick: eu ? eo : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: w.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: w.utils,
                                          children: [
                                              (0, o.jsx)(A.Z, { color: 'always-white' }),
                                              (0, o.jsx)(B.r, {
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
                                                          className: w.submenuWrapper,
                                                          'aria-label': k.Z.Messages.ACTIONS,
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: w.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: w.details,
                                          children: [
                                              (0, o.jsx)(b.Z, {
                                                  className: w.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: V,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: y.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: w.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: k.Z.Messages.QUESTS_TITLE.format({ questName: V.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: w.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: w.cta,
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
                                  className: w.heroAssetWrapper,
                                  style: { color: V.config.colors.secondary },
                                  children: X.isAnimated
                                      ? (0, o.jsx)(R.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !z,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: w.heroAsset,
                                                    controls: !1,
                                                    children: (0, o.jsx)('source', {
                                                        src: X.url,
                                                        type: null !== (t = X.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, o.jsx)(R.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, o.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: w.heroAsset,
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
function U(e) {
    let { style: t, onClick: n } = e;
    return (0, S.O)({
        location: y.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: w.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: k.Z.Messages.QUESTS_GET_THIS_GAME
          })
        : null;
}
t.Z = L;
