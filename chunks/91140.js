t.d(n, {
  W: function() {
return s;
  }
});
var a = t(735250),
  l = t(470079),
  r = t(297781),
  i = t(443487),
  o = t(43205),
  u = t(797342),
  c = t(182022);
let s = [
  r.OV,
  r.EE,
  r.Af,
  r.U9,
  r.gj,
  r.f,
  r.n8,
  r.v1,
  r.pQ
];
n.Z = l.memo(e => {
  let {
entry: n,
channel: t,
selected: l,
hovered: d
  } = e, {
iconUrl: f,
iconTitle: h
  } = (0, u.n)(n);
  return (0, a.jsxs)(i.Zb, {
selected: l,
children: [
  (0, a.jsxs)(i.e$, {
    children: [
      (0, a.jsx)(i.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, a.jsx)(i.ll, {
        children: n.extra.game_name
      }),
      (0, a.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: s.map((e, t) => (0, a.jsx)(e, {
          entry: n,
          hovered: d
        }, t))
      })
    ]
  }),
  (0, a.jsx)(o.f, {
    alt: h,
    src: f,
    size: 48,
    className: c.thumbnail
  })
]
  });
});