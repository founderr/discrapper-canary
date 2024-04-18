"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("872810"),
  s = a("594190"),
  l = a("199902"),
  i = a("592125"),
  r = a("430824"),
  o = a("131951"),
  u = a("496675"),
  d = a("944486"),
  c = a("449224"),
  f = a("102172"),
  E = a("74299"),
  h = a("989941");

function _() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, E.default)(o.default) || null != l.default.getCurrentUserActiveStream()) return !1;
  let t = (0, h.default)(s.default, c.default);
  if (null == t || t.isLauncher && !e) return !1;
  let a = d.default.getVoiceChannelId(),
    _ = i.default.getChannel(a);
  if (null == _) return !1;
  let C = _.getGuildId();
  return !!(0, f.canStreamInChannel)(_, r.default, u.default, !1) && ((0, n.startStream)(C, _.id, {
    pid: t.pid
  }), !0)
}