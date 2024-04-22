"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
}), a("789020");
var n = a("928518"),
  s = a("630388"),
  l = a("917107"),
  i = a("981631");

function r(e, t) {
  var a;
  let r = (0, s.hasFlag)(null !== (a = e.flags) && void 0 !== a ? a : 0, i.ApplicationFlags.EMBEDDED),
    o = n.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return r && o && (0, l.default)(t)
}