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
  f = n("1585"),
  E = n("976644"),
  _ = n("617136"),
  T = n("272008"),
  m = n("113434"),
  I = n("569984"),
  p = n("497505"),
  h = n("918701"),
  N = n("340100"),
  S = n("2660"),
  C = n("981631"),
  A = n("689938"),
  g = n("506710");
let M = (e, t, n, s) => n ? s ? A.default.Messages.COLLECTIBLES_USE_NOW : A.default.Messages.QUESTS_SEE_CODE : e || t ? A.default.Messages.QUESTS_CLAIM_REWARD : A.default.Messages.QUESTS_ACCEPT,
  R = (e, t) => e ? A.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? A.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : A.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  O = (e, t) => {
    var a, l, r;
    let u = (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null,
      d = (null === (l = e.userStatus) || void 0 === l ? void 0 : l.completedAt) != null,
      E = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null;
    return u || d ? () => {
      var a;
      if ((0, _.trackQuestContentClicked)({
          questId: e.id,
          questContent: t,
          questContentCTA: (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null ? _.QuestContentCTA.SHOW_REWARD : _.QuestContentCTA.CLAIM_REWARD
        }), (0, h.hasQuestCollectibleRewards)(e.config)) {
        if (!E) return;
        let t = (0, h.getQuestCollectibleRewardItem)(e.config);
        if (null != t && (null == t ? void 0 : t.type) === i.CollectiblesItemType.AVATAR_DECORATION) return (0, f.openAvatarDecorationModal)({
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
  v = (e, t, n) => e !== p.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function L(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== p.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(o.Clickable, {
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
    location: f,
    size: T
  } = e, x = (null === (t = c.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, D = (null === (n = c.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, P = (0, h.hasQuestCollectibleRewards)(c.config), y = (null === (a = c.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, U = D && !y && f !== p.QuestContent.QUESTS_EMBED, b = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), j = M(x, D, y, P), G = R(x, D), B = O(c, f), F = D && !x, k = (0, m.useQuestFormattedDate)(null === (i = c.userStatus) || void 0 === i ? void 0 : i.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), w = (0, r.useStateFromStores)([I.default], () => I.default.isEnrolling(c.id)), H = f === p.QuestContent.QUESTS_EMBED, V = f === p.QuestContent.QUEST_INVENTORY_CARD, Y = V && P, K = (0, s.jsx)("img", {
    src: (0, h.getRewardAssetUrl)(c),
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
    children: [Y ? (0, s.jsx)(S.default, {
      questConfig: c.config,
      fallback: K
    }) : K, (0, s.jsxs)("div", {
      className: l()(g.gridText, g.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: v(f, T, D),
        className: g.taskInstructions,
        children: A.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: c.config.streamDurationRequirementMinutes,
          gameTitle: c.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === T ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: x ? A.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: c.config.messages.rewardNameWithArticle,
          date: k
        }) : A.default.Messages.QUEST_REWARD.format({
          reward: c.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(g.ctaButtonContainer, g.gridCtaButtons),
      children: [(0, s.jsx)(L, {
        location: f,
        isQuestAccepted: D,
        containerSize: T,
        onClick: () => {
          u.default.open(C.UserSettingsSections.INVENTORY), (0, _.trackQuestContentClicked)({
            questId: c.id,
            questContent: f,
            questContentCTA: _.QuestContentCTA.LEARN_MORE
          })
        },
        children: A.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(o.Tooltip, {
        text: G,
        tooltipContentClassName: g.ctaTooltipCopy,
        shouldShow: !y,
        children: e => x && !b ? (0, s.jsx)(E.default, {
          ...e,
          wrapperClassName: g.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: F,
          submitting: w,
          onClick: B,
          children: j
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: g.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: F,
          submitting: w,
          onClick: B,
          children: j
        })
      })]
    }), U && (0, s.jsx)(N.default, {
      className: g.gridProgressBar,
      color: x ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: c,
      isInventory: V
    })]
  })
}