var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(920906),
  i = n(442837),
  c = n(481060),
  u = n(810090),
  d = n(617136),
  p = n(272008),
  x = n(113434),
  m = n(569984),
  g = n(497505),
  h = n(918701),
  C = n(988303),
  f = n(644646),
  E = n(78826),
  S = n(670638),
  v = n(330039),
  T = n(693900),
  j = n(524824),
  N = n(164495),
  _ = n(759853),
  A = n(205511),
  B = n(95985),
  R = n(658590),
  y = n(46140),
  M = n(689938),
  O = n(308596);
let U = o.forwardRef(function(e, t) {
  var n;
  let {
    className: r,
    isExpanded: U,
    isExpansionAnimationComplete: Z,
    expansionSpring: b,
    onCtxMenuOpen: Q,
    onCtxMenuClose: I,
    onCtxMenuSelect: P,
    quest: k,
    useReducedMotion: L
  } = e, q = o.useRef(null), w = (0, i.e7)([m.Z], () => m.Z.isEnrolling(k.id), [k]), H = (0, x.B6)(k.config.expiresAt), V = o.useMemo(() => (0, h.nP)(k.config.assets.questBarHero), [k]), D = o.useCallback(() => {
    (0, p.AH)(k.id, {
      questContent: g.jn.QUEST_BAR_V2,
      questContentCTA: d.jZ.ACCEPT_QUEST
    })
  }, [k]), {
    primaryVariant: W
  } = C.u.useExperiment({
    location: y.dr.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), z = (null === (n = k.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, G = (0, x.Rf)({
    quest: k,
    location: y.dr.QUESTS_BAR
  }), F = G.percentComplete > 0, K = U && Z, Y = o.useMemo(() => (0, h.$J)(k), [k]), X = (0, h.ph)(k), $ = (0, h.pG)({
    quest: k,
    location: y.dr.QUESTS_BAR,
    useV2Variants: W === C.P.V2 || (0, R.a)(k),
    taskDetails: G
  });
  return (0, s.jsx)("div", {
    "aria-hidden": !K,
    className: a()(r, O.contentExpanded, {
      [O.contentInteractable]: K,
      [O.contentExpandedAccepted]: z
    }),
    children: z ? (0, s.jsxs)("div", {
      className: O.questAcceptedContent,
      ref: t,
      children: [(0, s.jsxs)("div", {
        className: O.questAcceptedHeader,
        children: [(0, s.jsx)(c.Text, {
          variant: "text-xxs/medium",
          className: a()(O.flex, O.headerText),
          children: M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: H
          })
        }), (0, s.jsx)(S.r, {
          onOpen: Q,
          onClose: I,
          onSelect: P,
          questContent: g.jn.QUEST_BAR_V2,
          quest: k,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(c.Clickable, {
            ...e,
            className: O.submenuWrapper,
            "aria-label": M.Z.Messages.ACTIONS,
            children: (0, s.jsx)(c.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: a()(O.submenuIcon, O.interactiveNormal)
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: O.divider
      }), (0, s.jsx)(_.Z, {
        progressBarRef: q,
        quest: k,
        isExpanded: U
      }), (0, s.jsx)(B.Z, {
        quest: k,
        progressBarRef: q,
        isExpanded: !0
      }), (0, j.r)(k) && (0, s.jsx)(v.Z, {
        style: {
          marginTop: 8
        }
      }), Y && (0, s.jsx)(A.Z, {
        quest: k
      }), (0, s.jsx)(T.n, {
        children: (0, s.jsx)(N.y, {
          quest: k,
          useReducedMotion: L,
          isExpanded: U,
          hasMadeProgress: F
        })
      })]
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.details,
          children: [(0, s.jsx)(f.Z, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: k,
            questContent: g.jn.QUEST_BAR_V2
          }), (0, s.jsx)(c.Heading, {
            className: O.title,
            variant: "heading-md/medium",
            children: M.Z.Messages.QUESTS_TITLE.format({
              questName: k.config.messages.questName
            })
          }), (0, s.jsx)(c.Text, {
            className: O.description,
            variant: "text-xs/normal",
            children: $
          })]
        }), (0, s.jsx)(c.Button, {
          className: O.cta,
          color: c.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: K ? D : void 0,
          size: c.Button.Sizes.SMALL,
          submitting: w,
          children: M.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsxs)(l.animated.div, {
        className: O.heroAssetWrapper,
        style: {
          backdropFilter: b.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
          filter: b.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
        },
        children: [(0, s.jsx)(l.animated.div, {
          className: O.heroAssetDarken,
          style: {
            opacity: b.to([0, 1], [1, 0])
          }
        }), (0, s.jsx)(l.animated.div, {
          className: O.heroAssetTint,
          style: {
            backgroundColor: k.config.colors.primary,
            opacity: b.to([0, 1], [1, 0])
          }
        }), V ? (0, s.jsx)(E.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(u.Z, {
            ref: e,
            autoPlay: !L,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: X,
              type: (0, h.mN)(X)
            })
          })
        }) : (0, s.jsx)(E.Fl, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: X
          })
        }), (0, s.jsx)(l.animated.div, {
          className: O.legibilityGradient,
          style: {
            opacity: b.to({
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