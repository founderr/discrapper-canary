n.d(t, {
  Z: function() {
    return Z
  }
}), n(789020), n(47120);
var s = n(664751),
  i = n(373793),
  l = n(243814),
  a = n(149765),
  r = n(544891),
  o = n(45792),
  c = n(433517),
  u = n(570140),
  d = n(979200),
  E = n(489863),
  h = n(166148),
  _ = n(307643),
  I = n(973616),
  m = n(594174),
  T = n(630388),
  g = n(700785),
  p = n(996106),
  N = n(186901),
  S = n(981631);
let C = "CachedTokens";
async function A(e, t, n) {
  var s;
  let l;
  let r, o, c, u, {
    client_id: N,
    response_type: C = "code",
    redirect_uri: A,
    code_challenge: f,
    code_challenge_method: Z,
    state: L,
    nonce: O,
    scope: v,
    permissions: R,
    guild_id: P,
    channel_id: x,
    prompt: M,
    disable_guild_select: D,
    integration_type: b
  } = e;
  if (null == N) throw new p.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != A) throw new p.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let y = [];
  if ("string" == typeof v ? y = v.split(" ").filter(e => e.length > 0) : Array.isArray(v) && (y = v), null == m.default.getCurrentUser()) throw new p.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "Client is not logged in");
  let j = I.Z.createFromServer(await (0, _.UM)(N)),
    U = null != j && (0, T.yE)(j.flags, S.udG.EMBEDDED) && (null === (s = j.integrationTypesConfig) || void 0 === s ? void 0 : s[i.Y.USER_INSTALL]) != null;
  r = null == b ? U ? i.Y.USER_INSTALL : i.Y.GUILD_INSTALL : Number(b);
  try {
    o = await (0, E.Ww)({
      clientId: N,
      scopes: y,
      responseType: C,
      redirectUri: A,
      codeChallenge: f,
      codeChallengeMethod: Z,
      state: L,
      integrationType: r
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.Z({
      errorCode: S.lTL.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  try {
    ({
      disclosures: c,
      allAcked: u
    } = await (0, d.de)(o.application.id))
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.Z({
      errorCode: S.lTL.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (M === h.s.NONE && null != o && o.authorized && u) try {
    return (await (0, E.Iq)({
      authorize: !0,
      clientId: N,
      scopes: y,
      responseType: C,
      redirectUri: A,
      codeChallenge: f,
      codeChallengeMethod: Z,
      state: L,
      nonce: O,
      integrationType: r
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new p.Z({
      errorCode: S.lTL.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(o.application, x);
  let G = g.Hn;
  try {
    G = a.vB(null != R ? R : 0)
  } catch (e) {}
  return null != o.integration_type && Object.values(i.Y).includes(o.integration_type) && (l = new Map).set(o.integration_type, o), t({
    clientId: N,
    authorizations: l,
    scopes: y,
    parsedPermissions: G,
    responseType: C,
    redirectUri: A,
    codeChallenge: f,
    codeChallengeMethod: Z,
    state: L,
    guildId: P,
    channelId: x,
    prompt: M,
    disableGuildSelect: D,
    disclosures: c,
    integrationType: r
  })
}

function f(e, t) {
  if (e.authorization.accessToken) throw new p.Z({
    errorCode: S.lTL.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new p.Z({
    errorCode: S.lTL.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = !0, r.tn.get({
    url: S.ANM.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: !0
  }).then(n => {
    e.authorization.authing = !1;
    let {
      application: s,
      user: i,
      scopes: l,
      expires: a
    } = n.body;
    if (e.application.id !== s.id) throw new p.Z({
      errorCode: S.lTL.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = m.default.getCurrentUser();
    if (null == r || !i || r.id !== i.id) throw new p.Z({
      errorCode: S.lTL.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, N.wE], e.authorization.accessToken = t, e.authorization.expires = new Date(a), u.Z.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), {
      ...n.body,
      access_token: t
    }
  }, () => {
    throw new p.Z({
      errorCode: S.lTL.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = !1, t
  })
}

function Z(e, t) {
  return {
    [S.Etm.AUTHENTICATE]: (0, o.S)(S.Etm.AUTHENTICATE, {
      handler(n) {
        let {
          socket: i,
          args: {
            access_token: a
          }
        } = n;
        if (null == a && i.transport === N.He.IPC) {
          let n = i.application.id;
          if (null == n) throw new p.Z({
            errorCode: S.lTL.INVALID_COMMAND
          }, "No application.");
          let r = l.x.IDENTIFY,
            o = () => A({
              client_id: n,
              scope: r,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new p.Z({
                errorCode: S.lTL.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = s.parse(t[t.length - 1]);
              if (null != l.error) {
                var a;
                throw new p.Z({
                  errorCode: S.lTL.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (a = l.error_description) && void 0 !== a ? a : "unknown error"))
              }
              return ! function(e, t, n, s) {
                var i;
                let l = null !== (i = c.K.get(C)) && void 0 !== i ? i : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + s
                }, c.K.set(C, l)
              }(n, l.access_token, l.scope, l.expires_in), f(i, l.access_token)
            });
          return null != (a = function(e, t) {
            let n = c.K.get(C);
            if (null != n && null != n[e]) {
              let s = n[e];
              if (!(s.scope !== t || s.expires <= Date.now())) return s.accessToken;
              delete n[e], c.K.set(C, n)
            }
          }(n, r)) ? f(i, a).catch(() => (! function(e) {
            var t;
            let n = null !== (t = c.K.get(C)) && void 0 !== t ? t : {};
            delete n[e], c.K.set(C, n)
          }(n), o())) : o()
        }
        if (null == a) throw new p.Z({
          errorCode: S.lTL.INVALID_TOKEN
        }, "No access token provided");
        return f(i, a)
      }
    }),
    [S.Etm.AUTHORIZE]: {
      handler(n) {
        let {
          socket: i,
          args: l
        } = n, a = l.client_id;
        if (!a) throw new p.Z({
          errorCode: S.lTL.INVALID_CLIENTID
        }, "No client id provided");
        if (null != i.authorization.accessToken) throw new p.Z({
          errorCode: S.lTL.INVALID_COMMAND
        }, "Already authenticated");
        if (i.authorization.authing) throw new p.Z({
          errorCode: S.lTL.INVALID_COMMAND
        }, "Already authing");
        return i.authorization.authing = !0, r.tn.get({
          url: S.ANM.APPLICATION_RPC(a),
          oldFormErrors: !0
        }).then(n => {
          let s = n.body;
          if (i.application.id !== s.id) throw new p.Z({
            errorCode: S.lTL.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let a = l.scopes || l.scope;
          return delete l.scopes, A({
            ...l,
            scope: a
          }, e, t)
        }, () => {
          throw new p.Z({
            errorCode: S.lTL.INVALID_CLIENTID
          }, "Invalid client id: ".concat(a))
        }).then(e => {
          if (i.authorization.authing = !1, null == e) throw new p.Z({
            errorCode: S.lTL.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = s.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new p.Z({
              errorCode: S.lTL.OAUTH2_ERROR
            }, "OAuth2 Error: ".concat(t.error, ": ").concat(null !== (n = t.error_description) && void 0 !== n ? n : "unknown error"))
          }
          return {
            code: t.code
          }
        }).catch(e => {
          throw i.authorization.authing = !1, e
        })
      }
    }
  }
}