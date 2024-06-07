"use strict";
n.r(t), n.d(t, {
  isEmbeddedApp: function() {
    return o
  },
  isRealApplication: function() {
    return a
  }
}), n("789020");
var i = n("630388"),
  r = n("981631"),
  s = n("689079");

function a(e) {
  return e.id !== s.BuiltInSectionId.BUILT_IN
}

function o(e) {
  var t;
  let {
    application: n
  } = e;
  return a(n) && (0, i.hasFlag)(null !== (t = n.flags) && void 0 !== t ? t : 0, r.ApplicationFlags.EMBEDDED)
}
s.BuiltInSectionId.BUILT_IN