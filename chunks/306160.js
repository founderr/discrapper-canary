"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return l
  },
  copy: function() {
    return a
  }
}), n("70102");
var i = n("281071"),
  r = n("773336"),
  s = n("50885");
let l = (() => {
  if (r.isPlatformEmbedded) return null != s.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function a(e) {
  return !!l && (r.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
}