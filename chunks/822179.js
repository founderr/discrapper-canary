var r,
    i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(704907),
    c = n(581883),
    d = n(70956),
    _ = n(926491),
    E = n(526761);
function f(e, t, n) {
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
let h = { pendingUsages: [] };
d.Z.Millis.DAY;
let p = 20,
    m = new u.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => _.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: p
    }),
    I = () => {
        _.Z.isLoaded && m.compute();
    },
    T = (e) => {
        let { stickerIds: t } = e;
        null == t ||
            t.forEach((e) => {
                m.track(e),
                    h.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    });
            }),
            I();
    },
    g = () => {
        I();
    };
function S() {
    var e;
    let t = null === (e = c.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
    if (null == t) return !1;
    m.overwriteHistory(
        o().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        h.pendingUsages
    );
}
function A(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== E.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    h.pendingUsages = [];
}
class v extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z), null != e && (h = e), this.syncWith([_.Z], g), this.syncWith([c.Z], S);
    }
    getState() {
        return h;
    }
    hasPendingUsage() {
        return h.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return m;
    }
}
f(v, 'displayName', 'StickersPersistedStore'),
    f(v, 'persistKey', 'StickersPersistedStoreV2'),
    (t.Z = new v(l.Z, {
        STICKER_TRACK_USAGE: T,
        USER_SETTINGS_PROTO_UPDATE: A
    }));
