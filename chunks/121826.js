"use strict";
n.r(t);
var a = n("230487"),
  s = n("998502"),
  i = n("914946"),
  l = n("452426"),
  r = n("981631");
t.default = {
  [r.RPCCommands.ENCOURAGE_HW_ACCELERATION]: {
    validation: e => (0, l.default)(e),
    handler(e) {
      let {
        socket: t
      } = e;
      (0, i.validatePostMessageTransport)(t.transport);
      let n = t.application.id;
      if (null != n) return (0, a.default)(n), {
        enabled: s.default.getEnableHardwareAcceleration()
      }
    }
  }
}