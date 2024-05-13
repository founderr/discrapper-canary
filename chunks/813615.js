"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("789020");
var a = n("928518"),
  s = n("630388"),
  i = n("917107"),
  l = n("981631");

function r(e, t) {
  var n;
  let r = (0, s.hasFlag)(null !== (n = e.flags) && void 0 !== n ? n : 0, l.ApplicationFlags.EMBEDDED),
    o = a.default.getWindowOpen(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return r && o && (0, i.default)(t)
}