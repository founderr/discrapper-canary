"use strict";
a.r(t), a.d(t, {
  validateTransportType: function() {
    return i
  }
});
var n = a("996106"),
  s = a("186901"),
  l = a("981631");

function i(e) {
  if (s.TransportTypes.IPC !== e && s.TransportTypes.POST_MESSAGE !== e) throw new n.default({
    errorCode: l.RPCErrors.INVALID_COMMAND
  }, "Invalid transport.")
}