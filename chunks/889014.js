"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("446674"),
  r = n("76393");

function s() {
  return (0, i.useStateFromStores)([r.default], () => null != r.default.getRemoteSessionId() || null != r.default.getAwaitingRemoteSessionInfo())
}