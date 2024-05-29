"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("918701"),
  r = n("566078"),
  o = n("78826"),
  u = n("981631"),
  d = n("114236");

function c(e) {
  let {
    quest: t
  } = e, n = (0, i.getRewardAsset)(t), s = r.SharedQuestFields.build(t.config).defaultReward.messages.name;
  return (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)(o.QuestsAsset, {
      id: "QuestRewardTile_rewardTileStatic",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: s,
        className: l()(d.image),
        src: n.url
      })
    }), (0, a.jsx)("div", {
      className: d.overlay
    }), (0, a.jsx)("div", {
      className: d.contents,
      children: (0, a.jsx)(o.QuestsAsset, {
        id: "QuestPartnerBranding_gameLogotype",
        children: e => (0, a.jsx)("img", {
          ref: e,
          className: d.partnerBranding,
          alt: t.config.messages.gameTitle,
          src: (0, i.getGameLogotypeAssetUrl)(t, u.ThemeTypes.DARK)
        })
      })
    })]
  })
}