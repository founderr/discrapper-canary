"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("230711"),
  d = n("607070"),
  _ = n("507893"),
  c = n("810090"),
  E = n("617136"),
  I = n("918701"),
  T = n("566078"),
  f = n("78826"),
  S = n("981631"),
  h = n("689938"),
  A = n("680273");
t.default = function(e) {
  let {
    className: t,
    quest: n,
    autoplay: s = !0,
    learnMoreStyle: m = null
  } = e, N = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), p = (0, I.getRewardAsset)(n), O = r.useMemo(() => (0, I.isAssetAnimated)(p.name), [p.name]), C = r.useCallback(t => {
    var i;
    (0, E.trackQuestContentClicked)({
      questId: n.id,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentCTA: E.QuestContentCTA.REWARD_LEARN_MORE
    }), u.default.open(S.UserSettingsSections.INVENTORY), null === (i = e.onClick) || void 0 === i || i.call(e, t)
  }, [n.id, e]), R = r.useRef(null), g = r.useRef(s);
  r.useEffect(() => {
    var e, t;
    O && !N && null != R.current && (s && !g.current ? null === (e = R.current) || void 0 === e || e.play() : !s && g.current && (null === (t = R.current) || void 0 === t || t.pause()), g.current = s)
  }, [s, O, N]);
  let L = O ? (0, i.jsx)(f.QuestsAsset, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => (0, i.jsx)(c.default, {
      ref: t => {
        e.current = t, R.current = t
      },
      autoPlay: !N && s,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: A.questRewardTileAsset,
      controls: !1,
      children: (0, i.jsx)("source", {
        src: p.url,
        type: (0, I.getVideoAssetMimeType)(p.url)
      })
    })
  }) : (0, i.jsx)(f.QuestsAsset, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, i.jsx)("img", {
      ref: e,
      alt: T.SharedQuestFields.build(n.config).defaultReward.messages.name,
      className: a()(A.questRewardTileAsset, A.questRewardTileAssetStatic),
      src: p.url
    })
  });
  return null == m ? (0, i.jsx)("div", {
    className: a()(t, A.questRewardTile),
    children: L
  }) : (0, i.jsxs)(l.Clickable, {
    className: a()(A.questRewardTile, A.questRewardTileInteractive, t),
    onClick: C,
    children: ["text" === m && (0, i.jsx)(l.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: A.questRewardTileDetailsLearnMore,
      children: h.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), "icon" === m && (0, i.jsx)("div", {
      className: A.questRewardTileDetailsLearnMore,
      children: (0, i.jsx)(_.default, {
        color: l.tokens.colors.WHITE.css,
        width: 12,
        height: 12
      })
    }), L]
  })
}