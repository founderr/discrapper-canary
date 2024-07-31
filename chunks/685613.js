n.d(t, {
  f: function() {
return r;
  }
});
var s, r, a = n(735250);
n(470079);
var o = n(120356),
  i = n.n(o),
  u = n(780384),
  l = n(918701),
  c = n(78826),
  d = n(981631),
  m = n(272467);
(s = r || (r = {}))[s.SMALL = 24] = 'SMALL', s[s.MEDIUM = 32] = 'MEDIUM';
t.Z = function(e) {
  let {
className: t,
gameTileSize: n = 24,
quest: s,
theme: r = d.BRd.DARK,
withGameTile: o = !0
  } = e, _ = (0, u.wj)(r) ? d.BRd.DARK : d.BRd.LIGHT;
  return (0, a.jsxs)('div', {
className: i()(m.partnerBranding, t),
children: [
  o && (0, a.jsx)(c.Fl, {
    id: 'QuestPartnerBranding_gameTile',
    children: e => (0, a.jsx)('img', {
      ref: e,
      className: m.partnerBrandingGameTile,
      alt: '',
      src: (0, l.uo)(s, _),
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
  (0, a.jsx)(c.Fl, {
    id: 'QuestPartnerBranding_gameLogotype',
    children: e => (0, a.jsx)('img', {
      ref: e,
      className: m.partnerBrandingLogotype,
      alt: s.config.messages.gameTitle,
      src: (0, l.Gs)(s, _)
    })
  })
]
  });
};