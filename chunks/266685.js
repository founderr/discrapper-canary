"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("950104"),
  u = s("780384"),
  d = s("481060"),
  c = s("808268"),
  E = s("810090"),
  f = s("358085"),
  _ = s("617136"),
  h = s("272008"),
  m = s("113434"),
  C = s("569984"),
  T = s("497505"),
  g = s("918701"),
  p = s("865364"),
  A = s("566078"),
  N = s("340100"),
  S = s("611855"),
  I = s("644646"),
  x = s("78826"),
  R = s("670638"),
  v = s("667105"),
  M = s("46140"),
  O = s("689938"),
  L = s("96268");
let y = a.forwardRef(function(e, t) {
  var s, l;
  let {
    className: p,
    isExpanded: y,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: j,
    onCtxMenuClose: U,
    onCtxMenuSelect: P,
    quest: B,
    useReducedMotion: G
  } = e, V = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(B.id), [B]), H = (0, m.useQuestFormattedDate)(B.config.expiresAt), F = A.SharedQuestFields.build(B.config), k = (0, m.useQuestFormattedDate)(F.rewardsExpireAt), w = a.useMemo(() => (0, g.isAssetAnimated)(B.config.assets.questBarHero), [B]), Q = (0, v.useHasLaunchedGame)(F.application.id), Y = a.useCallback(() => {
    (0, h.enrollInQuest)(B.id, {
      questContent: T.QuestContent.QUEST_BAR,
      questContentCTA: _.QuestContentCTA.ACCEPT_QUEST
    })
  }, [B]), q = (0, v.useHandleClaimQuestsReward)({
    quest: B,
    location: T.QuestContent.QUEST_BAR
  }), W = a.useCallback(() => {
    (0, g.openGameLink)(B, {
      content: T.QuestContent.QUEST_BAR,
      ctaContent: _.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [B]), z = F.features.has(M.QuestVariants.POST_ENROLLMENT_CTA), Z = (0, m.useQuestTaskDetails)({
    quest: B,
    location: M.QuestsExperimentLocations.QUESTS_BAR
  }), K = Z.progressSeconds > 0, X = (null === (s = B.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, J = (null === (l = B.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, $ = a.useMemo(() => (0, g.hasCollectiblesQuestReward)(B.config), [B.config]), ee = y && D, et = (0, g.getQuestBarHeroAssetUrl)(B), es = (0, g.getQuestsInstructionsToWinReward)({
    quest: B,
    location: M.QuestsExperimentLocations.QUESTS_BAR,
    taskDetails: Z
  }), en = (0, f.isWeb)(), ea = a.useMemo(() => {
    let e = (0, u.getContrastingColor)(B.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, o.darkenColor)(e, .35)
    }
  }, [B.config.colors.primary]);
  return (0, n.jsx)("div", {
    "aria-hidden": !ee,
    className: i()(p, L.contentExpanded, {
      [L.contentInteractable]: ee
    }),
    children: X ? (0, n.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: L.utils,
        children: [(0, n.jsxs)("div", {
          className: L.questAcceptedContentHeading,
          children: [(0, n.jsx)(I.default, {
            className: L.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: B,
            questContent: T.QuestContent.QUEST_BAR
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, g.getContextualEntrypointHeading)({
                quest: B,
                taskDetails: Z
              })
            }), (0, n.jsx)(d.Text, {
              className: L.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: J ? O.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: k
              }) : O.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: H
              })
            })]
          })]
        }), (0, n.jsx)(R.QuestsEntryContextMenuPopout, {
          onOpen: j,
          onClose: U,
          onSelect: P,
          questContent: T.QuestContent.QUEST_BAR,
          quest: B,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(d.Clickable, {
            ...e,
            className: L.submenuWrapper,
            "aria-label": O.default.Messages.ACTIONS,
            children: (0, n.jsx)(c.default, {
              className: L.submenuIcon
            })
          })
        })]
      }), J ? (0, n.jsx)(d.Button, {
        className: i()(L.cta, L.ctaClaimReward),
        style: $ ? ea : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: q,
        size: d.Button.Sizes.NONE,
        children: O.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, n.jsx)(d.Text, {
        className: L.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: es
      }), (0, n.jsx)(N.default, {
        quest: B
      }), !en && !K && !Q && z && (0, n.jsx)(b, {
        onClick: ee ? W : void 0
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: L.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: L.utils,
          children: [(0, n.jsx)(S.default, {
            color: "always-white"
          }), (0, n.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: j,
            onClose: U,
            onSelect: P,
            questContent: T.QuestContent.QUEST_BAR,
            quest: B,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(d.Clickable, {
              ...e,
              className: L.submenuWrapper,
              "aria-label": O.default.Messages.ACTIONS,
              children: (0, n.jsx)(c.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: L.details,
          children: [(0, n.jsx)(I.default, {
            className: L.rewardTile,
            learnMoreStyle: "text",
            quest: B,
            questContent: T.QuestContent.QUEST_BAR
          }), (0, n.jsx)(d.Heading, {
            className: L.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: O.default.Messages.QUESTS_TITLE.format({
              questName: B.config.messages.questName
            })
          }), (0, n.jsx)(d.Text, {
            className: L.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: es
          })]
        }), (0, n.jsx)(d.Button, {
          className: L.cta,
          style: "1232852290197655573" !== B.id ? ea : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ee ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: V,
          children: O.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsx)("div", {
        className: L.heroAssetWrapper,
        style: {
          color: B.config.colors.secondary
        },
        children: w ? (0, n.jsx)(x.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(E.default, {
            ref: e,
            autoPlay: !G,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: et,
              type: (0, g.getVideoAssetMimeType)(et)
            })
          })
        }) : (0, n.jsx)(x.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
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

function b(e) {
  let {
    style: t,
    onClick: s
  } = e;
  return (0, p.useIsEligibleForQuestBarProgressCTA)({
    location: M.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, n.jsx)(d.Button, {
    className: L.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: s,
    size: d.Button.Sizes.NONE,
    children: O.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y