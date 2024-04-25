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
  E = a("617136"),
  h = a("272008"),
  _ = a("113434"),
  C = a("569984"),
  m = a("497505"),
  S = a("918701"),
  I = a("340100"),
  p = a("611855"),
  T = a("644646"),
  g = a("78826"),
  A = a("670638"),
  N = a("667105"),
  v = a("689938"),
  R = a("396030");
let L = s.forwardRef(function(e, t) {
  var a, l;
  let {
    className: L,
    isExpanded: O,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: M,
    onCtxMenuClose: x,
    onCtxMenuSelect: y,
    quest: D,
    useReducedMotion: b
  } = e, U = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(D.id), [D]), j = (0, _.useQuestFormattedDate)(D.config.expiresAt), G = (0, _.useQuestFormattedDate)(D.config.rewardCodeExpiresAt), w = s.useMemo(() => (0, S.isAssetAnimated)(D.config.assets.questBarHero), [D]), k = s.useCallback(() => {
    (0, h.enrollInQuest)(D.id, {
      questContent: m.QuestContent.QUEST_BAR,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [D]), F = (0, N.useHandleClaimQuestsReward)({
    quest: D,
    location: m.QuestContent.QUEST_BAR
  }), B = (null === (a = D.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null, H = (null === (l = D.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, V = s.useMemo(() => (0, S.hasQuestCollectibleRewards)(D.config), [D.config]), Y = O && P, W = (0, S.getQuestBarHeroAssetUrl)(D), K = (0, S.getQuestsInstructionsToWinReward)({
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
  return (0, n.jsx)("div", {
    "aria-hidden": !Y,
    className: i()(L, R.contentExpanded, {
      [R.contentInteractable]: Y
    }),
    children: B ? (0, n.jsxs)("div", {
      className: R.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: R.utils,
        children: [(0, n.jsxs)("div", {
          className: R.questAcceptedContentHeading,
          children: [(0, n.jsx)(T.default, {
            className: R.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: D,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.getContextualEntrypointHeading)(D)
            }), (0, n.jsx)(d.Text, {
              className: R.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? v.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: G
              }) : v.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: j
              })
            })]
          })]
        }), (0, n.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: x,
          onSelect: y,
          questContent: m.QuestContent.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(d.Clickable, {
            ...e,
            className: R.submenuWrapper,
            "aria-label": v.default.Messages.ACTIONS,
            children: (0, n.jsx)(c.default, {
              className: R.submenuIcon
            })
          })
        })]
      }), H ? (0, n.jsx)(d.Button, {
        className: i()(R.cta, R.ctaClaimReward),
        style: V ? z : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: F,
        size: d.Button.Sizes.NONE,
        children: v.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, n.jsx)(d.Text, {
        className: R.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: K
      }), (0, n.jsx)(I.default, {
        quest: D
      })]
    }) : (0, n.jsxs)("div", {
      className: R.questUnacceptedContent,
      children: [(0, n.jsxs)("div", {
        className: R.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: R.utils,
          children: [(0, n.jsx)(p.default, {
            color: "always-white"
          }), (0, n.jsx)(A.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: x,
            onSelect: y,
            questContent: m.QuestContent.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(d.Clickable, {
              ...e,
              className: R.submenuWrapper,
              "aria-label": v.default.Messages.ACTIONS,
              children: (0, n.jsx)(c.default, {
                className: R.submenuIcon
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: R.details,
          children: [(0, n.jsx)(T.default, {
            className: R.rewardTile,
            learnMoreStyle: "text",
            quest: D,
            questContent: m.QuestContent.QUEST_BAR
          }), (0, n.jsx)(d.Heading, {
            className: R.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: v.default.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, n.jsx)(d.Text, {
            className: R.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: K
          })]
        }), (0, n.jsx)(d.Button, {
          className: R.cta,
          style: V ? z : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: Y ? k : void 0,
          size: d.Button.Sizes.NONE,
          submitting: U,
          children: v.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, n.jsx)("div", {
        className: R.heroAssetWrapper,
        style: {
          color: D.config.colors.secondary
        },
        children: w ? (0, n.jsx)(g.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(f.default, {
            ref: e,
            autoPlay: !b,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: R.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: W,
              type: (0, S.getVideoAssetMimeType)(W)
            })
          })
        }) : (0, n.jsx)(g.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
            ref: e,
            alt: "",
            className: R.heroAsset,
            src: W
          })
        })
      })]
    })
  })
});
t.default = L