var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  d = n(810090),
  u = n(617136),
  E = n(272008),
  _ = n(113434),
  h = n(569984),
  m = n(497505),
  T = n(918701),
  C = n(988303),
  g = n(644646),
  p = n(78826),
  N = n(670638),
  I = n(489459),
  A = n(164495),
  f = n(759853),
  x = n(205511),
  S = n(95985),
  v = n(658590),
  R = n(46140),
  M = n(689938),
  O = n(308596);
let L = a.forwardRef(function(e, t) {
  var n;
  let {
    className: i,
    isExpanded: L,
    isExpansionAnimationComplete: Z,
    expansionSpring: j,
    onCtxMenuOpen: y,
    onCtxMenuClose: b,
    onCtxMenuSelect: P,
    onContentHeightChange: D,
    quest: U,
    useReducedMotion: G
  } = e, B = a.useRef(null), V = (0, o.e7)([h.Z], () => h.Z.isEnrolling(U.id), [U]), H = (0, _.B6)(U.config.expiresAt), w = a.useMemo(() => (0, T.nP)(U.config.assets.questBarHero), [U]), k = a.useCallback(() => {
    (0, E.AH)(U.id, {
      questContent: m.jn.QUEST_BAR,
      questContentCTA: u.jZ.ACCEPT_QUEST
    })
  }, [U]), {
    primaryVariant: F
  } = C.u.useExperiment({
    location: R.dr.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), Y = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Q = (0, _.Rf)({
    quest: U,
    location: R.dr.QUESTS_BAR
  }), z = Q.percentComplete > 0, q = L && Z, W = a.useMemo(() => (0, T.$J)(U), [U]), K = (0, T.ph)(U), X = (0, T.pG)({
    quest: U,
    location: R.dr.QUESTS_BAR,
    useV2Variants: F === C.P.V2 || (0, v.a)(U),
    taskDetails: Q
  });
  return (0, s.jsx)("div", {
    "aria-hidden": !q,
    className: l()(i, O.contentExpanded, {
      [O.contentInteractable]: q,
      [O.contentExpandedAccepted]: Y
    }),
    children: Y ? (0, s.jsx)(I.m, {
      onContentHeightChange: D,
      children: (0, s.jsxs)("div", {
        className: O.questAcceptedContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.questAcceptedHeader,
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: l()(O.flex, O.headerText),
            children: M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: H
            })
          }), (0, s.jsx)(N.r, {
            onOpen: y,
            onClose: b,
            onSelect: P,
            questContent: m.jn.QUEST_BAR,
            quest: U,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, s.jsx)(c.Clickable, {
              ...e,
              className: O.submenuWrapper,
              "aria-label": M.Z.Messages.ACTIONS,
              children: (0, s.jsx)(c.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: l()(O.submenuIcon, O.interactiveNormal)
              })
            })
          })]
        }), (0, s.jsx)("div", {
          className: O.divider
        }), (0, s.jsx)(f.Z, {
          progressBarRef: B,
          quest: U,
          isExpanded: L
        }), (0, s.jsx)(S.Z, {
          quest: U,
          progressBarRef: B,
          isExpanded: !0
        }), W && (0, s.jsx)(x.Z, {
          quest: U
        }), (0, s.jsx)(A.y, {
          quest: U,
          useReducedMotion: G,
          isExpanded: L,
          hasMadeProgress: z
        })]
      })
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.details,
          children: [(0, s.jsx)(g.Z, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: U,
            questContent: m.jn.QUEST_BAR
          }), (0, s.jsx)(c.Heading, {
            className: O.title,
            variant: "heading-md/medium",
            children: M.Z.Messages.QUESTS_TITLE.format({
              questName: U.config.messages.questName
            })
          }), (0, s.jsx)(c.Text, {
            className: O.description,
            variant: "text-xs/normal",
            children: X
          })]
        }), (0, s.jsx)(c.Button, {
          className: O.cta,
          color: c.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: q ? k : void 0,
          size: c.Button.Sizes.SMALL,
          submitting: V,
          children: M.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: O.heroAssetWrapper,
        style: {
          backdropFilter: j.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
          filter: j.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
        },
        children: [(0, s.jsx)(r.animated.div, {
          className: O.heroAssetDarken,
          style: {
            opacity: j.to([0, 1], [1, 0])
          }
        }), (0, s.jsx)(r.animated.div, {
          className: O.heroAssetTint,
          style: {
            backgroundColor: U.config.colors.primary,
            opacity: j.to([0, 1], [1, 0])
          }
        }), w ? (0, s.jsx)(p.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(d.Z, {
            ref: e,
            autoPlay: !G,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: K,
              type: (0, T.mN)(K)
            })
          })
        }) : (0, s.jsx)(p.Fl, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: K
          })
        }), (0, s.jsx)(r.animated.div, {
          className: O.legibilityGradient,
          style: {
            opacity: j.to({
              range: [0, 1],
              output: [0, 1]
            })
          }
        })]
      })]
    })
  })
});
t.Z = L