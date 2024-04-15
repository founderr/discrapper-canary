"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("481060"),
  u = a("230711"),
  d = a("607070"),
  c = a("810090"),
  f = a("617136"),
  E = a("918701"),
  h = a("78826"),
  _ = a("981631"),
  C = a("689938"),
  m = a("176126");
t.default = function(e) {
  var t, a;
  let {
    className: l,
    quest: S,
    autoplay: I = !0
  } = e, p = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (null === (a = S.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, g = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), A = s.useMemo(() => (0, E.isAssetAnimated)(S.config.assets.rewardTile), [S]), N = (0, E.getRewardAssetUrl)(S), v = s.useCallback(() => {
    (0, f.trackQuestContentClicked)({
      questId: S.id,
      questContent: e.questContent,
      questContentCTA: f.QuestContentCTA.REWARD_LEARN_MORE
    }), u.default.open(_.UserSettingsSections.INVENTORY)
  }, [S, e.questContent]), R = A ? (0, n.jsx)(h.QuestsAsset, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => (0, n.jsx)(c.default, {
      ref: e,
      autoPlay: !g && !1 !== I,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: m.questRewardTileAsset,
      controls: !1,
      children: (0, n.jsx)("source", {
        src: N,
        type: (0, E.getVideoAssetMimeType)(N)
      })
    })
  }) : (0, n.jsx)(h.QuestsAsset, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, n.jsx)("img", {
      ref: e,
      alt: S.config.messages.rewardName,
      className: m.questRewardTileAsset,
      src: N
    })
  });
  return T ? (0, n.jsx)("div", {
    className: i()(l, m.questRewardTile, m.hideLearnMore),
    children: R
  }) : (0, n.jsxs)(o.Clickable, {
    className: i()(m.questRewardTile, l),
    onClick: v,
    children: [(0, n.jsx)(o.Text, {
      color: "always-white",
      variant: p ? "text-xxs/normal" : "text-xs/normal",
      className: m.questRewardTileDetailsLearnMore,
      children: C.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), R]
  })
}