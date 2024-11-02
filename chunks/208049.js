n.d(t, {
    $d: function () {
        return b;
    },
    AA: function () {
        return y;
    },
    Db: function () {
        return L;
    },
    Dx: function () {
        return T;
    },
    R: function () {
        return O;
    },
    TB: function () {
        return A;
    },
    XE: function () {
        return C;
    },
    hs: function () {
        return N;
    },
    w: function () {
        return S;
    },
    xR: function () {
        return R;
    },
    xz: function () {
        return D;
    }
}),
    n(47120),
    n(653041);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(479531),
    u = n(675478),
    c = n(763296),
    d = n(697426),
    f = n(174470),
    _ = n(710111),
    h = n(981631),
    p = n(526761),
    m = n(388032);
let g = async (e) => {
        try {
            let t = (
                await a.tn.get({
                    url: h.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: { guild_ids: e }
                })
            ).body.map((e) => (0, d.o3)(e, _.X8));
            s.Z.dispatch({
                type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
                soundboardSounds: t
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new l.Z(e));
        }
    },
    E = (e) =>
        new Promise((t) => {
            let n = () => {
                s.Z.unsubscribe(e, n), setTimeout(t, 0);
            };
            s.Z.subscribe(e, n);
        }),
    v = (e) => {
        if (!c.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
        let t = E('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
        return g(e), t;
    },
    I = () => {
        let e = (0, f.D)();
        if (0 === e.length) return Promise.resolve();
        let t = E('SOUNDBOARD_SOUNDS_RECEIVED');
        return (
            s.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
            s.Z.dispatch({
                type: 'REQUEST_SOUNDBOARD_SOUNDS',
                guildIds: e
            }),
            t
        );
    },
    S = () => (__OVERLAY__ ? (s.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([v(), I()]));
async function T(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: s, emojiName: o } = e,
        l = await a.tn.post({
            url: h.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: r,
                volume: i,
                emoji_id: s,
                emoji_name: o
            }
        });
    return (0, d.o3)(l.body, t);
}
async function b(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: s, emojiName: o } = e,
        l = await a.tn.patch({
            url: h.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: r,
                volume: i,
                emoji_id: s,
                emoji_name: o
            }
        });
    return (0, d.o3)(l.body, t);
}
async function y(e, t) {
    await a.tn.del({
        url: h.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0
    });
}
function A(e) {
    u.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) =>
            i().size(t.soundIds) >= p.oX
                ? (o.Z.show({
                      title: m.intl.string(m.t['+XYXtb']),
                      body: m.intl.formatToPlainString(m.t.JaIyFh, { count: p.oX })
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        p.fy.INFREQUENT_USER_ACTION
    );
}
function N(e) {
    u.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        p.fy.INFREQUENT_USER_ACTION
    );
}
function C(e, t, n) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        sound: t,
        channelId: e,
        trigger: n
    });
}
function R(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
        soundId: e,
        userId: t
    });
}
function O(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
        soundId: e,
        userId: t
    });
}
function D(e) {
    s.Z.dispatch({
        type: 'USER_SOUNDBOARD_SET_VOLUME',
        volume: e
    });
}
function L(e) {
    s.Z.dispatch({
        type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
        channelId: e
    });
}
