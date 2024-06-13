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
  T = n("706454"),
  m = n("63063"),
  I = n("930153"),
  N = n("617136"),
  p = n("272008"),
  h = n("113434"),
  S = n("569984"),
  C = n("497505"),
  A = n("918701"),
  g = n("566078"),
  M = n("340100"),
  R = n("644646"),
  O = n("667105"),
  v = n("87894"),
  x = n("2660"),
  L = n("46140"),
  P = n("981631"),
  D = n("689938"),
  y = n("526123");
let U = (e, t, n) => (0, v.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

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
  } = e, E = s && a && t, _ = E ? y.inHouseButton : f.ButtonColors.BRAND, T = t && !n ? f.ShinyButton : f.Button;
  return (0, l.jsx)(T, {
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
    isAnimating: G,
    contentPosition: F
  } = e, B = function(e) {
    var t, n, s;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
      r = (0, h.useQuestTaskDetails)({
        quest: e,
        location: L.QuestsExperimentLocations.QUESTS_CARD
      }).percentComplete > 0;
    if (i) return 4;
    if (l) return 3;
    if (r) return 2;
    else if (a) return 1;
    else return 0
  }(t), k = B >= 1, w = B >= 3, H = B >= 4, V = (0, A.hasCollectiblesQuestReward)(t.config), Y = (0, A.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), K = (0, v.isQuestCardInGiftInventory)(n), W = n === C.QuestContent.QUESTS_EMBED, z = c || G, {
    xboxAndPlaystationAccounts: Q
  } = (0, h.useConnectedAccounts)(), q = (0, h.useQuestInstructionTitle)(t, L.QuestsExperimentLocations.QUESTS_CARD), X = k && !H && K, Z = Q.length > 0, J = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), $ = function(e, t, n, s, a) {
    switch (e) {
      case 0:
        return D.default.Messages.QUESTS_ACCEPT;
      case 1:
        if (n && s && !a) return D.default.Messages.QUESTS_CONNECT_CONSOLE;
      case 2:
      case 3:
        return D.default.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        if (n && s) return D.default.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD;
        if (t) return D.default.Messages.COLLECTIBLES_USE_NOW;
        return D.default.Messages.QUESTS_SEE_CODE;
      default:
        return D.default.Messages.QUESTS_ACCEPT
    }
  }(B, V, Y, K, Z), ee = Y && K && w ? D.default.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : k ? D.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : D.default.Messages.QUESTS_ACCEPT_TOOLTIP, et = (0, O.useHandleClaimQuestsReward)({
    quest: t,
    location: n,
    questContentPosition: F
  }), en = i.useMemo(() => Y && K && !Z ? 2 === B : k && !w, [Y, K, k, w, B, Z]), es = (0, u.useStateFromStores)([S.default], () => S.default.isEnrolling(t.id)), ea = () => Y && K && 1 === B ? E.default.open(P.UserSettingsSections.CONNECTIONS) : k ? void et() : (0, p.enrollInQuest)(t.id, {
    questContent: n,
    questContentCTA: N.QuestContentCTA.ACCEPT_QUEST,
    questContentPosition: F
  }), el = (0, u.useStateFromStores)([T.default], () => T.default.locale), ei = K && V, er = r && !w, eo = (0, l.jsx)(R.default, {
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
    questContentPosition: F
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
      text: er ? D.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
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
        children: r ? D.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
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
          } = e, _ = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, N = T && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, p = (0, A.hasVariant)(o, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), S = (0, A.hasVariant)(o, L.QuestVariants.MOBILE_CONSOLE_QUEST), C = (0, v.isQuestCardInGiftInventory)(u), M = (0, h.useQuestFormattedDate)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), R = (0, A.isTieredRewardCodeQuest)({
            quest: o
          }), O = g.SharedQuestFields.build(o.config).defaultReward.messages.nameWithArticle;
          if (T && p && C) return D.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          });
          if (N) {
            let e = R ? (0, A.getRewardCodeQuestReward)({
                quest: o,
                idx: null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedTier
              }) : null,
              t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
            return null != t ? D.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: M
            }) : D.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: O,
              date: M
            })
          }
          if (T) return R ? D.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          }) : D.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: O,
            date: M
          });
          let x = R ? (0, A.getRewardCodeQuestReward)({
            quest: o,
            idx: 0
          }) : null;
          if (c) return D.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == x ? void 0 : x.messages.nameWithArticle) && void 0 !== r ? r : O
          });
          if ((p || S) && C) return _ || f ? D.default.Messages.QUEST_REWARD.format({
            reward: O
          }) : p ? D.default.Messages.QUEST_REWARD_IN_HOUSE.format({
            reward: O,
            onClick: () => {
              E.default.open(P.UserSettingsSections.CONNECTIONS)
            }
          }) : D.default.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: O,
            streamingDurationRequirement: (0, A.getQuestTaskDetails)({
              quest: o,
              location: L.QuestsExperimentLocations.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              E.default.open(P.UserSettingsSections.CONNECTIONS)
            }
          });
          return null != x && null != x.approximateCount ? D.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: x.messages.nameWithArticle,
            maxRewardCount: (0, I.humanizeValue)(x.approximateCount, d),
            helpCenterLink: m.default.getArticleURL(P.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : D.default.Messages.QUEST_REWARD.format({
            reward: O
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
          E.default.open(P.UserSettingsSections.INVENTORY), (0, N.trackQuestContentClicked)({
            questId: t.id,
            questContent: n,
            questContentPosition: F,
            questContentCTA: N.QuestContentCTA.LEARN_MORE
          })
        },
        children: D.default.Messages.QUESTS_LEARN_MORE_V2
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