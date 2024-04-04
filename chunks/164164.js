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
  h = n("113434"),
  _ = n("569984"),
  C = n("497505"),
  m = n("918701"),
  S = n("340100"),
  I = n("611855"),
  p = n("644646"),
  T = n("78826"),
  g = n("670638"),
  A = n("667105"),
  N = n("689938"),
  v = n("881521");
let R = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: R,
    expansionSpring: O,
    isExpanded: L,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: M,
    onCtxMenuClose: y,
    onCtxMenuSelect: x,
    quest: D,
    useReducedMotion: b
  } = e, U = (0, o.useStateFromStores)([_.default], () => _.default.isEnrolling(D.id), [D]), j = (0, h.useQuestFormattedDate)(D.config.expiresAt), G = (0, h.useQuestFormattedDate)(D.config.rewardCodeExpiresAt), w = s.useMemo(() => (0, m.isAssetAnimated)(D.config.assets.questBarHero), [D]), k = s.useCallback(() => {
    (0, E.enrollInQuest)(D.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [D]), F = (0, A.useHandleClaimQuestsReward)({
    quest: D,
    location: C.QuestContent.QUEST_BAR
  }), B = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, H = (null === (l = D.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, V = L && P, Y = (0, m.getQuestBarHeroAssetUrl)(D);
  return (0, a.jsx)(r.animated.div, {
    "aria-hidden": !V,
    className: i()(R, v.contentExpanded, {
      [v.contentInteractable]: V
    }),
    style: {
      opacity: O.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: B ? (0, a.jsxs)("div", {
      className: v.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: v.utils,
        children: [(0, a.jsxs)("div", {
          className: v.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.QuestsAsset, {
            id: "QuestsBarContentExpanded_rewardTile",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: D.config.messages.rewardName,
              className: v.questProgressRewardTile,
              src: (0, m.getRewardAssetUrl)(D)
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(D)
            }), (0, a.jsx)(u.Text, {
              className: v.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: j
              })
            })]
          })]
        }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: y,
          onSelect: x,
          questContent: C.QuestContent.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: v.submenuWrapper,
            "aria-label": N.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: v.submenuIcon
            })
          })
        })]
      }), H ? (0, a.jsx)(u.Button, {
        className: i()(v.cta, v.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: F,
        size: u.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: v.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: D.config.messages.gameTitle,
          streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
          questReward: D.config.messages.rewardNameWithArticle
        })
      }), (0, a.jsx)(S.default, {
        quest: D
      })]
    }) : (0, a.jsxs)("div", {
      className: v.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: v.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: v.utils,
          children: [(0, a.jsx)(I.default, {
            color: "always-white"
          }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: y,
            onSelect: x,
            questContent: C.QuestContent.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: v.submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: v.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: v.details,
          children: [(0, a.jsx)(p.default, {
            className: v.rewardTile,
            quest: D,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: v.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: v.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: N.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: D.config.messages.gameTitle,
              streamingDurationRequirement: D.config.streamDurationRequirementMinutes,
              questReward: D.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(u.Button, {
          className: v.cta,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: V ? k : void 0,
          size: u.Button.Sizes.NONE,
          submitting: U,
          children: N.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: v.heroAssetWrapper,
        style: {
          color: D.config.colors.secondary
        },
        children: w ? (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !b,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: v.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: Y,
              type: (0, m.getVideoAssetMimeType)(Y)
            })
          })
        }) : (0, a.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: v.heroAsset,
            src: Y
          })
        })
      })]
    })
  })
});
t.default = R