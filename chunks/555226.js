"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("227231"),
  r = n("49111"),
  o = n("194829"),
  u = function(e) {
    let {
      className: t,
      quest: n
    } = e;
    return (0, a.jsxs)("div", {
      className: l(o.partnerBranding, t),
      children: [(0, a.jsx)("img", {
        className: o.partnerBrandingGameTile,
        alt: "",
        src: (0, i.getGameTileAssetUrl)(n.id)
      }), (0, a.jsx)("img", {
        className: o.partnerBrandingLogotype,
        alt: n.config.messages.gameTitle,
        src: (0, i.getGameLogotypeAssetUrl)(n.id, r.ThemeTypes.DARK)
      })]
    })
  }