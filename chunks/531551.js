"use strict";
n.r(t), n("411104");
var a = n("570140"),
  s = n("51025"),
  i = n("314897"),
  l = n("804739");

function r() {
  if (!(0, l.isSupportedPlatform)()) return;
  let e = i.default.getToken(),
    t = i.default.getId();
  if (null == e) throw Error("missing user token");
  s.init(e, t)
}

function o() {
  s.destroy()
}
t.default = {
  init() {
    a.default.subscribe("CONNECTION_OPEN", r), a.default.subscribe("LOGOUT", o)
  }
}