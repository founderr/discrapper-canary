"use strict";
a.r(t), a("47120");
var n = a("232567"),
  s = a("996106"),
  l = a("452426"),
  i = a("863141"),
  r = a("186901"),
  o = a("981631");
t.default = {
  [o.RPCCommands.GET_USER]: {
    scope: r.RPC_LOCAL_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      return (0, n.getUser)(t).then(i.default).catch(() => {
        throw new s.default({
          errorCode: o.RPCErrors.INVALID_USER
        }, "Invalid user id: ".concat(t))
      })
    }
  }
}