"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("996106"),
  i = n("452426"),
  l = n("186901"),
  r = n("981631");
t.default = {
  [r.RPCCommands.SET_CONFIG]: {
    scope: l.RPC_AUTHENTICATED_SCOPE,
    validation: e => (0, i.default)(e).required().keys({
      use_interactive_pip: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          use_interactive_pip: n
        }
      } = e;
      if (t.transport !== l.TransportTypes.POST_MESSAGE) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, 'command not available from "'.concat(t.transport, " transport"));
      if (null == t.application.id) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "invalid application");
      return a.default.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
        applicationId: t.application.id,
        config: {
          useInteractivePIP: n
        }
      }), Promise.resolve({
        use_interactive_pip: n
      })
    }
  }
}