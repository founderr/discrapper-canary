n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(918701),
  r = n(566078),
  o = n(78826),
  c = n(981631),
  u = n(140945);

function d(e) {
  let {
    quest: t
  } = e, n = (0, a.gO)(t), s = r.r.build(t.config).defaultReward.messages.name;
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)(o.Fl, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, i.jsx)("img", {
        ref: e,
        alt: s,
        className: l()(u.image),
        src: n.url
      })
    }), (0, i.jsx)("div", {
      className: u.overlay
    }), (0, i.jsx)("div", {
      className: u.contents,
      children: (0, i.jsx)(o.Fl, {
        id: "QuestPartnerBranding_gameLogotype",
        children: e => (0, i.jsx)("img", {
          ref: e,
          className: u.partnerBranding,
          alt: t.config.messages.gameTitle,
          src: (0, a.Gs)(t, c.BRd.DARK)
        })
      })
    })]
  })
}