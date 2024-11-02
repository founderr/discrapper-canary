n.d(t, {
    Ai: function () {
        return p;
    },
    PW: function () {
        return m;
    },
    Tu: function () {
        return I;
    },
    am: function () {
        return function e(t, n, r) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
            return _.put(t, n, {
                url: c.C7.NOTIFICATIONS_PLAYER,
                query: { connection_id: r }
            }).catch((s) => (a <= 0 ? Promise.reject(s) : (0, i.GR)(5000).then(() => e(t, n, r, a - 1))));
        };
    },
    hP: function () {
        return h;
    },
    hY: function () {
        return g;
    },
    k1: function () {
        return v;
    },
    rC: function () {
        return _;
    },
    wO: function () {
        return E;
    }
}),
    n(177593);
var r = n(544891),
    i = n(846519),
    a = n(570140),
    s = n(70956),
    o = n(877481),
    l = n(358085),
    u = n(18323),
    c = n(616922),
    d = n(981631);
function f(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    return e(
        (r = {
            ...r,
            headers: { authorization: 'Bearer '.concat(n) }
        })
    )
        .then((e) => (202 === e.status ? Promise.reject(e) : e))
        .catch((n) => {
            let s = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || s) && a > 0
                ? (202 === n.status ? (0, i.GR)(5000) : Promise.resolve())
                      .then(() => h(t))
                      .then((n) => {
                          let {
                              body: { access_token: i }
                          } = n;
                          return f(e, t, i, r, a - 1);
                      })
                      .then((e) => new Promise((t) => setImmediate(() => t(e))))
                : Promise.reject(n);
        });
}
let _ = {
    get: f.bind(null, r.tn.get),
    put: f.bind(null, r.tn.put)
};
function h(e) {
    return r.tn
        .get({
            url: d.ANM.CONNECTION_ACCESS_TOKEN(d.ABu.SPOTIFY, e),
            oldFormErrors: !0
        })
        .catch((t) => {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === d.evJ.CONNECTION_REVOKED)
                a.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE',
                    accountId: e
                });
            else if (429 === t.status) {
                let n = t.headers['retry-after'] * s.Z.Millis.SECOND,
                    r = isNaN(n) || 0 === n ? 5000 : n;
                return (0, i.GR)(r).then(() => h(e));
            }
            return Promise.reject(t);
        })
        .then((t) => {
            let { access_token: n } = t.body;
            return (
                a.Z.dispatch({
                    type: 'SPOTIFY_ACCOUNT_ACCESS_TOKEN',
                    accountId: e,
                    accessToken: n
                }),
                t
            );
        });
}
function p(e, t) {
    return _.get(e, t, { url: c.C7.PROFILE }).then(
        (t) => (
            a.Z.dispatch({
                type: 'SPOTIFY_PROFILE_UPDATE',
                accountId: e,
                isPremium: 'premium' === t.body.product
            }),
            t
        )
    );
}
function m(e, t) {
    return _.get(e, t, { url: c.C7.PLAYER_DEVICES }).then(
        (t) => (
            t.body &&
                a.Z.dispatch({
                    type: 'SPOTIFY_SET_DEVICES',
                    accountId: e,
                    devices: t.body.devices
                }),
            t
        )
    );
}
function g(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        s = c.C7.PLAYER_OPEN(r, n, !1),
        { deviceId: o, position: l, contextUri: u, repeat: d } = i;
    return _.put(e, t, {
        url: c.C7.PLAYER_PLAY,
        query: { device_id: o },
        body: {
            context_uri: null != u ? u : void 0,
            uris: null == u ? [s] : void 0,
            offset: null != u ? { uri: s } : void 0,
            position_ms: null != l ? l : 0
        }
    })
        .then((n) =>
            null == d
                ? n
                : _.put(e, t, {
                      url: c.C7.PLAYER_REPEAT,
                      query: {
                          device_id: o,
                          state: d ? 'context' : 'off'
                      }
                  })
        )
        .then(
            (e) => (
                a.Z.dispatch({
                    type: 'SPOTIFY_PLAYER_PLAY',
                    id: n,
                    position: null != l ? l : 0
                }),
                e
            )
        );
}
function E(e, t) {
    return _.put(e, t, { url: c.C7.PLAYER_PAUSE }).then((e) => (a.Z.dispatch({ type: 'SPOTIFY_PLAYER_PAUSE' }), e));
}
function v() {
    if (!u.Z.isProtocolRegistered())
        (0, l.isDesktop)() &&
            o.Z.isProtocolRegistered(c.M5).then((e) => {
                a.Z.dispatch({
                    type: 'SPOTIFY_SET_PROTOCOL_REGISTERED',
                    isRegistered: e
                });
            });
}
function I(e, t) {
    a.Z.dispatch({
        type: 'SPOTIFY_SET_ACTIVE_DEVICE',
        accountId: e,
        deviceId: t
    });
}
