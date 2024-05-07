"use strict";
n.r(t), n.d(t, {
  validateTransportType: function() {
    return l
  }
});
var a = n("996106"),
  s = n("186901"),
  i = n("981631");

function l(e) {
  if (s.TransportTypes.IPC !== e && s.TransportTypes.POST_MESSAGE !== e) throw new a.default({
    errorCode: i.RPCErrors.INVALID_COMMAND
  }, "Invalid transport.")
}