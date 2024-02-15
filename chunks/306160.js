"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return a
  },
  copy: function() {
    return s
  }
}), n("70102");
var i = n("281071"),
  r = n("773336"),
  u = n("50885");
let a = (() => {
  if (r.isPlatformEmbedded) return null != u.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function s(e) {
  return !!a && (r.isPlatformEmbedded ? (u.default.copy(e), !0) : i.copy(e))
}