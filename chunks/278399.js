t.d(n, {
  Ho: function() {
return x;
  },
  y9: function() {
return f;
  }
});
var l = t(735250),
  i = t(470079),
  s = t(317261),
  a = t(823379),
  r = t(162461),
  c = t(561308),
  o = t(297781),
  d = t(443487),
  u = t(43205),
  m = t(827418);
let x = [o.An],
  f = [s._.WEEK];
n.ZP = i.memo(e => {
  let {
entry: n,
channel: t,
selected: i
  } = e;
  if (!(0, r.Rg)('MemberListTopArtistContent'))
return null;
  let s = (0, c.Nq)(n);
  return null != s && (0, a.Hi)(s, f) ? (0, l.jsxs)(d.Zb, {
selected: i,
children: [
  (0, l.jsxs)(d.e$, {
    children: [
      (0, l.jsx)(d.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, l.jsx)(d.ll, {
        children: n.extra.artist.name
      }),
      (0, l.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: x.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
      })
    ]
  }),
  (0, l.jsx)(u.f, {
    src: n.extra.media.image_url,
    size: 48,
    className: m.thumbnail
  })
]
  }) : null;
});