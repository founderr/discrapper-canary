"use strict";
n.r(t), n.d(t, {
  AGE_TRAITS: function() {
    return v
  },
  ALL_TRAITS_SET: function() {
    return L
  },
  ARBITRARY_MIDNIGHT: function() {
    return S
  },
  CLAN_SETUP_MODAL_LAYER_KEY: function() {
    return E
  },
  ClanPlaystyles: function() {
    return a
  },
  ClanSetupModalPages: function() {
    return s
  },
  ClanSetupSteps: function() {
    return l
  },
  GENSHIN_ID: function() {
    return A
  },
  IDENTITY_TRAITS: function() {
    return R
  },
  LANGUAGES_SET: function() {
    return M
  },
  LOCALE_TIME_FORMAT: function() {
    return I
  },
  LOCALE_TRAITS: function() {
    return O
  },
  MAX_GAME_HOURS: function() {
    return m
  },
  MAX_INTEREST_LENGTH: function() {
    return C
  },
  MAX_NUM_INTERESTS: function() {
    return _
  },
  MAX_NUM_SELECTED_GAMES: function() {
    return h
  },
  MAX_TAG_LENGTH: function() {
    return f
  },
  VALORANT_ID: function() {
    return g
  },
  VALORANT_TRAITS: function() {
    return N
  },
  getPlaystyleOptions: function() {
    return p
  },
  getPlaystyleTitle: function() {
    return T
  }
}), n("47120");
var a, s, l, i, r, o, u = n("913527"),
  d = n.n(u),
  c = n("689938");
let f = 4,
  E = "ClanSetupModal",
  h = 20,
  _ = 50,
  C = 50,
  m = 7,
  S = d()("2024-01-01T00:00:00"),
  I = "LT";

function T(e) {
  switch (e) {
    case 1:
      return c.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
    case 2:
      return c.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
    case 3:
      return c.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
    case 5:
      return c.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
    default:
      return null
  }
}

function p() {
  return {
    1: {
      type: 1,
      emoji: "\uD83D\uDC4B",
      title: c.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
      subtitle: c.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
    },
    2: {
      type: 2,
      emoji: "\uD83C\uDFAE",
      title: c.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
      subtitle: c.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
    },
    3: {
      type: 3,
      emoji: "⚔️",
      title: c.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
      subtitle: c.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
    },
    5: {
      type: 5,
      emoji: "\uD83D\uDC80",
      title: c.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
      subtitle: c.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
    }
  }
}(i = a || (a = {}))[i.NONE = 0] = "NONE", i[i.SOCIAL = 1] = "SOCIAL", i[i.CASUAL = 2] = "CASUAL", i[i.COMPETITIVE = 3] = "COMPETITIVE", i[i.CREATIVE = 4] = "CREATIVE", i[i.VERY_HARDCORE = 5] = "VERY_HARDCORE", (r = s || (s = {}))[r.INTRO_ANIMATION = 0] = "INTRO_ANIMATION", r[r.SETUP = 1] = "SETUP", r[r.SIGN = 2] = "SIGN", (o = l || (l = {}))[o.FOUNDATIONAL_INTRO = 0] = "FOUNDATIONAL_INTRO", o[o.GAMES = 1] = "GAMES", o[o.PLAYSTYLE = 2] = "PLAYSTYLE", o[o.PERSONALITY_INTRO = 3] = "PERSONALITY_INTRO", o[o.UTILITY_TRAITS = 4] = "UTILITY_TRAITS", o[o.INTERESTS = 5] = "INTERESTS", o[o.DESCRIPTION = 6] = "DESCRIPTION", o[o.PRIMETIME = 7] = "PRIMETIME", o[o.IDENTITY_INTRO = 8] = "IDENTITY_INTRO", o[o.CUSTOMIZE = 9] = "CUSTOMIZE", o[o.APPLICATION_INTRO = 10] = "APPLICATION_INTRO", o[o.MEMBER_APPLICATION = 11] = "MEMBER_APPLICATION";
let g = "700136079562375258",
  A = "762434991303950386",
  N = ["Unrated", "Spike Rush", "Death Match", "Swift", "TDM", "Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF"],
  v = ["20+", "30+", "40+", "All Ages"],
  R = ["LGBTQIA-Friendly", "All genders"],
  O = ["NA", "LATAM", "EU West", "SEA", "OCE", "Global"],
  L = new Set([...N, ...v, ...R, ...O]),
  M = new Set(c.default.getAvailableLocales().map(e => e.value))