"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("446674"),
  r = n("913144");
let o = null;
class s extends i.default.Store {
  hasAction() {
    return null != o
  }
  getAction() {
    return o
  }
}

function l(e) {
  o = e.requiredAction
}
s.displayName = "UserRequiredActionStore";
var a = new s(r.default, {
  CONNECTION_OPEN: l,
  USER_REQUIRED_ACTION_UPDATE: l
})