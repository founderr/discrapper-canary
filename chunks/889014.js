"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("446674"),
  a = n("76393");

function s() {
  return (0, r.useStateFromStores)([a.default], () => null != a.default.getRemoteSessionId() || null != a.default.getAwaitingRemoteSessionInfo())
}