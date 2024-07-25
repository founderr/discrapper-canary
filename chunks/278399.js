n.d(t, {
  Ho: function() {
return x;
  },
  y9: function() {
return h;
  }
});
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(823379),
  r = n(162461),
  c = n(561308),
  o = n(297781),
  d = n(443487),
  u = n(43205),
  m = n(827418);
let x = [o.An],
  h = [s._.WEEK];
t.ZP = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i
  } = e;
  if (!(0, r.Rg)('MemberListTopArtistContent'))
return null;
  let s = (0, c.Nq)(t);
  return null != s && (0, a.Hi)(s, h) ? (0, l.jsxs)(d.Zb, {
selected: i,
children: [
  (0, l.jsxs)(d.e$, {
    children: [
      (0, l.jsx)(d.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, l.jsx)(d.ll, {
        children: t.extra.artist.name
      }),
      (0, l.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: x.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, l.jsx)(u.f, {
    src: t.extra.media.image_url,
    size: 48,
    className: m.thumbnail
  })
]
  }) : null;
});