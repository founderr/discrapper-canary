"use strict";
a.r(t), a("47120"), a("315314"), a("610138"), a("216116"), a("78328"), a("815648");
var n = a("12647"),
  s = a("49012"),
  l = a("358085"),
  i = a("996106"),
  r = a("914946"),
  o = a("452426"),
  u = a("186901"),
  d = a("981631");
t.default = {
  [d.RPCCommands.OPEN_EXTERNAL_LINK]: {
    scope: {
      [u.RPC_SCOPE_CONFIG.ANY]: [u.RPC_AUTHENTICATED_SCOPE]
    },
    validation: e => (0, o.default)(e).required().keys({
      url: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          url: a
        }
      } = e;
      (0, r.validatePostMessageTransport)(t.transport);
      try {
        let e = new URL(a);
        l.isPlatformEmbedded && n.default.focus(null, !0), (0, s.handleClick)({
          href: e.toString()
        })
      } catch (e) {
        throw new i.default({
          errorCode: d.RPCErrors.INVALID_COMMAND
        }, "Invalid URL: ".concat(a))
      }
    }
  }
}