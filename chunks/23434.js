"use strict";
R.r(e);
var I, i, s, r, _ = R("442837"),
  t = R("570140");
let n = null;
class u extends(r = _.default.Store) {
  hasAction() {
    return null != n
  }
  getAction() {
    return n
  }
}

function A(E) {
  n = E.requiredAction
}
s = "UserRequiredActionStore", (i = "displayName") in(I = u) ? Object.defineProperty(I, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[i] = s, e.default = new u(t.default, {
  CONNECTION_OPEN: A,
  USER_REQUIRED_ACTION_UPDATE: A
})