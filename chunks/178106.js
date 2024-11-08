n(653041), n(47120);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(31775),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(704907),
    d = n(581883),
    f = n(594174),
    _ = n(164878),
    h = n(763296),
    p = n(697426),
    m = n(710111),
    g = n(526761);
function E(e, t, n) {
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
let v = [],
    I = new (o())({ max: m.zb }),
    S = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => h.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: m.O6
    });
function b() {
    var e, t;
    if (!T()) return;
    let n = null === (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
    S.overwriteHistory(
        ((t = null != n ? n : {}),
        a().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        }))),
        v
    );
}
function T() {
    return (0, _.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeFrequentlyPlayed;
}
class y extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.default, h.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && I.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (v = e.playedEventsPendingFlush), this.syncWith([d.Z], b);
    }
    getState() {
        return {
            recentlyHeardCache: I.dump(),
            playedEventsPendingFlush: v
        };
    }
    hasPendingUsage() {
        return v.length > 0;
    }
    get playedSoundHistory() {
        return S.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return I.values();
    }
    get frecentlyPlayedSounds() {
        return S.frequently;
    }
}
E(y, 'displayName', 'SoundboardEventStore'),
    E(y, 'persistKey', 'SoundboardEventStore'),
    (t.Z = new y(u.Z, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function (e) {
            let { sound: t, trigger: n } = e;
            if (!T()) return;
            let r = t.soundId.toString();
            n === p.YQ.SOUNDBOARD &&
                (function (e) {
                    S.track(e),
                        v.push({
                            key: e,
                            timestamp: Date.now()
                        }),
                        S.compute();
                })(r);
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
            var t;
            let { soundId: n, userId: r } = e;
            if (
                !(function () {
                    return (0, _.v)({
                        location: 'soundboard_event_store',
                        autoTrackExposure: !1
                    }).canSeeRecentlyHeard;
                })()
            )
                return;
            let i = n.toString();
            r !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) &&
                (function (e) {
                    for (let t of h.Z.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
                    return !1;
                })(i) &&
                (function (e) {
                    I.set(e, e);
                })(i);
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            T() && t === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (v = []);
        }
    }));
