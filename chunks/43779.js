n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(113434),
  r = n(497505),
  o = n(918701),
  c = n(566078),
  u = n(472144),
  d = n(644646),
  E = n(69439),
  h = n(689938),
  _ = n(444745);

function I(e) {
  let {
    quest: t,
    location: n,
    questContent: I
  } = e, m = c.r.build(t.config).defaultReward.messages.name, g = (0, a.Rf)({
    quest: t,
    location: n
  }), p = g.percentComplete > 0, T = (0, o.pG)({
    quest: t,
    location: n,
    useV2Variants: !0,
    taskDetails: g
  }), N = !(0, o.zi)(t), S = s.useCallback(() => (0, i.jsx)(l.Text, {
    variant: "text-md/semibold",
    color: "text-brand",
    tag: "span",
    className: _.header,
    children: m
  }), [m]);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsxs)("div", {
      className: _.rewardDescriptionContainer,
      children: [p ? (0, i.jsx)("div", {
        className: _.progressWrapper,
        children: (0, i.jsx)(u.Z, {
          size: 76,
          percentComplete: g.percentComplete,
          children: (0, i.jsx)("div", {
            className: _.circularRewardTileWrapper,
            children: (0, i.jsx)(d.Z, {
              quest: t,
              questContent: I,
              className: _.circularQuestRewardTileAsset
            })
          })
        })
      }) : (0, i.jsx)(d.Z, {
        quest: t,
        questContent: r.jn.QUEST_HOME_DESKTOP,
        className: _.questRewardTileAsset
      }), (0, i.jsxs)("div", {
        className: _.textContainer,
        children: [(0, i.jsx)("span", {
          className: _.headerSpan,
          children: (0, i.jsx)(l.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: _.header,
            children: h.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
              rewardHook: S
            })
          })
        }), null != T ? (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: _.description,
          children: T
        }) : null]
      })]
    }), N ? (0, i.jsx)(E.Z, {
      quest: t
    }) : null]
  })
}