var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(920906),
  l = n(442837),
  c = n(481060),
  d = n(810090),
  u = n(617136),
  p = n(272008),
  m = n(113434),
  x = n(569984),
  g = n(497505),
  f = n(918701),
  C = n(988303),
  h = n(644646),
  _ = n(78826),
  E = n(670638),
  S = n(330039),
  T = n(693900),
  v = n(524824),
  N = n(164495),
  j = n(759853),
  A = n(205511),
  B = n(95985),
  b = n(658590),
  R = n(46140),
  y = n(689938),
  M = n(308596);
let U = s.forwardRef(function(e, t) {
  var n;
  let {
    className: r,
    isExpanded: U,
    isExpansionAnimationComplete: I,
    expansionSpring: O,
    onCtxMenuOpen: q,
    onCtxMenuClose: Z,
    onCtxMenuSelect: k,
    quest: P,
    useReducedMotion: Q
  } = e, w = s.useRef(null), L = (0, l.e7)([x.Z], () => x.Z.isEnrolling(P.id), [P]), W = (0, m.B6)(P.config.expiresAt), D = s.useMemo(() => (0, f.nP)(P.config.assets.questBarHero), [P]), H = s.useCallback(() => {
    (0, p.AH)(P.id, {
      questContent: g.jn.QUEST_BAR_V2,
      questContentCTA: u.jZ.ACCEPT_QUEST
    })
  }, [P]), {
    primaryVariant: V
  } = C.u.useExperiment({
    location: R.dr.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), z = (null === (n = P.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, G = (0, m.Rf)({
    quest: P,
    location: R.dr.QUESTS_BAR
  }), F = G.percentComplete > 0, K = U && I, Y = s.useMemo(() => (0, f.$J)(P), [P]), X = (0, f.ph)(P), $ = (0, f.pG)({
    quest: P,
    location: R.dr.QUESTS_BAR,
    useV2Variants: V === C.P.V2 || (0, b.a)(P),
    taskDetails: G
  });
  return (0, o.jsx)("div", {
    "aria-hidden": !K,
    className: a()(r, M.contentExpanded, {
      [M.contentInteractable]: K,
      [M.contentExpandedAccepted]: z
    }),
    children: z ? (0, o.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: t,
      children: [(0, o.jsxs)("div", {
        className: M.questAcceptedHeader,
        children: [(0, o.jsx)(c.Text, {
          variant: "text-xxs/medium",
          className: a()(M.flex, M.headerText),
          children: y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: W
          })
        }), (0, o.jsx)(E.r, {
          onOpen: q,
          onClose: Z,
          onSelect: k,
          questContent: g.jn.QUEST_BAR_V2,
          quest: P,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, o.jsx)(c.Clickable, {
            ...e,
            className: M.submenuWrapper,
            "aria-label": y.Z.Messages.ACTIONS,
            children: (0, o.jsx)(c.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: a()(M.submenuIcon, M.interactiveNormal)
            })
          })
        })]
      }), (0, o.jsx)("div", {
        className: M.divider
      }), (0, o.jsx)(j.Z, {
        progressBarRef: w,
        quest: P,
        isExpanded: U
      }), (0, o.jsx)(B.Z, {
        quest: P,
        progressBarRef: w,
        isExpanded: !0
      }), (0, v.r)(P) && (0, o.jsx)(S.Z, {
        style: {
          marginTop: 8
        }
      }), Y && (0, o.jsx)(A.Z, {
        quest: P
      }), (0, o.jsx)(T.n, {
        children: (0, o.jsx)(N.y, {
          quest: P,
          useReducedMotion: Q,
          isExpanded: U,
          hasMadeProgress: F
        })
      })]
    }) : (0, o.jsxs)("div", {
      children: [(0, o.jsxs)("div", {
        className: M.questPromoContent,
        ref: t,
        children: [(0, o.jsxs)("div", {
          className: M.details,
          children: [(0, o.jsx)(h.Z, {
            className: M.rewardTile,
            learnMoreStyle: "text",
            quest: P,
            questContent: g.jn.QUEST_BAR_V2
          }), (0, o.jsx)(c.Heading, {
            className: M.title,
            variant: "heading-md/medium",
            children: y.Z.Messages.QUESTS_TITLE.format({
              questName: P.config.messages.questName
            })
          }), (0, o.jsx)(c.Text, {
            className: M.description,
            variant: "text-xs/normal",
            children: $
          })]
        }), (0, o.jsx)(c.Button, {
          className: M.cta,
          color: c.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: K ? H : void 0,
          size: c.Button.Sizes.SMALL,
          submitting: L,
          children: y.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, o.jsxs)(i.animated.div, {
        className: M.heroAssetWrapper,
        style: {
          backdropFilter: O.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
          filter: O.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
        },
        children: [(0, o.jsx)(i.animated.div, {
          className: M.heroAssetDarken,
          style: {
            opacity: O.to([0, 1], [1, 0])
          }
        }), (0, o.jsx)(i.animated.div, {
          className: M.heroAssetTint,
          style: {
            backgroundColor: P.config.colors.primary,
            opacity: O.to([0, 1], [1, 0])
          }
        }), D ? (0, o.jsx)(_.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, o.jsx)(d.Z, {
            ref: e,
            autoPlay: !Q,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: M.heroAsset,
            controls: !1,
            children: (0, o.jsx)("source", {
              src: X,
              type: (0, f.mN)(X)
            })
          })
        }) : (0, o.jsx)(_.Fl, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, o.jsx)("img", {
            ref: e,
            alt: "",
            className: M.heroAsset,
            src: X
          })
        }), (0, o.jsx)(i.animated.div, {
          className: M.legibilityGradient,
          style: {
            opacity: O.to({
              range: [0, 1],
              output: [0, 1]
            })
          }
        })]
      })]
    })
  })
});
t.Z = U