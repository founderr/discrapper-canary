"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("289987"),
  u = s("481060"),
  d = s("808268"),
  c = s("810090"),
  E = s("617136"),
  _ = s("272008"),
  f = s("113434"),
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
  v = s("205511"),
  R = s("95985"),
  O = s("658590"),
  L = s("46140"),
  M = s("689938"),
  y = s("263094");
let D = n.forwardRef(function(e, t) {
  var s;
  let {
    className: l,
    isExpanded: D,
    isExpansionAnimationComplete: b,
    onCtxMenuOpen: j,
    onCtxMenuClose: U,
    onCtxMenuSelect: P,
    onContentHeightChange: G,
    quest: V,
    useReducedMotion: B
  } = e, H = n.useRef(null), F = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(V.id), [V]), k = (0, f.useQuestFormattedDate)(V.config.expiresAt), w = n.useMemo(() => (0, m.isAssetAnimated)(V.config.assets.questBarHero), [V]), Q = n.useCallback(() => {
    (0, _.enrollInQuest)(V.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [V]), Y = n.useCallback(() => {
    (0, m.openGameLink)(V, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: E.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [V]), q = n.useCallback(() => {
    (0, S.openDisclosureModal)(V, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: E.QuestContentCTA.OPEN_DISCLOSURE
    })
  }, [V]), {
    primaryVariant: W
  } = T.QuestBarExperiment.useExperiment({
    location: L.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), z = (null === (s = V.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, Z = (0, f.useQuestTaskDetails)({
    quest: V,
    location: L.QuestsExperimentLocations.QUESTS_BAR
  }), K = Z.percentComplete > 0, X = D && b, J = n.useMemo(() => (0, m.isConsoleQuest)(V), [V]), $ = (0, m.getQuestBarHeroAssetUrl)(V), ee = (0, m.getQuestsInstructionsToWinReward)({
    quest: V,
    location: L.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: W === T.QuestBarExperimentVariants.V2 || (0, O.shouldForceQuestBarV2)(V),
    taskDetails: Z
  });
  return (0, a.jsx)("div", {
    "aria-hidden": !X,
    className: i()(l, y.contentExpanded, {
      [y.contentInteractable]: X,
      [y.contentExpandedAccepted]: z
    }),
    children: z ? (0, a.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: y.questAcceptedHeader,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xxs/medium",
          className: i()(y.flex, y.headerText),
          children: M.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: k
          })
        }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
          onOpen: j,
          onClose: U,
          onSelect: P,
          questContent: C.QuestContent.QUEST_BAR,
          quest: V,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: y.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: i()(y.submenuIcon, y.interactiveNormal)
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: y.divider
      }), (0, a.jsx)(x.default, {
        progressBarRef: H,
        quest: V,
        isExpanded: D
      }), (0, a.jsx)(R.default, {
        quest: V,
        progressBarRef: H,
        isExpanded: !0
      }), J && (0, a.jsx)(v.default, {
        onContentHeightChange: G,
        quest: V
      }), (0, a.jsx)(I.QuestBarV2BottomCta, {
        quest: V,
        useReducedMotion: B,
        isExpanded: D,
        hasMadeProgress: K
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: y.utils,
          children: [(0, a.jsx)(u.Clickable, {
            className: y.promotedBadge,
            onClick: Y,
            children: (0, a.jsx)(g.default, {
              quest: V,
              withGameTile: !1
            })
          }), (0, a.jsx)("div", {
            className: y.promotedBadgeWrapper,
            children: (0, a.jsxs)(u.Clickable, {
              className: y.promotedBadge,
              onClick: q,
              children: [(0, a.jsx)(u.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                children: M.default.Messages.QUESTS_PROMOTED
              }), (0, a.jsx)(o.CircleQuestionIcon, {
                color: u.tokens.colors.WHITE,
                className: y.promotedBadgeIcon
              })]
            })
          }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
            onOpen: j,
            onClose: U,
            onSelect: P,
            questContent: C.QuestContent.QUEST_BAR,
            quest: V,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: y.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: i()(y.submenuIcon, y.white)
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: y.details,
          children: [(0, a.jsx)(A.default, {
            className: y.rewardTile,
            learnMoreStyle: "text",
            quest: V,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: y.title,
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: V.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: y.description,
            variant: "text-xs/normal",
            children: ee
          })]
        }), (0, a.jsx)(u.Button, {
          className: y.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: X ? Q : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: F,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: y.heroAssetWrapper,
        children: w ? (0, a.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !B,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: $,
              type: (0, m.getVideoAssetMimeType)($)
            })
          })
        }) : (0, a.jsx)(p.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
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
t.default = D