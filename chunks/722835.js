"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("872810"),
  s = n("594190"),
  l = n("199902"),
  i = n("592125"),
  r = n("430824"),
  o = n("131951"),
  u = n("496675"),
  d = n("944486"),
  c = n("449224"),
  f = n("102172"),
  E = n("74299"),
  C = n("989941");

function h() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, E.default)(o.default) || null != l.default.getCurrentUserActiveStream()) return !1;
  let t = (0, C.default)(s.default, c.default);
  if (null == t || t.isLauncher && !e) return !1;
  let n = d.default.getVoiceChannelId(),
    h = i.default.getChannel(n);
  if (null == h) return !1;
  let _ = h.getGuildId();
  return !!(0, f.canStreamInChannel)(h, r.default, u.default, !1) && ((0, a.startStream)(_, h.id, {
    pid: t.pid
  }), !0)
}