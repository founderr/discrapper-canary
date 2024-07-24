n.d(t, {
  Ho: function() {
return p;
  },
  y9: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(317261),
  l = n(823379),
  r = n(162461),
  o = n(561308),
  c = n(297781),
  u = n(443487),
  d = n(43205),
  h = n(827418);
let p = [c.An],
  m = [s._.WEEK];
t.ZP = a.memo(e => {
  let {
entry: t,
channel: n,
selected: a
  } = e;
  if (!(0, r.Rg)('MemberListTopArtistContent'))
return null;
  let s = (0, o.Nq)(t);
  return null != s && (0, l.Hi)(s, m) ? (0, i.jsxs)(u.Zb, {
selected: a,
children: [
  (0, i.jsxs)(u.e$, {
    children: [
      (0, i.jsx)(u.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, i.jsx)(u.ll, {
        children: t.extra.artist.name
      }),
      (0, i.jsx)(c.Gk, {
        location: c.Gt.CARD,
        children: p.map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, i.jsx)(d.f, {
    src: t.extra.media.image_url,
    size: 48,
    className: h.thumbnail
  })
]
  }) : null;
});