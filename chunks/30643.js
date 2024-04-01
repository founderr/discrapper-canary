"use strict";
n.r(t), n("47120");
var a = n("237997"),
  s = n("998502"),
  l = n("576027"),
  i = n("13838"),
  r = n("812967"),
  o = n("350085"),
  u = n("910484"),
  d = n("443952"),
  c = n("266572"),
  f = n("177698"),
  E = n("121826"),
  _ = n("567481"),
  h = n("498164"),
  C = n("111097"),
  S = n("908711"),
  m = n("197941"),
  I = n("462414"),
  p = n("662194"),
  T = n("188861");
let g = {
    ...l.crossPlatformCommands,
    ...d.default,
    ...c.default,
    ...E.default,
    ..._.default,
    ...h.default,
    ...C.default,
    ...m.default,
    ...p.default,
    ...I.default,
    ...f.default,
    ...S.default
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
  stores: [a.default],
  transports: [T.default],
  registerTransportsForEmbeddedPlatform: function() {
    s.default.ensureModule("discord_rpc").then(() => {
      for (let e of [n("178318").default, n("967351").default]) r.default.registerTransport(e)
    })
  }
}