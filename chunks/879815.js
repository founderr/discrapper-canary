"use strict";
n.r(t);
var a = n("442837"),
  s = n("314897"),
  i = n("131951"),
  l = n("979651");
t.default = e => (0, a.useStateFromStoresObject)([l.default, i.default, s.default], () => (function(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
    o = null != e ? n.getVoiceState(e.getGuildId(), r.getId()) : null;
  return {
    selfDeaf: a.isSelfDeaf(),
    deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
  }
})(e, l.default, i.default, s.default))