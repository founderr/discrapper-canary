"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return s
  },
  copy: function() {
    return a
  }
}), n("70102");
var i = n("281071"),
  l = n("773336"),
  r = n("50885");
let s = (() => {
  if (l.isPlatformEmbedded) return null != r.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function a(e) {
  return !!s && (l.isPlatformEmbedded ? (r.default.copy(e), !0) : i.copy(e))
}