n.d(t, {
    $d: function () {
        return O;
    },
    AA: function () {
        return R;
    },
    Db: function () {
        return P;
    },
    Dx: function () {
        return N;
    },
    R: function () {
        return D;
    },
    TB: function () {
        return C;
    },
    XE: function () {
        return L;
    },
    hs: function () {
        return y;
    },
    w: function () {
        return v;
    },
    xR: function () {
        return b;
    },
    xz: function () {
        return M;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(544891),
    l = n(570140),
    u = n(668781),
    c = n(479531),
    d = n(675478),
    _ = n(763296),
    E = n(697426),
    f = n(174470),
    h = n(710111),
    p = n(981631),
    m = n(526761),
    I = n(689938);
let T = async (e) => {
        try {
            let t = (
                await s.tn.get({
                    url: p.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: { guild_ids: e }
                })
            ).body.map((e) => (0, E.o3)(e, h.X8));
            l.Z.dispatch({
                type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
                soundboardSounds: t
            });
        } catch (e) {
            throw (l.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new c.Z(e));
        }
    },
    g = (e) =>
        new Promise((t) => {
            let n = () => {
                l.Z.unsubscribe(e, n), setTimeout(t, 0);
            };
            l.Z.subscribe(e, n);
        }),
    S = (e) => {
        if (!_.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        l.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
        let t = g('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
        return T(e), t;
    },
    A = () => {
        let e = (0, f.D)();
        if (0 === e.length) return Promise.resolve();
        let t = g('SOUNDBOARD_SOUNDS_RECEIVED');
        return (
            l.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
            l.Z.dispatch({
                type: 'REQUEST_SOUNDBOARD_SOUNDS',
                guildIds: e
            }),
            t
        );
    },
    v = () => (__OVERLAY__ ? (l.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([S(), A()]));
async function N(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.tn.post({
            url: p.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: r,
                volume: i,
                emoji_id: a,
                emoji_name: o
            }
        });
    return (0, E.o3)(l.body, t);
}
async function O(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: a, emojiName: o } = e,
        l = await s.tn.patch({
            url: p.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: r,
                volume: i,
                emoji_id: a,
                emoji_name: o
            }
        });
    return (0, E.o3)(l.body, t);
}
async function R(e, t) {
    await s.tn.del({
        url: p.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0
    });
}
function C(e) {
    d.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) =>
            o().size(t.soundIds) >= m.oX
                ? (u.Z.show({
                      title: I.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                      body: I.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({ count: m.oX })
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        m.fy.INFREQUENT_USER_ACTION
    );
}
function y(e) {
    d.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
function L(e, t, n) {
    l.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        sound: t,
        channelId: e,
        trigger: n
    });
}
function b(e, t) {
    l.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
        soundId: e,
        userId: t
    });
}
function D(e, t) {
    l.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
        soundId: e,
        userId: t
    });
}
function M(e) {
    l.Z.dispatch({
        type: 'USER_SOUNDBOARD_SET_VOLUME',
        volume: e
    });
}
function P(e) {
    l.Z.dispatch({
        type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
        channelId: e
    });
}
