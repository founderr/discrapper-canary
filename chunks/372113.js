"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("979554"),
  r = n("442837"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("100527"),
  E = n("1585"),
  f = n("976644"),
  _ = n("617136"),
  T = n("272008"),
  I = n("113434"),
  m = n("569984"),
  N = n("497505"),
  p = n("918701"),
  S = n("340100"),
  C = n("2660"),
  A = n("981631"),
  h = n("689938"),
  g = n("506710");
let M = (e, t, n, s) => n ? s ? h.default.Messages.COLLECTIBLES_USE_NOW : h.default.Messages.QUESTS_SEE_CODE : e || t ? h.default.Messages.QUESTS_CLAIM_REWARD : h.default.Messages.QUESTS_ACCEPT,
  O = (e, t) => e ? h.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? h.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : h.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  R = (e, t) => {
    var a, l, r;
    let u = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null,
      d = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
      f = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null;
    return u || d ? () => {
      var a;
      if ((0, _.trackQuestContentClicked)({
          questId: e.id,
          questContent: t,
          questContentCTA: (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null ? _.QuestContentCTA.SHOW_REWARD : _.QuestContentCTA.CLAIM_REWARD
        }), (0, p.hasQuestCollectibleRewards)(e.config)) {
        if (!f) return;
        let t = (0, p.getQuestCollectibleRewardItem)(e.config);
        if (null != t && (null == t ? void 0 : t.type) === i.CollectiblesItemType.AVATAR_DECORATION) return (0, E.openAvatarDecorationModal)({
          initialSelectedDecoration: t,
          analyticsLocations: [c.default.USER_SETTINGS_GIFT_INVENTORY]
        })
      }(0, o.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
        return n => (0, s.jsx)(a, {
          ...n,
          quest: e,
          location: t
        })
      })
    } : () => {
      (0, T.enrollInQuest)(e.id, {
        questContent: t,
        questContentCTA: _.QuestContentCTA.ACCEPT_QUEST
      })
    }
  },
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
    className: g.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(o.Button, {
    wrapperClassName: g.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a, i;
  let {
    quest: c,
    location: E,
    size: T
  } = e, P = (null === (t = c.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, D = (null === (n = c.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, x = (0, p.hasQuestCollectibleRewards)(c.config), y = (null === (a = c.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, U = D && !y && E !== N.QuestContent.QUESTS_EMBED, j = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), b = M(P, D, y, x), G = O(P, D), B = R(c, E), k = D && !P, F = (0, I.useQuestFormattedDate)(null === (i = c.userStatus) || void 0 === i ? void 0 : i.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), w = (0, r.useStateFromStores)([m.default], () => m.default.isEnrolling(c.id)), H = E === N.QuestContent.QUESTS_EMBED, V = E === N.QuestContent.QUEST_INVENTORY_CARD, Y = V && x, K = (0, s.jsx)("img", {
    src: (0, p.getRewardAssetUrl)(c),
    alt: "",
    className: l()(g.questReward, g.gridImg, {
      [g.questRewardGiftInventory]: V && "lg" === T,
      [g.questRewardEmbed]: H && "lg" === T,
      [g.questRewardEmbedSm]: "sm" === T,
      [g.questRewardEmbedXs]: "xs" === T
    })
  });
  return (0, s.jsxs)("div", {
    className: l()(g.outerContainer, {
      [g.outerContainerSm]: "sm" === T,
      [g.outerContainerXs]: "xs" === T
    }),
    children: [Y ? (0, s.jsx)(C.default, {
      questConfig: c.config,
      fallback: K
    }) : K, (0, s.jsxs)("div", {
      className: l()(g.gridText, g.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: v(E, T, D),
        className: g.taskInstructions,
        children: h.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: c.config.streamDurationRequirementMinutes,
          gameTitle: c.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === T ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: P ? h.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: c.config.messages.rewardNameWithArticle,
          date: F
        }) : h.default.Messages.QUEST_REWARD.format({
          reward: c.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(g.ctaButtonContainer, g.gridCtaButtons),
      children: [(0, s.jsx)(L, {
        location: E,
        isQuestAccepted: D,
        containerSize: T,
        onClick: () => {
          u.default.open(A.UserSettingsSections.INVENTORY), (0, _.trackQuestContentClicked)({
            questId: c.id,
            questContent: E,
            questContentCTA: _.QuestContentCTA.LEARN_MORE
          })
        },
        children: h.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(o.Tooltip, {
        text: G,
        tooltipContentClassName: g.ctaTooltipCopy,
        shouldShow: !y,
        children: e => P && !j ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: g.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: k,
          submitting: w,
          onClick: B,
          children: b
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: g.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: k,
          submitting: w,
          onClick: B,
          children: b
        })
      })]
    }), U && (0, s.jsx)(S.default, {
      className: g.gridProgressBar,
      color: P ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: c,
      isInventory: V
    })]
  })
}