"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return a
  },
  copy: function() {
    return o
  }
}), n("70102");
var l = n("281071"),
  i = n("773336"),
  u = n("50885");
let a = (() => {
  if (i.isPlatformEmbedded) return null != u.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function o(e) {
  return !!a && (i.isPlatformEmbedded ? (u.default.copy(e), !0) : l.copy(e))
}