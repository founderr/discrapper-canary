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
  x = n("689938"),
  P = n("96268");
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
  }), Q = s.useCallback(() => {
    (0, L.openGameLink)(w, {
      content: S.QuestContent.QUEST_BAR,
      ctaContent: h.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [w]), q = H.features.has(M.QuestVariants.POST_ENROLLMENT_CTA), Z = s.useMemo(() => (0, p.calculatePercentComplete)(w) > 0, [w]), X = (null === (n = w.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, J = (null === (l = w.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, $ = s.useMemo(() => (0, p.hasCollectiblesQuestReward)(w.config), [w.config]), ee = y && b, et = (0, p.getQuestBarHeroAssetUrl)(w), en = (0, p.getQuestsInstructionsToWinReward)({
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
    className: i()(I, P.contentExpanded, {
      [P.contentInteractable]: ee
    }),
    children: X ? (0, a.jsxs)("div", {
      className: P.questAcceptedContent,
      ref: t,
      children: [(0, a.jsxs)("div", {
        className: P.utils,
        children: [(0, a.jsxs)("div", {
          className: P.questAcceptedContentHeading,
          children: [(0, a.jsx)(N.default, {
            className: P.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: w,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, p.getContextualEntrypointHeading)(w)
            }), (0, a.jsx)(d.Text, {
              className: P.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: J ? x.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: V
              }) : x.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
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
            className: P.submenuWrapper,
            "aria-label": x.default.Messages.ACTIONS,
            children: (0, a.jsx)(c.default, {
              className: P.submenuIcon
            })
          })
        })]
      }), J ? (0, a.jsx)(d.Button, {
        className: i()(P.cta, P.ctaClaimReward),
        style: $ ? es : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: z,
        size: d.Button.Sizes.NONE,
        children: x.default.Messages.QUESTS_CLAIM_REWARD
      }) : (0, a.jsx)(d.Text, {
        className: P.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: en
      }), (0, a.jsx)(T.default, {
        quest: w
      }), !ea && !Z && !W && q && (0, a.jsx)(D, {
        onClick: ee ? Q : void 0
      })]
    }) : (0, a.jsxs)("div", {
      className: P.questUnacceptedContent,
      children: [(0, a.jsxs)("div", {
        className: P.questPromoContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: P.utils,
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
              className: P.submenuWrapper,
              "aria-label": x.default.Messages.ACTIONS,
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
            quest: w,
            questContent: S.QuestContent.QUEST_BAR
          }), (0, a.jsx)(d.Heading, {
            className: P.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: x.default.Messages.QUESTS_TITLE.format({
              questName: w.config.messages.questName
            })
          }), (0, a.jsx)(d.Text, {
            className: P.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: en
          })]
        }), (0, a.jsx)(d.Button, {
          className: P.cta,
          style: "1232852290197655573" !== w.id ? es : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ee ? K : void 0,
          size: d.Button.Sizes.NONE,
          submitting: B,
          children: x.default.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, a.jsx)("div", {
        className: P.heroAssetWrapper,
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
            className: P.heroAsset,
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
            className: P.heroAsset,
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
    className: P.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: x.default.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.default = y