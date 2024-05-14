"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  o = n("289987"),
  u = n("481060"),
  d = n("808268"),
  c = n("810090"),
  f = n("617136"),
  E = n("272008"),
  h = n("113434"),
  _ = n("569984"),
  C = n("497505"),
  m = n("918701"),
  S = n("977156"),
  p = n("685613"),
  g = n("340100"),
  I = n("644646"),
  T = n("78826"),
  A = n("670638"),
  N = n("667105"),
  v = n("341907"),
  R = n("46140"),
  L = n("689938"),
  O = n("263094");
let y = s.forwardRef(function(e, t) {
  var n, i;
  let {
    className: y,
    isExpanded: M,
    isExpansionAnimationComplete: P,
    onCtxMenuOpen: x,
    onCtxMenuClose: D,
    onCtxMenuSelect: b,
    quest: U,
    useReducedMotion: j
  } = e, G = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(U.id), [U]), k = (0, h.useQuestFormattedDate)(U.config.expiresAt), w = (0, h.useQuestFormattedDate)(U.config.rewardCodeExpiresAt), F = s.useMemo(() => (0, m.isAssetAnimated)(U.config.assets.questBarHero), [U]), B = s.useCallback(() => {
    (0, E.enrollInQuest)(U.id, {
      questContent: C.QuestContent.QUEST_BAR,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [U]), H = s.useCallback(() => {
    (0, v.openDisclosureModal)(U, {
      content: C.QuestContent.QUEST_BAR,
      ctaContent: f.QuestContentCTA.OPEN_DISCLOSURE
    })
  }, [U]), V = (0, N.useHandleClaimQuestsReward)({
    quest: U,
    location: C.QuestContent.QUEST_BAR
  }), {
    primaryVariant: Y
  } = S.QuestBarExperiment.useExperiment({
    location: R.QuestsExperimentLocations.QUESTS_BAR
  }, {
    autoTrackExposure: !1
  }), W = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, K = (null === (i = U.userStatus) || void 0 === i ? void 0 : i.completedAt) != null, z = M && P, q = (0, m.getQuestBarHeroAssetUrl)(U), Q = (0, m.getQuestsInstructionsToWinReward)({
    quest: U,
    location: R.QuestsExperimentLocations.QUESTS_BAR,
    useV2Variants: Y === S.QuestBarExperimentVariants.V2
  });
  return (0, a.jsx)("div", {
    "aria-hidden": !z,
    className: l()(y, O.contentExpanded, {
      [O.contentInteractable]: z
    }),
    children: W ? (0, a.jsxs)("div", {
      className: O.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: O.utils,
        children: [(0, a.jsxs)("div", {
          className: O.questAcceptedContentHeading,
          children: [(0, a.jsx)(I.default, {
            className: O.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: U,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, m.getContextualEntrypointHeading)(U)
            }), (0, a.jsx)(u.Text, {
              className: O.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: K ? L.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: w
              }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: k
              })
            })]
          })]
        }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
          onOpen: x,
          onClose: D,
          onSelect: b,
          questContent: C.QuestContent.QUEST_BAR,
          quest: U,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            className: O.submenuWrapper,
            "aria-label": L.default.Messages.ACTIONS,
            children: (0, a.jsx)(d.default, {
              className: O.submenuIcon
            })
          })
        })]
      }), K ? (0, a.jsx)(u.Button, {
        className: l()(O.cta, O.ctaClaimReward),
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: V,
        size: u.Button.Sizes.NONE,
        children: L.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(u.Text, {
        className: O.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: Q
      }), (0, a.jsx)(g.default, {
        quest: U
      })]
    }) : (0, a.jsxs)("div", {
      className: O.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: O.utils,
          children: [(0, a.jsx)(p.default, {
            className: O.partnerBranding,
            quest: U,
            withGameTile: !1
          }), (0, a.jsx)("div", {
            className: O.promotedBadgeWrapper,
            children: (0, a.jsxs)(u.Clickable, {
              className: O.promotedBadge,
              onClick: H,
              children: [(0, a.jsx)(u.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                children: L.default.Messages.QUESTS_PROMOTED
              }), (0, a.jsx)(o.CircleQuestionIcon, {
                color: u.tokens.colors.WHITE,
                className: O.promotedBadgeIcon
              })]
            })
          }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
            onOpen: x,
            onClose: D,
            onSelect: b,
            questContent: C.QuestContent.QUEST_BAR,
            quest: U,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(u.Clickable, {
              ...e,
              className: O.submenuWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: O.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: O.details,
          children: [(0, a.jsx)(I.default, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: U,
            questContent: C.QuestContent.QUEST_BAR
          }), (0, a.jsx)(u.Heading, {
            className: O.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: L.default.Messages.QUESTS_TITLE.format({
              questName: U.config.messages.questName
            })
          }), (0, a.jsx)(u.Text, {
            className: O.description,
            color: "always-white",
            variant: "text-xs/normal",
            children: Q
          })]
        }), (0, a.jsx)(u.Button, {
          className: O.cta,
          color: u.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: z ? B : void 0,
          size: u.Button.Sizes.SMALL,
          submitting: G,
          children: L.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: O.heroAssetWrapper,
        children: F ? (0, a.jsx)(T.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(c.default, {
            ref: e,
            autoPlay: !j,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: q,
              type: (0, m.getVideoAssetMimeType)(q)
            })
          })
        }) : (0, a.jsx)(T.QuestsAsset, {
          id: "QuestBarV2ContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: q
          })
        })
      })]
    })
  })
});
t.default = y