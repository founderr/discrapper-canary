"use strict";
n.r(l), n.d(l, {
  default: function() {
    return a
  }
});
var t = n("134432"),
  s = n("981631");

function a(e, l) {
  let n;
  if (null == e.image) return null;
  null == l && (l = window.screen.width * (0, t.getDevicePixelRatio)()), l = (0, t.getBestMediaProxySize)(l);
  let a = window.GLOBAL_ENV.CDN_HOST;
  if (null != a) {
    var i;
    n = "".concat((i = "https:", "https:"), "//").concat(a, "/guild-events/").concat(e.id, "/").concat(e.image)
  } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + s.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
  return n += "?size=".concat(l)
}