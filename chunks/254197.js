"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("442837"),
  u = s("481060"),
  d = s("808268"),
  c = s("810090"),
  E = s("617136"),
  f = s("272008"),
  _ = s("113434"),
  h = s("569984"),
  m = s("497505"),
  C = s("918701"),
  T = s("988303"),
  g = s("644646"),
  p = s("78826"),
  A = s("670638"),
  N = s("164495"),
  S = s("759853"),
  I = s("205511"),
  x = s("95985"),
  R = s("658590"),
  v = s("46140"),
  M = s("689938"),
  O = s("263094");
let L = a.forwardRef(function(e, t) {
  var s;
  let {
    className: l,
    isExpanded: L,
    isExpansionAnimationComplete: y,
    expansionSpring: b,
    onCtxMenuOpen: D,
    onCtxMenuClose: j,
    onCtxMenuSelect: U,
    onContentHeightChange: P,
    quest: B,
    useReducedMotion: G
  } = e, V = a.useRef(null), H = (0, o.useStateFromStores)([h.default], () => h.default.isEnrolling(B.id), [B]), F = (0, _.useQuestFormattedDate)(B.config.expiresAt), k = a.useMemo(() => (0, C.isAssetAnimated)(B.config.assets.questBarHero), [B]), w = a.useCallback(() => {
    (0, f.enrollInQuest)(B.id, {
      questContent: m.QuestContent.QUEST_BAR,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [B]), {
    primaryVariant: Q
  } = T.QuestBarExperiment.useExperiment({
    location: v.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), Y = (null === (s = B.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, q = (0, _.useQuestTaskDetails)({
    quest: B,
    location: v.QuestsExperimentLocations.QUESTS_BAR
  }), W = q.percentComplete > 0, z = L && y, Z = a.useMemo(() => (0, C.isConsoleQuest)(B), [B]), K = (0, C.getQuestBarHeroAssetUrl)(B), X = (0, C.getQuestsInstructionsToWinReward)({
    quest: B,
    location: v.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: Q === T.QuestBarExperimentVariants.V2 || (0, R.shouldForceQuestBarV2)(B),
    taskDetails: q
  });
  return (0, n.jsx)("div", {
    "aria-hidden": !z,
    className: i()(l, O.contentExpanded, {
      [O.contentInteractable]: z,
      [O.contentExpandedAccepted]: Y
    }),
    children: Y ? (0, n.jsxs)("div", {
      className: O.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: O.questAcceptedHeader,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: i()(O.flex, O.headerText),
          children: M.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: F
          })
        }), (0, n.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: D,
          onClose: j,
          onSelect: U,
          questContent: m.QuestContent.QUEST_BAR,
          quest: B,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(u.Clickable, {
            ...e,
            className: O.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, n.jsx)(d.default, {
              className: i()(O.submenuIcon, O.interactiveNormal)
            })
          })
        })]
      }), (0, n.jsx)("div", {
        className: O.divider
      }), (0, n.jsx)(S.default, {
        progressBarRef: V,
        quest: B,
        isExpanded: L
      }), (0, n.jsx)(x.default, {
        quest: B,
        progressBarRef: V,
        isExpanded: !0
      }), Z && (0, n.jsx)(I.default, {
        onContentHeightChange: P,
        quest: B
      }), (0, n.jsx)(N.QuestBarV2BottomCta, {
        quest: B,
        useReducedMotion: G,
        isExpanded: L,
        hasMadeProgress: W
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: O.details,
          children: [(0, n.jsx)(g.default, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: B,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, n.jsx)(u.Heading, {
            className: O.title,
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: B.config.messages.questName
            })
          }), (0, n.jsx)(u.Text, {
            className: O.description,
            variant: "text-xs/normal",
            children: X
          })]
        }), (0, n.jsx)(u.Button, {
          className: O.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: z ? w : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: H,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsxs)(r.animated.div, {
        className: O.heroAssetWrapper,
        style: {
          backdropFilter: b.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
          filter: b.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
        },
        children: [(0, n.jsx)(r.animated.div, {
          className: O.heroAssetDarken,
          style: {
            opacity: b.to([0, 1], [1, 0])
          }
        }), (0, n.jsx)(r.animated.div, {
          className: O.heroAssetTint,
          style: {
            backgroundColor: B.config.colors.primary,
            opacity: b.to([0, 1], [1, 0])
          }
        }), k ? (0, n.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(c.default, {
            ref: e,
            autoPlay: !G,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: K,
              type: (0, C.getVideoAssetMimeType)(K)
            })
          })
        }) : (0, n.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: K
          })
        }), (0, n.jsx)(r.animated.div, {
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
t.default = L