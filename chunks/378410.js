"use strict";
a.r(t), a("47120");
var n = a("710845"),
  s = a("914946"),
  l = a("452426"),
  i = a("981631");
let r = new n.default(i.RPC_APPLICATION_LOGGING_CATEGORY);
t.default = {
  [i.RPCCommands.CAPTURE_LOG]: {
    validation: e => (0, l.default)(e).required().keys({
      level: e.string().max(10).required(),
      message: e.string().max(1e3).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          level: a,
          message: n
        }
      } = e;
      (0, s.validatePostMessageTransport)(t.transport);
      let l = t.application.id,
        i = "".concat(l, " - ").concat(n);
      switch (a) {
        case "log":
          r.log(i);
          break;
        case "warn":
          r.warn(i);
          break;
        case "debug":
          r.verbose(i);
          break;
        case "info":
          r.info(i);
          break;
        case "error":
          r.error(i)
      }
    }
  }
}