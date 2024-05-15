"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("789020"), n("47120");
var a = n("664751"),
  s = n("373793"),
  l = n("149765"),
  i = n("544891"),
  r = n("45792"),
  o = n("433517"),
  u = n("570140"),
  d = n("812206"),
  c = n("979200"),
  f = n("489863"),
  E = n("166148"),
  h = n("307643"),
  _ = n("973616"),
  C = n("594174"),
  m = n("630388"),
  p = n("700785"),
  S = n("996106"),
  g = n("186901"),
  I = n("981631");
let T = "CachedTokens";
async function A(e, t, n) {
  var a, i;
  let r;
  let o, u, g, T, {
    client_id: A,
    response_type: N = "code",
    redirect_uri: v,
    code_challenge: R,
    code_challenge_method: O,
    state: L,
    nonce: y,
    scope: M,
    permissions: P,
    guild_id: x,
    channel_id: D,
    prompt: b,
    disable_guild_select: U,
    integration_type: j
  } = e;
  if (null == A) throw new S.default({
    errorCode: I.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != v) throw new S.default({
    errorCode: I.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let G = [];
  if ("string" == typeof M ? G = M.split(" ").filter(e => e.length > 0) : Array.isArray(M) && (G = M), null == C.default.getCurrentUser()) throw new S.default({
    errorCode: I.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  let k = null !== (i = d.default.getApplication(A)) && void 0 !== i ? i : _.default.createFromServer(await (0, h.fetchApplication)(A)),
    w = null != k && (0, m.hasFlag)(k.flags, I.ApplicationFlags.EMBEDDED) && (null === (a = k.integrationTypesConfig) || void 0 === a ? void 0 : a[s.ApplicationIntegrationType.USER_INSTALL]) != null;
  o = null == j ? w ? s.ApplicationIntegrationType.USER_INSTALL : s.ApplicationIntegrationType.GUILD_INSTALL : Number(j);
  try {
    u = await (0, f.fetchAuthorization)({
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: R,
      codeChallengeMethod: O,
      state: L,
      integrationType: o
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new S.default({
      errorCode: I.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: g,
      allAcked: T
    } = await (0, c.getDisclosures)(u.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new S.default({
      errorCode: I.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (b === E.OAuth2Prompts.NONE && null != u && u.authorized && T) try {
    return (await (0, f.authorize)({
      authorize: !0,
      clientId: A,
      scopes: G,
      responseType: N,
      redirectUri: v,
      codeChallenge: R,
      codeChallengeMethod: O,
      state: L,
      nonce: y,
      integrationType: o
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new S.default({
      errorCode: I.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(u.application, D);
  let B = p.NONE;
  try {
    B = l.deserialize(null != P ? P : 0)
  } catch (e) {}
  return null != u.integration_type && Object.values(s.ApplicationIntegrationType).includes(u.integration_type) && (r = new Map).set(u.integration_type, u), t({
    clientId: A,
    authorizations: r,
    scopes: G,
    parsedPermissions: B,
    responseType: N,
    redirectUri: v,
    codeChallenge: R,
    codeChallengeMethod: O,
    state: L,
    guildId: x,
    channelId: D,
    prompt: b,
    disableGuildSelect: U,
    disclosures: g,
    integrationType: o
  })
}

function N(e, t) {
  if (e.authorization.accessToken) throw new S.default({
    errorCode: I.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new S.default({
    errorCode: I.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: I.Endpoints.OAUTH2_CURRENT_AUTH,
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
    if (e.application.id !== a.id) throw new S.default({
      errorCode: I.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = C.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new S.default({
      errorCode: I.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, g.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new S.default({
      errorCode: I.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function v(e, t) {
  return {
    [I.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(I.RPCCommands.AUTHENTICATE, {
      handler(n) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = n;
        if (null == l && s.transport === g.TransportTypes.IPC) {
          let n = s.application.id;
          if (null == n) throw new S.default({
            errorCode: I.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = I.OAuth2Scopes.IDENTIFY,
            r = () => A({
              client_id: n,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new S.default({
                errorCode: I.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = a.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new S.default({
                  errorCode: I.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, n, a) {
                var s;
                let l = null !== (s = o.Storage.get(T)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + a
                }, o.Storage.set(T, l)
              }(n, l.access_token, l.scope, l.expires_in), N(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let n = o.Storage.get(T);
            if (null != n && null != n[e]) {
              let a = n[e];
              if (!(a.scope !== t || a.expires <= Date.now())) return a.accessToken;
              delete n[e], o.Storage.set(T, n)
            }
          }(n, i)) ? N(s, l).catch(() => (! function(e) {
            var t;
            let n = null !== (t = o.Storage.get(T)) && void 0 !== t ? t : {};
            delete n[e], o.Storage.set(T, n)
          }(n), r())) : r()
        }
        if (null == l) throw new S.default({
          errorCode: I.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return N(s, l)
      }
    }),
    [I.RPCCommands.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: l
        } = n, r = l.client_id;
        if (!r) throw new S.default({
          errorCode: I.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new S.default({
          errorCode: I.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new S.default({
          errorCode: I.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: I.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(n => {
          let a = n.body;
          if (s.application.id !== a.id) throw new S.default({
            errorCode: I.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, A({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new S.default({
            errorCode: I.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new S.default({
            errorCode: I.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = a.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new S.default({
              errorCode: I.RPCErrors.OAUTH2_ERROR
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