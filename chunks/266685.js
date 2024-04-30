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
  E = n("617136"),
  h = n("272008"),
  _ = n("113434"),
  C = n("569984"),
  m = n("497505"),
  S = n("918701"),
  p = n("340100"),
  I = n("611855"),
  T = n("644646"),
  g = n("78826"),
  A = n("670638"),
  N = n("667105"),
  v = n("689938"),
  L = n("861731");
let R = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: R,
    isExpanded: O,
    isExpansionAnimationComplete: M,
    onCtxMenuOpen: P,
    onCtxMenuClose: y,
    onCtxMenuSelect: x,
    quest: D,
    useReducedMotion: b
  } = e, U = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(D.id), [D]), j = (0, _.useQuestFormattedDate)(D.config.expiresAt), G = (0, _.useQuestFormattedDate)(D.config.rewardCodeExpiresAt), w = s.useMemo(() => (0, S.isAssetAnimated)(D.config.assets.questBarHero), [D]), k = s.useCallback(() => {
    (0, h.enrollInQuest)(D.id, {
      questContent: m.QuestContent.QUEST_BAR,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [D]), B = (0, N.useHandleClaimQuestsReward)({
    quest: D,
    location: m.QuestContent.QUEST_BAR
  }), F = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, H = (null === (l = D.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, V = s.useMemo(() => (0, S.hasQuestCollectibleRewards)(D.config), [D.config]), Y = O && M, W = (0, S.getQuestBarHeroAssetUrl)(D), K = (0, S.getQuestsInstructionsToWinReward)({
    quest: D
  }), z = s.useMemo(() => {
    let e = (0, u.getContrastingColor)(D.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, o.darkenColor)(e, .35)
    }
  }, [D.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !Y,
    className: i()(R, L.contentExpanded, {
      [L.contentInteractable]: Y
    }),
    children: F ? (0, a.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: L.utils,
        children: [(0, a.jsxs)("div", {
          className: L.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.default, {
            className: L.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: D,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(D)
            }), (0, a.jsx)(d.Text, {
              className: L.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? v.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : v.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: j
              })
            })]
          })]
        }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: P,
          onClose: y,
          onSelect: x,
          questContent: m.QuestContent.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: L.submenuWrapper,
            "aria-label": v.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: L.submenuIcon
            })
          })
        })]
      }), H ? (0, a.jsx)(d.Button, {
        className: i()(L.cta, L.ctaClaimReward),
        style: V ? z : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: B,
        size: d.Button.Sizes.NONE,
        children: v.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: L.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: K
      }), (0, a.jsx)(p.default, {
        quest: D
      })]
    }) : (0, a.jsxs)("div", {
      className: L.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: L.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: L.utils,
          children: [(0, a.jsx)(I.default, {
            color: "always-white"
          }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
            onOpen: P,
            onClose: y,
            onSelect: x,
            questContent: m.QuestContent.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: L.submenuWrapper,
              "aria-label": v.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: L.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: L.details,
          children: [(0, a.jsx)(T.default, {
            className: L.rewardTile,
            learnMoreStyle: "text",
            quest: D,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: L.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: v.default.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: L.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: K
          })]
        }), (0, a.jsx)(d.Button, {
          className: L.cta,
          style: V ? z : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: Y ? k : void 0,
          size: d.Button.Sizes.NONE,
          submitting: U,
          children: v.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: L.heroAssetWrapper,
        style: {
          color: D.config.colors.secondary
        },
        children: w ? (0, a.jsx)(g.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !b,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: W,
              type: (0, S.getVideoAssetMimeType)(W)
            })
          })
        }) : (0, a.jsx)(g.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: L.heroAsset,
            src: W
          })
        })
      })]
    })
  })
});
t.default = R