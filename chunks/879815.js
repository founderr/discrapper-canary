"use strict";
a.r(t);
var n = a("442837"),
  s = a("314897"),
  l = a("131951"),
  i = a("979651");
t.default = e => (0, n.useStateFromStoresObject)([i.default, l.default, s.default], () => (function(e) {
  var t;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
    o = null != e ? a.getVoiceState(e.getGuildId(), r.getId()) : null;
  return {
    selfDeaf: n.isSelfDeaf(),
    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
  }
})(e, i.default, l.default, s.default))