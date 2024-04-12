"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("442837"),
  o = a("780384"),
  u = a("481060"),
  d = a("808268"),
  c = a("810090"),
  f = a("617136"),
  E = a("272008"),
  h = a("113434"),
  _ = a("569984"),
  C = a("497505"),
  m = a("918701"),
  S = a("340100"),
  p = a("611855"),
  I = a("644646"),
  T = a("78826"),
  g = a("670638"),
  A = a("667105"),
  N = a("689938"),
  v = a("881521");
let R = s.forwardRef(function(e, t) {
  var a, l;
  let {
    className: R,
    isExpanded: O,
    isExpansionAnimationComplete: L,
    onCtxMenuOpen: M,
    onCtxMenuClose: P,
    onCtxMenuSelect: x,
    quest: y,
    useReducedMotion: D
  } = e, b = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(y.id), [y]), U = (0, h.useQuestFormattedDate)(y.config.expiresAt), j = (0, h.useQuestFormattedDate)(y.config.rewardCodeExpiresAt), G = s.useMemo(() => (0, m.isAssetAnimated)(y.config.assets.questBarHero), [y]), w = s.useCallback(() => {
    (0, E.enrollInQuest)(y.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [y]), k = (0, A.useHandleClaimQuestsReward)({
    quest: y,
    location: C.QuestContent.QUEST_BAR
  }), F = (null === (a = y.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null, H = (null === (l = y.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, B = s.useMemo(() => (0, m.hasQuestCollectibleRewards)(y.config), [y.config]), V = O && L, Y = (0, m.getQuestBarHeroAssetUrl)(y), W = (0, m.getQuestsInstructionsToWinReward)({
    quest: y
  }), K = s.useMemo(() => (0, o.getContrastingColor)(y.config.colors.primary, {
    base: "#ffffff",
    contrastRatio: o.WCAGContrastRatios.Text
  }), [y.config.colors.primary]);
  return (0, n.jsx)("div", {
    "aria-hidden": !V,
    className: i()(R, v.contentExpanded, {
      [v.contentInteractable]: V
    }),
    children: F ? (0, n.jsxs)("div", {
      className: v.questAcceptedContent,
      ref: t,
      children: [(0, n.jsxs)("div", {
        className: v.utils,
        children: [(0, n.jsxs)("div", {
          className: v.questAcceptedContentHeading,
          children: [(0, n.jsx)(I.default, {
            className: v.questProgressRewardTile,
            quest: y,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(y)
            }), (0, n.jsx)(u.Text, {
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
        }), (0, n.jsx)(g.QuestsEntryContextMenuPopout, {
          onOpen: M,
          onClose: P,
          onSelect: x,
          questContent: C.QuestContent.QUEST_BAR,
          quest: y,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, n.jsx)(u.Clickable, {
            ...e,
            className: v.submenuWrapper,
            "aria-label": N.default.Messages.ACTIONS,
            children: (0, n.jsx)(d.default, {
              className: v.submenuIcon
            })
          })
        })]
      }), H ? (0, n.jsx)(u.Button, {
        className: i()(v.cta, v.ctaClaimReward),
        style: B ? {
          backgroundColor: K
        } : void 0,
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: k,
        size: u.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, n.jsx)(u.Text, {
        className: v.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: W
      }), (0, n.jsx)(S.default, {
        quest: y
      })]
    }) : (0, n.jsxs)("div", {
      className: v.questUnacceptedContent,
      children: [(0, n.jsxs)("div", {
        className: v.questPromoContent,
        ref: t,
        children: [(0, n.jsxs)("div", {
          className: v.utils,
          children: [(0, n.jsx)(p.default, {
            color: "always-white"
          }), (0, n.jsx)(g.QuestsEntryContextMenuPopout, {
            onOpen: M,
            onClose: P,
            onSelect: x,
            questContent: C.QuestContent.QUEST_BAR,
            quest: y,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, n.jsx)(u.Clickable, {
              ...e,
              className: v.submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, n.jsx)(d.default, {
                className: v.submenuIcon
              })
            })
          })]
        }), (0, n.jsxs)("div", {
          className: v.details,
          children: [(0, n.jsx)(I.default, {
            className: v.rewardTile,
            quest: y,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, n.jsx)(u.Heading, {
            className: v.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: y.config.messages.questName
            })
          }), (0, n.jsx)(u.Text, {
            className: v.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: W
          })]
        }), (0, n.jsx)(u.Button, {
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
      }), (0, n.jsx)("div", {
        className: v.heroAssetWrapper,
        style: {
          color: y.config.colors.secondary
        },
        children: G ? (0, n.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, n.jsx)(c.default, {
            ref: e,
            autoPlay: !D,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: v.heroAsset,
            controls: !1,
            children: (0, n.jsx)("source", {
              src: Y,
              type: (0, m.getVideoAssetMimeType)(Y)
            })
          })
        }) : (0, n.jsx)(T.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroStatic",
          children: e => (0, n.jsx)("img", {
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