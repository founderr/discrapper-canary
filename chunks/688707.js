"use strict";
a.r(t), a("47120");
var n = a("920456"),
  s = a("996106"),
  l = a("452426"),
  i = a("186901"),
  r = a("981631");
t.default = {
  [r.RPCCommands.SET_USER_ACHIEVEMENT]: {
    scope: {
      [i.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, i.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      achievement_id: e.string().min(2).max(128),
      percent_complete: e.number().min(0).max(100).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          achievement_id: a,
          percent_complete: l
        }
      } = e, i = t.application.id;
      if (null == i) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return n.default.setUserAchievement(i, a, l).catch(e => {
        let {
          status: t,
          body: a
        } = e;
        switch (t) {
          case 429:
            throw new s.default({
              errorCode: r.RPCErrors.RATE_LIMITED
            }, "You are being rate limited.");
          case 403:
            if (null != a && a.code === r.AbortCodes.USER_NOT_AUTHORIZED_FOR_APPLICATION) throw new s.default({
              errorCode: r.RPCErrors.UNAUTHORIZED_FOR_ACHIEVEMENT
            }, "Not authorized to update this achievement.");
            throw new s.default({
              errorCode: r.RPCErrors.UNKNOWN_ERROR
            }, "Unknown error from API. status=".concat(t, "."));
          default:
            throw new s.default({
              errorCode: r.RPCErrors.UNKNOWN_ERROR
            }, "Unknown error from API. status=".concat(t, "."))
        }
      }).then(() => null)
    }
  },
  [r.RPCCommands.GET_USER_ACHIEVEMENTS]: {
    scope: {
      [i.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, i.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, a = t.application.id;
      if (null == a) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return n.default.fetchForApplication(a).then(e => e || [])
    }
  }
}