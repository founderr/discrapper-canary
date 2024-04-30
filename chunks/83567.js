"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("457330"),
  l = a("726542"),
  i = a("231757"),
  r = a("553795"),
  o = a("585483"),
  u = a("996106"),
  d = a("914946"),
  c = a("452426"),
  f = a("186901"),
  E = a("981631"),
  h = a("701488"),
  _ = a("231338");
let C = new Set([h.AM_HARMONY_PRD_APPLICATION_ID, h.AM_HARMONY_STG_APPLICATION_ID]);
t.default = {
  [_.RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: {
    scope: {
      [f.RPC_SCOPE_CONFIG.ANY]: [f.RPC_AUTHENTICATED_SCOPE]
    },
    validation: e => (0, c.default)(e).required().keys({
      provider: e.string().required()
    }),
    handler: e => {
      let {
        socket: t,
        args: {
          provider: a
        }
      } = e;
      (0, d.validatePostMessageTransport)(t.transport);
      let c = (0, d.validateApplication)(t.application),
        f = l.default.get(a);
      if (null == f) throw new u.default({
        errorCode: _.RPCErrors.INVALID_PROVIDER
      }, 'Platform not found for provider "'.concat(a, '"'));
      if (a === E.PlatformTypes.AMAZON_MUSIC) {
        if (!C.has(c)) throw new u.default({
          errorCode: _.RPCErrors.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application")
      } else throw new u.default({
        errorCode: _.RPCErrors.UNAUTHORIZED_FOR_APPLICATION
      }, "Command not available for this application");
      return new Promise(async (e, t) => {
        let l = r.default.getAccount(null, a);
        if (null == l) {
          function d(t) {
            var a;
            if (null == f) return;
            let n = (null !== (a = t.accounts) && void 0 !== a ? a : []).find(e => e.type === f.type);
            null != n && (e({
              access_token: n.access_token
            }), h())
          }

          function c() {
            t(new u.default({
              errorCode: _.RPCErrors.OAUTH2_ERROR
            }, 'OAuth2 setup for "'.concat(a, '" failed'))), h()
          }

          function h() {
            n.default.unsubscribe("USER_CONNECTIONS_UPDATE", d), o.ComponentDispatch.unsubscribe(E.ComponentActions.CONNECTIONS_CALLBACK_ERROR, c)
          }
          n.default.subscribe("USER_CONNECTIONS_UPDATE", d), o.ComponentDispatch.subscribe(E.ComponentActions.CONNECTIONS_CALLBACK_ERROR, c), (0, i.default)({
            platformType: f.type,
            location: E.AnalyticsLocations.ACTIVITY_RPC
          })
        } else try {
          let t = await s.default.refreshAccessToken(f.type, l.id);
          if (null == t) throw new u.default({
            errorCode: _.RPCErrors.OAUTH2_ERROR
          }, "Refreshing access token did not return a new access token");
          e({
            access_token: t
          })
        } catch (e) {
          t(e)
        }
      })
    }
  }
}