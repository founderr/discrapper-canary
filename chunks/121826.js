"use strict";
a.r(t);
var n = a("230487"),
  s = a("998502"),
  l = a("914946"),
  i = a("452426"),
  r = a("981631");
t.default = {
  [r.RPCCommands.ENCOURAGE_HW_ACCELERATION]: {
    validation: e => (0, i.default)(e),
    handler(e) {
      let {
        socket: t
      } = e;
      (0, l.validatePostMessageTransport)(t.transport);
      let a = t.application.id;
      if (null != a) return (0, n.default)(a), {
        enabled: s.default.getEnableHardwareAcceleration()
      }
    }
  }
}