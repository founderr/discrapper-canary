"use strict";
a.r(t), a.d(t, {
  makeTenorProxyURL: function() {
    return s
  }
}), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102");
var l = a("49111");
let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function s(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: a
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
  let s = "".concat(l.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(a).concat(s)
}