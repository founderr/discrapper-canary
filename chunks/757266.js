var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140);
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
let c = {};
function d(e) {
    let { application: t } = e;
    if (null == t.id) return !1;
    let n = t.id;
    null == c[n] &&
        (c[n] = {
            count: 0,
            id: t.id,
            name: t.name,
            icon: t.icon,
            coverImage: t.coverImage,
            authenticated: !1
        }),
        c[n].count++;
}
function _(e) {
    let { application: t } = e;
    if (null != t.id && null != c[t.id]) c[t.id].authenticated = !0;
}
function E(e) {
    let { application: t } = e;
    if (null != t.id && null != c[t.id]) c[t.id].count--, 0 === c[t.id].count && delete c[t.id];
}
function f(e) {
    let { connectedApps: t } = e;
    c = { ...t };
}
class h extends (r = s.ZP.Store) {
    isConnected(e) {
        return null != c[e];
    }
    get connections() {
        return o().values(c);
    }
    getApplication(e) {
        return c[e];
    }
    getAllConnections() {
        return c;
    }
}
u(h, 'displayName', 'ConnectedAppsStore'),
    (t.Z = new h(l.Z, {
        OVERLAY_INITIALIZE: f,
        RPC_APP_CONNECTED: d,
        RPC_APP_AUTHENTICATED: _,
        RPC_APP_DISCONNECTED: E
    }));
