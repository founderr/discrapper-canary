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
  L = n("341907"),
  M = n("46140"),
  P = n("689938"),
  x = n("96268");
let y = s.forwardRef(function(e, t) {
  var n, l;
  let {
    className: I,
    isExpanded: y,
    isExpansionAnimationComplete: b,
    onCtxMenuOpen: U,
    onCtxMenuClose: j,
    onCtxMenuSelect: G,
    quest: w,
    useReducedMotion: k
  } = e, B = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(w.id), [w]), F = (0, C.useQuestFormattedDate)(w.config.expiresAt), H = g.SharedQuestFields.build(w.config), V = (0, C.useQuestFormattedDate)(H.rewardsExpireAt), Y = s.useMemo(() => (0, p.isAssetAnimated)(w.config.assets.questBarHero), [w]), W = (0, O.useHasLaunchedGame)(H.application.id), K = s.useCallback(() => {
    (0, _.enrollInQuest)(w.id, {
      questContent: S.QuestContent.QUEST_BAR,
      questContentCTA: h.QuestContentCTA.ACCEPT_QUEST
    })
  }, [w]), z = (0, O.useHandleClaimQuestsReward)({
    quest: w,
    location: S.QuestContent.QUEST_BAR
  }), q = s.useCallback(() => {
    (0, L.openGameLink)(w, {
      content: S.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [w]), Q = H.features.has(M.QuestVariants.POST_ENROLLMENT_CTA), Z = s.useMemo(() => (0, p.calculatePercentComplete)(w) > 0, [w]), X = (null === (n = w.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, J = (null === (l = w.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, $ = s.useMemo(() => (0, p.hasCollectiblesQuestReward)(w.config), [w.config]), ee = y && b, et = (0, p.getQuestBarHeroAssetUrl)(w), en = (0, p.getQuestsInstructionsToWinReward)({
    quest: w,
    location: M.QuestsExperimentLocations.QUESTS_BAR
  }), ea = (0, E.isWeb)(), es = s.useMemo(() => {
    let e = (0, u.getContrastingColor)(w.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: u.WCAGContrastRatios.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.darkenColor)(e, .3),
      "--custom-cta-color-active": (0, o.darkenColor)(e, .35)
    }
  }, [w.config.colors.primary]);
  return (0, a.jsx)("div", {
    "aria-hidden": !ee,
    className: i()(I, x.contentExpanded, {
      [x.contentInteractable]: ee
    }),
    children: X ? (0, a.jsxs)("div", {
      className: x.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: x.utils,
        children: [(0, a.jsxs)("div", {
          className: x.questAcceptedContentHeading,
          children: [(0, a.jsx)(N.default, {
            className: x.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: w,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)(w)
            }), (0, a.jsx)(d.Text, {
              className: x.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: J ? P.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: V
              }) : P.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: F
              })
            })]
          })]
        }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
          onOpen: U,
          onClose: j,
          onSelect: G,
          questContent: S.QuestContent.QUEST_BAR,
          quest: w,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, a.jsx)(d.Clickable, {
            ...e,
            className: x.submenuWrapper,
            "aria-label": P.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: x.submenuIcon
            })
          })
        })]
      }), J ? (0, a.jsx)(d.Button, {
        className: i()(x.cta, x.ctaClaimReward),
        style: $ ? es : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: z,
        size: d.Button.Sizes.NONE,
        children: P.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: x.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: en
      }), (0, a.jsx)(T.default, {
        quest: w
      }), !ea && !Z && !W && Q && (0, a.jsx)(D, {
        onClick: ee ? q : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: x.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: x.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: x.utils,
          children: [(0, a.jsx)(A.default, {
            color: "always-white"
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: U,
            onClose: j,
            onSelect: G,
            questContent: S.QuestContent.QUEST_BAR,
            quest: w,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, a.jsx)(d.Clickable, {
              ...e,
              className: x.submenuWrapper,
              "aria-label": P.default.Messages.ACTIONS,
              children: (0, a.jsx)(c.default, {
                className: x.submenuIcon
              })
            })
          })]
        }), (0, a.jsxs)("div", {
          className: x.details,
          children: [(0, a.jsx)(N.default, {
            className: x.rewardTile,
            learnMoreStyle: "text",
            quest: w,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: x.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: P.default.Messages.QUESTS_TITLE.format({
              questName: w.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: x.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: en
          })]
        }), (0, a.jsx)(d.Button, {
          className: x.cta,
          style: "1232852290197655573" !== w.id ? es : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ee ? K : void 0,
          size: d.Button.Sizes.NONE,
          submitting: B,
          children: P.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: x.heroAssetWrapper,
        style: {
          color: w.config.colors.secondary
        },
        children: Y ? (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, a.jsx)(f.default, {
            ref: e,
            autoPlay: !k,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: x.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
              src: et,
              type: (0, p.getVideoAssetMimeType)(et)
            })
          })
        }) : (0, a.jsx)(v.QuestsAsset, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, a.jsx)("img", {
            ref: e,
            alt: "",
            className: x.heroAsset,
            src: et
          })
        })
      })]
    })
  })
});

function D(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, I.useIsEligibleForQuestBarProgressCTA)({
    location: M.QuestsExperimentLocations.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, a.jsx)(d.Button, {
    className: x.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: P.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y