"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("392711"),
  s = a.n(n),
  l = a("186901"),
  i = a("981631");

function r(e, t) {
  return {
    [i.RPCEvents.VOICE_SETTINGS_UPDATE]: {
      scope: {
        [l.RPC_SCOPE_CONFIG.ANY]: [i.OAuth2Scopes.RPC, i.OAuth2Scopes.RPC_VOICE_READ]
      },
      handler: () => t => {
        let {
          prevState: a,
          dispatch: n
        } = t, l = e();
        return !s().isEqual(l, a) && n(l), l
      }
    },
    [i.RPCEvents.VOICE_SETTINGS_UPDATE_2]: {
      scope: l.RPC_LOCAL_SCOPE,
      handler(e) {
        let {
          socket: a
        } = e;
        return e => {
          let {
            prevState: n,
            dispatch: l
          } = e;
          if (null == a.application.id) return n;
          let i = t(a.application.id);
          return !s().isEqual(i, n) && l(i), i
        }
      }
    }
  }
}