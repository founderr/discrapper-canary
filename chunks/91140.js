t.d(n, {
  W: function() {
return c;
  }
});
var l = t(735250),
  r = t(470079),
  a = t(297781),
  o = t(443487),
  i = t(43205),
  u = t(797342),
  s = t(827418);
let c = [
  a.OV,
  a.EE,
  a.Af,
  a.U9,
  a.gj,
  a.f,
  a.n8,
  a.v1,
  a.pQ
];
n.Z = r.memo(e => {
  let {
entry: n,
channel: t,
selected: r,
hovered: d
  } = e, {
iconUrl: E,
iconTitle: _
  } = (0, u.n)(n);
  return (0, l.jsxs)(o.Zb, {
selected: r,
children: [
  (0, l.jsxs)(o.e$, {
    children: [
      (0, l.jsx)(o.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, l.jsx)(o.ll, {
        children: n.extra.game_name
      }),
      (0, l.jsx)(a.Gk, {
        location: a.Gt.CARD,
        children: c.map((e, t) => (0, l.jsx)(e, {
          entry: n,
          hovered: d
        }, t))
      })
    ]
  }),
  (0, l.jsx)(i.f, {
    alt: _,
    src: E,
    size: 48,
    className: s.thumbnail
  })
]
  });
});