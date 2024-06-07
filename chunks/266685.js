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
  S = n("497505"),
  p = n("918701"),
  I = n("865364"),
  g = n("566078"),
  T = n("340100"),
  A = n("611855"),
  N = n("644646"),
  v = n("78826"),
  R = n("670638"),
  O = n("667105"),
  L = n("46140"),
  M = n("689938"),
  P = n("96268");
let x = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: I,
    isExpanded: x,
    isExpansionAnimationComplete: D,
    onCtxMenuOpen: b,
    onCtxMenuClose: U,
    onCtxMenuSelect: j,
    quest: G,
    useReducedMotion: w
  } = e, k = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(G.id), [G]), B = (0, C.useQuestFormattedDate)(G.config.expiresAt), F = g.SharedQuestFields.build(G.config), H = (0, C.useQuestFormattedDate)(F.rewardsExpireAt), V = s.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), Y = (0, O.useHasLaunchedGame)(F.application.id), W = s.useCallback(() => {
    (0, _.enrollInQuest)(G.id, {
      questContent: S.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [G]), K = (0, O.useHandleClaimQuestsReward)({
    quest: G,
    location: S.QuestContent.QUEST_BAR
  }), z = s.useCallback(() => {
    (0, p.openGameLink)(G, {
      content: S.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [G]), Q = F.features.has(L.QuestVariants.POST_ENROLLMENT_CTA), q = s.useMemo(() => (0, p.calculatePercentComplete)({
    quest: G,
    location: L.QuestsExperimentLocations.QUESTS_BAR
  }) > 0, [G]), Z = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, J = s.useMemo(() => (0, p.hasCollectiblesQuestReward)(G.config), [G.config]), $ = x && D, ee = (0, p.getQuestBarHeroAssetUrl)(G), et = (0, p.getQuestsInstructionsToWinReward)({
    quest: G,
    location: L.QuestsExperimentLocations.QUESTS_BAR
  }), en = (0, E.isWeb)(), ea = s.useMemo(() => {
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
    className: i()(I, P.contentExpanded, {
      [P.contentInteractable]: $
    }),
    children: Z ? (0, a.jsxs)("div", {
      className: P.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: P.utils,
        children: [(0, a.jsxs)("div", {
          className: P.questAcceptedContentHeading,
          children: [(0, a.jsx)(N.default, {
            className: P.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)({
                quest: G,
                location: L.QuestsExperimentLocations.QUESTS_BAR
              })
            }), (0, a.jsx)(d.Text, {
              className: P.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: X ? M.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: H
              }) : M.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
          onOpen: b,
          onClose: U,
          onSelect: j,
          questContent: S.QuestContent.QUEST_BAR,
          quest: G,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: P.submenuWrapper,
            "aria-label": M.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: P.submenuIcon
            })
          })
        })]
      }), X ? (0, a.jsx)(d.Button, {
        className: i()(P.cta, P.ctaClaimReward),
        style: J ? ea : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: K,
        size: d.Button.Sizes.NONE,
        children: M.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: P.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, a.jsx)(T.default, {
        quest: G
      }), !en && !q && !Y && Q && (0, a.jsx)(y, {
        onClick: $ ? z : void 0
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: P.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: P.utils,
          children: [(0, a.jsx)(A.default, {
            color: "always-white"
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: b,
            onClose: U,
            onSelect: j,
            questContent: S.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: P.submenuWrapper,
              "aria-label": M.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: P.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: P.details,
          children: [(0, a.jsx)(N.default, {
            className: P.rewardTile,
            learnMoreStyle: "text",
            quest: G,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: P.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.default.Messages.QUESTS_TITLE.format({
              questName: G.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: P.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, a.jsx)(d.Button, {
          className: P.cta,
          style: "1232852290197655573" !== G.id ? ea : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: $ ? W : void 0,
          size: d.Button.Sizes.NONE,
          submitting: k,
          children: M.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: P.heroAssetWrapper,
        style: {
          color: G.config.colors.secondary
        },
        children: V ? (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !w,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: P.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: ee,
              type: (0, p.getVideoAssetMimeType)(ee)
            })
          })
        }) : (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: P.heroAsset,
            src: ee
          })
        })
      })]
    })
  })
});

function y(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, I.useIsEligibleForQuestBarProgressCTA)({
    location: L.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: P.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: M.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = x