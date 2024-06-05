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
  T = s("113434"),
  m = s("569984"),
  C = s("497505"),
  g = s("918701"),
  A = s("865364"),
  p = s("566078"),
  N = s("340100"),
  I = s("611855"),
  S = s("644646"),
  R = s("78826"),
  v = s("670638"),
  x = s("667105"),
  M = s("46140"),
  L = s("689938"),
  O = s("96268");
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
  } = e, F = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), B = (0, T.useQuestFormattedDate)(G.config.expiresAt), H = p.SharedQuestFields.build(G.config), k = (0, T.useQuestFormattedDate)(H.rewardsExpireAt), w = n.useMemo(() => (0, g.isAssetAnimated)(G.config.assets.questBarHero), [G]), Q = (0, x.useHasLaunchedGame)(H.application.id), Y = n.useCallback(() => {
    (0, h.enrollInQuest)(G.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), q = (0, x.useHandleClaimQuestsReward)({
    quest: G,
    location: C.QuestContent.QUEST_BAR
  }), z = n.useCallback(() => {
    (0, g.openGameLink)(G, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: f.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), W = H.features.has(M.QuestVariants.POST_ENROLLMENT_CTA), Z = n.useMemo(() => (0, g.calculatePercentComplete)({
    quest: G,
    location: M.QuestsExperimentLocations.QUESTS_BAR
  }) > 0, [G]), K = (null === (s = G.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, X = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, J = n.useMemo(() => (0, g.hasCollectiblesQuestReward)(G.config), [G.config]), $ = y && b, ee = (0, g.getQuestBarHeroAssetUrl)(G), et = (0, g.getQuestsInstructionsToWinReward)({
    quest: G,
    location: M.QuestsExperimentLocations.QUESTS_BAR
  }), es = (0, _.isWeb)(), ea = n.useMemo(() => {
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
    "aria-hidden": !$,
    className: i()(A, O.contentExpanded, {
      [O.contentInteractable]: $
    }),
    children: K ? (0, a.jsxs)("div", {
      className: O.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: O.utils,
        children: [(0, a.jsxs)("div", {
          className: O.questAcceptedContentHeading,
          children: [(0, a.jsx)(S.default, {
            className: O.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, g.getContextualEntrypointHeading)({
                quest: G,
                location: M.QuestsExperimentLocations.QUESTS_BAR
              })
            }), (0, a.jsx)(d.Text, {
              className: O.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: X ? L.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: k
              }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: j,
          onClose: U,
          onSelect: P,
          questContent: C.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: O.submenuWrapper,
            "aria-label": L.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: O.submenuIcon
            })
          })
        })]
      }), X ? (0, a.jsx)(d.Button, {
        className: i()(O.cta, O.ctaClaimReward),
        style: J ? ea : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: q,
        size: d.Button.Sizes.NONE,
        children: L.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: O.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, a.jsx)(N.default, {
        quest: G
      }), !es && !Z && !Q && W && (0, a.jsx)(D, {
        onClick: $ ? z : void 0
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: O.utils,
          children: [(0, a.jsx)(I.default, {
            color: "always-white"
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: j,
            onClose: U,
            onSelect: P,
            questContent: C.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: O.submenuWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: O.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: O.details,
          children: [(0, a.jsx)(S.default, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: O.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: L.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: O.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, a.jsx)(d.Button, {
          className: O.cta,
          style: "1232852290197655573" !== G.id ? ea : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: $ ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: F,
          children: L.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: O.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: w ? (0, a.jsx)(R.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(E.default, {
            ref: e,
            autoPlay: !V,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: ee,
              type: (0, g.getVideoAssetMimeType)(ee)
            })
          })
        }) : (0, a.jsx)(R.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: ee
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
    location: M.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: O.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: s,
    size: d.Button.Sizes.NONE,
    children: L.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y