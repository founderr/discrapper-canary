"use strict";
a.r(t), a("47120");
var n = a("237997"),
  s = a("998502"),
  l = a("576027"),
  i = a("13838"),
  r = a("812967"),
  o = a("350085"),
  u = a("910484"),
  d = a("443952"),
  c = a("266572"),
  f = a("177698"),
  E = a("121826"),
  h = a("567481"),
  _ = a("498164"),
  C = a("111097"),
  m = a("908711"),
  S = a("197941"),
  p = a("462414"),
  I = a("662194"),
  T = a("188861");
let g = {
    ...l.crossPlatformCommands,
    ...d.default,
    ...c.default,
    ...E.default,
    ...h.default,
    ..._.default,
    ...C.default,
    ...S.default,
    ...I.default,
    ...p.default,
    ...f.default,
    ...m.default
  },
  A = {
    ...i.default,
    ...o.overlayEventHandlers,
    ...u.voiceSettingsEventHandlers
  };
t.default = {
  server: r.default,
  commands: g,
  events: A,
  stores: [n.default],
  transports: [T.default],
  registerTransportsForEmbeddedPlatform: function() {
    s.default.ensureModule("discord_rpc").then(() => {
      for (let e of [a("178318").default, a("967351").default]) r.default.registerTransport(e)
    })
  }
}