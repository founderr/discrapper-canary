n.d(t, {
  f: function() {
return a;
  }
});
var s, a, o = n(735250);
n(470079);
var i = n(120356),
  r = n.n(i),
  u = n(780384),
  l = n(918701),
  c = n(78826),
  d = n(981631),
  _ = n(272467);
(s = a || (a = {}))[s.SMALL = 24] = 'SMALL', s[s.MEDIUM = 32] = 'MEDIUM';
t.Z = function(e) {
  let {
className: t,
gameTileSize: n = 24,
quest: s,
theme: a = d.BRd.DARK,
withGameTile: i = !0
  } = e, T = (0, u.wj)(a) ? d.BRd.DARK : d.BRd.LIGHT;
  return (0, o.jsxs)('div', {
className: r()(_.partnerBranding, t),
children: [
  i && (0, o.jsx)(c.Fl, {
    id: 'QuestPartnerBranding_gameTile',
    children: e => (0, o.jsx)('img', {
      ref: e,
      className: _.partnerBrandingGameTile,
      alt: '',
      src: (0, l.uo)(s, T),
      style: {
        borderRadius: function(e) {
          switch (e) {
            case 24:
              return 3;
            case 32:
              return 4;
          }
        }(n),
        width: n,
        height: n
      }
    })
  }),
  (0, o.jsx)(c.Fl, {
    id: 'QuestPartnerBranding_gameLogotype',
    children: e => (0, o.jsx)('img', {
      ref: e,
      className: _.partnerBrandingLogotype,
      alt: s.config.messages.gameTitle,
      src: (0, l.Gs)(s, T)
    })
  })
]
  });
};