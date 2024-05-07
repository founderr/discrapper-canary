"use strict";
n.r(t), n("47120");
var a = n("710845"),
  s = n("914946"),
  i = n("452426"),
  l = n("981631");
let r = new a.default(l.RPC_APPLICATION_LOGGING_CATEGORY);
t.default = {
  [l.RPCCommands.CAPTURE_LOG]: {
    validation: e => (0, i.default)(e).required().keys({
      level: e.string().max(10).required(),
      message: e.string().max(1e3).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          level: n,
          message: a
        }
      } = e;
      (0, s.validatePostMessageTransport)(t.transport);
      let i = t.application.id,
        l = "".concat(i, " - ").concat(a);
      switch (n) {
        case "log":
          r.log(l);
          break;
        case "warn":
          r.warn(l);
          break;
        case "debug":
          r.verbose(l);
          break;
        case "info":
          r.info(l);
          break;
        case "error":
          r.error(l)
      }
    }
  }
}