n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(704907),
    u = n(581883),
    c = n(70956),
    d = n(926491),
    f = n(526761);
function _(e, t, n) {
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
c.Z.Millis.DAY;
let p = new l.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => d.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: 20
    }),
    m = () => {
        d.Z.isLoaded && p.compute();
    },
    g = () => {
        m();
    };
function E() {
    var e;
    let t = null === (e = u.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
    if (null == t) return !1;
    p.overwriteHistory(
        a().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        h.pendingUsages
    );
}
class v extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z), null != e && (h = e), this.syncWith([d.Z], g), this.syncWith([u.Z], E);
    }
    getState() {
        return h;
    }
    hasPendingUsage() {
        return h.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return p;
    }
}
_(v, 'displayName', 'StickersPersistedStore'),
    _(v, 'persistKey', 'StickersPersistedStoreV2'),
    (t.Z = new v(o.Z, {
        STICKER_TRACK_USAGE: (e) => {
            let { stickerIds: t } = e;
            null == t ||
                t.forEach((e) => {
                    p.track(e),
                        h.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        });
                }),
                m();
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            h.pendingUsages = [];
        }
    }));
