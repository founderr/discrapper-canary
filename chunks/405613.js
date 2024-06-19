l.d(n, {
  Z: function() {
    return i
  }
});
var s = l(134432),
  t = l(981631);

function i(e, n) {
  let l;
  if (null == e.image) return null;
  null == n && (n = window.screen.width * (0, s.x_)()), n = (0, s.oO)(n);
  let i = window.GLOBAL_ENV.CDN_HOST;
  if (null != i) {
    var a;
    l = "".concat((a = "https:", "https:"), "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image)
  } else l = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + t.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
  return l += "?size=".concat(n)
}