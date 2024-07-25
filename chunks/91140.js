n.d(t, {
  W: function() {
return d;
  }
});
var l = n(735250),
  i = n(470079),
  s = n(297781),
  a = n(443487),
  r = n(43205),
  c = n(797342),
  o = n(827418);
let d = [
  s.OV,
  s.EE,
  s.Af,
  s.U9,
  s.gj,
  s.f,
  s.n8,
  s.v1,
  s.pQ
];
t.Z = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i,
hovered: u
  } = e, {
iconUrl: m,
iconTitle: x
  } = (0, c.n)(t);
  return (0, l.jsxs)(a.Zb, {
selected: i,
children: [
  (0, l.jsxs)(a.e$, {
    children: [
      (0, l.jsx)(a.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, l.jsx)(a.ll, {
        children: t.extra.game_name
      }),
      (0, l.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: d.map((e, n) => (0, l.jsx)(e, {
          entry: t,
          hovered: u
        }, n))
      })
    ]
  }),
  (0, l.jsx)(r.f, {
    alt: x,
    src: m,
    size: 48,
    className: o.thumbnail
  })
]
  });
});