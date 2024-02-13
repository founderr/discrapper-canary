"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("990766"),
  s = n("373469"),
  l = n("42203"),
  i = n("305961"),
  r = n("42887"),
  o = n("957255"),
  u = n("568307"),
  d = n("18494"),
  c = n("703370"),
  f = n("223913"),
  E = n("479788"),
  h = n("375202");

function _() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, E.default)(r.default) || null != s.default.getCurrentUserActiveStream()) return !1;
  let t = (0, h.default)(u.default, c.default);
  if (null == t || t.isLauncher && !e) return !1;
  let n = d.default.getVoiceChannelId(),
    _ = l.default.getChannel(n);
  if (null == _) return !1;
  let C = _.getGuildId();
  return !!(0, f.canStreamInChannel)(_, i.default, o.default, !1) && ((0, a.startStream)(C, _.id, {
    pid: t.pid
  }), !0)
}