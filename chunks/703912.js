n.d(t, {
  Z: function() {
    return Z
  }
}), n(789020), n(47120);
var i = n(664751),
  s = n(373793),
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
  g = n(630388),
  p = n(700785),
  T = n(996106),
  N = n(186901),
  S = n(981631);
let C = "CachedTokens";
async function A(e, t, n) {
  var i;
  let l;
  let r, o, c, u, {
    client_id: N,
    response_type: C = "code",
    redirect_uri: A,
    code_challenge: f,
    code_challenge_method: Z,
    state: v,
    nonce: L,
    scope: O,
    permissions: R,
    guild_id: x,
    channel_id: M,
    prompt: P,
    disable_guild_select: D,
    integration_type: b
  } = e;
  if (null == N) throw new T.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "No Client ID provided");
  if (null != A) throw new T.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let y = [];
  if ("string" == typeof O ? y = O.split(" ").filter(e => e.length > 0) : Array.isArray(O) && (y = O), null == m.default.getCurrentUser()) throw new T.Z({
    errorCode: S.lTL.OAUTH2_ERROR
  }, "Client is not logged in");
  let j = I.Z.createFromServer(await (0, _.UM)(N)),
    U = null != j && (0, g.yE)(j.flags, S.udG.EMBEDDED) && (null === (i = j.integrationTypesConfig) || void 0 === i ? void 0 : i[s.Y.USER_INSTALL]) != null;
  r = null == b ? U ? s.Y.USER_INSTALL : s.Y.GUILD_INSTALL : Number(b);
  try {
    o = await (0, E.Ww)({
      clientId: N,
      scopes: y,
      responseType: C,
      redirectUri: A,
      codeChallenge: f,
      codeChallengeMethod: Z,
      state: v,
      integrationType: r
    })
  } catch (t) {
    let {
      body: e
    } = t;
    throw new T.Z({
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
    throw new T.Z({
      errorCode: S.lTL.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat(e.message || "Unknown Error"))
  }
  if (P === h.s.NONE && null != o && o.authorized && u) try {
    return (await (0, E.Iq)({
      authorize: !0,
      clientId: N,
      scopes: y,
      responseType: C,
      redirectUri: A,
      codeChallenge: f,
      codeChallengeMethod: Z,
      state: v,
      nonce: L,
      integrationType: r
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new T.Z({
      errorCode: S.lTL.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat(e.message || "Unknown Error"))
  }
  null == n || n(o.application, M);
  let G = p.Hn;
  try {
    G = a.vB(null != R ? R : 0)
  } catch (e) {}
  return null != o.integration_type && Object.values(s.Y).includes(o.integration_type) && (l = new Map).set(o.integration_type, o), t({
    clientId: N,
    authorizations: l,
    scopes: y,
    parsedPermissions: G,
    responseType: C,
    redirectUri: A,
    codeChallenge: f,
    codeChallengeMethod: Z,
    state: v,
    guildId: x,
    channelId: M,
    prompt: P,
    disableGuildSelect: D,
    disclosures: c,
    integrationType: r
  })
}

function f(e, t) {
  if (e.authorization.accessToken) throw new T.Z({
    errorCode: S.lTL.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new T.Z({
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
      application: i,
      user: s,
      scopes: l,
      expires: a
    } = n.body;
    if (e.application.id !== i.id) throw new T.Z({
      errorCode: S.lTL.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let r = m.default.getCurrentUser();
    if (null == r || !s || r.id !== s.id) throw new T.Z({
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
    throw new T.Z({
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
          socket: s,
          args: {
            access_token: a
          }
        } = n;
        if (null == a && s.transport === N.He.IPC) {
          let n = s.application.id;
          if (null == n) throw new T.Z({
            errorCode: S.lTL.INVALID_COMMAND
          }, "No application.");
          let r = l.x.IDENTIFY,
            o = () => A({
              client_id: n,
              scope: r,
              response_type: "token"
            }, e, t).then(e => {
              if (null == e) throw new T.Z({
                errorCode: S.lTL.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let t = e.split(/#|\?/),
                l = i.parse(t[t.length - 1]);
              if (null != l.error) {
                var a;
                throw new T.Z({
                  errorCode: S.lTL.OAUTH2_ERROR
                }, "OAuth2 Error: ".concat(l.error, ": ").concat(null !== (a = l.error_description) && void 0 !== a ? a : "unknown error"))
              }
              return ! function(e, t, n, i) {
                var s;
                let l = null !== (s = c.K.get(C)) && void 0 !== s ? s : {};
                l[e] = {
                  accessToken: t,
                  scope: n,
                  expires: Date.now() + i
                }, c.K.set(C, l)
              }(n, l.access_token, l.scope, l.expires_in), f(s, l.access_token)
            });
          return null != (a = function(e, t) {
            let n = c.K.get(C);
            if (null != n && null != n[e]) {
              let i = n[e];
              if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
              delete n[e], c.K.set(C, n)
            }
          }(n, r)) ? f(s, a).catch(() => (! function(e) {
            var t;
            let n = null !== (t = c.K.get(C)) && void 0 !== t ? t : {};
            delete n[e], c.K.set(C, n)
          }(n), o())) : o()
        }
        if (null == a) throw new T.Z({
          errorCode: S.lTL.INVALID_TOKEN
        }, "No access token provided");
        return f(s, a)
      }
    }),
    [S.Etm.AUTHORIZE]: {
      handler(n) {
        let {
          socket: s,
          args: l
        } = n, a = l.client_id;
        if (!a) throw new T.Z({
          errorCode: S.lTL.INVALID_CLIENTID
        }, "No client id provided");
        if (null != s.authorization.accessToken) throw new T.Z({
          errorCode: S.lTL.INVALID_COMMAND
        }, "Already authenticated");
        if (s.authorization.authing) throw new T.Z({
          errorCode: S.lTL.INVALID_COMMAND
        }, "Already authing");
        return s.authorization.authing = !0, r.tn.get({
          url: S.ANM.APPLICATION_RPC(a),
          oldFormErrors: !0
        }).then(n => {
          let i = n.body;
          if (s.application.id !== i.id) throw new T.Z({
            errorCode: S.lTL.INVALID_CLIENTID
          }, "Application does not match the connection's");
          let a = l.scopes || l.scope;
          return delete l.scopes, A({
            ...l,
            scope: a
          }, e, t)
        }, () => {
          throw new T.Z({
            errorCode: S.lTL.INVALID_CLIENTID
          }, "Invalid client id: ".concat(a))
        }).then(e => {
          if (s.authorization.authing = !1, null == e) throw new T.Z({
            errorCode: S.lTL.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = i.parse(e.split("?")[1].split("#")[0]);
          if (null != t.error) {
            var n;
            throw new T.Z({
              errorCode: S.lTL.OAUTH2_ERROR
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