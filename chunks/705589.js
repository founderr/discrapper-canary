"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("915639"),
  c = n("433487"),
  f = n("58608"),
  E = n("448881"),
  h = n("2973"),
  _ = n("588025"),
  C = n("227231"),
  I = n("315130"),
  S = n("228399"),
  m = n("45198"),
  p = n("275986"),
  T = n("686098"),
  g = n("782340"),
  A = n("841274");
let N = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: N,
    expansionFactor: R,
    isExpanded: O,
    isExpansionAnimationComplete: v,
    onCtxMenuOpen: L,
    onCtxMenuClose: M,
    onCtxMenuSelect: P,
    quest: D,
    useReducedMotion: y
  } = e, x = (0, o.useStateFromStores)([h.default], () => h.default.isEnrolling(D.id), [D]), b = (0, o.useStateFromStores)([d.default], () => d.default.locale), U = s.useMemo(() => new Date(D.config.expiresAt).toLocaleDateString(b, {
    dateStyle: "long"
  }), [D.config.expiresAt, b]), G = s.useMemo(() => D.config.videoAssets.includes(_.QuestContent.QUEST_BAR), [D]), j = s.useCallback(() => {
    (0, E.enrollInQuest)(D.id, _.QuestContent.QUEST_BAR)
  }, [D]), w = (0, T.useHandleClaimQuestsReward)(D, _.QuestContent.QUEST_BAR), k = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, F = (null === (l = D.userStatus) || void 0 === l ? void 0 : l.completedAt) != null;
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !O && v,
    className: i(N, A.contentExpanded),
    style: {
      opacity: R.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: k ? (0, a.jsxs)("div", {
      className: A.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: A.utils,
        children: [(0, a.jsxs)("div", {
          className: A.questAcceptedContentHeading,
          children: [(0, a.jsx)("img", {
            alt: D.config.messages.rewardName,
            className: A.questProgressRewardTile,
            src: (0, C.getRewardAssetUrl)(D.id)
          }), (0, a.jsxs)("div", {
            className: A.questAcceptedContentCopy,
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, C.getContextualEntrypointHeading)(D)
            }), (0, a.jsx)(u.Text, {
              className: A.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: F ? g.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: U
              }) : g.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), (0, a.jsx)(p.QuestsEntryContextMenuPopout, {
          onOpen: L,
          onClose: M,
          onSelect: P,
          questContent: _.QuestContent.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: A.submenuWrapper,
            children: (0, a.jsx)(c.default, {
              className: A.submenuIcon
            })
          })
        })]
      }), F ? (0, a.jsx)(u.Button, {
        className: i(A.cta, A.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: w,
        size: u.Button.Sizes.NONE,
        children: g.default.Messages.QUESTS_CLAIM_YOUR_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: A.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: g.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: D.config.messages.gameTitle,
          streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
          questReward: D.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(I.default, {
        quest: D
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: A.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: A.utils,
          children: [(0, a.jsx)(m.default, {
            color: "always-white"
          }), (0, a.jsx)(p.QuestsEntryContextMenuPopout, {
            onOpen: L,
            onClose: M,
            onSelect: P,
            questContent: _.QuestContent.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: A.submenuWrapper,
              children: (0, a.jsx)(c.default, {
                className: A.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: A.details,
          children: [(0, a.jsx)(S.default, {
            className: A.rewardTile,
            quest: D
          }), (0, a.jsx)(u.Heading, {
            className: A.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: g.default.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: A.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: g.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: D.config.messages.gameTitle,
              streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
              questReward: D.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)("div", {
          className: A.ctaWrapper,
          children: (0, a.jsx)(u.Button, {
            className: A.cta,
            color: u.Button.Colors.CUSTOM,
            fullWidth: !0,
            onClick: j,
            size: u.Button.Sizes.NONE,
            submitting: x,
            children: g.default.Messages.QUESTS_ACCEPT_QUEST
          })
        })]
      }), (0, a.jsx)("div", {
        className: A.heroAssetWrapper,
        style: {
          color: D.config.colors.primary
        },
        children: (0, a.jsx)(f.default, {
          autoPlay: !y,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: A.heroAsset,
          controls: !1,
          poster: (0, C.getQuestBarStaticHeroAssetUrl)(D.id),
          children: y || !G ? null : (0, a.jsx)("source", {
            src: (0, C.getQuestBarAnimatedHeroAssetUrl)(D.id),
            type: "video/webm"
          })
        }, y ? "static" : "animated")
      })]
    })
  })
});
var R = N