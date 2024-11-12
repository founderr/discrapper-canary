n(47120), n(653041), n(536091);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(695346),
    p = n(581883),
    h = n(594174),
    m = n(626135),
    g = n(36703),
    E = n(709054),
    v = n(710111),
    I = n(981631),
    b = n(526761);
((a = r || (r = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let S = new Map(),
    T = new Map(),
    y = new Set(),
    A = 0,
    N = 0,
    C = new Set(),
    R = new Map(),
    O = !1;
function D(e) {
    let { sound: t } = e,
        n = S.get(t.guildId),
        r = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r ? ((n[r] = t), S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]));
}
let L = c().debounce((e) => {
    m.default.track(I.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, g.P)(e)) }), _.kU.updateSetting({ volume: e });
}, 1000);
function x(e) {
    var t, n;
    let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? y.add(e) : y.delete(e);
    for (let e of y.keys()) null == r[e] && y.delete(e);
}
class w extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(p.Z), x(p.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(S),
            favoritedSoundIds: Array.from(C),
            localSoundboardMutes: Array.from(y)
        };
    }
    getSounds() {
        return S;
    }
    getSoundsForGuild(e) {
        return S.get(e);
    }
    getSound(e, t) {
        var n;
        return (null !== (n = S.get(e)) && void 0 !== n ? n : []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(S.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === N;
    }
    isFetchingDefaultSounds() {
        return 1 === A;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === A;
    }
    hasFetchedDefaultSounds() {
        return 2 === A;
    }
    isUserPlayingSounds(e) {
        let t = R.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != T.get(e);
    }
    isFavoriteSound(e) {
        return C.has(e);
    }
    getFavorites() {
        return C;
    }
    isLocalSoundboardMuted(e) {
        return y.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return O;
    }
    hasFetchedAllSounds() {
        return 2 === N && 2 === A;
    }
}
(l = 'SoundboardStore'),
    (o = 'displayName') in (s = w)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new w(f.Z, {
        LOGOUT: function () {
            S.clear(), T.clear(), R.clear(), (O = !1), (N = 0), (A = 0);
        },
        GUILD_SOUNDBOARD_FETCH: function () {
            N = 1;
        },
        GUILD_SOUNDBOARD_SOUND_CREATE: D,
        GUILD_SOUNDBOARD_SOUND_UPDATE: D,
        GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
            let { soundId: t, guildId: n } = e,
                r = S.get(n),
                i = null == r ? void 0 : r.findIndex((e) => e.soundId === t);
            null != r && null != i && !(i < 0) && (r.splice(i, 1), S.set(n, [...r]));
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
            var t, n, r;
            let { soundId: i, userId: a } = e,
                s = (null !== (n = T.get(i)) && void 0 !== n ? n : 0) + 1,
                o = (null !== (r = R.get(a)) && void 0 !== r ? r : 0) + 1;
            T.set(i, s), R.set(a, o), a !== (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (O = !0);
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
            var t, n;
            let { soundId: r, userId: i } = e,
                a = (null !== (t = T.get(r)) && void 0 !== t ? t : 0) - 1,
                s = (null !== (n = R.get(i)) && void 0 !== n ? n : 0) - 1;
            a <= 0 ? T.delete(r) : T.set(r, a), s <= 0 ? R.delete(i) : R.set(i, s);
        },
        USER_SOUNDBOARD_SET_VOLUME: function (e) {
            let { volume: t } = e;
            L(t);
        },
        VOICE_CHANNEL_SELECT: function () {
            T.clear(), R.clear();
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let { settings: t } = e,
                { type: n, proto: r } = t;
            if (n === b.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
                var i, a;
                C = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : []);
            } else n === b.yP.PRELOADED_USER_SETTINGS && x(r);
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
            A = 1;
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
            let { soundboardSounds: t } = e;
            S.set(v.X8, t), (A = 2);
        },
        SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
            let { updates: t } = e;
            t.forEach((e) => {
                let { guildId: t, sounds: n } = e;
                S.set(t, n);
            }),
                (N = 2);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            S.delete(t.id);
        },
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
            let { userId: t } = e;
            y.has(t) ? y.delete(t) : y.add(t);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { soundboardStoreState: t } = e;
            (S = new Map(E.default.entries(t.soundboardSounds))), (C = new Set(t.favoritedSoundIds)), (y = new Set(t.localSoundboardMutes));
        },
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
            let { guildId: t, soundboardSounds: n } = e;
            S.set(t, n);
        }
    }));
