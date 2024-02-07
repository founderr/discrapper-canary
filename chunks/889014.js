"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("446674"),
  a = n("76393");

function i() {
  return (0, r.useStateFromStores)([a.default], () => null != a.default.getRemoteSessionId() || null != a.default.getAwaitingRemoteSessionInfo())
}