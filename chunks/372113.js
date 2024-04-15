"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("774867"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("706454"),
  E = n("976644"),
  f = n("63063"),
  _ = n("930153"),
  T = n("617136"),
  I = n("272008"),
  m = n("113434"),
  N = n("569984"),
  p = n("497505"),
  S = n("918701"),
  C = n("340100"),
  A = n("644646"),
  h = n("667105"),
  g = n("2660"),
  M = n("981631"),
  O = n("689938"),
  R = n("506710");
let v = (e, t, n, s) => n ? s ? O.default.Messages.COLLECTIBLES_USE_NOW : O.default.Messages.QUESTS_SEE_CODE : e || t ? O.default.Messages.QUESTS_CLAIM_REWARD : O.default.Messages.QUESTS_ACCEPT,
  L = (e, t, n) => e !== p.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function P(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    className: R.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    wrapperClassName: R.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: D,
    location: x,
    size: y,
    isFocused: U,
    isQuestExpired: j
  } = e, b = (null === (t = D.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, G = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, B = (0, S.hasQuestCollectibleRewards)(D.config), F = (null === (a = D.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, k = G && !F && x !== p.QuestContent.QUESTS_EMBED, w = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), H = v(b, G, F, B), V = G ? O.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : O.default.Messages.QUESTS_ACCEPT_TOOLTIP, Y = (0, h.useHandleClaimQuestsReward)({
    quest: D,
    location: x
  }), K = G && !b, W = (0, i.useStateFromStores)([N.default], () => N.default.isEnrolling(D.id)), z = () => {
    if (!G && !b) return (0, I.enrollInQuest)(D.id, {
      questContent: x,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
    });
    Y()
  }, Q = (0, i.useStateFromStores)([c.default], () => c.default.locale), q = x === p.QuestContent.QUESTS_EMBED, J = x === p.QuestContent.QUEST_INVENTORY_CARD, Z = J && B, X = J && !G, $ = (0, s.jsx)(A.default, {
    autoplay: U,
    className: l()(R.gridImg, {
      [R.questRewardGiftInventory]: J && "lg" === y,
      [R.questRewardEmbed]: q && "lg" === y,
      [R.questRewardEmbedSm]: "sm" === y,
      [R.questRewardEmbedXs]: "xs" === y
    }),
    learnMoreStyle: X || J ? null : "text",
    quest: D,
    questContent: x
  });
  return (0, s.jsxs)("div", {
    className: l()(R.outerContainer, {
      [R.outerContainerSm]: "sm" === y,
      [R.outerContainerXs]: "xs" === y,
      [R.outerContainerNoProgress]: !k
    }),
    children: [(0, s.jsx)(o.Tooltip, {
      text: j ? O.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: R.rewardTileExpirationTooltip,
      shouldShow: j,
      children: e => (0, s.jsxs)("div", {
        className: R.rewardTileWrapper,
        ...e,
        children: [j && (0, s.jsx)("div", {
          className: R.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), Z ? (0, s.jsx)(g.default, {
          questConfig: D.config,
          fallback: $
        }) : $]
      })
    }), (0, s.jsxs)("div", {
      className: l()(R.gridText, R.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: L(x, y, G),
        className: R.taskInstructions,
        children: j ? O.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: D.config.messages.questName
        }) : O.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: D.config.streamDurationRequirementMinutes,
          gameTitle: D.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === y ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i;
          let {
            quest: r,
            locale: o,
            isQuestExpired: u
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (0, m.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), T = (0, S.isTieredRewardCodeQuest)({
            quest: r
          });
          if (c) {
            let e = T ? (0, S.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? O.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: E
            }) : O.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: E
            })
          }
          if (d) return T ? O.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: E
          }) : O.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: E
          });
          let I = T ? (0, S.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? O.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == I ? void 0 : I.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != I && null != I.approximateCount ? O.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: I.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(I.approximateCount, o),
            helpCenterLink: f.default.getArticleURL(M.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : O.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: D,
          locale: Q,
          isQuestExpired: j
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(R.ctaButtonContainer, R.gridCtaButtons),
      children: [X && (0, s.jsx)(P, {
        containerSize: y,
        onClick: () => {
          u.default.open(M.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: D.id,
            questContent: x,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: O.default.Messages.QUESTS_LEARN_MORE_V2
      }), !j && (0, s.jsx)(o.Tooltip, {
        text: V,
        tooltipContentClassName: R.ctaTooltipCopy,
        shouldShow: !F && !b,
        children: e => b && !w ? (0, s.jsx)(E.default, {
          ...e,
          wrapperClassName: R.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: K,
          submitting: W,
          onClick: z,
          children: H
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: R.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: K,
          submitting: W,
          onClick: z,
          children: H
        })
      }, V)]
    }), k && (0, s.jsx)(C.default, {
      className: R.gridProgressBar,
      color: b ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: D,
      isInventory: J
    })]
  })
}