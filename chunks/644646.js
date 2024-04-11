"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("810090"),
  f = n("617136"),
  E = n("918701"),
  h = n("78826"),
  _ = n("981631"),
  C = n("689938"),
  m = n("176126");
t.default = function(e) {
  var t, n;
  let {
    className: l,
    quest: S,
    autoplay: I = !0
  } = e, T = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, g = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), A = s.useMemo(() => (0, E.isAssetAnimated)(S.config.assets.rewardTile), [S]), N = (0, E.getRewardAssetUrl)(S), v = s.useCallback(() => {
    (0, f.trackQuestContentClicked)({
      questId: S.id,
      questContent: e.questContent,
      questContentCTA: f.QuestContentCTA.REWARD_LEARN_MORE
    }), u.default.open(_.UserSettingsSections.INVENTORY)
  }, [S, e.questContent]), R = A ? (0, a.jsx)(h.QuestsAsset, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => (0, a.jsx)(c.default, {
      ref: e,
      autoPlay: !g && !1 !== I,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: m.questRewardTileAsset,
      controls: !1,
      children: (0, a.jsx)("source", {
        src: N,
        type: (0, E.getVideoAssetMimeType)(N)
      })
    })
  }) : (0, a.jsx)(h.QuestsAsset, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, a.jsx)("img", {
      ref: e,
      alt: S.config.messages.rewardName,
      className: m.questRewardTileAsset,
      src: N
    })
  });
  return p ? (0, a.jsx)("div", {
    className: i()(l, m.questRewardTile, m.hideLearnMore),
    children: R
  }) : (0, a.jsxs)(o.Clickable, {
    className: i()(m.questRewardTile, l),
    onClick: v,
    children: [(0, a.jsx)(o.Text, {
      color: "always-white",
      variant: T ? "text-xxs/normal" : "text-xs/normal",
      className: m.questRewardTileDetailsLearnMore,
      children: C.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), R]
  })
}