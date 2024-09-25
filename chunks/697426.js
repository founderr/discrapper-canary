var r, i, a, o, s, l, u;
function c(e, t) {
    let { sound_id: n, emoji_id: r, emoji_name: i, user_id: a, available: o, ...s } = e;
    return {
        ...s,
        soundId: n,
        guildId: t,
        emojiId: r,
        emojiName: i,
        userId: a,
        available: null == o || o
    };
}
function d(e) {
    let { soundId: t, guildId: n, emojiId: r, emojiName: i, userId: a, ...o } = e;
    return {
        ...o,
        sound_id: t,
        guild_id: n,
        emoji_id: r,
        emoji_name: i,
        user_id: a
    };
}
n.d(t, {
    H$: function () {
        return o;
    },
    MW: function () {
        return a;
    },
    Pb: function () {
        return r;
    },
    QL: function () {
        return d;
    },
    YQ: function () {
        return u;
    },
    bg: function () {
        return s;
    },
    jy: function () {
        return i;
    },
    o3: function () {
        return c;
    },
    vB: function () {
        return l;
    }
}),
    !(function (e) {
        (e[(e.PLAY = 0)] = 'PLAY'), (e[(e.ADD = 1)] = 'ADD');
    })(r || (r = {})),
    !(function (e) {
        (e.ENTRY = 'entry_sound'), (e.EXIT = 'exit_sound'), (e.DEFAULT = 'default');
    })(i || (i = {})),
    !(function (e) {
        (e.ADDED = 'added'), (e.UPDATED = 'updated'), (e.REMOVED = 'removed');
    })(a || (a = {})),
    !(function (e) {
        (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
    })(o || (o = {})),
    !(function (e) {
        (e[(e.FAVORITES = 0)] = 'FAVORITES'), (e[(e.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'), (e[(e.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'), (e[(e.GUILD = 3)] = 'GUILD'), (e[(e.DEFAULTS = 4)] = 'DEFAULTS'), (e[(e.SEARCH = 5)] = 'SEARCH');
    })(s || (s = {})),
    !(function (e) {
        (e[(e.SOUND = 0)] = 'SOUND'), (e[(e.ADD_SOUND = 1)] = 'ADD_SOUND');
    })(l || (l = {})),
    !(function (e) {
        (e[(e.GIFT_CODE = 0)] = 'GIFT_CODE'), (e[(e.SOUNDBOARD = 1)] = 'SOUNDBOARD'), (e[(e.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL');
    })(u || (u = {}));
