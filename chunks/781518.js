n.d(t, {
    Ai: function () {
        return T;
    },
    PW: function () {
        return g;
    },
    Tu: function () {
        return N;
    },
    am: function () {
        return I;
    },
    hP: function () {
        return m;
    },
    hY: function () {
        return S;
    },
    k1: function () {
        return v;
    },
    rC: function () {
        return p;
    },
    wO: function () {
        return A;
    }
});
var r = n(177593);
var i = n(544891),
    a = n(846519),
    o = n(570140),
    s = n(70956),
    l = n(877481),
    u = n(358085),
    c = n(18323),
    d = n(616922),
    _ = n(981631);
let E = 5000,
    f = 5000;
function h(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e(
        (r = {
            ...r,
            headers: { authorization: 'Bearer '.concat(n) }
        })
    )
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let o = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || o) && i > 0
                ? (202 === n.status ? (0, a.GR)(E) : Promise.resolve())
                      .then(() => m(t))
                      .then((n) => {
                          let {
                              body: { access_token: a }
                          } = n;
                          return h(e, t, a, r, i - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let p = {
    get: h.bind(null, i.tn.get),
    put: h.bind(null, i.tn.put)
};
function m(e) {
    return i.tn
        .get({
            url: _.ANM.CONNECTION_ACCESS_TOKEN(_.ABu.SPOTIFY, e),
            oldFormErrors: !0
        })
        .catch((t) => {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === _.evJ.CONNECTION_REVOKED)
                o.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE',
                    accountId: e
                });
            else if (429 === t.status) {
                let n = t.headers['retry-after'] * s.Z.Millis.SECOND,
                    r = isNaN(n) || 0 === n ? f : n;
                return (0, a.GR)(r).then(() => m(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return (
                o.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN',
                    accountId: e,
                    accessToken: n
                }),
                t
            );
        });
}
function I(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
    return p
        .put(e, t, {
            url: d.C7.NOTIFICATIONS_PLAYER,
            query: { connection_id: n }
        })
        .catch((i) => (r <= 0 ? Promise.reject(i) : (0, a.GR)(E).then(() => I(e, t, n, r - 1))));
}
function T(e, t) {
    return p.get(e, t, { url: d.C7.PROFILE }).then(
        (t) => (
            o.Z.dispatch({
                type: 'SPOTIFY_PROFILE_UPDATE',
                accountId: e,
                isPremium: 'premium' === t.body.product
            }),
            t
        )
    );
}
function g(e, t) {
    return p.get(e, t, { url: d.C7.PLAYER_DEVICES }).then(
        (t) => (
            t.body &&
                o.Z.dispatch({
                    type: 'SPOTIFY_SET_DEVICES',
                    accountId: e,
                    devices: t.body.devices
                }),
            t
        )
    );
}
function S(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = d.C7.PLAYER_OPEN(r, n, !1),
        { deviceId: s, position: l, contextUri: u, repeat: c } = i;
    return p
        .put(e, t, {
            url: d.C7.PLAYER_PLAY,
            query: { device_id: s },
            body: {
                context_uri: null != u ? u : void 0,
                uris: null == u ? [a] : void 0,
                offset: null != u ? { uri: a } : void 0,
                position_ms: null != l ? l : 0
            }
        })
        .then((n) =>
            null == c
                ? n
                : p.put(e, t, {
                      url: d.C7.PLAYER_REPEAT,
                      query: {
                          device_id: s,
                          state: c ? 'context' : 'off'
                      }
                  })
        )
        .then(
            (e) => (
                o.Z.dispatch({
                    type: 'SPOTIFY_PLAYER_PLAY',
                    id: n,
                    position: null != l ? l : 0
                }),
                e
            )
        );
}
function A(e, t) {
    return p.put(e, t, { url: d.C7.PLAYER_PAUSE }).then((e) => (o.Z.dispatch({ type: 'SPOTIFY_PLAYER_PAUSE' }), e));
}
function v() {
    if (!c.Z.isProtocolRegistered())
        (0, u.isDesktop)() &&
            l.Z.isProtocolRegistered(d.M5).then((e) => {
                o.Z.dispatch({
                    type: 'SPOTIFY_SET_PROTOCOL_REGISTERED',
                    isRegistered: e
                });
            });
}
function N(e, t) {
    o.Z.dispatch({
        type: 'SPOTIFY_SET_ACTIVE_DEVICE',
        accountId: e,
        deviceId: t
    });
}
