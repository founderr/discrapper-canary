n.d(t, {
  f: function() {
return s;
  }
});
var i, s, a = n(735250);
n(470079);
var r = n(120356),
  l = n.n(r),
  o = n(780384),
  c = n(918701),
  u = n(78826),
  d = n(981631),
  _ = n(272467);
(i = s || (s = {}))[i.SMALL = 24] = 'SMALL', i[i.MEDIUM = 32] = 'MEDIUM';
t.Z = function(e) {
  let {
className: t,
gameTileSize: n = 24,
quest: i,
theme: s = d.BRd.DARK,
withGameTile: r = !0
  } = e, E = (0, o.wj)(s) ? d.BRd.DARK : d.BRd.LIGHT;
  return (0, a.jsxs)('div', {
className: l()(_.partnerBranding, t),
children: [
  r && (0, a.jsx)(u.Fl, {
    id: 'QuestPartnerBranding_gameTile',
    children: e => (0, a.jsx)('img', {
      ref: e,
      className: _.partnerBrandingGameTile,
      alt: '',
      src: (0, c.uo)(i, E),
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
  (0, a.jsx)(u.Fl, {
    id: 'QuestPartnerBranding_gameLogotype',
    children: e => (0, a.jsx)('img', {
      ref: e,
      className: _.partnerBrandingLogotype,
      alt: i.config.messages.gameTitle,
      src: (0, c.Gs)(i, E)
    })
  })
]
  });
};