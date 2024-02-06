"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return l
  },
  copy: function() {
    return r
  }
}), n("70102");
var u = n("281071"),
  i = n("773336"),
  a = n("50885");
let l = (() => {
  if (i.isPlatformEmbedded) return null != a.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function r(e) {
  return !!l && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : u.copy(e))
}