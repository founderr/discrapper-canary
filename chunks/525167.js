"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
});
var i = l("49111");

function n(e, t) {
  let l;
  let n = window.GLOBAL_ENV.CDN_HOST,
    a = window.GLOBAL_ENV.API_ENDPOINT;
  return l = null != n ? "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(a).concat(i.Endpoints.STORE_ASSET(e, t, "mp4"))
}