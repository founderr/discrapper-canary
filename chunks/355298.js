n(47120);
var r = n(133080),
    i = n(592125),
    a = n(412788);
function s(e, t, n) {
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
let o = new Set(),
    l = new Set(),
    u = !1,
    c = null;
function d(e) {
    return e.isMessageRequest && !e.isSpam;
}
function f(e) {
    let t = !1;
    return d(e) && !o.has(e.id) && (o.add(e.id), (t = !0)), !d(e) && o.has(e.id) && (o.delete(e.id), (t = !0)), !d(e) && l.has(e.id) && (l.delete(e.id), (t = !0)), t;
}
function _(e) {
    var t;
    if (null != e) c = null !== (t = (0, r.Zz)(e)) && void 0 !== t ? t : (0, r.K4)();
}
function h(e) {
    'CONNECTION_OPEN' === e.type && _(e.countryCode),
        o.clear(),
        l.clear(),
        Object.values(i.Z.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        }),
        (u = !0);
}
function p(e) {
    let { channelId: t } = e;
    l.add(t);
}
function m(e) {
    let { channel: t } = e;
    return f(t);
}
function g(e) {
    let { channels: t } = e;
    for (let e of t) f(e);
}
function E(e) {
    let { channel: t } = e;
    return !!o.has(t.id) && (o.delete(t.id), !0);
}
function v(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => o.add(e));
}
function I(e) {
    let { countryCode: t } = e;
    _(t);
}
class S extends a.Z {
    initialize() {
        this.waitFor(i.Z);
    }
    loadCache() {
        let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
        null != e && (o = new Set(e));
    }
    takeSnapshot() {
        return {
            version: S.LATEST_SNAPSHOT_VERSION,
            data: Array.from(o)
        };
    }
    getMessageRequestChannelIds() {
        return o;
    }
    getMessageRequestsCount() {
        return o.size;
    }
    isMessageRequest(e) {
        return o.has(e);
    }
    isAcceptedOptimistic(e) {
        return l.has(e);
    }
    getUserCountryCode() {
        return c;
    }
    isReady() {
        return u;
    }
    constructor() {
        super({
            CONNECTION_OPEN: h,
            CONNECTION_OPEN_SUPPLEMENTAL: h,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: v,
            CHANNEL_CREATE: m,
            CHANNEL_UPDATES: g,
            CHANNEL_DELETE: E,
            SET_LOCATION_METADATA: I,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: p
        });
    }
}
s(S, 'displayName', 'MessageRequestStore'), s(S, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new S());
