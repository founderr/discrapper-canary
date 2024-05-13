"use strict";
n.r(t), n("47120");
var a = n("920456"),
  s = n("996106"),
  i = n("452426"),
  l = n("186901"),
  r = n("981631");
t.default = {
  [r.RPCCommands.SET_USER_ACHIEVEMENT]: {
    scope: {
      [l.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, l.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, i.default)(e).required().keys({
      achievement_id: e.string().min(2).max(128),
      percent_complete: e.number().min(0).max(100).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          achievement_id: n,
          percent_complete: i
        }
      } = e, l = t.application.id;
      if (null == l) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return a.default.setUserAchievement(l, n, i).catch(e => {
        let {
          status: t,
          body: n
        } = e;
        switch (t) {
          case 429:
            throw new s.default({
              errorCode: r.RPCErrors.RATE_LIMITED
            }, "You are being rate limited.");
          case 403:
            if (null != n && n.code === r.AbortCodes.USER_NOT_AUTHORIZED_FOR_APPLICATION) throw new s.default({
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
      [l.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, l.RPC_LOCAL_SCOPE]
    },
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return a.default.fetchForApplication(n).then(e => e || [])
    }
  }
}