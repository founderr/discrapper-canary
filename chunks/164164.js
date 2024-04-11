"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("780384"),
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
  T = n("644646"),
  p = n("78826"),
  g = n("670638"),
  A = n("667105"),
  N = n("689938"),
  v = n("881521");
let R = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: R,
    isExpanded: O,
    isExpansionAnimationComplete: L,
    onCtxMenuOpen: M,
    onCtxMenuClose: P,
    onCtxMenuSelect: y,
    quest: x,
    useReducedMotion: D
  } = e, b = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(x.id), [x]), U = (0, h.useQuestFormattedDate)(x.config.expiresAt), j = (0, h.useQuestFormattedDate)(x.config.rewardCodeExpiresAt), G = s.useMemo(() => (0, m.isAssetAnimated)(x.config.assets.questBarHero), [x]), w = s.useCallback(() => {
    (0, E.enrollInQuest)(x.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [x]), k = (0, A.useHandleClaimQuestsReward)({
    quest: x,
    location: C.QuestContent.QUEST_BAR
  }), F = (null === (n = x.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, H = (null === (l = x.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, B = s.useMemo(() => (0, m.hasQuestCollectibleRewards)(x.config), [x.config]), V = O && L, Y = (0, m.getQuestBarHeroAssetUrl)(x), W = (0, m.getQuestsInstructionsToWinReward)({
    quest: x
  }), K = s.useMemo(() => (0, o.getContrastingColor)(x.config.colors.primary, {
    base: "#ffffff",
    contrastRatio: o.WCAGContrastRatios.Text
  }), [x.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !V,
    className: i()(R, v.contentExpanded, {
      [v.contentInteractable]: V
    }),
    children: F ? (0, a.jsxs)("div", {
      className: v.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: v.utils,
        children: [(0, a.jsxs)("div", {
          className: v.questAcceptedContentHeading,
          children: [(0, a.jsx)(T.default, {
            className: v.questProgressRewardTile,
            quest: x,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(x)
            }), (0, a.jsx)(u.Text, {
              className: v.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: H ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: j
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: U
              })
            })]
          })]
        }), (0, a.jsx)(g.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: P,
          onSelect: y,
          questContent: C.QuestContent.QUEST_BAR,
          quest: x,
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
        style: B ? {
          backgroundColor: K
        } : void 0,
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: k,
        size: u.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: v.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: W
      }), (0, a.jsx)(S.default, {
        quest: x
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
            onClose: P,
            onSelect: y,
            questContent: C.QuestContent.QUEST_BAR,
            quest: x,
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
          children: [(0, a.jsx)(T.default, {
            className: v.rewardTile,
            quest: x,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: v.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: x.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: v.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: W
          })]
        }), (0, a.jsx)(u.Button, {
          className: v.cta,
          style: B ? {
            backgroundColor: K
          } : void 0,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: V ? w : void 0,
          size: u.Button.Sizes.NONE,
          submitting: b,
          children: N.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: v.heroAssetWrapper,
        style: {
          color: x.config.colors.secondary
        },
        children: G ? (0, a.jsx)(p.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !D,
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
        }) : (0, a.jsx)(p.QuestsAsset, {
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