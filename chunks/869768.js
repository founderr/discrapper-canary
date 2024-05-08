"use strict";
u.r(t), u.d(t, {
  useIsConnectedToVoiceChannel: function() {
    return d
  }
});
var n = u("442837"),
  a = u("314897"),
  l = u("979651");

function d(e) {
  return function(e) {
    return (0, n.useStateFromStores)([l.default, a.default], () => l.default.isInChannel(e, a.default.getId()))
  }(null == e ? void 0 : e.id)
}