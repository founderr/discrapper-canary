n.d(t, {
    C7: function () {
        return h;
    },
    Hw: function () {
        return r;
    },
    M5: function () {
        return l;
    },
    Ps: function () {
        return d;
    },
    SD: function () {
        return _;
    },
    ai: function () {
        return c;
    },
    c8: function () {
        return p;
    },
    kG: function () {
        return i;
    },
    lS: function () {
        return u;
    }
});
var r,
    i,
    a = n(726542),
    o = n(358085),
    s = n(981631);
let l = 'spotify',
    u = 'spotify:',
    c = a.Z.get(s.ABu.SPOTIFY).name;
function d(e) {
    return null != e && e.startsWith(u);
}
!(function (e) {
    (e.TRACK = 'track'), (e.ARTIST = 'artist'), (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.EPISODE = 'episode'), (e.SHOW = 'show');
})(r || (r = {})),
    !(function (e) {
        (e.USER_ACTIVITY_PLAY = 'user_activity_play'), (e.USER_ACTIVITY_SYNC = 'user_activity_sync'), (e.EMBED_SYNC = 'embed_sync');
    })(i || (i = {}));
let _ = ['open.spotify.com', 'www.spotify.com'],
    E = 'https://api.spotify.com/v1',
    f = (e) => '?utm_source=discord&utm_medium='.concat(e),
    h = Object.freeze({
        PROFILE: ''.concat(E, '/me'),
        NOTIFICATIONS_PLAYER: ''.concat(E, '/me/notifications/player'),
        PLAYER: ''.concat(E, '/me/player'),
        PLAYER_DEVICES: ''.concat(E, '/me/player/devices'),
        PLAYER_PLAY: ''.concat(E, '/me/player/play'),
        PLAYER_PAUSE: ''.concat(E, '/me/player/pause'),
        PLAYER_REPEAT: ''.concat(E, '/me/player/repeat'),
        WEB_OPEN: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'desktop';
            return 'https://open.spotify.com/'.concat(encodeURIComponent(e), '/').concat(encodeURIComponent(t)).concat(f(n));
        },
        EMBED: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'desktop';
            return 'https://open.spotify.com/embed'.concat(e).concat(f(t));
        },
        PLAYER_OPEN: function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'desktop';
            return ''
                .concat(l, ':')
                .concat(encodeURIComponent(e), ':')
                .concat(encodeURIComponent(t))
                .concat(n ? f(r) : '');
        },
        PREMIUM_SITE: 'https://www.spotify.com/premium/'.concat(f('desktop')),
        INSTALL_ATTRIBUTION: (e) => 'https://app.adjust.com/bdyga9?campaign='.concat(e),
        APP_STORE: (0, o.isAndroid)() ? 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US' : 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8',
        IOS_APP_STORE: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8'
    });
function p(e) {
    if ('string' != typeof e) return null;
    switch (e) {
        case 'track':
            return 'track';
        case 'artist':
            return 'artist';
        case 'album':
            return 'album';
        case 'playlist':
            return 'playlist';
        case 'episode':
            return 'episode';
        case 'show':
            return 'show';
        default:
            return null;
    }
}
