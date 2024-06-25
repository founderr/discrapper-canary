var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(920906),
  i = n(442837),
  c = n(481060),
  u = n(810090),
  d = n(617136),
  p = n(272008),
  x = n(113434),
  m = n(569984),
  g = n(497505),
  C = n(918701),
  h = n(988303),
  S = n(644646),
  E = n(78826),
  f = n(670638),
  v = n(330039),
  T = n(489459),
  N = n(524824),
  j = n(164495),
  _ = n(759853),
  A = n(205511),
  B = n(95985),
  R = n(658590),
  M = n(46140),
  y = n(689938),
  O = n(308596);
let U = o.forwardRef(function(e, t) {
  var n;
  let {
    className: a,
    isExpanded: U,
    isExpansionAnimationComplete: b,
    expansionSpring: Z,
    onCtxMenuOpen: Q,
    onCtxMenuClose: I,
    onCtxMenuSelect: k,
    onContentHeightChange: P,
    quest: L,
    useReducedMotion: q
  } = e, w = o.useRef(null), H = (0, i.e7)([m.Z], () => m.Z.isEnrolling(L.id), [L]), V = (0, x.B6)(L.config.expiresAt), D = o.useMemo(() => (0, C.nP)(L.config.assets.questBarHero), [L]), W = o.useCallback(() => {
    (0, p.AH)(L.id, {
      questContent: g.jn.QUEST_BAR_V2,
      questContentCTA: d.jZ.ACCEPT_QUEST
    })
  }, [L]), {
    primaryVariant: z
  } = h.u.useExperiment({
    location: M.dr.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), G = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, F = (0, x.Rf)({
    quest: L,
    location: M.dr.QUESTS_BAR
  }), K = F.percentComplete > 0, Y = U && b, X = o.useMemo(() => (0, C.$J)(L), [L]), $ = (0, C.ph)(L), J = (0, C.pG)({
    quest: L,
    location: M.dr.QUESTS_BAR,
    useV2Variants: z === h.P.V2 || (0, R.a)(L),
    taskDetails: F
  });
  return (0, s.jsx)("div", {
    "aria-hidden": !Y,
    className: r()(a, O.contentExpanded, {
      [O.contentInteractable]: Y,
      [O.contentExpandedAccepted]: G
    }),
    children: G ? (0, s.jsx)(T.m, {
      onContentHeightChange: P,
      children: (0, s.jsxs)("div", {
        className: O.questAcceptedContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.questAcceptedHeader,
          children: [(0, s.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: r()(O.flex, O.headerText),
            children: y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: V
            })
          }), (0, s.jsx)(f.r, {
            onOpen: Q,
            onClose: I,
            onSelect: k,
            questContent: g.jn.QUEST_BAR_V2,
            quest: L,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, s.jsx)(c.Clickable, {
              ...e,
              className: O.submenuWrapper,
              "aria-label": y.Z.Messages.ACTIONS,
              children: (0, s.jsx)(c.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: r()(O.submenuIcon, O.interactiveNormal)
              })
            })
          })]
        }), (0, s.jsx)("div", {
          className: O.divider
        }), (0, s.jsx)(_.Z, {
          progressBarRef: w,
          quest: L,
          isExpanded: U
        }), (0, s.jsx)(B.Z, {
          quest: L,
          progressBarRef: w,
          isExpanded: !0
        }), (0, N.r)(L) && (0, s.jsx)(v.Z, {
          style: {
            marginTop: 8
          }
        }), X && (0, s.jsx)(A.Z, {
          quest: L
        }), (0, s.jsx)(j.y, {
          quest: L,
          useReducedMotion: q,
          isExpanded: U,
          hasMadeProgress: K
        })]
      })
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.details,
          children: [(0, s.jsx)(S.Z, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: L,
            questContent: g.jn.QUEST_BAR_V2
          }), (0, s.jsx)(c.Heading, {
            className: O.title,
            variant: "heading-md/medium",
            children: y.Z.Messages.QUESTS_TITLE.format({
              questName: L.config.messages.questName
            })
          }), (0, s.jsx)(c.Text, {
            className: O.description,
            variant: "text-xs/normal",
            children: J
          })]
        }), (0, s.jsx)(c.Button, {
          className: O.cta,
          color: c.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: Y ? W : void 0,
          size: c.Button.Sizes.SMALL,
          submitting: H,
          children: y.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsxs)(l.animated.div, {
        className: O.heroAssetWrapper,
        style: {
          backdropFilter: Z.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
          filter: Z.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
        },
        children: [(0, s.jsx)(l.animated.div, {
          className: O.heroAssetDarken,
          style: {
            opacity: Z.to([0, 1], [1, 0])
          }
        }), (0, s.jsx)(l.animated.div, {
          className: O.heroAssetTint,
          style: {
            backgroundColor: L.config.colors.primary,
            opacity: Z.to([0, 1], [1, 0])
          }
        }), D ? (0, s.jsx)(E.Fl, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(u.Z, {
            ref: e,
            autoPlay: !q,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: $,
              type: (0, C.mN)($)
            })
          })
        }) : (0, s.jsx)(E.Fl, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: $
          })
        }), (0, s.jsx)(l.animated.div, {
          className: O.legibilityGradient,
          style: {
            opacity: Z.to({
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