"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("808268"),
  c = n("810090"),
  f = n("617136"),
  E = n("272008"),
  _ = n("113434"),
  h = n("569984"),
  C = n("497505"),
  S = n("918701"),
  m = n("340100"),
  I = n("611855"),
  p = n("644646"),
  T = n("78826"),
  g = n("670638"),
  A = n("667105"),
  N = n("689938"),
  R = n("881521");
let O = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: O,
    expansionSpring: v,
    isExpanded: L,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: M,
    onCtxMenuClose: y,
    onCtxMenuSelect: D,
    quest: x,
    useReducedMotion: b
  } = e, U = (0, o.useStateFromStores)([h.default], () => h.default.isEnrolling(x.id), [x]), G = (0, _.useQuestFormattedDate)(x.config.expiresAt), j = (0, _.useQuestFormattedDate)(x.config.rewardCodeExpiresAt), w = s.useMemo(() => (0, S.isAssetAnimated)(x.config.assets.questBarHero), [x]), k = s.useCallback(() => {
    (0, E.enrollInQuest)(x.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [x]), F = (0, A.useHandleClaimQuestsReward)({
    quest: x,
    location: C.QuestContent.QUEST_BAR
  }), B = (null === (n = x.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, H = (null === (l = x.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, V = L && P, Y = (0, S.getQuestBarHeroAssetUrl)(x);
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !V,
    className: i()(O, R.contentExpanded, {
      [R.contentInteractable]: V
    }),
    style: {
      opacity: v.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: B ? (0, a.jsxs)("div", {
      className: R.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: R.utils,
        children: [(0, a.jsxs)("div", {
          className: R.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.QuestsAsset, {
            id: "QuestsBarContentExpanded_rewardTile",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: x.config.messages.rewardName,
              className: R.questProgressRewardTile,
              src: (0, S.getRewardAssetUrl)(x)
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(x)
            }), (0, a.jsx)(u.Text, {
              className: R.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: j
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: G
              })
            })]
          })]
        }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: y,
          onSelect: D,
          questContent: C.QuestContent.QUEST_BAR,
          quest: x,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: R.submenuWrapper,
            "aria-label": N.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: R.submenuIcon
            })
          })
        })]
      }), H ? (0, a.jsx)(u.Button, {
        className: i()(R.cta, R.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: F,
        size: u.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: R.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: x.config.messages.gameTitle,
          streamingDurationRequirement: x.config.streamDurationRequirementMinutes,
          questReward: x.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(m.default, {
        quest: x
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: R.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: R.utils,
          children: [(0, a.jsx)(I.default, {
            color: "always-white"
          }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: y,
            onSelect: D,
            questContent: C.QuestContent.QUEST_BAR,
            quest: x,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: R.submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: R.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: R.details,
          children: [(0, a.jsx)(p.default, {
            className: R.rewardTile,
            quest: x,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: R.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: x.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: R.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: x.config.messages.gameTitle,
              streamingDurationRequirement: x.config.streamDurationRequirementMinutes,
              questReward: x.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(u.Button, {
          className: R.cta,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: V ? k : void 0,
          size: u.Button.Sizes.NONE,
          submitting: U,
          children: N.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: R.heroAssetWrapper,
        style: {
          color: x.config.colors.secondary
        },
        children: w ? (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !b,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: R.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: Y,
              type: (0, S.getVideoAssetMimeType)(Y)
            })
          })
        }) : (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: R.heroAsset,
            src: Y
          })
        })
      })]
    })
  })
});
t.default = O