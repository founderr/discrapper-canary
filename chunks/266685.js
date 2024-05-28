"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  u = s("950104"),
  o = s("780384"),
  d = s("481060"),
  c = s("808268"),
  E = s("810090"),
  _ = s("358085"),
  f = s("617136"),
  h = s("272008"),
  m = s("113434"),
  T = s("569984"),
  C = s("497505"),
  g = s("918701"),
  A = s("865364"),
  N = s("566078"),
  p = s("340100"),
  S = s("611855"),
  I = s("644646"),
  v = s("78826"),
  R = s("670638"),
  x = s("667105"),
  M = s("341907"),
  O = s("46140"),
  L = s("689938"),
  y = s("96268");
let D = n.forwardRef(function(e, t) {
  var s, l;
  let {
    className: A,
    isExpanded: D,
    isExpansionAnimationComplete: b,
    onCtxMenuOpen: U,
    onCtxMenuClose: P,
    onCtxMenuSelect: G,
    quest: V,
    useReducedMotion: F
  } = e, k = (0, r.useStateFromStores)([T.default], () => T.default.isEnrolling(V.id), [V]), B = (0, m.useQuestFormattedDate)(V.config.expiresAt), w = N.SharedQuestFields.build(V.config), H = (0, m.useQuestFormattedDate)(w.rewardsExpireAt), Q = n.useMemo(() => (0, g.isAssetAnimated)(V.config.assets.questBarHero), [V]), Y = (0, x.useHasLaunchedGame)(w.application.id), q = n.useCallback(() => {
    (0, h.enrollInQuest)(V.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [V]), z = (0, x.useHandleClaimQuestsReward)({
    quest: V,
    location: C.QuestContent.QUEST_BAR
  }), W = n.useCallback(() => {
    (0, M.openGameLink)(V, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: f.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [V]), Z = w.features.has(O.QuestVariants.POST_ENROLLMENT_CTA), K = n.useMemo(() => (0, g.calculatePercentComplete)(V) > 0, [V]), X = (null === (s = V.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, J = (null === (l = V.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, $ = n.useMemo(() => (0, g.hasCollectiblesQuestReward)(V.config), [V.config]), ee = D && b, et = (0, g.getQuestBarHeroAssetUrl)(V), es = (0, g.getQuestsInstructionsToWinReward)({
    quest: V,
    location: O.QuestsExperimentLocations.QUESTS_BAR
  }), ea = (0, _.isWeb)(), en = n.useMemo(() => {
    let e = (0, o.getContrastingColor)(V.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: o.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, u.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, u.darkenColor)(e, .35)
    }
  }, [V.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !ee,
    className: i()(A, y.contentExpanded, {
      [y.contentInteractable]: ee
    }),
    children: X ? (0, a.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: y.utils,
        children: [(0, a.jsxs)("div", {
          className: y.questAcceptedContentHeading,
          children: [(0, a.jsx)(I.default, {
            className: y.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: V,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, g.getContextualEntrypointHeading)(V)
            }), (0, a.jsx)(d.Text, {
              className: y.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: J ? L.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: H
              }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
          onOpen: U,
          onClose: P,
          onSelect: G,
          questContent: C.QuestContent.QUEST_BAR,
          quest: V,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: y.submenuWrapper,
            "aria-label": L.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: y.submenuIcon
            })
          })
        })]
      }), J ? (0, a.jsx)(d.Button, {
        className: i()(y.cta, y.ctaClaimReward),
        style: $ ? en : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: z,
        size: d.Button.Sizes.NONE,
        children: L.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: y.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: es
      }), (0, a.jsx)(p.default, {
        quest: V
      }), !ea && !K && !Y && Z && (0, a.jsx)(j, {
        onClick: ee ? W : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: y.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: y.utils,
          children: [(0, a.jsx)(S.default, {
            color: "always-white"
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: U,
            onClose: P,
            onSelect: G,
            questContent: C.QuestContent.QUEST_BAR,
            quest: V,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: y.submenuWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: y.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: y.details,
          children: [(0, a.jsx)(I.default, {
            className: y.rewardTile,
            learnMoreStyle: "text",
            quest: V,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: y.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: L.default.Messages.QUESTS_TITLE.format({
              questName: V.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: y.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: es
          })]
        }), (0, a.jsx)(d.Button, {
          className: y.cta,
          style: "1232852290197655573" !== V.id ? en : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ee ? q : void 0,
          size: d.Button.Sizes.NONE,
          submitting: k,
          children: L.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: y.heroAssetWrapper,
        style: {
          color: V.config.colors.secondary
        },
        children: Q ? (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(E.default, {
            ref: e,
            autoPlay: !F,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: et,
              type: (0, g.getVideoAssetMimeType)(et)
            })
          })
        }) : (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: y.heroAsset,
            src: et
          })
        })
      })]
    })
  })
});

function j(e) {
  let {
    style: t,
    onClick: s
  } = e;
  return (0, A.useIsEligibleForQuestBarProgressCTA)({
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: y.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: s,
    size: d.Button.Sizes.NONE,
    children: L.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = D