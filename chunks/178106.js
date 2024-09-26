var r,
    i = n(653041);
var a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(31775),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(704907),
    E = n(581883),
    f = n(594174),
    h = n(164878),
    p = n(763296),
    m = n(697426),
    I = n(710111),
    T = n(526761);
function g(e, t, n) {
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
let S = [],
    A = new (u())({ max: I.zb }),
    v = new _.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => p.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: I.O6
    });
function N(e) {
    let { sound: t, trigger: n } = e;
    if (!P()) return;
    let r = t.soundId.toString();
    n === m.YQ.SOUNDBOARD && C(r);
}
function O(e) {
    var t;
    let { soundId: n, userId: r } = e;
    if (!M()) return;
    let i = n.toString();
    r !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && y(i) && R(i);
}
function R(e) {
    A.set(e, e);
}
function C(e) {
    v.track(e),
        S.push({
            key: e,
            timestamp: Date.now()
        }),
        v.compute();
}
function y(e) {
    for (let t of p.Z.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}
function L(e) {
    return s().mapValues(e, (e) => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter((e) => e > 0)
    }));
}
function b() {
    var e;
    if (!P()) return;
    let t = null === (e = E.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
    v.overwriteHistory(L(null != t ? t : {}), S);
}
function D(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    P() && t === T.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (S = []);
}
function M() {
    return (0, h.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeRecentlyHeard;
}
function P() {
    return (0, h.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeFrequentlyPlayed;
}
class U extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.default, p.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && A.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (S = e.playedEventsPendingFlush), this.syncWith([E.Z], b);
    }
    getState() {
        return {
            recentlyHeardCache: A.dump(),
            playedEventsPendingFlush: S
        };
    }
    hasPendingUsage() {
        return S.length > 0;
    }
    get playedSoundHistory() {
        return v.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return A.values();
    }
    get frecentlyPlayedSounds() {
        return v.frequently;
    }
}
g(U, 'displayName', 'SoundboardEventStore'),
    g(U, 'persistKey', 'SoundboardEventStore'),
    (t.Z = new U(d.Z, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: N,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: O,
        USER_SETTINGS_PROTO_UPDATE: D
    }));
