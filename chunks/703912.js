"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("789020"), a("47120");
var n = a("664751"),
  s = a("373793"),
  l = a("149765"),
  i = a("544891"),
  r = a("45792"),
  o = a("433517"),
  u = a("570140"),
  d = a("812206"),
  c = a("979200"),
  f = a("489863"),
  E = a("166148"),
  h = a("307643"),
  _ = a("973616"),
  C = a("594174"),
  m = a("630388"),
  S = a("700785"),
  p = a("996106"),
  I = a("186901"),
  g = a("981631");
let T = "CachedTokens";
async function A(e, t, a) {
  var n, i;
  let r;
  let o, u, I, T, {
    client_id: A,
    response_type: N = "code",
    redirect_uri: v,
    code_challenge: L,
    code_challenge_method: R,
    state: O,
    nonce: M,
    scope: P,
    permissions: x,
    guild_id: y,
    channel_id: D,
    prompt: b,
    disable_guild_select: U,
    integration_type: j
  } = e;
  if (null == A) throw new p.default({
    errorCode: g.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != v) throw new p.default({
    errorCode: g.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let G = [];
  if ("string" == typeof P ? G = P.split(" ").filter(e => e.length > 0) : Array.isArray(P) && (G = P), null == C.default.getCurrentUser()) throw new p.default({
    errorCode: g.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  let w = null !== (i = d.default.getApplication(A)) && void 0 !== i ? i : _.default.createFromServer(await (0, h.fetchApplication)(A)),
    k = null != w && (0, m.hasFlag)(w.flags, g.ApplicationFlags.EMBEDDED) && (null === (n = w.integrationTypesConfig) || void 0 === n ? void 0 : n[s.ApplicationIntegrationType.USER_INSTALL]) != null;
  o = null == j ? k ? s.ApplicationIntegrationType.USER_INSTALL : s.ApplicationIntegrationType.GUILD_INSTALL : Number(j);
  try {
    u = await (0, f.fetchAuthorization)({
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: L,
      codeChallengeMethod: R,
      state: O,
      integrationType: o
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.default({
      errorCode: g.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: I,
      allAcked: T
    } = await (0, c.getDisclosures)(u.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.default({
      errorCode: g.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (b === E.OAuth2Prompts.NONE && null != u && u.authorized && T) try {
    return (await (0, f.authorize)({
      authorize: !0,
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: L,
      codeChallengeMethod: R,
      state: O,
      nonce: M,
      integrationType: o
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.default({
      errorCode: g.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == a || a(u.application, D);
  let B = S.NONE;
  try {
    B = l.deserialize(null != x ? x : 0)
  } catch (e) {}
  return null != u.integration_type && Object.values(s.ApplicationIntegrationType).includes(u.integration_type) && (r = new Map).set(u.integration_type, u), t({
    clientId: A,
    authorizations: r,
    scopes: G,
    parsedPermissions: B,
    responseType: N,
    redirectUri: v,
    codeChallenge: L,
    codeChallengeMethod: R,
    state: O,
    guildId: y,
    channelId: D,
    prompt: b,
    disableGuildSelect: U,
    disclosures: I,
    integrationType: o
  })
}

function N(e, t) {
  if (e.authorization.accessToken) throw new p.default({
    errorCode: g.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new p.default({
    errorCode: g.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: g.Endpoints.OAUTH2_CURRENT_AUTH,
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
    if (e.application.id !== n.id) throw new p.default({
      errorCode: g.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = C.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new p.default({
      errorCode: g.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, I.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...a.body,
      access_token: t
    }
  }, () => {
    throw new p.default({
      errorCode: g.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function v(e, t) {
  return {
    [g.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(g.RPCCommands.AUTHENTICATE, {
      handler(a) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = a;
        if (null == l && s.transport === I.TransportTypes.IPC) {
          let a = s.application.id;
          if (null == a) throw new p.default({
            errorCode: g.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = g.OAuth2Scopes.IDENTIFY,
            r = () => A({
              client_id: a,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new p.default({
                errorCode: g.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = n.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new p.default({
                  errorCode: g.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, a, n) {
                var s;
                let l = null !== (s = o.Storage.get(T)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: a,
                  expires: Date.now() + n
                }, o.Storage.set(T, l)
              }(a, l.access_token, l.scope, l.expires_in), N(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let a = o.Storage.get(T);
            if (null != a && null != a[e]) {
              let n = a[e];
              if (!(n.scope !== t || n.expires <= Date.now())) return n.accessToken;
              delete a[e], o.Storage.set(T, a)
            }
          }(a, i)) ? N(s, l).catch(() => (! function(e) {
            var t;
            let a = null !== (t = o.Storage.get(T)) && void 0 !== t ? t : {};
            delete a[e], o.Storage.set(T, a)
          }(a), r())) : r()
        }
        if (null == l) throw new p.default({
          errorCode: g.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return N(s, l)
      }
    }),
    [g.RPCCommands.AUTHORIZE]: {
      handler(a) {
        let {
          socket: s,
          args: l
        } = a, r = l.client_id;
        if (!r) throw new p.default({
          errorCode: g.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new p.default({
          errorCode: g.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new p.default({
          errorCode: g.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: g.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(a => {
          let n = a.body;
          if (s.application.id !== n.id) throw new p.default({
            errorCode: g.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, A({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new p.default({
            errorCode: g.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new p.default({
            errorCode: g.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = n.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var a;
            throw new p.default({
              errorCode: g.RPCErrors.OAUTH2_ERROR
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