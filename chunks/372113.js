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
  d = n("976644"),
  c = n("617136"),
  f = n("272008"),
  E = n("113434"),
  _ = n("569984"),
  T = n("497505"),
  m = n("918701"),
  I = n("340100"),
  p = n("667105"),
  h = n("2660"),
  N = n("981631"),
  S = n("689938"),
  C = n("506710");
let A = (e, t, n, s) => n ? s ? S.default.Messages.COLLECTIBLES_USE_NOW : S.default.Messages.QUESTS_SEE_CODE : e || t ? S.default.Messages.QUESTS_CLAIM_REWARD : S.default.Messages.QUESTS_ACCEPT,
  g = (e, t) => e ? S.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? S.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : S.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  M = (e, t, n) => e !== T.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function R(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== T.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(r.Clickable, {
    className: C.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(r.Button, {
    wrapperClassName: C.ctaButtonWrapper,
    color: r.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a, O;
  let {
    quest: v,
    location: L,
    size: x
  } = e, D = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, P = (null === (n = v.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, y = (0, m.hasQuestCollectibleRewards)(v.config), U = (null === (a = v.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, b = P && !U && L !== T.QuestContent.QUESTS_EMBED, j = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), G = A(D, P, U, y), B = g(D, P), F = (0, p.useHandleClaimQuestsReward)({
    quest: v,
    location: L
  }), k = P && !D, w = (0, E.useQuestFormattedDate)(null === (O = v.userStatus) || void 0 === O ? void 0 : O.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), H = (0, i.useStateFromStores)([_.default], () => _.default.isEnrolling(v.id)), V = () => {
    if (!P && !D) return (0, f.enrollInQuest)(v.id, {
      questContent: L,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    });
    F()
  }, Y = L === T.QuestContent.QUESTS_EMBED, K = L === T.QuestContent.QUEST_INVENTORY_CARD, W = K && y, z = (0, s.jsx)("img", {
    src: (0, m.getRewardAssetUrl)(v),
    alt: "",
    className: l()(C.questReward, C.gridImg, {
      [C.questRewardGiftInventory]: K && "lg" === x,
      [C.questRewardEmbed]: Y && "lg" === x,
      [C.questRewardEmbedSm]: "sm" === x,
      [C.questRewardEmbedXs]: "xs" === x
    })
  });
  return (0, s.jsxs)("div", {
    className: l()(C.outerContainer, {
      [C.outerContainerSm]: "sm" === x,
      [C.outerContainerXs]: "xs" === x
    }),
    children: [W ? (0, s.jsx)(h.default, {
      questConfig: v.config,
      fallback: z
    }) : z, (0, s.jsxs)("div", {
      className: l()(C.gridText, C.taskDetails),
      children: [(0, s.jsx)(r.Text, {
        variant: M(L, x, P),
        className: C.taskInstructions,
        children: S.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: v.config.streamDurationRequirementMinutes,
          gameTitle: v.config.messages.gameTitle
        })
      }), (0, s.jsx)(r.Text, {
        variant: "lg" === x ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: D ? S.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: v.config.messages.rewardNameWithArticle,
          date: w
        }) : S.default.Messages.QUEST_REWARD.format({
          reward: v.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(C.ctaButtonContainer, C.gridCtaButtons),
      children: [(0, s.jsx)(R, {
        location: L,
        isQuestAccepted: P,
        containerSize: x,
        onClick: () => {
          o.default.open(N.UserSettingsSections.INVENTORY), (0, c.trackQuestContentClicked)({
            questId: v.id,
            questContent: L,
            questContentCTA: c.QuestContentCTA.LEARN_MORE
          })
        },
        children: S.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(r.Tooltip, {
        text: B,
        tooltipContentClassName: C.ctaTooltipCopy,
        shouldShow: !U,
        children: e => D && !j ? (0, s.jsx)(d.default, {
          ...e,
          wrapperClassName: C.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: k,
          submitting: H,
          onClick: V,
          children: G
        }) : (0, s.jsx)(r.Button, {
          ...e,
          wrapperClassName: C.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: k,
          submitting: H,
          onClick: V,
          children: G
        })
      })]
    }), b && (0, s.jsx)(I.default, {
      className: C.gridProgressBar,
      color: D ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
      quest: v,
      isInventory: K
    })]
  })
}