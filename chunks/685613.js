n.d(t, {
  f: function() {
    return i
  }
});
var s, i, l = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(780384),
  c = n(918701),
  u = n(78826),
  d = n(981631),
  E = n(131250);
(s = i || (i = {}))[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM";
t.Z = function(e) {
  let {
    className: t,
    gameTileSize: n = 24,
    quest: s,
    theme: i = d.BRd.DARK,
    withGameTile: a = !0
  } = e, _ = (0, o.wj)(i) ? d.BRd.DARK : d.BRd.LIGHT;
  return (0, l.jsxs)("div", {
    className: r()(E.partnerBranding, t),
    children: [a && (0, l.jsx)(u.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, l.jsx)("img", {
        ref: e,
        className: E.partnerBrandingGameTile,
        alt: "",
        src: (0, c.uo)(s, _),
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
    }), (0, l.jsx)(u.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, l.jsx)("img", {
        ref: e,
        className: E.partnerBrandingLogotype,
        alt: s.config.messages.gameTitle,
        src: (0, c.Gs)(s, _)
      })
    })]
  })
}