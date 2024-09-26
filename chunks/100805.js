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
    m = n(703656),
    x = n(358085),
    _ = n(617136),
    C = n(272008),
    g = n(113434),
    f = n(569984),
    E = n(497505),
    h = n(918701),
    S = n(865364),
    T = n(585500),
    N = n(566078),
    v = n(340100),
    j = n(611855),
    A = n(644646),
    R = n(78826),
    b = n(670638),
    B = n(667105),
    I = n(46140),
    M = n(981631),
    O = n(701488),
    y = n(689938),
    L = n(609706);
let w = o.forwardRef(function (e, t) {
    var n, r;
    let { children: S, className: w, collapsedHeight: U, expansionSpring: Z, isExpanded: q, isExpansionAnimationComplete: P, onCtxMenuOpen: Q, onCtxMenuClose: D, onCtxMenuSelect: W, quest: H, useReducedMotion: V } = e,
        z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
        G = (0, g.B6)(H.config.expiresAt),
        F = N.r.build(H.config),
        K = (0, g.B6)(F.rewardsExpireAt),
        Y = (0, h.ph)(H),
        X = o.useMemo(() => (0, h.nP)(Y), [Y]),
        J = (0, B.tP)(F.application.id),
        $ = F.features.has(I.S7.START_QUEST_CTA) ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST,
        ee = F.features.has(I.S7.START_QUEST_CTA) ? y.Z.Messages.QUESTS_START_QUEST : y.Z.Messages.QUESTS_ACCEPT_QUEST,
        et = o.useCallback(() => {
            (0, C.AH)(H.id, {
                questContent: E.jn.QUEST_BAR,
                questContentCTA: $
            }),
                F.features.has(I.S7.START_QUEST_CTA) && (0, m.uL)(M.Z5c.ACTIVITY_DETAILS(O.In), void 0);
        }, [H, $, F.features]),
        en = (0, B.hf)({
            quest: H,
            location: E.jn.QUEST_BAR
        }),
        es = o.useCallback(() => {
            (0, h.FE)(H, {
                content: E.jn.QUEST_BAR,
                ctaContent: _.jZ.OPEN_GAME_LINK
            });
        }, [H]),
        eo = F.features.has(I.S7.POST_ENROLLMENT_CTA),
        er = (0, g.Rf)(H),
        ea = (0, g.Jf)(H),
        el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
        ei = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (r = H.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ed = o.useMemo(() => (0, h.Xv)(H.config), [H.config]),
        eu = q && P,
        ep = (0, T.D)({
            quest: H,
            taskDetails: er,
            location: I.dr.QUESTS_BAR,
            questContent: E.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        em = (0, x.isWeb)(),
        ex = o.useMemo(() => {
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
        className: a()(w, L.contentExpanded, { [L.contentInteractable]: eu }),
        style: {
            backgroundColor: H.config.colors.secondary,
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
                              output: [0, U]
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
                          className: L.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: L.utils,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: L.questAcceptedContentHeading,
                                          children: [
                                              (0, s.jsx)(A.Z, {
                                                  className: L.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: H,
                                                  questContent: E.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsxs)('div', {
                                                  children: [
                                                      (0, s.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, h.AV)({
                                                              quest: H,
                                                              taskDetails: er,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: L.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? y.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: K }) : y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: G })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(b.r, {
                                          onOpen: Q,
                                          onClose: D,
                                          onSelect: W,
                                          questContent: E.jn.QUEST_BAR,
                                          quest: H,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: L.submenuWrapper,
                                                  'aria-label': y.Z.Messages.ACTIONS,
                                                  children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: L.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, s.jsx)(u.Button, {
                                        className: a()(L.cta, L.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: y.Z.Messages.QUESTS_CLAIM_REWARD
                                    })
                                  : (0, s.jsx)(u.Text, {
                                        className: L.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, s.jsx)(v.Z, { quest: H }),
                              !em && !el && !J && eo && (0, s.jsx)(k, { onClick: eu ? es : void 0 })
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          children: [
                              (0, s.jsxs)('div', {
                                  className: L.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: L.utils,
                                          children: [
                                              (0, s.jsx)(j.Z, { color: 'always-white' }),
                                              (0, s.jsx)(b.r, {
                                                  onOpen: Q,
                                                  onClose: D,
                                                  onSelect: W,
                                                  questContent: E.jn.QUEST_BAR,
                                                  quest: H,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, s.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: L.submenuWrapper,
                                                          'aria-label': y.Z.Messages.ACTIONS,
                                                          children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: L.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: L.details,
                                          children: [
                                              (0, s.jsx)(A.Z, {
                                                  className: L.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: H,
                                                  questContent: E.jn.QUEST_BAR,
                                                  location: I.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsx)(u.Heading, {
                                                  className: L.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: y.Z.Messages.QUESTS_TITLE.format({ questName: H.config.messages.questName })
                                              }),
                                              (0, s.jsx)(u.Text, {
                                                  className: L.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(u.Button, {
                                          className: L.cta,
                                          style: '1232852290197655573' !== H.id ? ex : void 0,
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
                                  className: L.heroAssetWrapper,
                                  style: { color: H.config.colors.secondary },
                                  children: X
                                      ? (0, s.jsx)(R.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) =>
                                                (0, s.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !V,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: L.heroAsset,
                                                    controls: !1,
                                                    children: (0, s.jsx)('source', {
                                                        src: Y,
                                                        type: (0, h.mN)(Y)
                                                    })
                                                })
                                        })
                                      : (0, s.jsx)(R.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, s.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: L.heroAsset,
                                                    src: Y
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
function k(e) {
    let { style: t, onClick: n } = e;
    return (0, S.O)({
        location: I.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, s.jsx)(u.Button, {
              className: L.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: y.Z.Messages.QUESTS_GET_THIS_GAME
          })
        : null;
}
t.Z = w;
