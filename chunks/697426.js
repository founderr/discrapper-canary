var r, i, a, s, o, l, u, c, d, f, _, p, h, m;
function g(e, t) {
    let { sound_id: n, emoji_id: r, emoji_name: i, user_id: a, available: s, ...o } = e;
    return {
        ...o,
        soundId: n,
        guildId: t,
        emojiId: r,
        emojiName: i,
        userId: a,
        available: null == s || s
    };
}
function E(e) {
    let { soundId: t, guildId: n, emojiId: r, emojiName: i, userId: a, ...s } = e;
    return {
        ...s,
        sound_id: t,
        guild_id: n,
        emoji_id: r,
        emoji_name: i,
        user_id: a
    };
}
n.d(t, {
    H$: function () {
        return s;
    },
    MW: function () {
        return a;
    },
    Pb: function () {
        return r;
    },
    QL: function () {
        return E;
    },
    YQ: function () {
        return u;
    },
    bg: function () {
        return o;
    },
    jy: function () {
        return i;
    },
    o3: function () {
        return g;
    },
    vB: function () {
        return l;
    }
}),
    ((c = r || (r = {}))[(c.NONE = 0)] = 'NONE'),
    (c[(c.PLAY = 1)] = 'PLAY'),
    (c[(c.ADD = 2)] = 'ADD'),
    (c[(c.SOUNDMOJI = 3)] = 'SOUNDMOJI'),
    ((d = i || (i = {})).ENTRY = 'entry_sound'),
    (d.EXIT = 'exit_sound'),
    (d.DEFAULT = 'default'),
    ((f = a || (a = {})).ADDED = 'added'),
    (f.UPDATED = 'updated'),
    (f.REMOVED = 'removed'),
    ((_ = s || (s = {})).DEFAULT = 'default'),
    (_.CUSTOM = 'custom'),
    ((p = o || (o = {}))[(p.FAVORITES = 0)] = 'FAVORITES'),
    (p[(p.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'),
    (p[(p.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'),
    (p[(p.GUILD = 3)] = 'GUILD'),
    (p[(p.DEFAULTS = 4)] = 'DEFAULTS'),
    (p[(p.SEARCH = 5)] = 'SEARCH'),
    ((h = l || (l = {}))[(h.SOUND = 0)] = 'SOUND'),
    (h[(h.ADD_SOUND = 1)] = 'ADD_SOUND'),
    ((m = u || (u = {}))[(m.GIFT_CODE = 0)] = 'GIFT_CODE'),
    (m[(m.SOUNDBOARD = 1)] = 'SOUNDBOARD'),
    (m[(m.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL'),
    (m[(m.SOUNDMOJI = 3)] = 'SOUNDMOJI');
