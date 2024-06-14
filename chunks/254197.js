"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("289987"),
  u = s("481060"),
  d = s("808268"),
  c = s("810090"),
  E = s("617136"),
  f = s("272008"),
  _ = s("113434"),
  h = s("569984"),
  C = s("497505"),
  m = s("918701"),
  T = s("988303"),
  g = s("685613"),
  A = s("644646"),
  p = s("78826"),
  N = s("670638"),
  S = s("341907"),
  I = s("164495"),
  x = s("759853"),
  R = s("205511"),
  v = s("95985"),
  M = s("658590"),
  O = s("46140"),
  L = s("689938"),
  y = s("263094");
let b = a.forwardRef(function(e, t) {
  var s;
  let {
    className: l,
    isExpanded: b,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: j,
    onCtxMenuClose: U,
    onCtxMenuSelect: P,
    onContentHeightChange: B,
    quest: V,
    useReducedMotion: G
  } = e, H = a.useRef(null), F = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(V.id), [V]), k = (0, _.useQuestFormattedDate)(V.config.expiresAt), w = a.useMemo(() => (0, m.isAssetAnimated)(V.config.assets.questBarHero), [V]), Q = a.useCallback(() => {
    (0, f.enrollInQuest)(V.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [V]), Y = a.useCallback(() => {
    (0, m.openGameLink)(V, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: E.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [V]), q = a.useCallback(() => {
    (0, S.openDisclosureModal)(V, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: E.QuestContentCTA.OPEN_DISCLOSURE
    })
  }, [V]), {
    primaryVariant: W
  } = T.QuestBarExperiment.useExperiment({
    location: O.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), z = (null === (s = V.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, Z = (0, _.useQuestTaskDetails)({
    quest: V,
    location: O.QuestsExperimentLocations.QUESTS_BAR
  }), K = Z.percentComplete > 0, X = b && D, J = a.useMemo(() => (0, m.isConsoleQuest)(V), [V]), $ = (0, m.getQuestBarHeroAssetUrl)(V), ee = (0, m.getQuestsInstructionsToWinReward)({
    quest: V,
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: W === T.QuestBarExperimentVariants.V2 || (0, M.shouldForceQuestBarV2)(V),
    taskDetails: Z
  });
  return (0, n.jsx)("div", {
    "aria-hidden": !X,
    className: i()(l, y.contentExpanded, {
      [y.contentInteractable]: X,
      [y.contentExpandedAccepted]: z
    }),
    children: z ? (0, n.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: y.questAcceptedHeader,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: i()(y.flex, y.headerText),
          children: L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: k
          })
        }), (0, n.jsx)(N.QuestsEntryContextMenuPopout, {
          onOpen: j,
          onClose: U,
          onSelect: P,
          questContent: C.QuestContent.QUEST_BAR,
          quest: V,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(u.Clickable, {
            ...e,
            className: y.submenuWrapper,
            "aria-label": L.default.Messages.ACTIONS,
            children: (0, n.jsx)(d.default, {
              className: i()(y.submenuIcon, y.interactiveNormal)
            })
          })
        })]
      }), (0, n.jsx)("div", {
        className: y.divider
      }), (0, n.jsx)(x.default, {
        progressBarRef: H,
        quest: V,
        isExpanded: b
      }), (0, n.jsx)(v.default, {
        quest: V,
        progressBarRef: H,
        isExpanded: !0
      }), J && (0, n.jsx)(R.default, {
        onContentHeightChange: B,
        quest: V
      }), (0, n.jsx)(I.QuestBarV2BottomCta, {
        quest: V,
        useReducedMotion: G,
        isExpanded: b,
        hasMadeProgress: K
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: y.utils,
          children: [(0, n.jsx)(u.Clickable, {
            className: y.promotedBadge,
            onClick: Y,
            children: (0, n.jsx)(g.default, {
              quest: V,
              withGameTile: !1
            })
          }), (0, n.jsx)("div", {
            className: y.promotedBadgeWrapper,
            children: (0, n.jsxs)(u.Clickable, {
              className: y.promotedBadge,
              onClick: q,
              children: [(0, n.jsx)(u.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                children: L.default.Messages.QUESTS_PROMOTED
              }), (0, n.jsx)(o.CircleQuestionIcon, {
                color: u.tokens.colors.WHITE,
                className: y.promotedBadgeIcon
              })]
            })
          }), (0, n.jsx)(N.QuestsEntryContextMenuPopout, {
            onOpen: j,
            onClose: U,
            onSelect: P,
            questContent: C.QuestContent.QUEST_BAR,
            quest: V,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(u.Clickable, {
              ...e,
              className: y.submenuWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, n.jsx)(d.default, {
                className: i()(y.submenuIcon, y.white)
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: y.details,
          children: [(0, n.jsx)(A.default, {
            className: y.rewardTile,
            learnMoreStyle: "text",
            quest: V,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, n.jsx)(u.Heading, {
            className: y.title,
            variant: "heading-md/medium",
            children: L.default.Messages.QUESTS_TITLE.format({
              questName: V.config.messages.questName
            })
          }), (0, n.jsx)(u.Text, {
            className: y.description,
            variant: "text-xs/normal",
            children: ee
          })]
        }), (0, n.jsx)(u.Button, {
          className: y.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: X ? Q : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: F,
          children: L.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsx)("div", {
        className: y.heroAssetWrapper,
        children: w ? (0, n.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(c.default, {
            ref: e,
            autoPlay: !G,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: $,
              type: (0, m.getVideoAssetMimeType)($)
            })
          })
        }) : (0, n.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
            ref: e,
            alt: "",
            className: y.heroAsset,
            src: $
          })
        })
      })]
    })
  })
});
t.default = b