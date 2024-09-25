n.d(t, {
    P3: function () {
        return f;
    },
    ZK: function () {
        return E;
    },
    en: function () {
        return p;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(913527),
    o = n.n(a),
    s = n(266067);
n(358085), n(73346);
var l = n(981631),
    u = n(689938);
let c = {},
    d = {},
    _ = Object.freeze({
        ALL: -1,
        ...l.EKQ
    });
function E(e) {
    let t = (0, s.LX)(e, { path: l.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug') });
    return null != t ? t.params.skuId : null;
}
Object.keys(_).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, '-'),
        n = _[e];
    (c[t] = n), (d[n] = t);
});
function f(e) {
    switch (e) {
        case l.EKQ.ACTION:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ACTION;
        case l.EKQ.ACTION_RPG:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
        case l.EKQ.BRAWLER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BRAWLER;
        case l.EKQ.HACK_AND_SLASH:
            return u.Z.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
        case l.EKQ.PLATFORMER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
        case l.EKQ.STEALTH:
            return u.Z.Messages.APPLICATION_STORE_GENRE_STEALTH;
        case l.EKQ.SURVIVAL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
        case l.EKQ.ADVENTURE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
        case l.EKQ.ACTION_ADVENTURE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
        case l.EKQ.METROIDVANIA:
            return u.Z.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
        case l.EKQ.OPEN_WORLD:
            return u.Z.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
        case l.EKQ.PSYCHOLOGICAL_HORROR:
            return u.Z.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
        case l.EKQ.SANDBOX:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SANDBOX;
        case l.EKQ.SURVIVAL_HORROR:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
        case l.EKQ.VISUAL_NOVEL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
        case l.EKQ.DRIVING_RACING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
        case l.EKQ.VEHICULAR_COMBAT:
            return u.Z.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
        case l.EKQ.MASSIVELY_MULTIPLAYER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
        case l.EKQ.MMORPG:
            return u.Z.Messages.APPLICATION_STORE_GENRE_MMORPG;
        case l.EKQ.ROLE_PLAYING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
        case l.EKQ.DUNGEON_CRAWLER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
        case l.EKQ.ROGUELIKE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
        case l.EKQ.SHOOTER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SHOOTER;
        case l.EKQ.LIGHT_GUN:
            return u.Z.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
        case l.EKQ.SHOOT_EM_UP:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
        case l.EKQ.FPS:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FPS;
        case l.EKQ.DUAL_JOYSTICK_SHOOTER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
        case l.EKQ.SIMULATION:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SIMULATION;
        case l.EKQ.FLIGHT_SIMULATOR:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
        case l.EKQ.TRAIN_SIMULATOR:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
        case l.EKQ.LIFE_SIMULATOR:
            return u.Z.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
        case l.EKQ.FISHING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FISHING;
        case l.EKQ.SPORTS:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SPORTS;
        case l.EKQ.BASEBALL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BASEBALL;
        case l.EKQ.BASKETBALL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
        case l.EKQ.BILLIARDS:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
        case l.EKQ.BOWLING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BOWLING;
        case l.EKQ.BOXING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_BOXING;
        case l.EKQ.FOOTBALL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
        case l.EKQ.GOLF:
            return u.Z.Messages.APPLICATION_STORE_GENRE_GOLF;
        case l.EKQ.HOCKEY:
            return u.Z.Messages.APPLICATION_STORE_GENRE_HOCKEY;
        case l.EKQ.SKATEBOARDING_SKATING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
        case l.EKQ.SNOWBOARDING_SKIING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
        case l.EKQ.SOCCER:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SOCCER;
        case l.EKQ.TRACK_FIELD:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
        case l.EKQ.SURFING_WAKEBOARDING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
        case l.EKQ.WRESTLING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_WRESTLING;
        case l.EKQ.STRATEGY:
            return u.Z.Messages.APPLICATION_STORE_GENRE_STRATEGY;
        case l.EKQ.FOUR_X:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FOUR_X;
        case l.EKQ.ARTILLERY:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
        case l.EKQ.RTS:
            return u.Z.Messages.APPLICATION_STORE_GENRE_RTS;
        case l.EKQ.TOWER_DEFENSE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
        case l.EKQ.TURN_BASED_STRATEGY:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
        case l.EKQ.WARGAME:
            return u.Z.Messages.APPLICATION_STORE_GENRE_WARGAME;
        case l.EKQ.MOBA:
            return u.Z.Messages.APPLICATION_STORE_GENRE_MOBA;
        case l.EKQ.FIGHTING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FIGHTING;
        case l.EKQ.PUZZLE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_PUZZLE;
        case l.EKQ.CARD_GAME:
            return u.Z.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
        case l.EKQ.EDUCATION:
            return u.Z.Messages.APPLICATION_STORE_GENRE_EDUCATION;
        case l.EKQ.FITNESS:
            return u.Z.Messages.APPLICATION_STORE_GENRE_FITNESS;
        case l.EKQ.GAMBLING:
            return u.Z.Messages.APPLICATION_STORE_GENRE_GAMBLING;
        case l.EKQ.MUSIC_RHYTHM:
            return u.Z.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
        case l.EKQ.PARTY_MINI_GAME:
            return u.Z.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
        case l.EKQ.PINBALL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_PINBALL;
        case l.EKQ.TRIVIA_BOARD_GAME:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
        case l.EKQ.TACTICAL:
            return u.Z.Messages.APPLICATION_STORE_GENRE_TACTICAL;
        case l.EKQ.INDIE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_INDIE;
        case l.EKQ.ARCADE:
            return u.Z.Messages.APPLICATION_STORE_GENRE_ARCADE;
        case l.EKQ.POINT_AND_CLICK:
            return u.Z.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
        default:
            return u.Z.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS;
    }
}
let h = [
    ['YYYY-MM-DD', 'MMMM DD, Y'],
    ['YYYY-MM', 'MMMM Y'],
    ['MM-DD', 'MMMM DD'],
    ['MM', 'MMMM'],
    ['YYYY', 'Y']
];
function p(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
    if (null != t) return t.format('MMMM DD');
    if (null == n) return null;
    for (let e = 0; e < h.length; e++) {
        let [t, r] = h[e],
            i = o()(n, t, !0);
        if (i.isValid()) return i.format(r);
    }
    return n;
}
