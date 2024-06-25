n(47120);
var s = n(237997),
  i = n(998502),
  l = n(576027),
  a = n(13838),
  r = n(812967),
  o = n(350085),
  c = n(910484),
  u = n(443952),
  d = n(266572),
  E = n(177698),
  h = n(121826),
  _ = n(567481),
  I = n(498164),
  m = n(111097),
  T = n(908711),
  g = n(197941),
  p = n(462414),
  N = n(662194),
  S = n(188861);
let C = {
    ...l.A,
    ...u.Z,
    ...d.Z,
    ...h.Z,
    ..._.Z,
    ...I.Z,
    ...m.Z,
    ...g.Z,
    ...N.Z,
    ...p.Z,
    ...E.Z,
    ...T.Z
  },
  A = {
    ...a.Z,
    ...o.M,
    ...c.n
  };
t.Z = {
  server: r.Z,
  commands: C,
  events: A,
  stores: [s.Z],
  transports: [S.Z],
  registerTransportsForEmbeddedPlatform: function() {
    i.ZP.ensureModule("discord_rpc").then(() => {
      for (let e of [n(178318).Z, n(967351).Z]) r.Z.registerTransport(e)
    })
  }
}