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
  C = n("644646"),
  A = n("667105"),
  g = n("2660"),
  M = n("981631"),
  R = n("689938"),
  O = n("506710");
let v = (e, t, n, s) => n ? s ? R.default.Messages.COLLECTIBLES_USE_NOW : R.default.Messages.QUESTS_SEE_CODE : e || t ? R.default.Messages.QUESTS_CLAIM_REWARD : R.default.Messages.QUESTS_ACCEPT,
  L = (e, t, n) => e !== h.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function x(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    className: O.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    wrapperClassName: O.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: D,
    location: P,
    size: y,
    isFocused: U,
    isQuestExpired: j
  } = e, b = (null === (t = D.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, G = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, B = (0, N.hasQuestCollectibleRewards)(D.config), F = (null === (a = D.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, k = G && !F && P !== h.QuestContent.QUESTS_EMBED, w = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), H = v(b, G, F, B), V = G ? R.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : R.default.Messages.QUESTS_ACCEPT_TOOLTIP, Y = (0, A.useHandleClaimQuestsReward)({
    quest: D,
    location: P
  }), K = G && !b, W = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(D.id)), z = () => {
    if (!G && !b) return (0, m.enrollInQuest)(D.id, {
      questContent: P,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
    });
    Y()
  }, Q = (0, i.useStateFromStores)([c.default], () => c.default.locale), q = P === h.QuestContent.QUESTS_EMBED, J = P === h.QuestContent.QUEST_INVENTORY_CARD, Z = J && B, X = J && !G, $ = (0, s.jsx)(C.default, {
    autoplay: U,
    className: l()(O.gridImg, {
      [O.questRewardGiftInventory]: J && "lg" === y,
      [O.questRewardEmbed]: q && "lg" === y,
      [O.questRewardEmbedSm]: "sm" === y,
      [O.questRewardEmbedXs]: "xs" === y
    }),
    learnMoreStyle: X || J ? null : "text",
    quest: D,
    questContent: P
  });
  return (0, s.jsxs)("div", {
    className: l()(O.outerContainer, {
      [O.outerContainerSm]: "sm" === y,
      [O.outerContainerXs]: "xs" === y,
      [O.outerContainerNoProgress]: !k
    }),
    children: [(0, s.jsx)(o.Tooltip, {
      text: j ? R.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: O.rewardTileExpirationTooltip,
      shouldShow: j,
      children: e => (0, s.jsxs)("div", {
        className: O.rewardTileWrapper,
        ...e,
        children: [j && (0, s.jsx)("div", {
          className: O.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), Z ? (0, s.jsx)(g.default, {
          questConfig: D.config,
          fallback: $,
          isFocused: U
        }) : $]
      })
    }), (0, s.jsxs)("div", {
      className: l()(O.gridText, O.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: L(P, y, G),
        className: O.taskInstructions,
        children: j ? R.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: D.config.messages.questName
        }) : R.default.Messages.QUESTS_STREAM_TASK.format({
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
            return null != t ? R.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : R.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: f
            })
          }
          if (d) return T ? R.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : R.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: f
          });
          let m = T ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? R.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == m ? void 0 : m.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != m && null != m.approximateCount ? R.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: m.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(m.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(M.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : R.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: D,
          locale: Q,
          isQuestExpired: j
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(O.ctaButtonContainer, O.gridCtaButtons),
      children: [X && (0, s.jsx)(x, {
        containerSize: y,
        onClick: () => {
          u.default.open(M.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: D.id,
            questContent: P,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: R.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!j || b) && (0, s.jsx)(o.Tooltip, {
        text: V,
        tooltipContentClassName: O.ctaTooltipCopy,
        shouldShow: !F && !b,
        children: e => b && !w ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: K,
          submitting: W,
          onClick: z,
          children: H
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: K,
          submitting: W,
          onClick: z,
          children: H
        })
      }, V)]
    }), k && (0, s.jsx)(S.default, {
      className: O.gridProgressBar,
      color: b ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: D,
      isInventory: J
    })]
  })
}