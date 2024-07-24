n.d(t, {
  Hs: function() {
return h;
  },
  qy: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(317261),
  l = n(561308),
  r = n(297781),
  o = n(443487),
  c = n(43205),
  u = n(797342),
  d = n(827418);
let h = [r.E6],
  p = [s._.WEEK];

function m(e) {
  return null != e && p.includes(e);
}
t.ZP = a.memo(e => {
  let {
entry: t,
channel: n,
selected: a
  } = e, {
iconUrl: s
  } = (0, u.n)(t), p = (0, l.Nq)(t);
  return null != p && m(p) ? (0, i.jsxs)(o.Zb, {
selected: a,
children: [
  (0, i.jsxs)(o.e$, {
    children: [
      (0, i.jsx)(o.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, i.jsx)(o.ll, {
        children: t.extra.game_name
      }),
      (0, i.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: h.map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, i.jsx)(c.f, {
    src: s,
    size: 48,
    className: d.thumbnail
  })
]
  }) : null;
});