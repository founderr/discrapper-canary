n.d(t, {
    AF: function () {
        return I;
    },
    BP: function () {
        return g;
    },
    Cf: function () {
        return S;
    },
    Gj: function () {
        return a;
    },
    Hk: function () {
        return _;
    },
    KL: function () {
        return v;
    },
    L3: function () {
        return T;
    },
    MU: function () {
        return h;
    },
    Qq: function () {
        return i;
    },
    dc: function () {
        return f;
    },
    gU: function () {
        return p;
    },
    o3: function () {
        return d;
    },
    q5: function () {
        return m;
    },
    t0: function () {
        return E;
    },
    vf: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(70956),
    c = n(388032);
let d = 0,
    f = 13,
    _ = -1,
    p = -2;
((s = r || (r = {})).FEATURED = 'featured'), (s.GAMING = 'gaming'), (s.MUSIC = 'music'), (s.ENTERTAINMENT = 'entertainment'), (s.TECH = 'tech'), (s.EDUCATION = 'education'), (s.HUBS = 'hubs'), ((o = i || (i = {})).UNKNOWN = 'unknown'), (o.GUILDS_BAR = 'guilds_bar'), (o.RTC_PANEL = 'rtc_panel'), (o.PROFILE = 'profile'), (o.GAME_LINK = 'game_link'), (o.EMBED = 'embed');
let h = new Set(['hubs']),
    m = [],
    g = 'q',
    E = 'c',
    v = 'l',
    I = 10 * u.Z.Millis.MINUTE;
((l = a || (a = {}))[(l.Clans = -3)] = 'Clans'), (l[(l.Hub = p)] = 'Hub'), (l[(l.Communities = _)] = 'Communities'), (l[(l.Activity = 1)] = 'Activity'), (l[(l.Music = 2)] = 'Music'), (l[(l.Television = 3)] = 'Television'), (l[(l.Science = 5)] = 'Science'), (l[(l.Education = 6)] = 'Education');
let T = [1, 2, 3, 5, 6],
    b = ['en-GB'];
function S() {
    return (0, c.getLanguages)()
        .filter((e) => !b.includes(e.code))
        .map((e) =>
            'en-US' === e.code
                ? {
                      ...e,
                      name: c.intl.string(c.t.LQLMGB)
                  }
                : e
        );
}
