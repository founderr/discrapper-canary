"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("950104"),
  u = n("780384"),
  d = n("481060"),
  c = n("808268"),
  f = n("810090"),
  E = n("358085"),
  h = n("617136"),
  _ = n("272008"),
  C = n("113434"),
  m = n("569984"),
  p = n("497505"),
  S = n("918701"),
  g = n("865364"),
  I = n("340100"),
  T = n("611855"),
  A = n("644646"),
  N = n("78826"),
  v = n("670638"),
  R = n("667105"),
  O = n("341907"),
  L = n("46140"),
  y = n("689938"),
  M = n("96268");
let P = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: g,
    isExpanded: P,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: b,
    onCtxMenuClose: U,
    onCtxMenuSelect: j,
    quest: G,
    useReducedMotion: k
  } = e, w = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), B = (0, C.useQuestFormattedDate)(G.config.expiresAt), F = (0, C.useQuestFormattedDate)(G.config.rewardCodeExpiresAt), H = s.useMemo(() => (0, S.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = (0, R.useHasLaunchedGame)(G.config.applicationId), Y = s.useCallback(() => {
    (0, _.enrollInQuest)(G.id, {
      questContent: p.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), W = (0, R.useHandleClaimQuestsReward)({
    quest: G,
    location: p.QuestContent.QUEST_BAR
  }), K = s.useCallback(() => {
    (0, O.openGameLink)(G, {
      content: p.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), z = G.config.variants.includes(L.QuestVariants.POST_ENROLLMENT_CTA), q = s.useMemo(() => (0, S.calculatePercentComplete)(G) > 0, [G]), Q = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Z = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = s.useMemo(() => (0, S.hasQuestCollectibleRewards)(G.config), [G.config]), J = P && D, $ = (0, S.getQuestBarHeroAssetUrl)(G), ee = (0, S.getQuestsInstructionsToWinReward)({
    quest: G,
    location: L.QuestsExperimentLocations.QUESTS_BAR
  }), et = (0, E.isWeb)(), en = s.useMemo(() => {
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
    "aria-hidden": !J,
    className: i()(g, M.contentExpanded, {
      [M.contentInteractable]: J
    }),
    children: Q ? (0, a.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: M.utils,
        children: [(0, a.jsxs)("div", {
          className: M.questAcceptedContentHeading,
          children: [(0, a.jsx)(A.default, {
            className: M.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: p.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(G)
            }), (0, a.jsx)(d.Text, {
              className: M.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Z ? y.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: F
              }) : y.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: b,
          onClose: U,
          onSelect: j,
          questContent: p.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: M.submenuWrapper,
            "aria-label": y.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: M.submenuIcon
            })
          })
        })]
      }), Z ? (0, a.jsx)(d.Button, {
        className: i()(M.cta, M.ctaClaimReward),
        style: X ? en : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: W,
        size: d.Button.Sizes.NONE,
        children: y.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: M.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: ee
      }), (0, a.jsx)(I.default, {
        quest: G
      }), !et && !q && !V && z && (0, a.jsx)(x, {
        onClick: J ? K : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: M.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: M.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: M.utils,
          children: [(0, a.jsx)(T.default, {
            color: "always-white"
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: p.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: M.submenuWrapper,
              "aria-label": y.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: M.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: M.details,
          children: [(0, a.jsx)(A.default, {
            className: M.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: p.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: M.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: y.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: M.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: ee
          })]
        }), (0, a.jsx)(d.Button, {
          className: M.cta,
          style: "1232852290197655573" !== G.id ? en : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: w,
          children: y.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: M.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: H ? (0, a.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !k,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: M.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: $,
              type: (0, S.getVideoAssetMimeType)($)
            })
          })
        }) : (0, a.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: M.heroAsset,
            src: $
          })
        })
      })]
    })
  })
});

function x(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, g.useIsEligibleForQuestBarProgressCTA)({
    location: L.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: M.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: y.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = P