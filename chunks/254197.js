"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("289987"),
  u = a("481060"),
  d = a("808268"),
  c = a("810090"),
  f = a("617136"),
  E = a("272008"),
  h = a("113434"),
  _ = a("569984"),
  C = a("497505"),
  m = a("918701"),
  S = a("977156"),
  p = a("685613"),
  I = a("340100"),
  g = a("644646"),
  T = a("78826"),
  A = a("670638"),
  N = a("667105"),
  v = a("46140"),
  R = a("689938"),
  L = a("844256");
let O = s.forwardRef(function(e, t) {
  var a, l;
  let {
    className: O,
    isExpanded: M,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: x,
    onCtxMenuClose: y,
    onCtxMenuSelect: D,
    quest: b,
    useReducedMotion: U
  } = e, j = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(b.id), [b]), G = (0, h.useQuestFormattedDate)(b.config.expiresAt), w = (0, h.useQuestFormattedDate)(b.config.rewardCodeExpiresAt), k = s.useMemo(() => (0, m.isAssetAnimated)(b.config.assets.questBarHero), [b]), B = s.useCallback(() => {
    (0, E.enrollInQuest)(b.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [b]), F = (0, N.useHandleClaimQuestsReward)({
    quest: b,
    location: C.QuestContent.QUEST_BAR
  }), {
    primaryVariant: H
  } = S.QuestBarExperiment.useExperiment({
    location: v.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), V = (null === (a = b.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null, Y = (null === (l = b.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, W = M && P, K = (0, m.getQuestBarHeroAssetUrl)(b), z = (0, m.getQuestsInstructionsToWinReward)({
    quest: b,
    useV2Variants: H === S.QuestBarExperimentVariants.V2
  });
  return (0, n.jsx)("div", {
    "aria-hidden": !W,
    className: i()(O, L.contentExpanded, {
      [L.contentInteractable]: W
    }),
    children: V ? (0, n.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: L.utils,
        children: [(0, n.jsxs)("div", {
          className: L.questAcceptedContentHeading,
          children: [(0, n.jsx)(g.default, {
            className: L.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: b,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(b)
            }), (0, n.jsx)(u.Text, {
              className: L.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Y ? R.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: w
              }) : R.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: G
              })
            })]
          })]
        }), (0, n.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: x,
          onClose: y,
          onSelect: D,
          questContent: C.QuestContent.QUEST_BAR,
          quest: b,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(u.Clickable, {
            ...e,
            className: L.submenuWrapper,
            "aria-label": R.default.Messages.ACTIONS,
            children: (0, n.jsx)(d.default, {
              className: L.submenuIcon
            })
          })
        })]
      }), Y ? (0, n.jsx)(u.Button, {
        className: i()(L.cta, L.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: F,
        size: u.Button.Sizes.NONE,
        children: R.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, n.jsx)(u.Text, {
        className: L.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: z
      }), (0, n.jsx)(I.default, {
        quest: b
      })]
    }) : (0, n.jsxs)("div", {
      className: L.questUnacceptedContent,
      children: [(0, n.jsxs)("div", {
        className: L.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: L.utils,
          children: [(0, n.jsx)(p.default, {
            className: L.partnerBranding,
            quest: b,
            withGameTile: !1
          }), (0, n.jsx)("div", {
            className: L.promotedBadgeWrapper,
            children: (0, n.jsxs)(u.Clickable, {
              className: L.promotedBadge,
              children: [(0, n.jsx)(u.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                children: R.default.Messages.QUESTS_PROMOTED
              }), (0, n.jsx)(o.CircleQuestionIcon, {
                color: u.tokens.colors.WHITE,
                className: L.promotedBadgeIcon
              })]
            })
          }), (0, n.jsx)(A.QuestsEntryContextMenuPopout, {
            onOpen: x,
            onClose: y,
            onSelect: D,
            questContent: C.QuestContent.QUEST_BAR,
            quest: b,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(u.Clickable, {
              ...e,
              className: L.submenuWrapper,
              "aria-label": R.default.Messages.ACTIONS,
              children: (0, n.jsx)(d.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: L.details,
          children: [(0, n.jsx)(g.default, {
            className: L.rewardTile,
            learnMoreStyle: "text",
            quest: b,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, n.jsx)(u.Heading, {
            className: L.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: R.default.Messages.QUESTS_TITLE.format({
              questName: b.config.messages.questName
            })
          }), (0, n.jsx)(u.Text, {
            className: L.description,
            color: "always-white",
            variant: "text-xs/normal",
            children: z
          })]
        }), (0, n.jsx)(u.Button, {
          className: L.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: W ? B : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: j,
          children: R.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsx)("div", {
        className: L.heroAssetWrapper,
        children: k ? (0, n.jsx)(T.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(c.default, {
            ref: e,
            autoPlay: !U,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: K,
              type: (0, m.getVideoAssetMimeType)(K)
            })
          })
        }) : (0, n.jsx)(T.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
            ref: e,
            alt: "",
            className: L.heroAsset,
            src: K
          })
        })
      })]
    })
  })
});
t.default = O