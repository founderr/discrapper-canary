"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("950104"),
  u = a("780384"),
  d = a("481060"),
  c = a("808268"),
  f = a("810090"),
  E = a("358085"),
  h = a("617136"),
  _ = a("272008"),
  C = a("113434"),
  m = a("569984"),
  S = a("497505"),
  p = a("918701"),
  I = a("865364"),
  g = a("340100"),
  T = a("611855"),
  A = a("644646"),
  N = a("78826"),
  v = a("670638"),
  L = a("667105"),
  R = a("341907"),
  O = a("46140"),
  M = a("689938"),
  P = a("861731");
let x = s.forwardRef(function(e, t) {
  var a, l;
  let {
    className: I,
    isExpanded: x,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: b,
    onCtxMenuClose: U,
    onCtxMenuSelect: j,
    quest: G,
    useReducedMotion: w
  } = e, k = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), B = (0, C.useQuestFormattedDate)(G.config.expiresAt), F = (0, C.useQuestFormattedDate)(G.config.rewardCodeExpiresAt), H = s.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = (0, L.useHasLaunchedGame)(G.config.applicationId), Y = s.useCallback(() => {
    (0, _.enrollInQuest)(G.id, {
      questContent: S.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), W = (0, L.useHandleClaimQuestsReward)({
    quest: G,
    location: S.QuestContent.QUEST_BAR
  }), K = s.useCallback(() => {
    (0, R.openGameLink)(G, {
      content: S.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), z = G.config.variants.includes(O.QuestVariants.POST_ENROLLMENT_CTA), q = s.useMemo(() => (0, p.calculatePercentComplete)(G) > 0, [G]), Q = (null === (a = G.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null, Z = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = s.useMemo(() => (0, p.hasQuestCollectibleRewards)(G.config), [G.config]), J = x && D, $ = (0, p.getQuestBarHeroAssetUrl)(G), ee = (0, p.getQuestsInstructionsToWinReward)({
    quest: G
  }), et = (0, E.isWeb)(), ea = s.useMemo(() => {
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
  return (0, n.jsx)("div", {
    "aria-hidden": !J,
    className: i()(I, P.contentExpanded, {
      [P.contentInteractable]: J
    }),
    children: Q ? (0, n.jsxs)("div", {
      className: P.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: P.utils,
        children: [(0, n.jsxs)("div", {
          className: P.questAcceptedContentHeading,
          children: [(0, n.jsx)(A.default, {
            className: P.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)(G)
            }), (0, n.jsx)(d.Text, {
              className: P.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: Z ? M.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: F
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, n.jsx)(v.QuestsEntryContextMenuPopout, {
          onOpen: b,
          onClose: U,
          onSelect: j,
          questContent: S.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(d.Clickable, {
            ...e,
            className: P.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, n.jsx)(c.default, {
              className: P.submenuIcon
            })
          })
        })]
      }), Z ? (0, n.jsx)(d.Button, {
        className: i()(P.cta, P.ctaClaimReward),
        style: X ? ea : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: W,
        size: d.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, n.jsx)(d.Text, {
        className: P.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: ee
      }), (0, n.jsx)(g.default, {
        quest: G
      }), !et && !q && !V && z && (0, n.jsx)(y, {
        style: ea,
        onClick: J ? K : void 0
      })]
    }) : (0, n.jsxs)("div", {
      className: P.questUnacceptedContent,
      children: [(0, n.jsxs)("div", {
        className: P.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: P.utils,
          children: [(0, n.jsx)(T.default, {
            color: "always-white"
          }), (0, n.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: S.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(d.Clickable, {
              ...e,
              className: P.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, n.jsx)(c.default, {
                className: P.submenuIcon
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: P.details,
          children: [(0, n.jsx)(A.default, {
            className: P.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, n.jsx)(d.Heading, {
            className: P.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, n.jsx)(d.Text, {
            className: P.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: ee
          })]
        }), (0, n.jsx)(d.Button, {
          className: P.cta,
          style: X ? ea : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: k,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsx)("div", {
        className: P.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: H ? (0, n.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(f.default, {
            ref: e,
            autoPlay: !w,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: P.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: $,
              type: (0, p.getVideoAssetMimeType)($)
            })
          })
        }) : (0, n.jsx)(N.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
            ref: e,
            alt: "",
            className: P.heroAsset,
            src: $
          })
        })
      })]
    })
  })
});

function y(e) {
  let {
    style: t,
    onClick: a
  } = e;
  return (0, I.useIsEligibleForQuestBarProgressCTA)({
    location: O.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, n.jsx)(d.Button, {
    className: P.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: a,
    size: d.Button.Sizes.NONE,
    children: M.default.Messages.QUESTS_PLAY_GAME
  }) : null
}
t.default = x