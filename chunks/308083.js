n.d(t, {
    A9: function () {
        return q;
    },
    CT: function () {
        return G;
    },
    Dd: function () {
        return K;
    },
    Du: function () {
        return b;
    },
    Gh: function () {
        return J;
    },
    HR: function () {
        return F;
    },
    K_: function () {
        return W;
    },
    LK: function () {
        return D;
    },
    NC: function () {
        return s;
    },
    OH: function () {
        return Y;
    },
    Sq: function () {
        return A;
    },
    TY: function () {
        return N;
    },
    U6: function () {
        return O;
    },
    Us: function () {
        return C;
    },
    WZ: function () {
        return B;
    },
    Wy: function () {
        return r;
    },
    c4: function () {
        return y;
    },
    cG: function () {
        return I;
    },
    cm: function () {
        return T;
    },
    f4: function () {
        return x;
    },
    gQ: function () {
        return Q;
    },
    gh: function () {
        return Z;
    },
    i1: function () {
        return j;
    },
    i6: function () {
        return V;
    },
    jK: function () {
        return U;
    },
    mv: function () {
        return L;
    },
    nJ: function () {
        return w;
    },
    q2: function () {
        return S;
    },
    qC: function () {
        return i;
    },
    uw: function () {
        return R;
    },
    xn: function () {
        return M;
    },
    yi: function () {
        return z;
    },
    ym: function () {
        return H;
    },
    zv: function () {
        return E.z;
    }
}),
    n(411104),
    n(47120),
    n(724458);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _ = n(392711),
    p = n.n(_),
    h = n(913527),
    m = n.n(h),
    g = n(116175),
    E = n(137920),
    v = n(388032);
let b = 200,
    I = 4,
    S = 'ClanSettingsModal',
    T = 20,
    y = 30,
    A = 24,
    N = 12,
    C = 300,
    R = 3;
m()('2024-01-01T00:00:00');
let O = '',
    D = ['cozy', 'crunchy', 'chaos'];
function L(e) {
    switch (e) {
        case E.z.SOCIAL:
            return v.intl.string(v.t.cxUHv7);
        case E.z.CASUAL:
            return v.intl.string(v.t.IZZoho);
        case E.z.COMPETITIVE:
            return v.intl.string(v.t.Zo1X5u);
        case E.z.VERY_HARDCORE:
            return v.intl.string(v.t.xfySBw);
        case E.z.CREATIVE:
        case E.z.NONE:
            return null;
        default:
            return e;
    }
}
function x() {
    return {
        [E.z.SOCIAL]: {
            type: E.z.SOCIAL,
            emoji: '\uD83D\uDC4B',
            title: v.intl.string(v.t.cxUHv7),
            subtitle: v.intl.string(v.t.Yd1GgY)
        },
        [E.z.CASUAL]: {
            type: E.z.CASUAL,
            emoji: '\uD83C\uDFAE',
            title: v.intl.string(v.t.IZZoho),
            subtitle: v.intl.string(v.t['2Af/ZW'])
        },
        [E.z.COMPETITIVE]: {
            type: E.z.COMPETITIVE,
            emoji: '\u2694️',
            title: v.intl.string(v.t.Zo1X5u),
            subtitle: v.intl.string(v.t['dnOc/v'])
        },
        [E.z.VERY_HARDCORE]: {
            type: E.z.VERY_HARDCORE,
            emoji: '\uD83D\uDC80',
            title: v.intl.string(v.t.xfySBw),
            subtitle: v.intl.string(v.t.rSwwx8)
        }
    };
}
if ((((l = r || (r = {}))[(l.GAMES = 0)] = 'GAMES'), (l[(l.PLAYSTYLE = 1)] = 'PLAYSTYLE'), (l[(l.UTILITY_TRAITS = 2)] = 'UTILITY_TRAITS'), (l[(l.INTERESTS = 3)] = 'INTERESTS'), (l[(l.DESCRIPTION = 4)] = 'DESCRIPTION'), (l[(l.CUSTOMIZE_TAG_BADGE = 5)] = 'CUSTOMIZE_TAG_BADGE'), (l[(l.CUSTOMIZE_BANNER = 6)] = 'CUSTOMIZE_BANNER'), (l[(l.MEMBER_APPLICATION = 7)] = 'MEMBER_APPLICATION'), isNaN(Number(Object.values(r).pop())))) throw Error('Failed to get the last step in the ClanSetupSteps enum');
let w = '700136079562375258',
    M = '762434991303950386',
    P = ['Server: NA', 'Server: EU', 'Server: LATAM', 'Server: KR', 'Server: AP', 'Voice ON', 'Voice OFF', 'Unrated', 'All Ranks', 'Bronze+', 'Silver+', 'Gold+', 'Platinum+', 'Diamond+'],
    k = new Set([...P, 'Server: NA', 'Server: EU', 'Server: Asia', 'Server: TW/HK/MO', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'F2P', 'Spenders', 'Co-op', 'Support']),
    U = ['20+', '30+', '40+', 'All Ages'],
    G = ['Recurring Events', 'Beginner Friendly', 'PUGs', 'Inclusive', 'Parent Friendly', 'Work-life Balance', 'Competitive', 'Streamer', 'Esports'],
    B = new Set([...P, ...U, ...G]),
    Z = new Set(['Bulgarian', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Greek', 'Hindi', 'Hungarian', 'Italian', 'Japanese', 'Korean', 'Lithuanian', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Vietnamese']);
function F(e, t) {
    var n;
    return p().sortBy(
        e,
        ((n = t),
        (e) => {
            var t;
            return -((((null == n ? void 0 : n.includes(e)) ? 1 : 0) << 4) | ((((t = e), B.has(t) || V.has(t) || Z.has(t)) ? 0 : 1) << 3) | ((k.has(e) ? 1 : 0) << 2) | ((U.includes(e) ? 1 : 0) << 1) | ((G.includes(e) ? 1 : 0) << 0));
        })
    );
}
let V = new Set(['anime', 'fanart', 'venting', 'mudae', 'OwO bot', 'movie nights', 'study together', 'scheduled gaming', 'all day vc', 'slow paced', 'art streams', 'work from home', 'gartic phone', 'fast food reviews', 'dress to impress', 'music production', 'variety shows', 'manga', 'webtoon', 'brainrot', 'topsters', 'dad jokes', 'photography', 'minecraft smp', 'pirate shows', 'skincare', 'microwaved food', 'board games', 'sci-fi books', 'sleeping', 'brunch pics', 'pet pics', 'recipes', 'speedrunning', 'eating on mic', 'k-pop', 'deafened', 'programming', 'study buddies', 'DnD', 'lore dumping', 'sleepy cats', 'podcasts', 'houseplants', 'knitting', 'tech', 'keyboards', 'horses', 'bad movies', 'hiking', 'lo-fi chilling', 'watch together', 'listen alongs', 'late night tacos', 'drip', 'trading', 'travel', 'cups', 'coffee', 'F1', 'roman history', 'ssense doomscrolling', 'skibidi toilet', 'capcut editing', 'tiktok rizz party', 'industrial grade glycine', 'frutiger aero', 'y2k', 'sanrio', 'nuzlockes', 'small form factor pcs', 'esports', 'game modding', 'chiikawa', 'underground rap', 'pc music', 'homestuck', 'horse hoof cleaning', 'analog horror', 'pimple popping', 'asmr', 'ya fiction', 'fanfiction', 'cosplay', 'fanart', 'zines', 'vtubers', 'JRPGs', 'retro gaming', 'collecting', 'coquette', 'true crime', 'critical role', 'cottagecore', 'goblincore', 'renfaire', 'letterboxd', 'tarot readings', 'fortune telling', 'magic tricks', 'ice cold sprite', 'slime', 'soap cutting', 'mukbang', 'premier league', 'NBA', 'hyperpop', 'dance covers', 'photocard trading', 'toploader decorating', 'unboxing', 'decoden', 'jpop', 'mandopop', 'cantopop', 'amapiano', 'ghibli', 'pokemon vgc', 'subway surfers', 'family guy funny moments', 'cranking 90s', 'friday night funkin', 'FNAF']);
function j() {
    let e = Object.keys(i).filter((e) => isNaN(Number(e)));
    return i[e[Math.floor(Math.random() * e.length)]];
}
((u = i || (i = {}))[(u.NIGHT_SKY = 0)] = 'NIGHT_SKY'), (u[(u.CASTLE = 1)] = 'CASTLE'), (u[(u.WORLD_MAP = 2)] = 'WORLD_MAP'), (u[(u.SEA_FOAM = 3)] = 'SEA_FOAM'), (u[(u.WARP_TUNNEL = 4)] = 'WARP_TUNNEL'), (u[(u.HOUSE = 5)] = 'HOUSE'), (u[(u.HEIGHTMAP = 6)] = 'HEIGHTMAP'), (u[(u.MESH = 7)] = 'MESH'), (u[(u.SPATTER = 8)] = 'SPATTER'), ((c = a || (a = {})).BOULDER = 'Boulder'), (c.CASCADE = 'Cascade'), (c.THUNDER = 'Thunder'), (c.SOUL = 'Soul'), (c.MARSH = 'Marsh'), (c.VOLCANO = 'Volcano'), (c.EARTH = 'Earth'), (c.ZEPHYR = 'Zephyr');
let H = [
        {
            name: 'Boulder',
            primary: '#8c8d8d',
            secondary: '#d0d0d1'
        },
        {
            name: 'Cascade',
            primary: '#43abe9',
            secondary: '#8ad3e8'
        },
        {
            name: 'Thunder',
            primary: '#e8c02f',
            secondary: '#e8d387'
        },
        {
            name: 'Soul',
            primary: '#e72282',
            secondary: '#e875ad'
        },
        {
            name: 'Marsh',
            primary: '#e86e1d',
            secondary: '#e89055'
        },
        {
            name: 'Volcano',
            primary: '#e81d1e',
            secondary: '#e86868'
        },
        {
            name: 'Earth',
            primary: '#406601',
            secondary: '#d3e65e'
        },
        {
            name: 'Zephyr',
            primary: '#4892d5',
            secondary: '#78b6f0'
        }
    ],
    Y = H[0].primary,
    W = H[0].secondary;
Object.fromEntries(
    H.map((e) => [
        e.name,
        {
            primary: e.primary,
            secondary: e.secondary
        }
    ])
);
function K(e, t) {
    return null == e || null == t ? e === t : e.identityGuildId === t.identityGuildId && e.identityEnabled === t.identityEnabled && e.tag === t.tag && e.badge === t.badge;
}
function z(e) {
    return null == e
        ? null
        : 'identityGuildId' in e
          ? e
          : {
                identityGuildId: e.identity_guild_id,
                identityEnabled: e.identity_enabled,
                tag: e.tag,
                badge: e.badge
            };
}
function q(e) {
    return { tag: e.tag };
}
let Q = new Map(['363445589247131668', '700136079562375258', '356869127241072640', '356875570916753438', '1158877933042143272', '432980957394370572', '356876176465199104', '356875221078245376', '356875988589740042', '356877880938070016', '1149118246826561609', '356873622985506820', '542075586886107149', '762434991303950386', '946609449680908348', '356876590342340608', '1260340082150346932', '1253061774555611238', '1167674267748540516', '359509007423242240', '1257819671114289184', '1116835216464543946', '357607478105604096', '1137125502985961543', '356888738724446208', '356875762940379136', '1121201675240210523', '1205090671527071784', '357607133254254632', '359508713658253318', '363409643973771264', '359509387670192128', '367827983903490050', '742897755160313986', '1215361187684946010', '1247227126416146462', '477175586805252107', '356943499456937984', '614380482620293151', '1256912167685587034', '356888961353908224', '356954277803065354', '643897785271189524', '356879032584896512', '506950362461110273', '1113966530531704943', '356944273133928458', '363447565905166336', '363413743335374859', '356942674672091136', '426526722322726912', '422772752647323649', '905961880789590076', '356888453796986880', '398632010442211348', '535371564850479134', '1124351715618074634', '356888577310851072', '787443973538971748', '1197827812623650866', '1124349969906815007', '356875890958925834', '356889262362329098', '425778010222886912', '428055627030331402', '1224418065295478955', '1263691812338536570', '372438022647578634', '1129504162200166401', '1238113262969557002', '443159611479031808', '615752773690064908', '1182713227491147776', '358421669603311616', '1174041358995042375', '385538724592746496', '1124358970618953818', '428054228511227914', '422169383972896768', '1234262945350025246', '363430548028522496', '359509332490059776', '358420454764969994', '1124353632758939688', '363413834301571072', '1162076274622222346', '359509759642042378', '477152881196269569', '449806905901056012', '569253958967885828', '940810636273795162', '359510095811444736', '1245451463736692857', '356887282982191114', '1124351876033425529', '363411421553360896', '1162151882039504916', '1067554911358832721', '1140238527980916757', '359801269008859136', '1272842103910699040', '1276737795012165766'].map((e, t, n) => [e, n.length - t]));
function X(e, t) {
    return void 0 === e || '' === e ? t : e;
}
function J(e) {
    var t;
    let n = (0, g.yf)(),
        r = H[Math.floor(Math.random() * H.length)],
        i = {};
    return (
        null != e.game_activity &&
            (i = Object.keys(e.game_activity).reduce((t, n) => {
                var r;
                let i = null === (r = e.game_activity) || void 0 === r ? void 0 : r[n];
                return null == i
                    ? t
                    : ((t[n] = {
                          level: i.activity_level,
                          score: i.activity_score
                      }),
                      t);
            }, {})),
        {
            id: e.id,
            name: e.name,
            icon: e.icon_hash,
            description: e.description,
            memberCount: e.member_count,
            games: e.game_application_ids,
            playstyle: e.play_style,
            traits: e.search_terms,
            tag: e.tag,
            banner: e.banner,
            bannerHash: e.banner_hash,
            badge: {
                badgeKind: e.badge,
                primaryColor: X(e.badge_color_primary, n.primary),
                secondaryColor: X(e.badge_color_secondary, n.secondary),
                imageHash: e.badge_hash
            },
            branding: {
                primaryColor: X(e.brand_color_primary, r.primary),
                secondaryColor: X(e.brand_color_secondary, r.secondary)
            },
            wildcardDescriptors: e.wildcard_descriptors,
            gameActivity: i,
            discoveryProfileFeatures: new Set(null !== (t = e.discovery_profile_features) && void 0 !== t ? t : [])
        }
    );
}
((d = s || (s = {}))[(d.SIZE_12 = 12)] = 'SIZE_12'), (d[(d.SIZE_16 = 16)] = 'SIZE_16'), (d[(d.SIZE_24 = 24)] = 'SIZE_24'), (d[(d.SIZE_32 = 32)] = 'SIZE_32'), (d[(d.SIZE_36 = 36)] = 'SIZE_36'), ((f = o || (o = {})).GAME_SPECIFIC = 'game_specific'), (f.GENERIC = 'generic');
