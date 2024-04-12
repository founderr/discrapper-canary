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
  E = n("976644"),
  f = n("63063"),
  _ = n("930153"),
  T = n("617136"),
  I = n("272008"),
  m = n("113434"),
  p = n("569984"),
  N = n("497505"),
  S = n("918701"),
  C = n("340100"),
  A = n("667105"),
  h = n("2660"),
  g = n("981631"),
  M = n("689938"),
  O = n("506710");
let R = (e, t, n, s) => n ? s ? M.default.Messages.COLLECTIBLES_USE_NOW : M.default.Messages.QUESTS_SEE_CODE : e || t ? M.default.Messages.QUESTS_CLAIM_REWARD : M.default.Messages.QUESTS_ACCEPT,
  v = (e, t, n) => e !== N.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function L(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== N.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(o.Clickable, {
    className: O.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(o.Button, {
    wrapperClassName: O.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: P,
    location: D,
    size: x,
    isQuestExpired: y
  } = e, U = (null === (t = P.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, j = (null === (n = P.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, b = (0, S.hasQuestCollectibleRewards)(P.config), G = (null === (a = P.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, B = j && !G && D !== N.QuestContent.QUESTS_EMBED, F = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), k = R(U, j, G, b), w = j ? M.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : M.default.Messages.QUESTS_ACCEPT_TOOLTIP, H = (0, A.useHandleClaimQuestsReward)({
    quest: P,
    location: D
  }), V = j && !U, Y = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(P.id)), W = () => {
    if (!j && !U) return (0, I.enrollInQuest)(P.id, {
      questContent: D,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
    });
    H()
  }, K = (0, i.useStateFromStores)([c.default], () => c.default.locale), z = D === N.QuestContent.QUESTS_EMBED, Q = D === N.QuestContent.QUEST_INVENTORY_CARD, q = Q && b, J = (0, s.jsx)("img", {
    src: (0, S.getRewardAssetUrl)(P),
    alt: "",
    className: l()(O.questReward, O.gridImg, {
      [O.questRewardGiftInventory]: Q && "lg" === x,
      [O.questRewardEmbed]: z && "lg" === x,
      [O.questRewardEmbedSm]: "sm" === x,
      [O.questRewardEmbedXs]: "xs" === x
    })
  });
  return (0, s.jsxs)("div", {
    className: l()(O.outerContainer, {
      [O.outerContainerSm]: "sm" === x,
      [O.outerContainerXs]: "xs" === x
    }),
    children: [(0, s.jsx)(o.Tooltip, {
      text: M.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST,
      tooltipContentClassName: O.rewardTileExpirationTooltip,
      shouldShow: y,
      children: e => (0, s.jsxs)("div", {
        className: O.rewardTileWrapper,
        ...e,
        children: [y && (0, s.jsx)("div", {
          className: O.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), q ? (0, s.jsx)(h.default, {
          questConfig: P.config,
          fallback: J
        }) : J]
      })
    }), (0, s.jsxs)("div", {
      className: l()(O.gridText, O.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: v(D, x, j),
        className: O.taskInstructions,
        children: y ? M.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: P.config.messages.questName
        }) : M.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: P.config.streamDurationRequirementMinutes,
          gameTitle: P.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === x ? "text-sm/medium" : "text-xs/medium",
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
            return null != t ? M.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: E
            }) : M.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: E
            })
          }
          if (d) return T ? M.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: E
          }) : M.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: E
          });
          let I = T ? (0, S.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? M.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == I ? void 0 : I.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != I && null != I.approximateCount ? M.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: I.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(I.approximateCount, o),
            helpCenterLink: f.default.getArticleURL(g.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : M.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: P,
          locale: K,
          isQuestExpired: y
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(O.ctaButtonContainer, O.gridCtaButtons),
      children: [(0, s.jsx)(L, {
        location: D,
        isQuestAccepted: j,
        containerSize: x,
        onClick: () => {
          u.default.open(g.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: P.id,
            questContent: D,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: M.default.Messages.QUESTS_LEARN_MORE_V2
      }), !y && (0, s.jsx)(o.Tooltip, {
        text: w,
        tooltipContentClassName: O.ctaTooltipCopy,
        shouldShow: !G && !U,
        children: e => U && !F ? (0, s.jsx)(E.default, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: V,
          submitting: Y,
          onClick: W,
          children: k
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: V,
          submitting: Y,
          onClick: W,
          children: k
        })
      }, w)]
    }), B && (0, s.jsx)(C.default, {
      className: O.gridProgressBar,
      color: U ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: P,
      isInventory: Q
    })]
  })
}