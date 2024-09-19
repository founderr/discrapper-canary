var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(526629),
    i = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    x = n(703656),
    m = n(358085),
    g = n(617136),
    _ = n(272008),
    C = n(113434),
    f = n(569984),
    h = n(497505),
    E = n(918701),
    S = n(865364),
    T = n(585500),
    A = n(566078),
    v = n(340100),
    N = n(611855),
    j = n(644646),
    B = n(78826),
    R = n(670638),
    b = n(667105),
    y = n(46140),
    I = n(981631),
    M = n(701488),
    k = n(689938),
    O = n(609706);
let U = o.forwardRef(function (e, t) {
    var n, r;
    let { children: S, className: U, collapsedHeight: Z, expansionSpring: q, isExpanded: w, isExpansionAnimationComplete: P, onCtxMenuOpen: Q, onCtxMenuClose: W, onCtxMenuSelect: D, quest: H, useReducedMotion: V } = e,
        z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
        G = (0, C.B6)(H.config.expiresAt),
        F = A.r.build(H.config),
        Y = (0, C.B6)(F.rewardsExpireAt),
        K = (0, E.ph)(H),
        X = o.useMemo(() => (0, E.nP)(K), [K]),
        J = (0, b.tP)(F.application.id),
        $ = F.features.has(y.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        ee = F.features.has(y.S7.START_QUEST_CTA) ? k.Z.Messages.QUESTS_START_QUEST : k.Z.Messages.QUESTS_ACCEPT_QUEST,
        et = o.useCallback(() => {
            (0, _.AH)(H.id, {
                questContent: h.jn.QUEST_BAR,
                questContentCTA: $
            }),
                F.features.has(y.S7.START_QUEST_CTA) && (0, x.uL)(I.Z5c.ACTIVITY_DETAILS(M.In), void 0);
        }, [H, $, F.features]),
        en = (0, b.hf)({
            quest: H,
            location: h.jn.QUEST_BAR
        }),
        es = o.useCallback(() => {
            (0, E.FE)(H, {
                content: h.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK
            });
        }, [H]),
        eo = F.features.has(y.S7.POST_ENROLLMENT_CTA),
        er = (0, C.Rf)(H),
        ea = (0, C.Jf)(H),
        el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
        ei = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (r = H.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ed = o.useMemo(() => (0, E.Xv)(H.config), [H.config]),
        eu = w && P,
        ep = (0, T.D)({
            quest: H,
            taskDetails: er,
            location: y.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        ex = (0, m.isWeb)(),
        em = o.useMemo(() => {
            let e = (0, d.Qg)(H.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: d.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
                '--custom-cta-color-active': (0, c.r5)(e, 0.35)
            };
        }, [H.config.colors.primary]);
    return (0, s.jsxs)(l.animated.div, {
        className: a()(U, O.contentExpanded, { [O.contentInteractable]: eu }),
        style: {
            backgroundColor: H.config.colors.secondary,
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
                              output: [0, Z]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            S,
            (0, s.jsx)('div', {
                'aria-hidden': !eu,
                children: ei
                    ? (0, s.jsxs)('div', {
                          className: O.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: O.utils,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: O.questAcceptedContentHeading,
                                          children: [
                                              (0, s.jsx)(j.Z, {
                                                  className: O.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: H,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: y.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsxs)('div', {
                                                  children: [
                                                      (0, s.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, E.AV)({
                                                              quest: H,
                                                              taskDetails: er,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: O.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? k.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Y }) : k.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: G })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(R.r, {
                                          onOpen: Q,
                                          onClose: W,
                                          onSelect: D,
                                          questContent: h.jn.QUEST_BAR,
                                          quest: H,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: O.submenuWrapper,
                                                  'aria-label': k.Z.Messages.ACTIONS,
                                                  children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: O.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, s.jsx)(u.Button, {
                                        className: a()(O.cta, O.ctaClaimReward),
                                        style: ed ? em : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: k.Z.Messages.QUESTS_CLAIM_REWARD
                                    })
                                  : (0, s.jsx)(u.Text, {
                                        className: O.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, s.jsx)(v.Z, { quest: H }),
                              !ex && !el && !J && eo && (0, s.jsx)(L, { onClick: eu ? es : void 0 })
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          children: [
                              (0, s.jsxs)('div', {
                                  className: O.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: O.utils,
                                          children: [
                                              (0, s.jsx)(N.Z, { color: 'always-white' }),
                                              (0, s.jsx)(R.r, {
                                                  onOpen: Q,
                                                  onClose: W,
                                                  onSelect: D,
                                                  questContent: h.jn.QUEST_BAR,
                                                  quest: H,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, s.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: O.submenuWrapper,
                                                          'aria-label': k.Z.Messages.ACTIONS,
                                                          children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: O.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: O.details,
                                          children: [
                                              (0, s.jsx)(j.Z, {
                                                  className: O.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: H,
                                                  questContent: h.jn.QUEST_BAR,
                                                  location: y.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsx)(u.Heading, {
                                                  className: O.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: k.Z.Messages.QUESTS_TITLE.format({ questName: H.config.messages.questName })
                                              }),
                                              (0, s.jsx)(u.Text, {
                                                  className: O.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(u.Button, {
                                          className: O.cta,
                                          style: '1232852290197655573' !== H.id ? em : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eu ? et : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: z,
                                          children: ee
                                      })
                                  ]
                              }),
                              (0, s.jsx)('div', {
                                  className: O.heroAssetWrapper,
                                  style: { color: H.config.colors.secondary },
                                  children: X
                                      ? (0, s.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) =>
                                                (0, s.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !V,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: O.heroAsset,
                                                    controls: !1,
                                                    children: (0, s.jsx)('source', {
                                                        src: K,
                                                        type: (0, E.mN)(K)
                                                    })
                                                })
                                        })
                                      : (0, s.jsx)(B.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, s.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: O.heroAsset,
                                                    src: K
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
        location: y.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, s.jsx)(u.Button, {
              className: O.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: k.Z.Messages.QUESTS_GET_THIS_GAME
          })
        : null;
}
t.Z = U;
