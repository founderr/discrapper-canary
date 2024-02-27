"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("433487"),
  c = n("58608"),
  f = n("815496"),
  E = n("448881"),
  h = n("879364"),
  _ = n("2973"),
  C = n("588025"),
  I = n("227231"),
  S = n("315130"),
  m = n("228399"),
  p = n("45198"),
  T = n("275986"),
  g = n("385416"),
  A = n("782340"),
  N = n("841274");
let R = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: R,
    expansionFactor: O,
    isExpanded: v,
    isExpansionAnimationComplete: L,
    onCtxMenuOpen: M,
    onCtxMenuClose: P,
    onCtxMenuSelect: D,
    quest: y,
    useReducedMotion: x
  } = e, b = (0, o.useStateFromStores)([_.default], () => _.default.isEnrolling(y.id), [y]), U = (0, h.useQuestFormattedDate)(y.config.expiresAt), G = (0, h.useQuestFormattedDate)(y.config.rewardCodeExpiresAt), j = s.useMemo(() => y.config.videoAssets.includes(C.QuestContent.QUEST_BAR), [y]), w = s.useCallback(() => {
    (0, E.enrollInQuest)(y.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [y]), k = (0, g.useHandleClaimQuestsReward)({
    quest: y,
    location: C.QuestContent.QUEST_BAR
  }), F = (null === (n = y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, B = (null === (l = y.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !v && L,
    className: i(R, N.contentExpanded),
    style: {
      opacity: O.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: F ? (0, a.jsxs)("div", {
      className: N.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: N.utils,
        children: [(0, a.jsxs)("div", {
          className: N.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: y.config.messages.rewardName,
            className: N.questProgressRewardTile,
            src: (0, I.getRewardAssetUrl)(y.id)
          }), (0, a.jsxs)("div", {
            className: N.questAcceptedContentCopy,
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, I.getContextualEntrypointHeading)(y)
            }), (0, a.jsx)(u.Text, {
              className: N.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: B ? A.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: P,
          onSelect: D,
          questContent: C.QuestContent.QUEST_BAR,
          quest: y,
          shouldShowDisclosure: !1,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: N.submenuWrapper,
            children: (0, a.jsx)(d.default, {
              className: N.submenuIcon
            })
          })
        })]
      }), B ? (0, a.jsx)(u.Button, {
        className: i(N.cta, N.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: k,
        size: u.Button.Sizes.NONE,
        children: A.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: N.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: y.config.messages.gameTitle,
          streamingDurationRequirement: y.config.streamDurationRequirementMinutes,
          questReward: y.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(S.default, {
        quest: y
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: N.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: N.utils,
          children: [(0, a.jsx)(p.default, {
            color: "always-white"
          }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: P,
            onSelect: D,
            questContent: C.QuestContent.QUEST_BAR,
            quest: y,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: N.submenuWrapper,
              children: (0, a.jsx)(d.default, {
                className: N.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: N.details,
          children: [(0, a.jsx)(m.default, {
            className: N.rewardTile,
            quest: y,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: N.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: A.default.Messages.QUESTS_TITLE.format({
              questName: y.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: N.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: y.config.messages.gameTitle,
              streamingDurationRequirement: y.config.streamDurationRequirementMinutes,
              questReward: y.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: N.ctaWrapper,
          children: (0, a.jsx)(u.Button, {
            className: N.cta,
            color: u.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: w,
            size: u.Button.Sizes.NONE,
            submitting: b,
            children: A.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: N.heroAssetWrapper,
        style: {
          color: y.config.colors.primary
        },
        children: (0, a.jsx)(c.default, {
          autoPlay: !x,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: N.heroAsset,
          controls: !1,
          poster: (0, I.getQuestBarStaticHeroAssetUrl)(y.id),
          children: x || !j ? null : (0, a.jsx)("source", {
            src: (0, I.getQuestBarAnimatedHeroAssetUrl)(y.id),
            type: "video/webm"
          })
        }, x ? "static" : "animated")
      })]
    })
  })
});
var O = R