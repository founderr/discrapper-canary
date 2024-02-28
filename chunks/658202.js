"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
});
var n = l("322224");

function a(e, t, l, a) {
  let {
    scheduled_start_time: u,
    scheduled_end_time: s
  } = e;
  return null == u && null == s ? n.default.deleteGuildEventException(t, l, a) : n.default.updateGuildEventException({
    scheduled_start_time: u,
    scheduled_end_time: s,
    is_canceled: !1
  }, t, l, a)
}