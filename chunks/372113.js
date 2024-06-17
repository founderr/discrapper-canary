"use strict";
n.r(t), n("47120");
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("774867"),
  c = n("149020"),
  f = n("481060"),
  E = n("230711"),
  _ = n("607070"),
  m = n("706454"),
  T = n("63063"),
  I = n("930153"),
  p = n("617136"),
  h = n("272008"),
  N = n("113434"),
  S = n("569984"),
  C = n("497505"),
  g = n("918701"),
  A = n("566078"),
  M = n("340100"),
  R = n("644646"),
  v = n("667105"),
  O = n("87894"),
  x = n("2660"),
  L = n("46140"),
  D = n("981631"),
  P = n("689938"),
  y = n("526123");
let U = (e, t, n) => (0, O.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function j(e) {
  let {
    containerSize: t,
    onClick: n,
    children: s,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, l.jsx)(f.Clickable, {
    tabIndex: a,
    className: y.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, l.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: s
    })
  }) : (0, l.jsx)(f.Button, {
    tabIndex: a,
    wrapperClassName: y.ctaButtonWrapper,
    color: f.ButtonColors.PRIMARY,
    onClick: n,
    children: s
  })
}(a = s || (s = {}))[a.UNACCEPTED = 0] = "UNACCEPTED", a[a.ACCEPTED = 1] = "ACCEPTED", a[a.IN_PROGRESS = 2] = "IN_PROGRESS", a[a.COMPLETED = 3] = "COMPLETED", a[a.CLAIMED = 4] = "CLAIMED";

function b(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [s, a] = i.useState([]), r = (0, v.useAnimatedRefreshIcon)({
    useReducedMotion: n,
    className: o()(y.refreshIcon, s.length > 0 ? y.refreshIconErrorState : void 0)
  }), u = async () => {
    r.startAnimation(), a((await (0, h.manuallyStartConsoleQuest)(t.id)).errorHints), r.stopAnimation()
  }, d = () => {
    r.startAnimation(), u()
  }, {
    rawTooltipText: c,
    renderTooltipText: E,
    buttonText: _
  } = i.useMemo(() => {
    let e = A.SharedQuestFields.build(t.config).application.name,
      n = (0, g.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
      a = s.join("\n"),
      i = () => (0, l.jsx)(l.Fragment, {
        children: s.map((e, t) => (0, l.jsx)(f.Text, {
          className: t > 0 ? y.ctaTooltipErrorHint : void 0,
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    return n ? {
      rawTooltipText: s.length > 0 ? a : P.default.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      renderTooltipText: s.length > 0 ? i : () => P.default.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      buttonText: s.length > 0 ? P.default.Messages.QUESTS_ANY_GAME_NOT_DETECTED : P.default.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    } : {
      rawTooltipText: s.length > 0 ? a : P.default.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      renderTooltipText: s.length > 0 ? i : () => P.default.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      buttonText: s.length > 0 ? P.default.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: e
      }) : P.default.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    }
  }, [t, s]);
  return (0, l.jsx)(f.Tooltip, {
    "aria-label": c,
    text: E(),
    tooltipContentClassName: s.length > 0 ? y.ctaTooltipErrorText : y.ctaTooltipText,
    children: e => (0, l.jsx)(f.Button, {
      ...e,
      wrapperClassName: y.ctaButtonWrapper,
      color: s.length > 0 ? f.ButtonColors.RED : f.ButtonColors.PRIMARY,
      onClick: d,
      children: (0, l.jsxs)("div", {
        className: y.ctaButtonInner,
        children: [_, r.render()]
      })
    })
  }, c)
}

function F(e) {
  let {
    isQuestComplete: t,
    useReducedMotion: n,
    isInHouseQuest: s,
    inGiftInventory: a,
    disabled: i,
    isEnrolling: r,
    onClick: o,
    children: u,
    ...d
  } = e, E = s && a && t, _ = E ? y.inHouseButton : f.ButtonColors.BRAND, m = t && !n ? f.ShinyButton : f.Button;
  return (0, l.jsx)(m, {
    ...d,
    wrapperClassName: y.ctaButtonWrapper,
    color: _,
    disabled: i,
    submitting: r,
    onClick: o,
    children: (0, l.jsxs)("div", {
      className: y.ctaButtonInner,
      children: [E && (0, l.jsx)(c.GameControllerIcon, {
        width: 20,
        height: 20,
        className: y.inHouseIcon,
        color: "white"
      }), u]
    })
  })
}
t.default = e => {
  let {
    quest: t,
    location: n,
    size: s,
    isFocused: a,
    isQuestExpired: r,
    isExpanded: c,
    isAnimating: B,
    contentPosition: G
  } = e, k = function(e) {
    var t, n, s;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
      r = (0, N.useQuestTaskDetails)({
        quest: e,
        location: L.QuestsExperimentLocations.QUESTS_CARD
      }).percentComplete > 0;
    if (i) return 4;
    if (l) return 3;
    if (r) return 2;
    else if (a) return 1;
    else return 0
  }(t), w = k >= 1, H = k >= 3, V = k >= 4, Y = (0, g.hasCollectiblesQuestReward)(t.config), K = (0, g.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), W = (0, g.isConsoleQuest)(t), z = (0, O.isQuestCardInGiftInventory)(n), Q = n === C.QuestContent.QUESTS_EMBED, q = c || B, {
    xboxAndPlaystationAccounts: X
  } = (0, N.useConnectedAccounts)(), Z = (0, N.useQuestInstructionTitle)(t, L.QuestsExperimentLocations.QUESTS_CARD), J = w && !V && z, $ = X.length > 0, ee = (0, g.isQuestProgressingOnConsole)(t), et = w && W && !$, en = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), es = function(e) {
    let {
      progressState: t,
      isCollectibleQuest: n,
      isInHouseQuest: s,
      inGiftInventory: a,
      waitingForConsoleConnection: l
    } = e;
    switch (t) {
      case 0:
      default:
        return P.default.Messages.QUESTS_ACCEPT;
      case 1:
        if (l && a) return P.default.Messages.QUESTS_CONNECT_CONSOLE;
        return P.default.Messages.QUESTS_CLAIM_REWARD;
      case 2:
      case 3:
        return P.default.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        if (s && a) return P.default.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD;
        if (n) return P.default.Messages.COLLECTIBLES_USE_NOW;
        return P.default.Messages.QUESTS_SEE_CODE
    }
  }({
    progressState: k,
    isCollectibleQuest: Y,
    isInHouseQuest: K,
    inGiftInventory: z,
    waitingForConsoleConnection: et
  }), ea = K && z && H ? P.default.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : w ? P.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : P.default.Messages.QUESTS_ACCEPT_TOOLTIP, el = (0, v.useHandleClaimQuestsReward)({
    quest: t,
    location: n,
    questContentPosition: G
  }), ei = i.useMemo(() => W && z && !$ ? 2 === k : w && !H, [W, z, w, H, k, $]), er = (0, u.useStateFromStores)([S.default], () => S.default.isEnrolling(t.id)), eo = () => et && z ? E.default.open(D.UserSettingsSections.CONNECTIONS) : w ? void el() : (0, h.enrollInQuest)(t.id, {
    questContent: n,
    questContentCTA: p.QuestContentCTA.ACCEPT_QUEST,
    questContentPosition: G
  }), eu = (0, u.useStateFromStores)([m.default], () => m.default.locale), ed = z && Y, ec = r && !H, ef = (0, l.jsx)(R.default, {
    autoplay: a,
    className: o()(y.gridImg, {
      [y.questRewardGiftInventory]: z && "lg" === s,
      [y.questRewardEmbed]: Q && "lg" === s,
      [y.questRewardEmbedSm]: "sm" === s,
      [y.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: z ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: G
  });
  return (0, l.jsxs)("div", {
    className: o()(y.outerContainer, {
      [y.outerContainerSm]: "sm" === s,
      [y.outerContainerXs]: "xs" === s,
      [y.outerContainerNoProgress]: !J
    }),
    style: {
      visibility: q ? "visible" : "hidden"
    },
    "aria-hidden": !q,
    children: [(0, l.jsx)(f.Tooltip, {
      text: ec ? P.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: y.rewardTileExpirationTooltip,
      shouldShow: ec,
      children: e => (0, l.jsxs)("div", {
        className: y.rewardTileWrapper,
        ...e,
        children: [r && (0, l.jsx)("div", {
          className: y.rewardTileExpired,
          children: (0, l.jsx)(d.CircleExclamationPointIcon, {
            color: f.tokens.colors.WHITE
          })
        }), ed ? (0, l.jsx)(x.default, {
          questConfig: t.config,
          fallback: ef,
          isFocused: a
        }) : ef]
      })
    }), (0, l.jsxs)("div", {
      className: o()(y.gridText, y.taskDetails),
      children: [(0, l.jsx)(f.Text, {
        variant: U(n, s, w),
        className: y.taskInstructions,
        children: r ? P.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : Z
      }), (0, l.jsx)(f.Text, {
        variant: "lg" === s ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i, r;
          let {
            quest: o,
            location: u,
            locale: d,
            isQuestExpired: c,
            hasConsoleConnection: f
          } = e, _ = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, m = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, p = m && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, h = (0, g.hasVariant)(o, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), S = (0, g.hasVariant)(o, L.QuestVariants.MOBILE_CONSOLE_QUEST), C = (0, O.isQuestCardInGiftInventory)(u), M = (0, N.useQuestFormattedDate)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), R = (0, g.isTieredRewardCodeQuest)({
            quest: o
          }), v = A.SharedQuestFields.build(o.config).defaultReward.messages.nameWithArticle, x = (0, g.getCollectibleQuestRewardDuration)(o.config);
          if (m && h && C) return P.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          });
          if (p) {
            let e = R ? (0, g.getRewardCodeQuestReward)({
                quest: o,
                idx: null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedTier
              }) : null,
              t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
            return null != t ? P.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: M
            }) : P.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: v,
              date: M
            })
          }
          if (m) return R ? P.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          }) : P.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: v,
            date: M
          });
          let y = R ? (0, g.getRewardCodeQuestReward)({
            quest: o,
            idx: 0
          }) : null;
          return c ? P.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == y ? void 0 : y.messages.nameWithArticle) && void 0 !== r ? r : v
          }) : C && !_ && !f && S ? null != x ? P.default.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o.config.messages.gameTitle,
            reward: v,
            streamingDurationRequirement: (0, g.getQuestTaskDetails)({
              quest: o,
              location: L.QuestsExperimentLocations.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              E.default.open(D.UserSettingsSections.CONNECTIONS)
            },
            duration: x
          }) : P.default.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: v,
            streamingDurationRequirement: (0, g.getQuestTaskDetails)({
              quest: o,
              location: L.QuestsExperimentLocations.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              E.default.open(D.UserSettingsSections.CONNECTIONS)
            }
          }) : null != y && null != y.approximateCount ? P.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: y.messages.nameWithArticle,
            maxRewardCount: (0, I.humanizeValue)(y.approximateCount, d),
            helpCenterLink: T.default.getArticleURL(D.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : null != x ? P.default.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: v,
            duration: x
          }) : P.default.Messages.QUEST_REWARD.format({
            reward: v
          })
        }({
          quest: t,
          location: n,
          locale: eu,
          isQuestExpired: r,
          hasConsoleConnection: $
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(y.ctaButtonContainer, y.gridCtaButtons),
      children: [!z && (0, l.jsx)(j, {
        containerSize: s,
        onClick: () => {
          E.default.open(D.UserSettingsSections.INVENTORY), (0, p.trackQuestContentClicked)({
            questId: t.id,
            questContent: n,
            questContentPosition: G,
            questContentCTA: p.QuestContentCTA.LEARN_MORE
          })
        },
        children: P.default.Messages.QUESTS_LEARN_MORE_V2
      }), r && !H ? null : W && z && w && $ && !ee ? (0, l.jsx)(b, {
        quest: t,
        useReducedMotion: en
      }) : (0, l.jsx)(f.Tooltip, {
        text: ea,
        tooltipContentClassName: y.ctaTooltipText,
        shouldShow: !H || H && W && z,
        children: e => (0, l.jsx)(F, {
          ...e,
          isQuestComplete: H,
          useReducedMotion: en,
          isInHouseQuest: K,
          inGiftInventory: z,
          disabled: ei,
          isEnrolling: er,
          onClick: eo,
          children: es
        })
      }, ea)]
    }), J && (0, l.jsx)(M.default, {
      className: y.gridProgressBar,
      color: H ? f.tokens.colors.TEXT_POSITIVE : f.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: z
    })]
  })
}