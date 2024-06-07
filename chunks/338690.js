"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("287734"),
  n = s("592125"),
  r = s("894257");

function d() {
  let e = n.default.getDMFromUserId(r.SYSTEM_USER);
  null != e && a.default.selectPrivateChannel(e)
}