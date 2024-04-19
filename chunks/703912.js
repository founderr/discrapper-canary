"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
}), a("47120");
var n = a("664751"),
  s = a("373793"),
  l = a("149765"),
  i = a("544891"),
  r = a("45792"),
  o = a("433517"),
  u = a("570140"),
  d = a("489863"),
  c = a("166148"),
  f = a("594174"),
  E = a("700785"),
  h = a("996106"),
  _ = a("186901"),
  C = a("981631");
let m = "CachedTokens";
async function S(e, t, a) {
  let n, {
    client_id: i,
    response_type: r = "code",
    redirect_uri: o,
    code_challenge: u,
    code_challenge_method: _,
    state: m,
    nonce: S,
    scope: I,
    permissions: p,
    guild_id: T,
    channel_id: g,
    prompt: A,
    disable_guild_select: N,
    integration_type: v
  } = e;
  if (null == i) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != o) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let R = [];
  if ("string" == typeof I ? R = I.split(" ").filter(e => e.length > 0) : Array.isArray(I) && (R = I), null == f.default.getCurrentUser()) throw new h.default({
    errorCode: C.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    n = await (0, d.fetchAuthorization)({
      clientId: i,
      scopes: R,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: m
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new h.default({
      errorCode: C.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (A === c.OAuth2Prompts.NONE && null != n && n.authorized) try {
    return (await (0, d.authorize)({
      authorize: !0,
      clientId: i,
      scopes: R,
      responseType: r,
      redirectUri: o,
      codeChallenge: u,
      codeChallengeMethod: _,
      state: m,
      nonce: S,
      integrationType: null == v ? s.ApplicationIntegrationType.GUILD_INSTALL : Number(v)
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new h.default({
      errorCode: C.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == a || a(n.application, g);
  let O = E.NONE;
  try {
    O = l.deserialize(null != p ? p : 0)
  } catch (e) {}
  return t(i, n, R, O, r, o, u, _, m, T, g, A, N)
}

function I(e, t) {
  if (e.authorization.accessToken) throw new h.default({
    errorCode: C.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new h.default({
    errorCode: C.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: C.Endpoints.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: !0
  }).then(a => {
    e.authorization.authing = !1;
    let {
      application: n,
      user: s,
      scopes: l,
      expires: i
    } = a.body;
    if (e.application.id !== n.id) throw new h.default({
      errorCode: C.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = f.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new h.default({
      errorCode: C.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, _.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...a.body,
      access_token: t
    }
  }, () => {
    throw new h.default({
      errorCode: C.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function p(e, t) {
  return {
    [C.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(C.RPCCommands.AUTHENTICATE, {
      handler(a) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = a;
        if (null == l && s.transport === _.TransportTypes.IPC) {
          let a = s.application.id;
          if (null == a) throw new h.default({
            errorCode: C.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = C.OAuth2Scopes.IDENTIFY,
            r = () => S({
              client_id: a,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new h.default({
                errorCode: C.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = n.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new h.default({
                  errorCode: C.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, a, n) {
                var s;
                let l = null !== (s = o.Storage.get(m)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: a,
                  expires: Date.now() + n
                }, o.Storage.set(m, l)
              }(a, l.access_token, l.scope, l.expires_in), I(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let a = o.Storage.get(m);
            if (null != a && null != a[e]) {
              let n = a[e];
              if (!(n.scope !== t || n.expires <= Date.now())) return n.accessToken;
              delete a[e], o.Storage.set(m, a)
            }
          }(a, i)) ? I(s, l).catch(() => (! function(e) {
            var t;
            let a = null !== (t = o.Storage.get(m)) && void 0 !== t ? t : {};
            delete a[e], o.Storage.set(m, a)
          }(a), r())) : r()
        }
        if (null == l) throw new h.default({
          errorCode: C.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return I(s, l)
      }
    }),
    [C.RPCCommands.AUTHORIZE]: {
      handler(a) {
        let {
          socket: s,
          args: l
        } = a, r = l.client_id;
        if (!r) throw new h.default({
          errorCode: C.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new h.default({
          errorCode: C.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new h.default({
          errorCode: C.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: C.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(a => {
          let n = a.body;
          if (s.application.id !== n.id) throw new h.default({
            errorCode: C.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, S({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new h.default({
            errorCode: C.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new h.default({
            errorCode: C.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = n.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var a;
            throw new h.default({
              errorCode: C.RPCErrors.OAUTH2_ERROR
            }, "OAuth2 Error: ".concat(t.error, ": ").concat(null !== (a = t.error_description) && void 0 !== a ? a : "unknown error"))
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