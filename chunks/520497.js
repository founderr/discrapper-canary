"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("49111");

function i(e) {
  let {
    CDN_HOST: t,
    PROJECT_ENV: n
  } = window.GLOBAL_ENV;
  return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
}