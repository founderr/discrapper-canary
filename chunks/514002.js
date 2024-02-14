"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("448881"),
  r = s("2973"),
  o = s("227231"),
  d = s("315130"),
  u = s("782340"),
  c = s("371384");
let S = (e, t, s) => s ? u.default.Messages.QUESTS_SHOW_CODE : e || t ? u.default.Messages.QUESTS_CLAIM_REWARD : u.default.Messages.QUESTS_ACCEPT,
  E = (e, t) => e ? u.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? u.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : u.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  T = e => {
    var t, n, r;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null || (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null || (null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null ? () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await s.el("36170").then(s.bind(s, "36170"));
        return s => (0, a.jsx)(t, {
          ...s,
          quest: e
        })
      })
    } : () => {
      (0, i.enrollInQuest)(e.id)
    }
  };
var f = e => {
  var t, s, i;
  let {
    quest: f
  } = e, m = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, _ = (null === (s = f.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, g = (null === (i = f.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, h = _ && !g, N = _ ? l.ButtonColors.BRAND_NEW : l.ButtonColors.GREEN, I = S(m, _, g), p = E(m, _), C = T(f), A = _ && !m, O = (0, n.useStateFromStores)([r.default], () => r.default.isEnrolling(f.id));
  return (0, a.jsxs)("div", {
    className: c.outerContainer,
    children: [(0, a.jsx)("img", {
      src: (0, o.getRewardAssetUrl)(f.id),
      alt: "",
      className: c.questReward
    }), (0, a.jsxs)("div", {
      className: c.innerContainer,
      children: [(0, a.jsxs)("div", {
        className: c.questCopyCta,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Text, {
            variant: "text-lg/medium",
            className: c.taskInstructions,
            children: u.default.Messages.QUESTS_STREAM_TASK.format({
              minutes: f.config.streamDurationRequirementMinutes,
              gameTitle: f.config.messages.gameTitle
            })
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: u.default.Messages.QUEST_REWARD.format({
              reward: f.config.messages.rewardNameWithArticle
            })
          })]
        }), (0, a.jsx)(l.TooltipContainer, {
          text: p,
          className: c.questCta,
          tooltipContentClassName: c.ctaTooltipCopy,
          shouldShow: !g,
          children: (0, a.jsx)(l.Button, {
            color: N,
            disabled: A,
            submitting: O,
            onClick: C,
            children: I
          })
        })]
      }), h && (0, a.jsx)(d.default, {
        color: m ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.BG_BRAND,
        quest: f
      })]
    })]
  })
}