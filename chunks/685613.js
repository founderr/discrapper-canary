"use strict";
n.r(t), n.d(t, {
  GameTileSizes: function() {
    return l
  }
});
var s, l, a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  o = n("780384"),
  u = n("918701"),
  d = n("78826"),
  c = n("981631"),
  f = n("922809");
(s = l || (l = {}))[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM";
t.default = function(e) {
  let {
    className: t,
    gameTileSize: n = 24,
    quest: s,
    theme: l = c.ThemeTypes.DARK
  } = e, i = (0, o.isThemeDark)(l) ? c.ThemeTypes.DARK : c.ThemeTypes.LIGHT;
  return (0, a.jsxs)("div", {
    className: r()(f.partnerBranding, t),
    children: [(0, a.jsx)(d.QuestsAsset, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, a.jsx)("img", {
        ref: e,
        className: f.partnerBrandingGameTile,
        alt: "",
        src: (0, u.getGameTileAssetUrl)(s, i),
        style: {
          borderRadius: function(e) {
            switch (e) {
              case 24:
                return 3;
              case 32:
                return 4
            }
          }(n),
          width: n,
          height: n
        }
      })
    }), (0, a.jsx)(d.QuestsAsset, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, a.jsx)("img", {
        ref: e,
        className: f.partnerBrandingLogotype,
        alt: s.config.messages.gameTitle,
        src: (0, u.getGameLogotypeAssetUrl)(s, i)
      })
    })]
  })
}