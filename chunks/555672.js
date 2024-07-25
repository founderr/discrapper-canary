n.d(t, {
  Hs: function() {
return m;
  },
  qy: function() {
return h;
  }
});
var l = n(735250),
  i = n(470079),
  s = n(317261),
  a = n(561308),
  r = n(297781),
  c = n(443487),
  o = n(43205),
  d = n(797342),
  u = n(827418);
let m = [r.E6],
  x = [s._.WEEK];

function h(e) {
  return null != e && x.includes(e);
}
t.ZP = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i
  } = e, {
iconUrl: s
  } = (0, d.n)(t), x = (0, a.Nq)(t);
  return null != x && h(x) ? (0, l.jsxs)(c.Zb, {
selected: i,
children: [
  (0, l.jsxs)(c.e$, {
    children: [
      (0, l.jsx)(c.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, l.jsx)(c.ll, {
        children: t.extra.game_name
      }),
      (0, l.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: m.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, l.jsx)(o.f, {
    src: s,
    size: 48,
    className: u.thumbnail
  })
]
  }) : null;
});