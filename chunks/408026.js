"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("224706"),
  l = a("710845"),
  i = a("77498");
let r = {};

function o(e) {
  let {
    name: t,
    hash: a,
    missingData: n
  } = e;
  for (let e of (i.default.markGameReported(t), n))
    if ("icon" === e) {
      let e = r[t];
      null != e && s.default.uploadIcon(t, a, e);
      return
    } else new l.default("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
}

function u(e) {
  let {
    gameName: t,
    icon: a
  } = e;
  r[t] = a
}
t.default = {
  initialize() {
    n.default.subscribe("UNVERIFIED_GAME_UPDATE", o), n.default.subscribe("GAME_ICON_UPDATE", u)
  }
}