n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(918701),
  l = n(566078),
  o = n(78826),
  c = n(981631),
  d = n(140945);

function u(e) {
  let {
    quest: t
  } = e, n = (0, r.gO)(t), s = l.r.build(t.config).defaultReward.messages.name;
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(o.Fl, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, i.jsx)("img", {
        ref: e,
        alt: s,
        className: a()(d.image),
        src: n.url
      })
    }), (0, i.jsx)("div", {
      className: d.overlay
    }), (0, i.jsx)("div", {
      className: d.contents,
      children: (0, i.jsx)(o.Fl, {
        id: "QuestPartnerBranding_gameLogotype",
        children: e => (0, i.jsx)("img", {
          ref: e,
          className: d.partnerBranding,
          alt: t.config.messages.gameTitle,
          src: (0, r.Gs)(t, c.BRd.DARK)
        })
      })
    })]
  })
}