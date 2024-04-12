"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("774867"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("706454"),
  f = n("976644"),
  E = n("63063"),
  _ = n("930153"),
  T = n("617136"),
  m = n("272008"),
  I = n("113434"),
  p = n("569984"),
  h = n("497505"),
  N = n("918701"),
  S = n("340100"),
  C = n("667105"),
  A = n("2660"),
  g = n("981631"),
  M = n("689938"),
  R = n("506710");
let O = (e, t, n, s) => n ? s ? M.default.Messages.COLLECTIBLES_USE_NOW : M.default.Messages.QUESTS_SEE_CODE : e || t ? M.default.Messages.QUESTS_CLAIM_REWARD : M.default.Messages.QUESTS_ACCEPT,
  v = (e, t, n) => e !== h.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function L(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== h.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(o.Clickable, {
    className: R.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(o.Button, {
    wrapperClassName: R.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: x,
    location: D,
    size: P,
    isQuestExpired: y
  } = e, U = (null === (t = x.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, b = (null === (n = x.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, j = (0, N.hasQuestCollectibleRewards)(x.config), G = (null === (a = x.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, B = b && !G && D !== h.QuestContent.QUESTS_EMBED, F = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), k = O(U, b, G, j), w = b ? M.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : M.default.Messages.QUESTS_ACCEPT_TOOLTIP, H = (0, C.useHandleClaimQuestsReward)({
    quest: x,
    location: D
  }), V = b && !U, Y = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(x.id)), K = () => {
    if (!b && !U) return (0, m.enrollInQuest)(x.id, {
      questContent: D,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
    });
    H()
  }, W = (0, i.useStateFromStores)([c.default], () => c.default.locale), z = D === h.QuestContent.QUESTS_EMBED, Q = D === h.QuestContent.QUEST_INVENTORY_CARD, q = Q && j, J = (0, s.jsx)("img", {
    src: (0, N.getRewardAssetUrl)(x),
    alt: "",
    className: l()(R.questReward, R.gridImg, {
      [R.questRewardGiftInventory]: Q && "lg" === P,
      [R.questRewardEmbed]: z && "lg" === P,
      [R.questRewardEmbedSm]: "sm" === P,
      [R.questRewardEmbedXs]: "xs" === P
    })
  });
  return (0, s.jsxs)("div", {
    className: l()(R.outerContainer, {
      [R.outerContainerSm]: "sm" === P,
      [R.outerContainerXs]: "xs" === P
    }),
    children: [(0, s.jsx)(o.Tooltip, {
      text: M.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST,
      tooltipContentClassName: R.rewardTileExpirationTooltip,
      shouldShow: y,
      children: e => (0, s.jsxs)("div", {
        className: R.rewardTileWrapper,
        ...e,
        children: [y && (0, s.jsx)("div", {
          className: R.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), q ? (0, s.jsx)(A.default, {
          questConfig: x.config,
          fallback: J
        }) : J]
      })
    }), (0, s.jsxs)("div", {
      className: l()(R.gridText, R.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: v(D, P, b),
        className: R.taskInstructions,
        children: y ? M.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: x.config.messages.questName
        }) : M.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: x.config.streamDurationRequirementMinutes,
          gameTitle: x.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === P ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i;
          let {
            quest: r,
            locale: o,
            isQuestExpired: u
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, f = (0, I.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), T = (0, N.isTieredRewardCodeQuest)({
            quest: r
          });
          if (c) {
            let e = T ? (0, N.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? M.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : M.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: f
            })
          }
          if (d) return T ? M.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : M.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: f
          });
          let m = T ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? M.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == m ? void 0 : m.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != m && null != m.approximateCount ? M.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: m.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(m.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(g.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : M.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: x,
          locale: W,
          isQuestExpired: y
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(R.ctaButtonContainer, R.gridCtaButtons),
      children: [(0, s.jsx)(L, {
        location: D,
        isQuestAccepted: b,
        containerSize: P,
        onClick: () => {
          u.default.open(g.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: x.id,
            questContent: D,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: M.default.Messages.QUESTS_LEARN_MORE_V2
      }), !y && (0, s.jsx)(o.Tooltip, {
        text: w,
        tooltipContentClassName: R.ctaTooltipCopy,
        shouldShow: !G && !U,
        children: e => U && !F ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: R.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: V,
          submitting: Y,
          onClick: K,
          children: k
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: R.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: V,
          submitting: Y,
          onClick: K,
          children: k
        })
      }, w)]
    }), B && (0, s.jsx)(S.default, {
      className: R.gridProgressBar,
      color: U ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: x,
      isInventory: Q
    })]
  })
}