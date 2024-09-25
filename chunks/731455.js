n.d(t, {
    Gj: function () {
        return r;
    },
    Hk: function () {
        return d;
    },
    L3: function () {
        return f;
    },
    U: function () {
        return _;
    },
    U2: function () {
        return h;
    },
    Vb: function () {
        return c;
    },
    b0: function () {
        return T;
    },
    dU: function () {
        return I;
    },
    dc: function () {
        return u;
    },
    fW: function () {
        return o;
    },
    jb: function () {
        return m;
    },
    lA: function () {
        return E;
    },
    md: function () {
        return g;
    },
    o3: function () {
        return l;
    },
    zo: function () {
        return S;
    }
});
var r,
    i,
    a,
    o,
    s = n(689938);
let l = 0,
    u = 13,
    c = !0,
    d = -1,
    _ = -2;
!(function (e) {
    (e[(e.Quests = -4)] = 'Quests'), (e[(e.Clans = -3)] = 'Clans'), (e[(e.Hub = _)] = 'Hub'), (e[(e.Communities = d)] = 'Communities'), (e[(e.Activity = 1)] = 'Activity'), (e[(e.Music = 2)] = 'Music'), (e[(e.Television = 3)] = 'Television'), (e[(e.Science = 5)] = 'Science'), (e[(e.Education = 6)] = 'Education');
})(r || (r = {}));
let E = 1000,
    f = [1, 2, 3, 5, 6];
!(function (e) {
    (e[(e.GENERAL_CHATTING = 14)] = 'GENERAL_CHATTING'), (e[(e.GAMING = 1)] = 'GAMING'), (e[(e.MUSIC = 2)] = 'MUSIC'), (e[(e.ENTERTAINMENT = 3)] = 'ENTERTAINMENT'), (e[(e.CREATIVE_ARTS = 4)] = 'CREATIVE_ARTS'), (e[(e.SCIENCE_AND_TECH = 5)] = 'SCIENCE_AND_TECH'), (e[(e.EDUCATION = 6)] = 'EDUCATION'), (e[(e.SPORTS = 7)] = 'SPORTS'), (e[(e.FASHION_AND_BEAUTY = 8)] = 'FASHION_AND_BEAUTY'), (e[(e.RELATIONSHIPS_AND_IDENTITY = 9)] = 'RELATIONSHIPS_AND_IDENTITY'), (e[(e.TRAVEL_AND_FOOD = 10)] = 'TRAVEL_AND_FOOD'), (e[(e.FITNESS_AND_HEALTH = 11)] = 'FITNESS_AND_HEALTH'), (e[(e.FINANCE = 12)] = 'FINANCE'), (e[(e.OTHER = 13)] = 'OTHER'), (e[(e.EMOJI = 43)] = 'EMOJI'), (e[(e.BOTS = 49)] = 'BOTS');
})(i || (i = {}));
let h = {
        14: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY],
        1: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM],
        2: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL],
        3: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT],
        4: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY],
        5: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX],
        6: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE],
        7: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL],
        8: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE],
        9: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY],
        10: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD],
        11: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS],
        12: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX],
        13: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
        43: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
        49: [() => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN, () => s.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES]
    },
    p = ['en-GB'];
function m() {
    return s.Z.getAvailableLocales()
        .map((e) => {
            let t;
            let { value: r, name: i } = e;
            try {
                t = n(621287)('./'.concat(e.value, '.png'));
            } catch (e) {
                t = n(1474);
            }
            return 'en-US' === r
                ? {
                      value: r,
                      label: s.Z.Messages.ENGLISH_LANGUAGE,
                      image: t
                  }
                : {
                      value: r,
                      label: i,
                      image: t
                  };
        })
        .filter((e) => !p.includes(e.value));
}
m();
let I = s.Z.getLanguages()
        .filter((e) => !p.includes(e.code))
        .map((e) =>
            'en-US' === e.code
                ? {
                      ...e,
                      name: s.Z.Messages.en
                  }
                : e
        ),
    T = 40,
    g = 20;
!(function (e) {
    (e.GAME_RECOMMENDATIONS = 'Game Recommendations'), (e.SERVER_RECOMMENDATIONS = 'Server Recommendations');
})(a || (a = {})),
    !(function (e) {
        (e[(e.Activity = 0)] = 'Activity'), (e[(e.Discover = 1)] = 'Discover'), (e[(e.Education = 2)] = 'Education'), (e[(e.Music = 3)] = 'Music'), (e[(e.Science = 4)] = 'Science'), (e[(e.Stage = 5)] = 'Stage'), (e[(e.Television = 6)] = 'Television'), (e[(e.Server = 7)] = 'Server'), (e[(e.Quest = 8)] = 'Quest');
    })(o || (o = {}));
let S = {
    facebook: {
        presentation: 'Facebook',
        baseUrl: 'https://facebook.com'
    },
    instagram: {
        presentation: 'Instagram',
        baseUrl: 'https://instagram.com'
    },
    twitter: {
        presentation: 'Twitter',
        baseUrl: 'https://twitter.com'
    },
    tiktok: {
        presentation: 'TikTok',
        baseUrl: 'https://tiktok.com'
    },
    twitch: {
        presentation: 'Twitch',
        baseUrl: 'https://twitch.tv'
    },
    patreon: {
        presentation: 'Patreon',
        baseUrl: 'https://patreon.com'
    },
    reddit: {
        presentation: 'Reddit',
        baseUrl: 'https://reddit.com/r/'
    },
    youtube: {
        presentation: 'YouTube',
        baseUrl: 'https://youtube.com'
    },
    steamcommunity: {
        presentation: 'Steam',
        baseUrl: 'https://steamcommunity.com'
    },
    soundcloud: {
        presentation: 'SoundCloud',
        baseUrl: 'https://soundcloud.com'
    },
    bandcamp: {
        presentation: 'Bandcamp',
        baseUrl: 'https://bandcamp.com'
    },
    github: {
        presentation: 'GitHub',
        baseUrl: 'https://github.com'
    },
    etsy: {
        presentation: 'Etsy',
        baseUrl: 'https://etsy.com'
    }
};
