var i,
    a = r(653041);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(704907),
    d = r(581883),
    f = r(70956),
    _ = r(926491),
    h = r(526761);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = { pendingUsages: [] };
f.Z.Millis.DAY;
let g = 20,
    E = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        lookupKey: (e) => _.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: g
    }),
    v = () => {
        _.Z.isLoaded && E.compute();
    },
    I = (e) => {
        let { stickerIds: n } = e;
        null == n ||
            n.forEach((e) => {
                E.track(e),
                    m.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    });
            }),
            v();
    },
    T = () => {
        v();
    };
function b() {
    var e;
    let n = null === (e = d.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
    if (null == n) return !1;
    E.overwriteHistory(
        o().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        m.pendingUsages
    );
}
function y(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if (n !== h.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r) return !1;
    m.pendingUsages = [];
}
class S extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z), null != e && (m = e), this.syncWith([_.Z], T), this.syncWith([d.Z], b);
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return E;
    }
}
p(S, 'displayName', 'StickersPersistedStore'),
    p(S, 'persistKey', 'StickersPersistedStoreV2'),
    (n.Z = new S(u.Z, {
        STICKER_TRACK_USAGE: I,
        USER_SETTINGS_PROTO_UPDATE: y
    }));
