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
  I = a("996106"),
  p = a("186901"),
  T = a("981631");
let g = "CachedTokens";
async function A(e, t, a) {
  var n, i;
  let r, o, u, p, {
    client_id: g,
    response_type: A = "code",
    redirect_uri: N,
    code_challenge: v,
    code_challenge_method: R,
    state: L,
    nonce: O,
    scope: P,
    permissions: M,
    guild_id: x,
    channel_id: y,
    prompt: D,
    disable_guild_select: b,
    integration_type: U
  } = e;
  if (null == g) throw new I.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != N) throw new I.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let j = [];
  if ("string" == typeof P ? j = P.split(" ").filter(e => e.length > 0) : Array.isArray(P) && (j = P), null == C.default.getCurrentUser()) throw new I.default({
    errorCode: T.RPCErrors.OAUTH2_ERROR
  }, "Client is not logged in");
  try {
    r = await (0, f.fetchAuthorization)({
      clientId: g,
      scopes: j,
      responseType: A,
      redirectUri: N,
      codeChallenge: v,
      codeChallengeMethod: R,
      state: L
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new I.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: o,
      allAcked: u
    } = await (0, c.getDisclosures)(r.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new I.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  let G = null !== (i = d.default.getApplication(g)) && void 0 !== i ? i : _.default.createFromServer(await (0, h.fetchApplication)(g)),
    w = null != G && (0, m.hasFlag)(G.flags, T.ApplicationFlags.EMBEDDED) && (null === (n = G.integrationTypesConfig) || void 0 === n ? void 0 : n[s.ApplicationIntegrationType.USER_INSTALL]) != null;
  if (p = null == U ? w ? s.ApplicationIntegrationType.USER_INSTALL : s.ApplicationIntegrationType.GUILD_INSTALL : Number(U), D === E.OAuth2Prompts.NONE && null != r && r.authorized && u) try {
    return (await (0, f.authorize)({
      authorize: !0,
      clientId: g,
      scopes: j,
      responseType: A,
      redirectUri: N,
      codeChallenge: v,
      codeChallengeMethod: R,
      state: L,
      nonce: O,
      integrationType: p
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new I.default({
      errorCode: T.RPCErrors.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == a || a(r.application, y);
  let k = S.NONE;
  try {
    k = l.deserialize(null != M ? M : 0)
  } catch (e) {}
  return t({
    clientId: g,
    authorization: r,
    scopes: j,
    parsedPermissions: k,
    responseType: A,
    redirectUri: N,
    codeChallenge: v,
    codeChallengeMethod: R,
    state: L,
    guildId: x,
    channelId: y,
    prompt: D,
    disableGuildSelect: b,
    disclosures: o,
    integrationType: p
  })
}

function N(e, t) {
  if (e.authorization.accessToken) throw new I.default({
    errorCode: T.RPCErrors.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new I.default({
    errorCode: T.RPCErrors.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, i.HTTP.get({
    url: T.Endpoints.OAUTH2_CURRENT_AUTH,
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
    if (e.application.id !== n.id) throw new I.default({
      errorCode: T.RPCErrors.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = C.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new I.default({
      errorCode: T.RPCErrors.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, p.RPC_AUTHENTICATED_SCOPE], e.authorization.accessToken = t, e.authorization.expires = new Date(i), u.default.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...a.body,
      access_token: t
    }
  }, () => {
    throw new I.default({
      errorCode: T.RPCErrors.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function v(e, t) {
  return {
    [T.RPCCommands.AUTHENTICATE]: (0, r.createRPCCommand)(T.RPCCommands.AUTHENTICATE, {
      handler(a) {
        let {
          socket: s,
          args: {
            access_token: l
          }
        } = a;
        if (null == l && s.transport === p.TransportTypes.IPC) {
          let a = s.application.id;
          if (null == a) throw new I.default({
            errorCode: T.RPCErrors.INVALID_COMMAND
          }, "No application.");
          let i = T.OAuth2Scopes.IDENTIFY,
            r = () => A({
              client_id: a,
              scope: i,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new I.default({
                errorCode: T.RPCErrors.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = n.parse(t[t.length - 1]);
              if (null != l.error) {
                var i;
                throw new I.default({
                  errorCode: T.RPCErrors.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (i = l.error_description) && void 0 !== i ? i : "unknown error"))
              }
              return ! function(e, t, a, n) {
                var s;
                let l = null !== (s = o.Storage.get(g)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: a,
                  expires: Date.now() + n
                }, o.Storage.set(g, l)
              }(a, l.access_token, l.scope, l.expires_in), N(s, l.access_token)
            });
          return null != (l = function(e, t) {
            let a = o.Storage.get(g);
            if (null != a && null != a[e]) {
              let n = a[e];
              if (!(n.scope !== t || n.expires <= Date.now())) return n.accessToken;
              delete a[e], o.Storage.set(g, a)
            }
          }(a, i)) ? N(s, l).catch(() => (! function(e) {
            var t;
            let a = null !== (t = o.Storage.get(g)) && void 0 !== t ? t : {};
            delete a[e], o.Storage.set(g, a)
          }(a), r())) : r()
        }
        if (null == l) throw new I.default({
          errorCode: T.RPCErrors.INVALID_TOKEN
        }, "No access token provided");
        return N(s, l)
      }
    }),
    [T.RPCCommands.AUTHORIZE]: {
      handler(a) {
        let {
          socket: s,
          args: l
        } = a, r = l.client_id;
        if (!r) throw new I.default({
          errorCode: T.RPCErrors.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new I.default({
          errorCode: T.RPCErrors.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new I.default({
          errorCode: T.RPCErrors.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, i.HTTP.get({
          url: T.Endpoints.APPLICATION_RPC(r),
          oldFormErrors: !0
        }).then(a => {
          let n = a.body;
          if (s.application.id !== n.id) throw new I.default({
            errorCode: T.RPCErrors.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let i = l.scopes || l.scope;
          return delete l.scopes, A({
            ...l,
            scope: i
          }, e, t)
        }, () => {
          throw new I.default({
            errorCode: T.RPCErrors.INVALID_CLIENTID
          }, "Invalid client id: ".concat(r))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new I.default({
            errorCode: T.RPCErrors.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = n.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var a;
            throw new I.default({
              errorCode: T.RPCErrors.OAUTH2_ERROR
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