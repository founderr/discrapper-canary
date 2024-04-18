"use strict";
a.r(t), a.d(t, {
  deprecatedCommand: function() {
    return l
  }
});
var n = a("996106"),
  s = a("981631");
let l = {
  handler(e) {
    throw new n.default({
      errorCode: s.RPCErrors.INVALID_COMMAND
    }, "Deprecated command: ".concat(e.cmd))
  }
}