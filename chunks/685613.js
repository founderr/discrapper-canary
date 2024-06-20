n.d(t, {
  f: function() {
    return o
  }
});
var s, o, i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  r = n(780384),
  u = n(918701),
  c = n(78826),
  d = n(981631),
  C = n(131250);
(s = o || (o = {}))[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM";
t.Z = function(e) {
  let {
    className: t,
    gameTileSize: n = 24,
    quest: s,
    theme: o = d.BRd.DARK,
    withGameTile: a = !0
  } = e, m = (0, r.wj)(o) ? d.BRd.DARK : d.BRd.LIGHT;
  return (0, i.jsxs)("div", {
    className: l()(C.partnerBranding, t),
    children: [a && (0, i.jsx)(c.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, i.jsx)("img", {
        ref: e,
        className: C.partnerBrandingGameTile,
        alt: "",
        src: (0, u.uo)(s, m),
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
    }), (0, i.jsx)(c.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, i.jsx)("img", {
        ref: e,
        className: C.partnerBrandingLogotype,
        alt: s.config.messages.gameTitle,
        src: (0, u.Gs)(s, m)
      })
    })]
  })
}