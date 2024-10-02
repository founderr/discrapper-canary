n.d(t, {
    aZ: function () {
        return r;
    },
    b5: function () {
        return s;
    },
    iF: function () {
        return o;
    },
    nw: function () {
        return i;
    }
});
var r,
    i,
    a = n(724458);
!(function (e) {
    (e.BAD = 'bad'), (e.NEUTRAL = 'neutral'), (e.GOOD = 'good');
})(r || (r = {}));
let o = 1024;
!(function (e) {
    (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), (e.VIDEO_BACKGROUND = 'VOICE_BACKGROUND'), (e.ACTIVITY = 'ACTIVITY'), (e.IN_APP_REPORTS = 'IN_APP_REPORTS'), (e.USER_DM_MUTE = 'USER_DM_MUTE'), (e.BLOCK_USER = 'BLOCK_USER');
})(i || (i = {}));
let s = ['VOICE_BACKGROUND', 'STREAM', 'ACTIVITY', 'VOICE', 'IN_APP_REPORTS', 'USER_DM_MUTE', 'BLOCK_USER'].reduce(
    (e, t, n) => ({
        ...e,
        [t]: n
    }),
    {}
);
