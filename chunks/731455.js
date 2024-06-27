"use strict";
n.d(t, {
  Gj: function() {
    return a
  },
  Hk: function() {
    return T
  },
  L3: function() {
    return S
  },
  U: function() {
    return h
  },
  U2: function() {
    return A
  },
  Vb: function() {
    return I
  },
  b0: function() {
    return R
  },
  dU: function() {
    return O
  },
  dc: function() {
    return E
  },
  fW: function() {
    return _
  },
  jb: function() {
    return m
  },
  lA: function() {
    return f
  },
  md: function() {
    return p
  },
  o3: function() {
    return d
  },
  zo: function() {
    return g
  }
});
var i, r, s, o, a, l, u, _, c = n(689938);
let d = 0,
  E = 13,
  I = !0,
  T = -1,
  h = -2;
(i = a || (a = {}))[i.Quests = -4] = "Quests", i[i.Clans = -3] = "Clans", i[i.Hub = h] = "Hub", i[i.Communities = T] = "Communities", i[i.Activity = 1] = "Activity", i[i.Music = 2] = "Music", i[i.Television = 3] = "Television", i[i.Science = 5] = "Science", i[i.Education = 6] = "Education";
let f = 1e3,
  S = [1, 2, 3, 5, 6];
(r = l || (l = {}))[r.GENERAL_CHATTING = 14] = "GENERAL_CHATTING", r[r.GAMING = 1] = "GAMING", r[r.MUSIC = 2] = "MUSIC", r[r.ENTERTAINMENT = 3] = "ENTERTAINMENT", r[r.CREATIVE_ARTS = 4] = "CREATIVE_ARTS", r[r.SCIENCE_AND_TECH = 5] = "SCIENCE_AND_TECH", r[r.EDUCATION = 6] = "EDUCATION", r[r.SPORTS = 7] = "SPORTS", r[r.FASHION_AND_BEAUTY = 8] = "FASHION_AND_BEAUTY", r[r.RELATIONSHIPS_AND_IDENTITY = 9] = "RELATIONSHIPS_AND_IDENTITY", r[r.TRAVEL_AND_FOOD = 10] = "TRAVEL_AND_FOOD", r[r.FITNESS_AND_HEALTH = 11] = "FITNESS_AND_HEALTH", r[r.FINANCE = 12] = "FINANCE", r[r.OTHER = 13] = "OTHER", r[r.EMOJI = 43] = "EMOJI", r[r.BOTS = 49] = "BOTS";
let A = {
    14: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY],
    1: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MINECRAFT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROBLOX, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORTNITE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ESPORTS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ROLEPLAY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_VALORANT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEAGUEOFLEGENDS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FIVEM],
    2: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDM, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RAP, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_KPOP, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MUSIC_PRODUCTION, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HIPHOP, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SINGING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BTS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_METAL],
    3: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREAMER, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT],
    4: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DESIGN, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIMATION, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_3D, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MANGA, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DRAWING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PHOTOGRAPHY],
    5: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TECH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CODING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GITHUB, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPENSOURCE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_JAVASCRIPT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HARDWARE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOFTWARE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LINUX],
    6: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STUDY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LANGUAGE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SCHOOL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ENGLISH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LEARNING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HOMEWORK, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PROGRAMMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COLLEGE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE],
    7: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOTBALL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NBA, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NFL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCCER, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BASKETBALL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FORMULA1, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_PREMIER_LEAGUE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_RACING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FANTASY_FOOTBALL],
    8: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FASHION, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STREETWEAR, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNEAKERS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CLOTHING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_REDDIT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YEEZY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPREME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_HYPEBEAST, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STYLE],
    9: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_LGBTQ, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FRIENDS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY],
    10: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOOD, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BEVERAGE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SNACKS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRAVEL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISNEYWORLD],
    11: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GYM, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BODYBUILDING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EXERCISE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CALISTHENICS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MENTAL_HEALTH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SELF_IMPROVEMENT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EDUCATION, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CROSSFIT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NUTRITION, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SPORTS],
    12: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_STOCKS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TRADING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_INVESTING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BITCOIN, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CRYPTOCURRENCY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ETHEREUM, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_OPTIONS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DEFI, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FOREX],
    13: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GAMING, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_YOUTUBE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_TWITCH, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_COMMUNITY, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EVENTS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SOCIAL, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
    43: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOJI, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_EMOTES, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_NITRO, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ANIME, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_CUTE, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_AESTHETIC, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_ART, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES],
    49: [() => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_APPS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_BOTS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_DISCORD_BOT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_GIVEAWAYS, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_SUPPORT, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_FUN, () => c.Z.Messages.SERVER_DISCOVERY_SUGGESTED_TAG_MEMES]
  },
  N = ["en-GB"];

function m() {
  return c.Z.getAvailableLocales().map(e => {
    let t;
    let {
      value: i,
      name: r
    } = e;
    try {
      t = n(621287)("./".concat(e.value, ".png"))
    } catch (e) {
      t = n(1474)
    }
    return "en-US" === i ? {
      value: i,
      label: c.Z.Messages.ENGLISH_LANGUAGE,
      image: t
    } : {
      value: i,
      label: r,
      image: t
    }
  }).filter(e => !N.includes(e.value))
}
m();
let O = c.Z.getLanguages().filter(e => !N.includes(e.code)).map(e => "en-US" === e.code ? {
    ...e,
    name: c.Z.Messages.en
  } : e),
  R = 40,
  p = 20;
(s = u || (u = {})).GAME_RECOMMENDATIONS = "Game Recommendations", s.SERVER_RECOMMENDATIONS = "Server Recommendations", (o = _ || (_ = {}))[o.Activity = 0] = "Activity", o[o.Discover = 1] = "Discover", o[o.Education = 2] = "Education", o[o.Music = 3] = "Music", o[o.Science = 4] = "Science", o[o.Stage = 5] = "Stage", o[o.Television = 6] = "Television", o[o.Server = 7] = "Server", o[o.Quest = 8] = "Quest";
let g = {
  facebook: {
    presentation: "Facebook",
    baseUrl: "https://facebook.com"
  },
  instagram: {
    presentation: "Instagram",
    baseUrl: "https://instagram.com"
  },
  twitter: {
    presentation: "Twitter",
    baseUrl: "https://twitter.com"
  },
  tiktok: {
    presentation: "TikTok",
    baseUrl: "https://tiktok.com"
  },
  twitch: {
    presentation: "Twitch",
    baseUrl: "https://twitch.tv"
  },
  patreon: {
    presentation: "Patreon",
    baseUrl: "https://patreon.com"
  },
  reddit: {
    presentation: "Reddit",
    baseUrl: "https://reddit.com/r/"
  },
  youtube: {
    presentation: "YouTube",
    baseUrl: "https://youtube.com"
  },
  steamcommunity: {
    presentation: "Steam",
    baseUrl: "https://steamcommunity.com"
  },
  soundcloud: {
    presentation: "SoundCloud",
    baseUrl: "https://soundcloud.com"
  },
  bandcamp: {
    presentation: "Bandcamp",
    baseUrl: "https://bandcamp.com"
  },
  github: {
    presentation: "GitHub",
    baseUrl: "https://github.com"
  },
  etsy: {
    presentation: "Etsy",
    baseUrl: "https://etsy.com"
  }
}