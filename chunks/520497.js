"use strict";
n.r(e), n.d(e, {
  default: function() {
    return r
  }
});
var i = n("49111");

function r(t) {
  let {
    CDN_HOST: e,
    PROJECT_ENV: n
  } = window.GLOBAL_ENV;
  return "development" !== n ? "".concat(location.protocol, "//").concat(e).concat(i.Endpoints.SOUNDBOARD_SOUND(t)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(t))
}