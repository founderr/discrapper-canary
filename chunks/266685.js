"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("950104"),
  u = s("780384"),
  d = s("481060"),
  c = s("808268"),
  E = s("810090"),
  _ = s("358085"),
  f = s("617136"),
  h = s("272008"),
  C = s("113434"),
  m = s("569984"),
  T = s("497505"),
  g = s("918701"),
  A = s("865364"),
  p = s("566078"),
  N = s("340100"),
  S = s("611855"),
  I = s("644646"),
  x = s("78826"),
  v = s("670638"),
  R = s("667105"),
  O = s("46140"),
  M = s("689938"),
  L = s("96268");
let y = n.forwardRef(function(e, t) {
  var s, l;
  let {
    className: A,
    isExpanded: y,
    isExpansionAnimationComplete: b,
    onCtxMenuOpen: j,
    onCtxMenuClose: U,
    onCtxMenuSelect: P,
    quest: G,
    useReducedMotion: V
  } = e, B = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), H = (0, C.useQuestFormattedDate)(G.config.expiresAt), F = p.SharedQuestFields.build(G.config), k = (0, C.useQuestFormattedDate)(F.rewardsExpireAt), w = n.useMemo(() => (0, g.isAssetAnimated)(G.config.assets.questBarHero), [G]), Q = (0, R.useHasLaunchedGame)(F.application.id), Y = n.useCallback(() => {
    (0, h.enrollInQuest)(G.id, {
      questContent: T.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), q = (0, R.useHandleClaimQuestsReward)({
    quest: G,
    location: T.QuestContent.QUEST_BAR
  }), W = n.useCallback(() => {
    (0, g.openGameLink)(G, {
      content: T.QuestContent.QUEST_BAR,
      ctaContent: f.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), z = F.features.has(O.QuestVariants.POST_ENROLLMENT_CTA), Z = (0, C.useQuestTaskDetails)({
    quest: G,
    location: O.QuestsExperimentLocations.QUESTS_BAR
  }), K = Z.progressSeconds > 0, X = (null === (s = G.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, J = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, $ = n.useMemo(() => (0, g.hasCollectiblesQuestReward)(G.config), [G.config]), ee = y && b, et = (0, g.getQuestBarHeroAssetUrl)(G), es = (0, g.getQuestsInstructionsToWinReward)({
    quest: G,
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    taskDetails: Z
  }), ea = (0, _.isWeb)(), en = n.useMemo(() => {
    let e = (0, u.getContrastingColor)(G.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, o.darkenColor)(e, .35)
    }
  }, [G.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !ee,
    className: i()(A, L.contentExpanded, {
      [L.contentInteractable]: ee
    }),
    children: X ? (0, a.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: L.utils,
        children: [(0, a.jsxs)("div", {
          className: L.questAcceptedContentHeading,
          children: [(0, a.jsx)(I.default, {
            className: L.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: T.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, g.getContextualEntrypointHeading)({
                quest: G,
                taskDetails: Z
              })
            }), (0, a.jsx)(d.Text, {
              className: L.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: J ? M.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: k
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: H
              })
            })]
          })]
        }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: j,
          onClose: U,
          onSelect: P,
          questContent: T.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: L.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: L.submenuIcon
            })
          })
        })]
      }), J ? (0, a.jsx)(d.Button, {
        className: i()(L.cta, L.ctaClaimReward),
        style: $ ? en : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: q,
        size: d.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: L.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: es
      }), (0, a.jsx)(N.default, {
        quest: G
      }), !ea && !K && !Q && z && (0, a.jsx)(D, {
        onClick: ee ? W : void 0
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: L.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: L.utils,
          children: [(0, a.jsx)(S.default, {
            color: "always-white"
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: j,
            onClose: U,
            onSelect: P,
            questContent: T.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: L.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: L.details,
          children: [(0, a.jsx)(I.default, {
            className: L.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: T.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: L.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: L.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: es
          })]
        }), (0, a.jsx)(d.Button, {
          className: L.cta,
          style: "1232852290197655573" !== G.id ? en : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ee ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: B,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: L.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: w ? (0, a.jsx)(x.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(E.default, {
            ref: e,
            autoPlay: !V,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: et,
              type: (0, g.getVideoAssetMimeType)(et)
            })
          })
        }) : (0, a.jsx)(x.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: L.heroAsset,
            src: et
          })
        })
      })]
    })
  })
});

function D(e) {
  let {
    style: t,
    onClick: s
  } = e;
  return (0, A.useIsEligibleForQuestBarProgressCTA)({
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: L.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: s,
    size: d.Button.Sizes.NONE,
    children: M.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y