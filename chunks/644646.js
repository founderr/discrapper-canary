"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(230711),
  _ = n(607070),
  c = n(810090),
  d = n(617136),
  E = n(918701),
  I = n(566078),
  T = n(78826),
  h = n(981631),
  S = n(689938),
  f = n(680273);
t.Z = function(e) {
  let {
    className: t,
    quest: n,
    autoplay: s = !0,
    learnMoreStyle: N = null
  } = e, A = (0, a.e7)([_.Z], () => _.Z.useReducedMotion), m = (0, E.gO)(n), O = r.useMemo(() => (0, E.nP)(m.name), [m.name]), R = r.useCallback(t => {
    var i;
    (0, d._3)({
      questId: n.id,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentCTA: d.jZ.REWARD_LEARN_MORE
    }), u.Z.open(h.oAB.INVENTORY), null === (i = e.onClick) || void 0 === i || i.call(e, t)
  }, [n.id, e]), p = r.useRef(null), g = r.useRef(s);
  r.useEffect(() => {
    var e, t;
    O && !A && null != p.current && (s && !g.current ? null === (e = p.current) || void 0 === e || e.play() : !s && g.current && (null === (t = p.current) || void 0 === t || t.pause()), g.current = s)
  }, [s, O, A]);
  let C = O ? (0, i.jsx)(T.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => (0, i.jsx)(c.Z, {
      ref: t => {
        e.current = t, p.current = t
      },
      autoPlay: !A && s,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: f.questRewardTileAsset,
      controls: !1,
      children: (0, i.jsx)("source", {
        src: m.url,
        type: (0, E.mN)(m.url)
      })
    })
  }) : (0, i.jsx)(T.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, i.jsx)("img", {
      ref: e,
      alt: I.r.build(n.config).defaultReward.messages.name,
      className: o()(f.questRewardTileAsset, f.questRewardTileAssetStatic),
      src: m.url
    })
  });
  return null == N ? (0, i.jsx)("div", {
    className: o()(f.questRewardTile, t),
    children: C
  }) : (0, i.jsxs)(l.Clickable, {
    className: o()(f.questRewardTile, f.questRewardTileInteractive, t),
    onClick: R,
    children: ["text" === N && (0, i.jsx)(l.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: f.questRewardTileDetailsLearnMore,
      children: S.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), "icon" === N && (0, i.jsx)("div", {
      className: f.questRewardTileDetailsLearnMore,
      children: (0, i.jsx)(l.CircleInformationIcon, {
        size: "xxs",
        color: l.tokens.colors.WHITE.css
      })
    }), C]
  })
}