"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var u = n("49111");

function i(e) {
  let {
    CDN_HOST: t,
    PROJECT_ENV: n
  } = window.GLOBAL_ENV;
  return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(u.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(u.Endpoints.SOUNDBOARD_SOUND(e))
}