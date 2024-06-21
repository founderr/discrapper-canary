n(47120);
var i = n(237997),
  s = n(998502),
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
  g = n(908711),
  p = n(197941),
  N = n(462414),
  T = n(662194),
  C = n(188861);
let S = {
    ...l.A,
    ...u.Z,
    ...d.Z,
    ...h.Z,
    ..._.Z,
    ...I.Z,
    ...m.Z,
    ...p.Z,
    ...T.Z,
    ...N.Z,
    ...E.Z,
    ...g.Z
  },
  A = {
    ...a.Z,
    ...o.M,
    ...c.n
  };
t.Z = {
  server: r.Z,
  commands: S,
  events: A,
  stores: [i.Z],
  transports: [C.Z],
  registerTransportsForEmbeddedPlatform: function() {
    s.ZP.ensureModule("discord_rpc").then(() => {
      for (let e of [n(178318).Z, n(967351).Z]) r.Z.registerTransport(e)
    })
  }
}