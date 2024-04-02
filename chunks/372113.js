"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("803997"),
  a = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("230711"),
  u = n("607070"),
  d = n("976644"),
  c = n("617136"),
  E = n("272008"),
  f = n("113434"),
  _ = n("569984"),
  T = n("497505"),
  I = n("918701"),
  m = n("340100"),
  N = n("981631"),
  p = n("689938"),
  S = n("506710");
let C = (e, t, n) => n ? p.default.Messages.QUESTS_SEE_CODE : e || t ? p.default.Messages.QUESTS_CLAIM_REWARD : p.default.Messages.QUESTS_ACCEPT,
  A = (e, t) => e ? p.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? p.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : p.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  h = (e, t) => {
    var l, a, i;
    return (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null || (null === (a = e.userStatus) || void 0 === a ? void 0 : a.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null ? () => {
      var l;
      (0, c.trackQuestContentClicked)({
        questId: e.id,
        questContent: t,
        questContentCTA: (null === (l = e.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null ? c.QuestContentCTA.SHOW_REWARD : c.QuestContentCTA.CLAIM_REWARD
      }), (0, r.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
        return n => (0, s.jsx)(l, {
          ...n,
          quest: e,
          location: t
        })
      })
    } : () => {
      (0, E.enrollInQuest)(e.id, {
        questContent: t,
        questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
      })
    }
  },
  g = (e, t, n) => e !== T.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function M(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: l,
    onClick: a,
    children: i
  } = e;
  return t !== T.QuestContent.QUESTS_EMBED || n ? null : "xs" === l ? (0, s.jsx)(r.Clickable, {
    className: S.learnMoreLink,
    tag: "span",
    onClick: a,
    children: (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(r.Button, {
    wrapperClassName: S.ctaButtonWrapper,
    color: r.ButtonColors.PRIMARY,
    onClick: a,
    children: i
  })
}
t.default = e => {
  var t, n, l, E;
  let {
    quest: O,
    location: R,
    size: v
  } = e, L = (null === (t = O.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, P = (null === (n = O.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, D = (null === (l = O.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, x = P && !D && R !== T.QuestContent.QUESTS_EMBED, y = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), U = C(L, P, D), j = A(L, P), b = h(O, R), G = P && !L, B = (0, f.useQuestFormattedDate)(null === (E = O.userStatus) || void 0 === E ? void 0 : E.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), k = (0, i.useStateFromStores)([_.default], () => _.default.isEnrolling(O.id)), F = R === T.QuestContent.QUESTS_EMBED, w = R === T.QuestContent.QUEST_INVENTORY_CARD;
  return (0, s.jsxs)("div", {
    className: a()(S.outerContainer, {
      [S.outerContainerSm]: "sm" === v,
      [S.outerContainerXs]: "xs" === v
    }),
    children: [(0, s.jsx)("img", {
      src: (0, I.getRewardAssetUrl)(O),
      alt: "",
      className: a()(S.questReward, S.gridImg, {
        [S.questRewardGiftInventory]: w && "lg" === v,
        [S.questRewardEmbed]: F && "lg" === v,
        [S.questRewardEmbedSm]: "sm" === v,
        [S.questRewardEmbedXs]: "xs" === v
      })
    }), (0, s.jsxs)("div", {
      className: a()(S.gridText, S.taskDetails),
      children: [(0, s.jsx)(r.Text, {
        variant: g(R, v, P),
        className: S.taskInstructions,
        children: p.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: O.config.streamDurationRequirementMinutes,
          gameTitle: O.config.messages.gameTitle
        })
      }), (0, s.jsx)(r.Text, {
        variant: "lg" === v ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: L ? p.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: O.config.messages.rewardNameWithArticle,
          date: B
        }) : p.default.Messages.QUEST_REWARD.format({
          reward: O.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: a()(S.ctaButtonContainer, S.gridCtaButtons),
      children: [(0, s.jsx)(M, {
        location: R,
        isQuestAccepted: P,
        containerSize: v,
        onClick: () => {
          o.default.open(N.UserSettingsSections.INVENTORY), (0, c.trackQuestContentClicked)({
            questId: O.id,
            questContent: R,
            questContentCTA: c.QuestContentCTA.LEARN_MORE
          })
        },
        children: p.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(r.Tooltip, {
        text: j,
        tooltipContentClassName: S.ctaTooltipCopy,
        shouldShow: !D,
        children: e => L && !y ? (0, s.jsx)(d.default, {
          ...e,
          wrapperClassName: S.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: G,
          submitting: k,
          onClick: b,
          children: U
        }) : (0, s.jsx)(r.Button, {
          ...e,
          wrapperClassName: S.ctaButtonWrapper,
          color: r.ButtonColors.BRAND,
          disabled: G,
          submitting: k,
          onClick: b,
          children: U
        })
      })]
    }), x && (0, s.jsx)(m.default, {
      className: S.gridProgressBar,
      color: L ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
      quest: O,
      isInventory: w
    })]
  })
}