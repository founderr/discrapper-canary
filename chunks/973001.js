n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(70956);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR');
})(r || (r = {}));
let c = {
    applicationIdToGuildIds: {},
    lastFetchTimeMs: null,
    nextFetchRetryTimeMs: null,
    fetchState: 0
};
function d() {
    (c.applicationIdToGuildIds = {}), (c.lastFetchTimeMs = null), (c.nextFetchRetryTimeMs = null), (c.fetchState = 0);
}
function _() {
    c.fetchState = 1;
}
function E(e) {
    let { applicationId: t, guildId: n } = e;
    null == c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t] = new Set()), c.applicationIdToGuildIds[t].add(n), (c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]));
}
function f(e) {
    let { applicationId: t, guildId: n } = e;
    if (null != c.applicationIdToGuildIds[t]) c.applicationIdToGuildIds[t].delete(n), (c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]));
}
function h(e) {
    let { guildIdToApplicationIds: t } = e;
    for (let e in ((c.fetchState = 2), (c.lastFetchTimeMs = Date.now()), (c.applicationIdToGuildIds = {}), (c.nextFetchRetryTimeMs = null), t))
        for (let n of t[e])
            E({
                applicationId: n,
                guildId: e
            });
}
function p(e) {
    let { retryAfterSeconds: t } = e;
    if (((c.fetchState = 3), null != t)) {
        let e = t * l.Z.Millis.SECOND;
        c.nextFetchRetryTimeMs = Date.now() + e;
    }
}
function m(e) {
    let { application: t, guildId: n } = e;
    if (null != t)
        E({
            applicationId: t.id,
            guildId: n
        });
}
function I(e) {
    let { applicationId: t, guildId: n } = e;
    if (null != t)
        f({
            applicationId: t,
            guildId: n
        });
}
class T extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) for (let t in ((c.lastFetchTimeMs = e.lastFetchTimeMs), (c.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs), (c.fetchState = e.fetchState), e.applicationIdToGuildIds)) c.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
    }
    getState() {
        return c;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return c.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return c.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return c.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return c.fetchState;
    }
}
u(T, 'displayName', 'MyGuildApplicationsStore'),
    u(T, 'persistKey', 'MyGuildApplicationsStore'),
    (t.Z = new T(s.Z, {
        LOGOUT: d,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: _,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: h,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: p,
        INTEGRATION_CREATE: m,
        INTEGRATION_DELETE: I
    }));
