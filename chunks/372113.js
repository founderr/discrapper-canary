"use strict";
n.r(t);
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
}(s = a || (a = {}))[s.UNACCEPTED = 0] = "UNACCEPTED", s[s.ACCEPTED = 1] = "ACCEPTED", s[s.IN_PROGRESS = 2] = "IN_PROGRESS", s[s.COMPLETED = 3] = "COMPLETED", s[s.CLAIMED = 4] = "CLAIMED";

function b(e) {
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
    isAnimating: F,
    contentPosition: B
  } = e, G = function(e) {
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
  }(t), k = G >= 1, w = G >= 3, H = G >= 4, V = (0, g.hasCollectiblesQuestReward)(t.config), Y = (0, g.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), K = (0, O.isQuestCardInGiftInventory)(n), W = n === C.QuestContent.QUESTS_EMBED, z = c || F, {
    xboxAndPlaystationAccounts: Q
  } = (0, N.useConnectedAccounts)(), q = (0, N.useQuestInstructionTitle)(t, L.QuestsExperimentLocations.QUESTS_CARD), X = k && !H && K, Z = Q.length > 0, J = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), $ = function(e, t, n, s, a) {
    switch (e) {
      case 0:
        return P.default.Messages.QUESTS_ACCEPT;
      case 1:
        if (n && s && !a) return P.default.Messages.QUESTS_CONNECT_CONSOLE;
      case 2:
      case 3:
        return P.default.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        if (n && s) return P.default.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD;
        if (t) return P.default.Messages.COLLECTIBLES_USE_NOW;
        return P.default.Messages.QUESTS_SEE_CODE;
      default:
        return P.default.Messages.QUESTS_ACCEPT
    }
  }(G, V, Y, K, Z), ee = Y && K && w ? P.default.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : k ? P.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : P.default.Messages.QUESTS_ACCEPT_TOOLTIP, et = (0, v.useHandleClaimQuestsReward)({
    quest: t,
    location: n,
    questContentPosition: B
  }), en = i.useMemo(() => Y && K && !Z ? 2 === G : k && !w, [Y, K, k, w, G, Z]), es = (0, u.useStateFromStores)([S.default], () => S.default.isEnrolling(t.id)), ea = () => Y && K && 1 === G ? E.default.open(D.UserSettingsSections.CONNECTIONS) : k ? void et() : (0, h.enrollInQuest)(t.id, {
    questContent: n,
    questContentCTA: p.QuestContentCTA.ACCEPT_QUEST,
    questContentPosition: B
  }), el = (0, u.useStateFromStores)([m.default], () => m.default.locale), ei = K && V, er = r && !w, eo = (0, l.jsx)(R.default, {
    autoplay: a,
    className: o()(y.gridImg, {
      [y.questRewardGiftInventory]: K && "lg" === s,
      [y.questRewardEmbed]: W && "lg" === s,
      [y.questRewardEmbedSm]: "sm" === s,
      [y.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: K ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: B
  });
  return (0, l.jsxs)("div", {
    className: o()(y.outerContainer, {
      [y.outerContainerSm]: "sm" === s,
      [y.outerContainerXs]: "xs" === s,
      [y.outerContainerNoProgress]: !X
    }),
    style: {
      visibility: z ? "visible" : "hidden"
    },
    "aria-hidden": !z,
    children: [(0, l.jsx)(f.Tooltip, {
      text: er ? P.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: y.rewardTileExpirationTooltip,
      shouldShow: er,
      children: e => (0, l.jsxs)("div", {
        className: y.rewardTileWrapper,
        ...e,
        children: [r && (0, l.jsx)("div", {
          className: y.rewardTileExpired,
          children: (0, l.jsx)(d.CircleExclamationPointIcon, {
            color: f.tokens.colors.WHITE
          })
        }), ei ? (0, l.jsx)(x.default, {
          questConfig: t.config,
          fallback: eo,
          isFocused: a
        }) : eo]
      })
    }), (0, l.jsxs)("div", {
      className: o()(y.gridText, y.taskDetails),
      children: [(0, l.jsx)(f.Text, {
        variant: U(n, s, k),
        className: y.taskInstructions,
        children: r ? P.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : q
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
          locale: el,
          isQuestExpired: r,
          hasConsoleConnection: Z
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(y.ctaButtonContainer, y.gridCtaButtons),
      children: [!K && (0, l.jsx)(j, {
        containerSize: s,
        onClick: () => {
          E.default.open(D.UserSettingsSections.INVENTORY), (0, p.trackQuestContentClicked)({
            questId: t.id,
            questContent: n,
            questContentPosition: B,
            questContentCTA: p.QuestContentCTA.LEARN_MORE
          })
        },
        children: P.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!r || w) && (0, l.jsx)(f.Tooltip, {
        text: ee,
        tooltipContentClassName: y.ctaTooltipCopy,
        shouldShow: !w || w && Y && K,
        children: e => (0, l.jsx)(b, {
          ...e,
          isQuestComplete: w,
          useReducedMotion: J,
          isInHouseQuest: Y,
          inGiftInventory: K,
          disabled: en,
          isEnrolling: es,
          onClick: ea,
          children: $
        })
      }, ee)]
    }), X && (0, l.jsx)(M.default, {
      className: y.gridProgressBar,
      color: w ? f.tokens.colors.TEXT_POSITIVE : f.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: K
    })]
  })
}