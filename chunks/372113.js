"use strict";
n.r(t);
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("774867"),
  c = n("481060"),
  f = n("230711"),
  E = n("607070"),
  _ = n("706454"),
  m = n("63063"),
  T = n("930153"),
  I = n("617136"),
  p = n("272008"),
  h = n("113434"),
  N = n("569984"),
  S = n("497505"),
  C = n("918701"),
  g = n("566078"),
  A = n("340100"),
  M = n("644646"),
  R = n("667105"),
  v = n("87894"),
  O = n("2660"),
  x = n("46140"),
  L = n("981631"),
  D = n("689938"),
  P = n("526123");
let y = (e, t, n) => (0, v.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function U(e) {
  let {
    containerSize: t,
    onClick: n,
    children: s,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, l.jsx)(c.Clickable, {
    tabIndex: a,
    className: P.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, l.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: s
    })
  }) : (0, l.jsx)(c.Button, {
    tabIndex: a,
    wrapperClassName: P.ctaButtonWrapper,
    color: c.ButtonColors.PRIMARY,
    onClick: n,
    children: s
  })
}(s = a || (a = {}))[s.UNACCEPTED = 0] = "UNACCEPTED", s[s.ACCEPTED = 1] = "ACCEPTED", s[s.IN_PROGRESS = 2] = "IN_PROGRESS", s[s.COMPLETED = 3] = "COMPLETED", s[s.CLAIMED = 4] = "CLAIMED";

function j(e) {
  let {
    isQuestComplete: t,
    useReducedMotion: n,
    disabled: s,
    isEnrolling: a,
    onClick: i,
    children: r,
    ...o
  } = e;
  return t && !n ? (0, l.jsx)(c.ShinyButton, {
    ...o,
    wrapperClassName: P.ctaButtonWrapper,
    color: c.ButtonColors.BRAND,
    disabled: s,
    submitting: a,
    onClick: i,
    children: r
  }) : (0, l.jsx)(c.Button, {
    ...o,
    wrapperClassName: P.ctaButtonWrapper,
    color: c.ButtonColors.BRAND,
    disabled: s,
    submitting: a,
    onClick: i,
    children: r
  })
}
t.default = e => {
  let {
    quest: t,
    location: n,
    size: s,
    isFocused: a,
    isQuestExpired: r,
    isExpanded: b,
    isAnimating: F,
    contentPosition: B
  } = e, G = function(e) {
    var t, n, s;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
      r = (0, h.useQuestTaskDetails)({
        quest: e,
        location: x.QuestsExperimentLocations.QUESTS_CARD
      }).percentComplete > 0;
    if (i) return 4;
    if (l) return 3;
    if (r) return 2;
    else if (a) return 1;
    else return 0
  }(t), k = G >= 1, w = G >= 3, H = G >= 4, V = (0, C.hasCollectiblesQuestReward)(t.config), Y = (0, C.hasVariant)(t, x.QuestVariants.IN_HOUSE_CONSOLE_QUEST), K = (0, v.isQuestCardInGiftInventory)(n), W = n === S.QuestContent.QUESTS_EMBED, z = b || F, {
    xboxAndPlaystationAccounts: Q
  } = (0, h.useConnectedAccounts)(), q = (0, h.useQuestInstructionTitle)(t, x.QuestsExperimentLocations.QUESTS_CARD), X = k && !H && K, Z = Q.length > 0, J = (0, u.useStateFromStores)([E.default], () => E.default.useReducedMotion), $ = function(e, t, n, s, a) {
    switch (e) {
      case 0:
        return D.default.Messages.QUESTS_ACCEPT;
      case 1:
        if (n && s && !a) return D.default.Messages.QUESTS_CONNECT_CONSOLE;
      case 2:
      case 3:
        return D.default.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        return t ? D.default.Messages.COLLECTIBLES_USE_NOW : D.default.Messages.QUESTS_SEE_CODE;
      default:
        return D.default.Messages.QUESTS_ACCEPT
    }
  }(G, V, Y, K, Z), ee = k ? D.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : D.default.Messages.QUESTS_ACCEPT_TOOLTIP, et = (0, R.useHandleClaimQuestsReward)({
    quest: t,
    location: n,
    questContentPosition: B
  }), en = i.useMemo(() => Y && K && !Z ? 2 === G : k && !w, [Y, K, k, w, G, Z]), es = (0, u.useStateFromStores)([N.default], () => N.default.isEnrolling(t.id)), ea = () => Y && K && 1 === G ? f.default.open(L.UserSettingsSections.CONNECTIONS) : k ? void et() : (0, p.enrollInQuest)(t.id, {
    questContent: n,
    questContentCTA: I.QuestContentCTA.ACCEPT_QUEST,
    questContentPosition: B
  }), el = (0, u.useStateFromStores)([_.default], () => _.default.locale), ei = K && V, er = r && !w, eo = (0, l.jsx)(M.default, {
    autoplay: a,
    className: o()(P.gridImg, {
      [P.questRewardGiftInventory]: K && "lg" === s,
      [P.questRewardEmbed]: W && "lg" === s,
      [P.questRewardEmbedSm]: "sm" === s,
      [P.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: K ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: B
  });
  return (0, l.jsxs)("div", {
    className: o()(P.outerContainer, {
      [P.outerContainerSm]: "sm" === s,
      [P.outerContainerXs]: "xs" === s,
      [P.outerContainerNoProgress]: !X
    }),
    style: {
      visibility: z ? "visible" : "hidden"
    },
    "aria-hidden": !z,
    children: [(0, l.jsx)(c.Tooltip, {
      text: er ? D.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: P.rewardTileExpirationTooltip,
      shouldShow: er,
      children: e => (0, l.jsxs)("div", {
        className: P.rewardTileWrapper,
        ...e,
        children: [r && (0, l.jsx)("div", {
          className: P.rewardTileExpired,
          children: (0, l.jsx)(d.CircleExclamationPointIcon, {
            color: c.tokens.colors.WHITE
          })
        }), ei ? (0, l.jsx)(O.default, {
          questConfig: t.config,
          fallback: eo,
          isFocused: a
        }) : eo]
      })
    }), (0, l.jsxs)("div", {
      className: o()(P.gridText, P.taskDetails),
      children: [(0, l.jsx)(c.Text, {
        variant: y(n, s, k),
        className: P.taskInstructions,
        children: r ? D.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : q
      }), (0, l.jsx)(c.Text, {
        variant: "lg" === s ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i, r;
          let {
            quest: o,
            location: u,
            locale: d,
            isQuestExpired: c,
            hasConsoleConnection: E
          } = e, _ = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, I = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, p = I && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, N = (0, C.hasVariant)(o, x.QuestVariants.IN_HOUSE_CONSOLE_QUEST), S = (0, C.hasVariant)(o, x.QuestVariants.MOBILE_CONSOLE_QUEST), A = (0, v.isQuestCardInGiftInventory)(u), M = (0, h.useQuestFormattedDate)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), R = (0, C.isTieredRewardCodeQuest)({
            quest: o
          }), O = g.SharedQuestFields.build(o.config).defaultReward.messages.nameWithArticle;
          if (I && N && A) return D.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          });
          if (p) {
            let e = R ? (0, C.getRewardCodeQuestReward)({
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
          if (I) return R ? D.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: M
          }) : D.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: O,
            date: M
          });
          let P = R ? (0, C.getRewardCodeQuestReward)({
            quest: o,
            idx: 0
          }) : null;
          if (c) return D.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == P ? void 0 : P.messages.nameWithArticle) && void 0 !== r ? r : O
          });
          if ((N || S) && A) return _ || E ? D.default.Messages.QUEST_REWARD.format({
            reward: O
          }) : N ? D.default.Messages.QUEST_REWARD_IN_HOUSE.format({
            reward: O,
            onClick: () => {
              f.default.open(L.UserSettingsSections.CONNECTIONS)
            }
          }) : D.default.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: O,
            streamingDurationRequirement: (0, C.getQuestTaskDetails)({
              quest: o,
              location: x.QuestsExperimentLocations.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              f.default.open(L.UserSettingsSections.CONNECTIONS)
            }
          });
          return null != P && null != P.approximateCount ? D.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: P.messages.nameWithArticle,
            maxRewardCount: (0, T.humanizeValue)(P.approximateCount, d),
            helpCenterLink: m.default.getArticleURL(L.HelpdeskArticles.QUESTS_LEARN_MORE)
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
      className: o()(P.ctaButtonContainer, P.gridCtaButtons),
      children: [!K && (0, l.jsx)(U, {
        containerSize: s,
        onClick: () => {
          f.default.open(L.UserSettingsSections.INVENTORY), (0, I.trackQuestContentClicked)({
            questId: t.id,
            questContent: n,
            questContentPosition: B,
            questContentCTA: I.QuestContentCTA.LEARN_MORE
          })
        },
        children: D.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!r || w) && (0, l.jsx)(c.Tooltip, {
        text: ee,
        tooltipContentClassName: P.ctaTooltipCopy,
        shouldShow: !w,
        children: e => (0, l.jsx)(j, {
          ...e,
          isQuestComplete: w,
          useReducedMotion: J,
          disabled: en,
          isEnrolling: es,
          onClick: ea,
          children: $
        })
      }, ee)]
    }), X && (0, l.jsx)(A.default, {
      className: P.gridProgressBar,
      color: w ? c.tokens.colors.TEXT_POSITIVE : c.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: K
    })]
  })
}