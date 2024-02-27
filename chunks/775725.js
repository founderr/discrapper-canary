"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("815496"),
  u = n("448881"),
  d = n("2973"),
  c = n("588025"),
  E = n("227231"),
  f = n("315130"),
  _ = n("782340"),
  T = n("199890");
let I = (e, t, n) => n ? _.default.Messages.QUESTS_SHOW_CODE : e || t ? _.default.Messages.QUESTS_CLAIM_REWARD : _.default.Messages.QUESTS_ACCEPT,
  m = (e, t) => e ? _.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? _.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : _.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  N = (e, t) => {
    var l, a, i;
    return (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null || (null === (a = e.userStatus) || void 0 === a ? void 0 : a.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null ? () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: l
        } = await n.el("36170").then(n.bind(n, "36170"));
        return n => (0, s.jsx)(l, {
          ...n,
          quest: e,
          location: t
        })
      })
    } : () => {
      (0, u.enrollInQuest)(e.id, {
        questContent: t,
        questContentCTA: o.QuestContentCTA.ACCEPT_QUEST
      })
    }
  };
var p = e => {
  var t, n, l;
  let {
    quest: o,
    location: u
  } = e, p = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, A = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, C = S && !A, h = S ? r.ButtonColors.BRAND_NEW : r.ButtonColors.GREEN, g = I(p, S, A), M = m(p, S), O = N(o, u), R = S && !p, L = (0, i.useStateFromStores)([d.default], () => d.default.isEnrolling(o.id));
  return (0, s.jsxs)("div", {
    className: a(T.outerContainer, {
      [T.outerContainerGiftInventory]: u === c.QuestContent.QUEST_INVENTORY_CARD,
      [T.outerContainerEmbed]: u === c.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)("img", {
      src: (0, E.getRewardAssetUrl)(o.id),
      alt: "",
      className: a(T.questReward, {
        [T.questRewardGiftInventory]: u === c.QuestContent.QUEST_INVENTORY_CARD,
        [T.questRewardEmbed]: u === c.QuestContent.QUESTS_EMBED
      })
    }), (0, s.jsxs)("div", {
      className: T.innerContainer,
      children: [(0, s.jsxs)("div", {
        className: T.questCopyCta,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsx)(r.Text, {
            variant: "text-lg/medium",
            className: T.taskInstructions,
            children: _.default.Messages.QUESTS_STREAM_TASK.format({
              minutes: o.config.streamDurationRequirementMinutes,
              gameTitle: o.config.messages.gameTitle
            })
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.default.Messages.QUEST_REWARD.format({
              reward: o.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, s.jsx)(r.TooltipContainer, {
          text: M,
          className: T.questCta,
          tooltipContentClassName: T.ctaTooltipCopy,
          shouldShow: !A,
          children: (0, s.jsx)(r.Button, {
            color: h,
            disabled: R,
            submitting: L,
            onClick: O,
            children: g
          })
        })]
      }), C && (0, s.jsx)(f.default, {
        color: p ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
        quest: o
      })]
    })]
  })
}