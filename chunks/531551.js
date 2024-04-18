"use strict";
a.r(t), a("411104");
var n = a("570140"),
  s = a("51025"),
  l = a("314897"),
  i = a("804739");

function r() {
  if (!(0, i.isSupportedPlatform)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  s.init(e, t)
}

function o() {
  s.destroy()
}
t.default = {
  init() {
    n.default.subscribe("CONNECTION_OPEN", r), n.default.subscribe("LOGOUT", o)
  }
}