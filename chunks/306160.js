"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return u
  },
  copy: function() {
    return i
  }
}), n("70102");
var l = n("281071"),
  r = n("773336"),
  o = n("50885");
let u = (() => {
  if (r.isPlatformEmbedded) return null != o.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function i(e) {
  return !!u && (r.isPlatformEmbedded ? (o.default.copy(e), !0) : l.copy(e))
}