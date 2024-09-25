var r = n(47120);
var i = n(133080),
    a = n(592125),
    o = n(412788);
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
let l = new Set(),
    u = new Set(),
    c = !1,
    d = null;
function _(e) {
    return e.isMessageRequest && !e.isSpam;
}
function E(e) {
    let t = !1;
    return _(e) && !l.has(e.id) && (l.add(e.id), (t = !0)), !_(e) && l.has(e.id) && (l.delete(e.id), (t = !0)), !_(e) && u.has(e.id) && (u.delete(e.id), (t = !0)), t;
}
function f(e) {
    var t;
    if (null != e) d = null !== (t = (0, i.Zz)(e)) && void 0 !== t ? t : (0, i.K4)();
}
function h(e) {
    'CONNECTION_OPEN' === e.type && f(e.countryCode),
        l.clear(),
        u.clear(),
        Object.values(a.Z.getMutablePrivateChannels()).forEach((e) => {
            E(e);
        }),
        (c = !0);
}
function p(e) {
    let { channelId: t } = e;
    u.add(t);
}
function m(e) {
    let { channel: t } = e;
    return E(t);
}
function I(e) {
    let { channels: t } = e;
    for (let e of t) E(e);
}
function T(e) {
    let { channel: t } = e;
    return !!l.has(t.id) && (l.delete(t.id), !0);
}
function g(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => l.add(e));
}
function S(e) {
    let { countryCode: t } = e;
    f(t);
}
class A extends o.Z {
    initialize() {
        this.waitFor(a.Z);
    }
    loadCache() {
        let e = this.readSnapshot(A.LATEST_SNAPSHOT_VERSION);
        null != e && (l = new Set(e));
    }
    takeSnapshot() {
        return {
            version: A.LATEST_SNAPSHOT_VERSION,
            data: Array.from(l)
        };
    }
    getMessageRequestChannelIds() {
        return l;
    }
    getMessageRequestsCount() {
        return l.size;
    }
    isMessageRequest(e) {
        return l.has(e);
    }
    isAcceptedOptimistic(e) {
        return u.has(e);
    }
    getUserCountryCode() {
        return d;
    }
    isReady() {
        return c;
    }
    constructor() {
        super({
            CONNECTION_OPEN: h,
            CONNECTION_OPEN_SUPPLEMENTAL: h,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: g,
            CHANNEL_CREATE: m,
            CHANNEL_UPDATES: I,
            CHANNEL_DELETE: T,
            SET_LOCATION_METADATA: S,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: p
        });
    }
}
s(A, 'displayName', 'MessageRequestStore'), s(A, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new A());
