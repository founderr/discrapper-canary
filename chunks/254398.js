"use strict";
n.r(t), n.d(t, {
  makeTenorProxyURL: function() {
    return l
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102");
var a = n("49111");
let r = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function l(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: n
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(r)) throw Error("Unexpected Tenor GIF path.");
  let l = "".concat(a.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(n).concat(l)
}