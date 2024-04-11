"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("230711"),
  u = n("607070"),
  d = n("706454"),
  c = n("976644"),
  f = n("63063"),
  E = n("930153"),
  _ = n("617136"),
  T = n("272008"),
  m = n("113434"),
  I = n("569984"),
  p = n("497505"),
  h = n("918701"),
  N = n("340100"),
  S = n("667105"),
  C = n("2660"),
  A = n("981631"),
  g = n("689938"),
  M = n("506710");
let R = (e, t, n, s) => n ? s ? g.default.Messages.COLLECTIBLES_USE_NOW : g.default.Messages.QUESTS_SEE_CODE : e || t ? g.default.Messages.QUESTS_CLAIM_REWARD : g.default.Messages.QUESTS_ACCEPT,
  O = (e, t, n) => e !== p.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function v(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== p.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(r.Clickable, {
    className: M.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(r.Button, {
    wrapperClassName: M.ctaButtonWrapper,
    color: r.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: L,
    location: x,
    size: D
  } = e, P = (null === (t = L.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, y = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, U = (0, h.hasQuestCollectibleRewards)(L.config), b = (null === (a = L.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, j = y && !b && x !== p.QuestContent.QUESTS_EMBED, G = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), B = R(P, y, b, U), F = y ? g.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : g.default.Messages.QUESTS_ACCEPT_TOOLTIP, k = (0, S.useHandleClaimQuestsReward)({
    quest: L,
    location: x
  }), w = y && !P, H = (0, i.useStateFromStores)([I.default], () => I.default.isEnrolling(L.id)), V = () => {
    if (!y && !P) return (0, T.enrollInQuest)(L.id, {
      questContent: x,
      questContentCTA: _.QuestContentCTA.ACCEPT_QUEST
    });
    k()
  }, Y = (0, i.useStateFromStores)([d.default], () => d.default.locale), K = x === p.QuestContent.QUESTS_EMBED, W = x === p.QuestContent.QUEST_INVENTORY_CARD, z = W && U, Q = (0, s.jsx)("img", {
    src: (0, h.getRewardAssetUrl)(L),
    alt: "",
    className: l()(M.questReward, M.gridImg, {
      [M.questRewardGiftInventory]: W && "lg" === D,
      [M.questRewardEmbed]: K && "lg" === D,
      [M.questRewardEmbedSm]: "sm" === D,
      [M.questRewardEmbedXs]: "xs" === D
    })
  });
  return (0, s.jsxs)("div", {
    className: l()(M.outerContainer, {
      [M.outerContainerSm]: "sm" === D,
      [M.outerContainerXs]: "xs" === D
    }),
    children: [z ? (0, s.jsx)(C.default, {
      questConfig: L.config,
      fallback: Q
    }) : Q, (0, s.jsxs)("div", {
      className: l()(M.gridText, M.taskDetails),
      children: [(0, s.jsx)(r.Text, {
        variant: O(x, D, y),
        className: M.taskInstructions,
        children: g.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: L.config.streamDurationRequirementMinutes,
          gameTitle: L.config.messages.gameTitle
        })
      }), (0, s.jsx)(r.Text, {
        variant: "lg" === D ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l;
          let {
            quest: i,
            locale: r
          } = e, o = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, u = o && (null === (n = i.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, d = (0, m.useQuestFormattedDate)(null === (s = i.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), c = (0, h.isTieredRewardCodeQuest)({
            quest: i
          });
          if (u) {
            let e = c ? (0, h.getRewardCodeQuestReward)({
                quest: i,
                idx: null === (a = i.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? g.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: d
            }) : g.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: i.config.messages.rewardNameWithArticle,
              date: d
            })
          }
          if (o) return c ? g.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: d
          }) : g.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: i.config.messages.rewardNameWithArticle,
            date: d
          });
          let _ = c ? (0, h.getRewardCodeQuestReward)({
            quest: i,
            idx: 0
          }) : null;
          return null != _ && null != _.approximateCount ? g.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: _.messages.nameWithArticle,
            maxRewardCount: (0, E.humanizeValue)(_.approximateCount, r),
            helpCenterLink: f.default.getArticleURL(A.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : g.default.Messages.QUEST_REWARD.format({
            reward: i.config.messages.rewardNameWithArticle
          })
        }({
          quest: L,
          locale: Y
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(M.ctaButtonContainer, M.gridCtaButtons),
      children: [(0, s.jsx)(v, {
        location: x,
        isQuestAccepted: y,
        containerSize: D,
        onClick: () => {
          o.default.open(A.UserSettingsSections.INVENTORY), (0, _.trackQuestContentClicked)({
            questId: L.id,
            questContent: x,
            questContentCTA: _.QuestContentCTA.LEARN_MORE
          })
        },
        children: g.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(r.Tooltip, {
        text: F,
        tooltipContentClassName: M.ctaTooltipCopy,
        shouldShow: !b && !P,
        children: e => P && !G ? (0, s.jsx)(c.default, {
          ...e,
          wrapperClassName: M.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: w,
          submitting: H,
          onClick: V,
          children: B
        }) : (0, s.jsx)(r.Button, {
          ...e,
          wrapperClassName: M.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: w,
          submitting: H,
          onClick: V,
          children: B
        })
      }, F)]
    }), j && (0, s.jsx)(N.default, {
      className: M.gridProgressBar,
      color: P ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
      quest: L,
      isInventory: W
    })]
  })
}