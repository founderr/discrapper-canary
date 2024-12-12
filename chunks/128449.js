r.d(n, {
    AF: function () {
        return I;
    },
    BP: function () {
        return g;
    },
    Cf: function () {
        return y;
    },
    Gj: function () {
        return s;
    },
    Hk: function () {
        return f;
    },
    KL: function () {
        return v;
    },
    L3: function () {
        return T;
    },
    MU: function () {
        return p;
    },
    Qq: function () {
        return a;
    },
    dc: function () {
        return d;
    },
    gU: function () {
        return _;
    },
    o3: function () {
        return c;
    },
    q5: function () {
        return m;
    },
    t0: function () {
        return E;
    },
    vf: function () {
        return i;
    }
});
var i,
    a,
    s,
    o = r(47120);
var l = r(70956),
    u = r(388032);
let c = 0,
    d = 13,
    f = -1,
    _ = -2,
    h = -3;
!(function (e) {
    (e.FEATURED = 'featured'), (e.GAMING = 'gaming'), (e.MUSIC = 'music'), (e.ENTERTAINMENT = 'entertainment'), (e.TECH = 'tech'), (e.EDUCATION = 'education'), (e.HUBS = 'hubs');
})(i || (i = {})),
    !(function (e) {
        (e.UNKNOWN = 'unknown'), (e.GUILDS_BAR = 'guilds_bar'), (e.RTC_PANEL = 'rtc_panel'), (e.PROFILE = 'profile'), (e.GAME_LINK = 'game_link'), (e.EMBED = 'embed');
    })(a || (a = {}));
let p = new Set(['hubs']),
    m = [],
    g = 'q',
    E = 'c',
    v = 'l',
    I = 10 * l.Z.Millis.MINUTE;
!(function (e) {
    (e[(e.Clans = h)] = 'Clans'), (e[(e.Hub = _)] = 'Hub'), (e[(e.Communities = f)] = 'Communities'), (e[(e.Activity = 1)] = 'Activity'), (e[(e.Music = 2)] = 'Music'), (e[(e.Television = 3)] = 'Television'), (e[(e.Science = 5)] = 'Science'), (e[(e.Education = 6)] = 'Education');
})(s || (s = {}));
let T = [1, 2, 3, 5, 6],
    b = ['en-GB'];
function y() {
    return (0, u.getLanguages)()
        .filter((e) => !b.includes(e.code))
        .map((e) =>
            'en-US' === e.code
                ? {
                      ...e,
                      name: u.intl.string(u.t.LQLMGB)
                  }
                : e
        );
}
