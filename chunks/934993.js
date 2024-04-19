"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("996106"),
  l = a("452426"),
  i = a("186901"),
  r = a("981631");
t.default = {
  [r.RPCCommands.SET_CONFIG]: {
    scope: i.RPC_AUTHENTICATED_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      use_interactive_pip: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          use_interactive_pip: a
        }
      } = e;
      if (t.transport !== i.TransportTypes.POST_MESSAGE) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, 'command not available from "'.concat(t.transport, " transport"));
      if (null == t.application.id) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "invalid application");
      return n.default.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
        applicationId: t.application.id,
        config: {
          useInteractivePIP: a
        }
      }), Promise.resolve({
        use_interactive_pip: a
      })
    }
  }
}