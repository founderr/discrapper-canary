"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return u
  },
  copy: function() {
    return a
  }
}), n("70102");
var i = n("281071"),
  r = n("773336"),
  l = n("50885");
let u = (() => {
  if (r.isPlatformEmbedded) return null != l.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function a(e) {
  return !!u && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
}