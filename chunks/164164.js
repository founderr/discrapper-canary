"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("808268"),
  d = n("810090"),
  c = n("617136"),
  f = n("272008"),
  E = n("113434"),
  h = n("569984"),
  _ = n("497505"),
  C = n("918701"),
  m = n("340100"),
  S = n("611855"),
  I = n("644646"),
  p = n("78826"),
  T = n("670638"),
  g = n("667105"),
  N = n("689938"),
  A = n("881521");
let v = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: v,
    isExpanded: O,
    isExpansionAnimationComplete: R,
    onCtxMenuOpen: L,
    onCtxMenuClose: M,
    onCtxMenuSelect: P,
    quest: y,
    useReducedMotion: x
  } = e, D = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(y.id), [y]), b = (0, E.useQuestFormattedDate)(y.config.expiresAt), U = (0, E.useQuestFormattedDate)(y.config.rewardCodeExpiresAt), j = s.useMemo(() => (0, C.isAssetAnimated)(y.config.assets.questBarHero), [y]), G = s.useCallback(() => {
    (0, f.enrollInQuest)(y.id, {
      questContent: _.QuestContent.QUEST_BAR,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    })
  }, [y]), w = (0, g.useHandleClaimQuestsReward)({
    quest: y,
    location: _.QuestContent.QUEST_BAR
  }), k = (null === (n = y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, F = (null === (l = y.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, B = O && R, H = (0, C.getQuestBarHeroAssetUrl)(y), V = (0, C.getQuestsInstructionsToWinReward)({
    quest: y
  });
  return (0, a.jsx)("div", {
    "aria-hidden": !B,
    className: i()(v, A.contentExpanded, {
      [A.contentInteractable]: B
    }),
    children: k ? (0, a.jsxs)("div", {
      className: A.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: A.utils,
        children: [(0, a.jsxs)("div", {
          className: A.questAcceptedContentHeading,
          children: [(0, a.jsx)(p.QuestsAsset, {
            id: "QuestsBarContentExpanded_rewardTile",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: y.config.messages.rewardName,
              className: A.questProgressRewardTile,
              src: (0, C.getRewardAssetUrl)(y)
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(o.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, C.getContextualEntrypointHeading)(y)
            }), (0, a.jsx)(o.Text, {
              className: A.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: F ? N.default.Messages.QUESTS_CLAIM_BY.format({
                expirationDate: U
              }) : N.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                expirationDate: b
              })
            })]
          })]
        }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
          onOpen: L,
          onClose: M,
          onSelect: P,
          questContent: _.QuestContent.QUEST_BAR,
          quest: y,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(o.Clickable, {
            ...e,
            className: A.submenuWrapper,
            "aria-label": N.default.Messages.ACTIONS,
            children: (0, a.jsx)(u.default, {
              className: A.submenuIcon
            })
          })
        })]
      }), F ? (0, a.jsx)(o.Button, {
        className: i()(A.cta, A.ctaClaimReward),
        color: o.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: w,
        size: o.Button.Sizes.NONE,
        children: N.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(o.Text, {
        className: A.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: V
      }), (0, a.jsx)(m.default, {
        quest: y
      })]
    }) : (0, a.jsxs)("div", {
      className: A.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: A.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: A.utils,
          children: [(0, a.jsx)(S.default, {
            color: "always-white"
          }), (0, a.jsx)(T.QuestsEntryContextMenuPopout, {
            onOpen: L,
            onClose: M,
            onSelect: P,
            questContent: _.QuestContent.QUEST_BAR,
            quest: y,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: A.submenuWrapper,
              "aria-label": N.default.Messages.ACTIONS,
              children: (0, a.jsx)(u.default, {
                className: A.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: A.details,
          children: [(0, a.jsx)(I.default, {
            className: A.rewardTile,
            quest: y,
            questContent: _.QuestContent.QUEST_BAR
          }), (0, a.jsx)(o.Heading, {
            className: A.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: N.default.Messages.QUESTS_TITLE.format({
              questName: y.config.messages.questName
            })
          }), (0, a.jsx)(o.Text, {
            className: A.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: V
          })]
        }), (0, a.jsx)(o.Button, {
          className: A.cta,
          color: o.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: B ? G : void 0,
          size: o.Button.Sizes.NONE,
          submitting: D,
          children: N.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: A.heroAssetWrapper,
        style: {
          color: y.config.colors.secondary
        },
        children: j ? (0, a.jsx)(p.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(d.default, {
            ref: e,
            autoPlay: !x,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: A.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: H,
              type: (0, C.getVideoAssetMimeType)(H)
            })
          })
        }) : (0, a.jsx)(p.QuestsAsset, {
          id: "QuestsBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: A.heroAsset,
            src: H
          })
        })
      })]
    })
  })
});
t.default = v