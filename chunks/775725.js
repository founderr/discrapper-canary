"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("448881"),
  u = n("2973"),
  d = n("588025"),
  c = n("227231"),
  E = n("315130"),
  f = n("782340"),
  _ = n("199890");
let T = (e, t, n) => n ? f.default.Messages.QUESTS_SHOW_CODE : e || t ? f.default.Messages.QUESTS_CLAIM_REWARD : f.default.Messages.QUESTS_ACCEPT,
  I = (e, t) => e ? f.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? f.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : f.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  m = (e, t) => {
    var l, a, i;
    return (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null || (null === (a = e.userStatus) || void 0 === a ? void 0 : a.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null ? () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("36170").then(n.bind(n, "36170"));
        return n => (0, s.jsx)(t, {
          ...n,
          quest: e
        })
      })
    } : () => {
      (0, o.enrollInQuest)(e.id, t)
    }
  };
var N = e => {
  var t, n, l;
  let {
    quest: o,
    location: N
  } = e, p = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, A = (null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, C = S && !A, h = S ? r.ButtonColors.BRAND_NEW : r.ButtonColors.GREEN, g = T(p, S, A), M = I(p, S), O = m(o, N), R = S && !p, L = (0, i.useStateFromStores)([u.default], () => u.default.isEnrolling(o.id));
  return (0, s.jsxs)("div", {
    className: a(_.outerContainer, {
      [_.outerContainerGiftInventory]: N === d.QuestContent.QUEST_INVENTORY_CARD,
      [_.outerContainerEmbed]: N === d.QuestContent.QUESTS_EMBED
    }),
    children: [(0, s.jsx)("img", {
      src: (0, c.getRewardAssetUrl)(o.id),
      alt: "",
      className: a(_.questReward, {
        [_.questRewardGiftInventory]: N === d.QuestContent.QUEST_INVENTORY_CARD,
        [_.questRewardEmbed]: N === d.QuestContent.QUESTS_EMBED
      })
    }), (0, s.jsxs)("div", {
      className: _.innerContainer,
      children: [(0, s.jsxs)("div", {
        className: _.questCopyCta,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsx)(r.Text, {
            variant: "text-lg/medium",
            className: _.taskInstructions,
            children: f.default.Messages.QUESTS_STREAM_TASK.format({
              minutes: o.config.streamDurationRequirementMinutes,
              gameTitle: o.config.messages.gameTitle
            })
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: f.default.Messages.QUEST_REWARD.format({
              reward: o.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, s.jsx)(r.TooltipContainer, {
          text: M,
          className: _.questCta,
          tooltipContentClassName: _.ctaTooltipCopy,
          shouldShow: !A,
          children: (0, s.jsx)(r.Button, {
            color: h,
            disabled: R,
            submitting: L,
            onClick: O,
            children: g
          })
        })]
      }), C && (0, s.jsx)(E.default, {
        color: p ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
        quest: o
      })]
    })]
  })
}