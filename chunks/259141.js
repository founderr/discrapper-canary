"use strict";
n.r(t), n.d(t, {
  useIsConnectedToVoiceChannel: function() {
    return u
  }
});
var a = n("446674"),
  l = n("271938"),
  i = n("800762");

function u(e) {
  return function(e) {
    return (0, a.useStateFromStores)([i.default, l.default], () => i.default.isInChannel(e, l.default.getId()))
  }(null == e ? void 0 : e.id)
}