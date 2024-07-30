t.d(n, {
  Hs: function() {
return m;
  },
  qy: function() {
return f;
  }
});
var l = t(735250),
  i = t(470079),
  s = t(317261),
  a = t(561308),
  r = t(297781),
  c = t(443487),
  o = t(43205),
  d = t(797342),
  u = t(827418);
let m = [r.E6],
  x = [s._.WEEK];

function f(e) {
  return null != e && x.includes(e);
}
n.ZP = i.memo(e => {
  let {
entry: n,
channel: t,
selected: i
  } = e, {
iconUrl: s
  } = (0, d.n)(n), x = (0, a.Nq)(n);
  return null != x && f(x) ? (0, l.jsxs)(c.Zb, {
selected: i,
children: [
  (0, l.jsxs)(c.e$, {
    children: [
      (0, l.jsx)(c.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, l.jsx)(c.ll, {
        children: n.extra.game_name
      }),
      (0, l.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: m.map((e, t) => (0, l.jsx)(e, {
          entry: n
        }, t))
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