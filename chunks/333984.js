var r = n(47120);
var i = n(592125),
    a = n(412788);
function o(e, t, n) {
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
let s = new Set(),
    l = new Set(),
    u = !1;
function c(e) {
    return e.isSpam;
}
function d(e) {
    let t = !1;
    return c(e) && !s.has(e.id) && (s.add(e.id), (t = !0)), !c(e) && s.has(e.id) && (s.delete(e.id), (t = !0)), !c(e) && l.has(e.id) && (l.delete(e.id), (t = !0)), t;
}
function _() {
    s.clear(),
        l.clear(),
        Object.values(i.Z.getMutablePrivateChannels()).forEach((e) => {
            d(e);
        }),
        (u = !0);
}
function E(e) {
    let { channelId: t } = e;
    l.add(t);
}
function f(e) {
    let { channel: t } = e;
    return d(t);
}
function h(e) {
    let { channels: t } = e;
    for (let e of t) d(e);
}
function p(e) {
    let { channel: t } = e,
        n = !1;
    return s.has(t.id) && (s.delete(t.id), (n = !0)), n;
}
class m extends a.Z {
    initialize() {
        this.waitFor(i.Z);
    }
    loadCache() {
        let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return {
            version: m.LATEST_SNAPSHOT_VERSION,
            data: Array.from(s)
        };
    }
    getSpamChannelIds() {
        return s;
    }
    getSpamChannelsCount() {
        return s.size;
    }
    isSpam(e) {
        return s.has(e);
    }
    isAcceptedOptimistic(e) {
        return l.has(e);
    }
    isReady() {
        return u;
    }
    constructor() {
        super({
            CONNECTION_OPEN: _,
            CONNECTION_OPEN_SUPPLEMENTAL: _,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: f,
            CHANNEL_UPDATES: h,
            CHANNEL_DELETE: p,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: E
        });
    }
}
o(m, 'displayName', 'SpamMessageRequestStore'), o(m, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new m());
