"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("446674"),
  l = n("76393");

function r() {
  return (0, i.useStateFromStores)([l.default], () => null != l.default.getRemoteSessionId() || null != l.default.getAwaitingRemoteSessionInfo())
}