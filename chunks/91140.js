s.d(a, {
  W: function() {
return E;
  }
});
var n = s(735250),
  t = s(470079),
  l = s(297781),
  r = s(443487),
  i = s(43205),
  o = s(797342),
  c = s(827418);
let E = [
  l.OV,
  l.EE,
  l.Af,
  l.U9,
  l.gj,
  l.f,
  l.n8,
  l.v1,
  l.pQ
];
a.Z = t.memo(e => {
  let {
entry: a,
channel: s,
selected: t,
hovered: _
  } = e, {
iconUrl: d,
iconTitle: u
  } = (0, o.n)(a);
  return (0, n.jsxs)(r.Zb, {
selected: t,
children: [
  (0, n.jsxs)(r.e$, {
    children: [
      (0, n.jsx)(r.F9, {
        entry: a,
        channelId: s.id,
        guildId: s.guild_id
      }),
      (0, n.jsx)(r.ll, {
        children: a.extra.game_name
      }),
      (0, n.jsx)(l.Gk, {
        location: l.Gt.CARD,
        children: E.map((e, s) => (0, n.jsx)(e, {
          entry: a,
          hovered: _
        }, s))
      })
    ]
  }),
  (0, n.jsx)(i.f, {
    alt: u,
    src: d,
    size: 48,
    className: c.thumbnail
  })
]
  });
});