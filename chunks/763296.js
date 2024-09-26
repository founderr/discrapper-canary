var r,
    i,
    a = n(47120);
var o = n(653041);
var s = n(536091);
var l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(695346),
    E = n(581883),
    f = n(594174),
    h = n(626135),
    p = n(36703),
    m = n(709054),
    I = n(710111),
    T = n(981631),
    g = n(526761);
function S(e, t, n) {
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
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
let A = new Map(),
    v = new Map(),
    N = new Set(),
    O = 0,
    R = 0,
    C = new Set(),
    y = new Map(),
    L = !1;
function b() {
    A.clear(), v.clear(), y.clear(), (L = !1), (R = 0), (O = 0);
}
function D() {
    v.clear(), y.clear();
}
function M() {
    R = 1;
}
function P(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        A.set(t, n);
    }),
        (R = 2);
}
function U(e) {
    let { guild: t } = e;
    A.delete(t.id);
}
function w(e) {
    let { sound: t } = e,
        n = A.get(t.guildId),
        r = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r ? ((n[r] = t), A.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), A.set(t.guildId, [...n]));
}
function x(e) {
    let { guildId: t, soundboardSounds: n } = e;
    A.set(t, n);
}
function G(e) {
    let { soundId: t, guildId: n } = e,
        r = A.get(n),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === t);
    null != r && null != i && !(i < 0) && (r.splice(i, 1), A.set(n, [...r]));
}
function k() {
    O = 1;
}
function B(e) {
    let { soundboardSounds: t } = e;
    A.set(I.X8, t), (O = 2);
}
function F(e) {
    var t, n, r;
    let { soundId: i, userId: a } = e,
        o = (null !== (n = v.get(i)) && void 0 !== n ? n : 0) + 1,
        s = (null !== (r = y.get(a)) && void 0 !== r ? r : 0) + 1;
    v.set(i, o), y.set(a, s), a !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (L = !0);
}
function Z(e) {
    var t, n;
    let { soundId: r, userId: i } = e,
        a = (null !== (t = v.get(r)) && void 0 !== t ? t : 0) - 1,
        o = (null !== (n = y.get(i)) && void 0 !== n ? n : 0) - 1;
    a <= 0 ? v.delete(r) : v.set(r, a), o <= 0 ? y.delete(i) : y.set(i, o);
}
let V = u().debounce((e) => {
    h.default.track(T.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, p.P)(e)) }), _.kU.updateSetting({ volume: e });
}, 1000);
function H(e) {
    let { volume: t } = e;
    V(t);
}
function Y(e) {
    var t, n;
    let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? N.add(e) : N.delete(e);
    for (let e of N.keys()) null == r[e] && N.delete(e);
}
function j(e) {
    let { settings: t } = e,
        { type: n, proto: r } = t;
    if (n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var i, a;
        C = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : []);
    } else n === g.yP.PRELOADED_USER_SETTINGS && Y(r);
}
function W(e) {
    let { userId: t } = e;
    N.has(t) ? N.delete(t) : N.add(t);
}
function K(e) {
    let { soundboardStoreState: t } = e;
    (A = new Map(m.default.entries(t.soundboardSounds))), (C = new Set(t.favoritedSoundIds)), (N = new Set(t.localSoundboardMutes));
}
class z extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(E.Z), Y(E.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(A),
            favoritedSoundIds: Array.from(C),
            localSoundboardMutes: Array.from(N)
        };
    }
    getSounds() {
        return A;
    }
    getSoundsForGuild(e) {
        return A.get(e);
    }
    getSound(e, t) {
        var n;
        return (null !== (n = A.get(e)) && void 0 !== n ? n : []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(A.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === R;
    }
    isFetchingDefaultSounds() {
        return 1 === O;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === O;
    }
    hasFetchedDefaultSounds() {
        return 2 === O;
    }
    isUserPlayingSounds(e) {
        let t = y.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != v.get(e);
    }
    isFavoriteSound(e) {
        return C.has(e);
    }
    getFavorites() {
        return C;
    }
    isLocalSoundboardMuted(e) {
        return N.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return L;
    }
    hasFetchedAllSounds() {
        return 2 === R && 2 === O;
    }
}
S(z, 'displayName', 'SoundboardStore'),
    (t.Z = new z(d.Z, {
        LOGOUT: b,
        GUILD_SOUNDBOARD_FETCH: M,
        GUILD_SOUNDBOARD_SOUND_CREATE: w,
        GUILD_SOUNDBOARD_SOUND_UPDATE: w,
        GUILD_SOUNDBOARD_SOUND_DELETE: G,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: F,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: Z,
        USER_SOUNDBOARD_SET_VOLUME: H,
        VOICE_CHANNEL_SELECT: D,
        USER_SETTINGS_PROTO_UPDATE: j,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: k,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: B,
        SOUNDBOARD_SOUNDS_RECEIVED: P,
        GUILD_DELETE: U,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: W,
        OVERLAY_INITIALIZE: K,
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: x
    }));
