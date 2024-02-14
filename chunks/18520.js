"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("522632"),
  s = n("316693"),
  l = n("872717"),
  i = n("524297"),
  r = n("95410"),
  o = n("913144"),
  u = n("8222"),
  d = n("357974"),
  c = n("697218"),
  f = n("991170"),
  E = n("861309"),
  h = n("492249"),
  _ = n("49111");
let C = "CachedTokens";
async function I(e, t, n) {
  let a, {
    client_id: l,
    response_type: i = "code",
    redirect_uri: r,
    code_challenge: o,
    code_challenge_method: h,
    state: C,
    scope: I,
    permissions: S,
    guild_id: m,
    channel_id: p,
    prompt: T,
    disable_guild_select: g
  } = e;
  if (null == l) throw new E.default({
    errorCode: _.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != r) throw new E.default({
    errorCode: _.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let A = [];
  "string" == typeof I ? A = I.split(" ").filter(e => e.length > 0) : Array.isArray(I) && (A = I);
  let N = c.default.getCurrentUser();
  if (null == N) throw new E.default({
    errorCode: _.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    a = await (0, u.fetchAuthorization)({
      clientId: l,
      scopes: A,
      responseType: i,
      redirectUri: r,
      codeChallenge: o,
      codeChallengeMethod: h,
      state: C
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new E.default({
      errorCode: _.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (T === d.OAuth2Prompts.NONE && null != a && a.authorized) try {
    let e = await (0, u.authorize)({
      authorize: !0,
      clientId: l,
      scopes: A,
      responseType: i,
      redirectUri: r,
      codeChallenge: o,
      codeChallengeMethod: h,
      state: C
    });
    return e.location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new E.default({
      errorCode: _.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(a.application, p);
  let R = f.default.NONE;
  try {
    R = s.default.deserialize(null != S ? S : 0)
  } catch (e) {}
  return t(l, a, A, R, i, r, o, h, C, m, p, T, g)
}

function S(e, t) {
  if (e.authorization.accessToken) throw new E.default({
    errorCode: _.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new E.default({
    errorCode: _.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, l.default.get({
    url: _.Endpoints.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: !0
  }).then(n => {
    e.authorization.authing = !1;
    let {
      application: a,
      user: s,
      scopes: l,
      expires: i
    } = n.body;
    if (e.application.id !== a.id) throw new E.default({
      errorCode: _.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = c.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new E.default({
      errorCode: _.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, h.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), o.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new E.default({
      errorCode: _.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function m(e, t) {
  return {
    [_.RPCCommands.AUTHENTICATE]: (0, i.createRPCCommand)(_.RPCCommands.AUTHENTICATE, {
      handler(n) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = n;
        if (null == l && s.transport === h.TransportTypes.IPC) {
          let n = s.application.id;
          if (null == n) throw new E.default({
            errorCode: _.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = _.OAuth2Scopes.IDENTIFY,
            o = () => I({
              client_id: n,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new E.default({
                errorCode: _.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = a.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new E.default({
                  errorCode: _.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, n, a) {
                var s;
                let l = null !== (s = r.default.get(C)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, r.default.set(C, l)
              }(n, l.access_token, l.scope, l.expires_in), S(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let n = r.default.get(C);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], r.default.set(C, n)
            }
          }(n, i)) ? S(s, l).catch(() => (! function(e) {
            var t;
            let n = null !== (t = r.default.get(C)) && void 0 !== t ? t : {};
            delete n[e], r.default.set(C, n)
          }(n), o())) : o()
        }
        if (null == l) throw new E.default({
          errorCode: _.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return S(s, l)
      }
    }),
    [_.RPCCommands.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: i
        } = n, r = i.client_id;
        if (!r) throw new E.default({
          errorCode: _.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new E.default({
          errorCode: _.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new E.default({
          errorCode: _.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, l.default.get({
          url: _.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(n => {
          let a = n.body;
          if (s.application.id !== a.id) throw new E.default({
            errorCode: _.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let l = i.scopes || i.scope;
          return delete i.scopes, I({
            ...i,
            scope: l
          }, e, t)
        }, () => {
          throw new E.default({
            errorCode: _.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new E.default({
            errorCode: _.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = a.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new E.default({
              errorCode: _.RPCErrors.OAUTH2_ERROR
            }, "OAuth2 Error: ".concat(t.error, ": ").concat(null !== (n = t.error_description) && void 0 !== n ? n : "unknown error"))
          }
          return {
            code: t.code
          }
        }).catch(e => {
          throw s.authorization.authing = !1, e
        })
      }
    }
  }
}