"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var n = a("664751"),
  s = a("373793"),
  l = a("149765"),
  i = a("544891"),
  r = a("45792"),
  o = a("433517"),
  u = a("570140"),
  d = a("979200"),
  c = a("489863"),
  f = a("166148"),
  E = a("594174"),
  h = a("700785"),
  _ = a("996106"),
  C = a("186901"),
  m = a("981631");
let S = "CachedTokens";
async function I(e, t, a) {
  let n, i, r, {
    client_id: o,
    response_type: u = "code",
    redirect_uri: C,
    code_challenge: S,
    code_challenge_method: I,
    state: p,
    nonce: T,
    scope: g,
    permissions: A,
    guild_id: N,
    channel_id: v,
    prompt: R,
    disable_guild_select: L,
    integration_type: O
  } = e;
  if (null == o) throw new _.default({
    errorCode: m.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != C) throw new _.default({
    errorCode: m.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let P = [];
  if ("string" == typeof g ? P = g.split(" ").filter(e => e.length > 0) : Array.isArray(g) && (P = g), null == E.default.getCurrentUser()) throw new _.default({
    errorCode: m.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    n = await (0, c.fetchAuthorization)({
      clientId: o,
      scopes: P,
      responseType: u,
      redirectUri: C,
      codeChallenge: S,
      codeChallengeMethod: I,
      state: p
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new _.default({
      errorCode: m.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: i,
      allAcked: r
    } = await (0, d.getDisclosures)(n.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new _.default({
      errorCode: m.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (R === f.OAuth2Prompts.NONE && null != n && n.authorized && r) try {
    return (await (0, c.authorize)({
      authorize: !0,
      clientId: o,
      scopes: P,
      responseType: u,
      redirectUri: C,
      codeChallenge: S,
      codeChallengeMethod: I,
      state: p,
      nonce: T,
      integrationType: null == O ? s.ApplicationIntegrationType.GUILD_INSTALL : Number(O)
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new _.default({
      errorCode: m.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == a || a(n.application, v);
  let M = h.NONE;
  try {
    M = l.deserialize(null != A ? A : 0)
  } catch (e) {}
  return t(o, n, P, M, u, C, S, I, p, N, v, R, L, i)
}

function p(e, t) {
  if (e.authorization.accessToken) throw new _.default({
    errorCode: m.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new _.default({
    errorCode: m.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: m.Endpoints.OAUTH2_CURRENT_AUTH,
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
    if (e.application.id !== n.id) throw new _.default({
      errorCode: m.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = E.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new _.default({
      errorCode: m.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, C.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...a.body,
      access_token: t
    }
  }, () => {
    throw new _.default({
      errorCode: m.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function T(e, t) {
  return {
    [m.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(m.RPCCommands.AUTHENTICATE, {
      handler(a) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = a;
        if (null == l && s.transport === C.TransportTypes.IPC) {
          let a = s.application.id;
          if (null == a) throw new _.default({
            errorCode: m.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = m.OAuth2Scopes.IDENTIFY,
            r = () => I({
              client_id: a,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new _.default({
                errorCode: m.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = n.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new _.default({
                  errorCode: m.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, a, n) {
                var s;
                let l = null !== (s = o.Storage.get(S)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: a,
                  expires: Date.now() + n
                }, o.Storage.set(S, l)
              }(a, l.access_token, l.scope, l.expires_in), p(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let a = o.Storage.get(S);
            if (null != a && null != a[e]) {
              let n = a[e];
              if (!(n.scope !== t || n.expires <= Date.now())) return n.accessToken;
              delete a[e], o.Storage.set(S, a)
            }
          }(a, i)) ? p(s, l).catch(() => (! function(e) {
            var t;
            let a = null !== (t = o.Storage.get(S)) && void 0 !== t ? t : {};
            delete a[e], o.Storage.set(S, a)
          }(a), r())) : r()
        }
        if (null == l) throw new _.default({
          errorCode: m.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return p(s, l)
      }
    }),
    [m.RPCCommands.AUTHORIZE]: {
      handler(a) {
        let {
          socket: s,
          args: l
        } = a, r = l.client_id;
        if (!r) throw new _.default({
          errorCode: m.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new _.default({
          errorCode: m.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new _.default({
          errorCode: m.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: m.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(a => {
          let n = a.body;
          if (s.application.id !== n.id) throw new _.default({
            errorCode: m.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, I({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new _.default({
            errorCode: m.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new _.default({
            errorCode: m.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = n.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var a;
            throw new _.default({
              errorCode: m.RPCErrors.OAUTH2_ERROR
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