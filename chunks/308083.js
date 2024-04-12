"use strict";
n.r(t), n.d(t, {
  AGE_TRAITS: function() {
    return L
  },
  ALL_TRAITS_SET: function() {
    return y
  },
  ARBITRARY_MIDNIGHT: function() {
    return T
  },
  CLAN_BRAND_PALETTE_PRESETS: function() {
    return D
  },
  CLAN_SETUP_MODAL_LAYER_KEY: function() {
    return _
  },
  ClanBannerKind: function() {
    return i
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
    return v
  },
  IDENTITY_TRAITS: function() {
    return M
  },
  LANGUAGES_SET: function() {
    return x
  },
  LOCALE_TIME_FORMAT: function() {
    return p
  },
  LOCALE_TRAITS: function() {
    return P
  },
  MAX_GAME_HOURS: function() {
    return I
  },
  MAX_INTEREST_LENGTH: function() {
    return S
  },
  MAX_NUM_INTERESTS: function() {
    return m
  },
  MAX_NUM_SELECTED_GAMES: function() {
    return C
  },
  MAX_TAG_LENGTH: function() {
    return h
  },
  PLACEHOLDER_CLAN_LANGUAGE: function() {
    return U
  },
  PLACEHOLDER_CLAN_LOCATION: function() {
    return b
  },
  PLAYSTYLE_GROUPS: function() {
    return g
  },
  VALORANT_ID: function() {
    return R
  },
  VALORANT_TRAITS: function() {
    return O
  },
  getPlaystyleOptions: function() {
    return N
  },
  getPlaystyleTitle: function() {
    return A
  }
}), n("47120");
var a, s, l, i, r, o, u, d, c = n("913527"),
  f = n.n(c),
  E = n("689938");
let h = 4,
  _ = "ClanSetupModal",
  C = 20,
  m = 50,
  S = 50,
  I = 7,
  T = f()("2024-01-01T00:00:00"),
  p = "LT";
(r = a || (a = {}))[r.NONE = 0] = "NONE", r[r.SOCIAL = 1] = "SOCIAL", r[r.CASUAL = 2] = "CASUAL", r[r.COMPETITIVE = 3] = "COMPETITIVE", r[r.CREATIVE = 4] = "CREATIVE", r[r.VERY_HARDCORE = 5] = "VERY_HARDCORE";
let g = {
  0: "NONE",
  4: "NONE",
  1: "CASUAL",
  2: "CASUAL",
  3: "COMPETITIVE",
  5: "COMPETITIVE"
};

function A(e) {
  switch (e) {
    case 1:
      return E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
    case 2:
      return E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
    case 3:
      return E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
    case 5:
      return E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
    default:
      return null
  }
}

function N() {
  return {
    1: {
      type: 1,
      emoji: "\uD83D\uDC4B",
      title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
      subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
    },
    2: {
      type: 2,
      emoji: "\uD83C\uDFAE",
      title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
      subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
    },
    3: {
      type: 3,
      emoji: "⚔️",
      title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
      subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
    },
    5: {
      type: 5,
      emoji: "\uD83D\uDC80",
      title: E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
      subtitle: E.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
    }
  }
}(o = s || (s = {}))[o.INTRO_ANIMATION = 0] = "INTRO_ANIMATION", o[o.SETUP = 1] = "SETUP", o[o.SIGN = 2] = "SIGN", (u = l || (l = {}))[u.FOUNDATIONAL_INTRO = 0] = "FOUNDATIONAL_INTRO", u[u.GAMES = 1] = "GAMES", u[u.PLAYSTYLE = 2] = "PLAYSTYLE", u[u.PERSONALITY_INTRO = 3] = "PERSONALITY_INTRO", u[u.INTERESTS = 4] = "INTERESTS", u[u.UTILITY_TRAITS = 5] = "UTILITY_TRAITS", u[u.DESCRIPTION = 6] = "DESCRIPTION", u[u.PRIMETIME = 7] = "PRIMETIME", u[u.IDENTITY_INTRO = 8] = "IDENTITY_INTRO", u[u.CUSTOMIZE_TAG_BADGE = 9] = "CUSTOMIZE_TAG_BADGE", u[u.CUSTOMIZE_BANNER = 10] = "CUSTOMIZE_BANNER", u[u.APPLICATION_INTRO = 11] = "APPLICATION_INTRO", u[u.MEMBER_APPLICATION = 12] = "MEMBER_APPLICATION";
let R = "700136079562375258",
  v = "762434991303950386",
  O = ["Unrated", "Spike Rush", "Death Match", "Swift", "TDM", "Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF"],
  L = ["20+", "30+", "40+", "All Ages"],
  M = ["LGBTQIA-Friendly", "All genders"],
  P = ["NA", "LATAM", "EU West", "SEA", "OCE", "Global"],
  y = new Set([...O, ...L, ...M, ...P]),
  x = new Set(E.default.getAvailableLocales().map(e => e.value));
(d = i || (i = {}))[d.PIXEL_RUSH = 0] = "PIXEL_RUSH", d[d.SCANLINES = 1] = "SCANLINES", d[d.TEXTURED = 2] = "TEXTURED", d[d.MAGIC = 3] = "MAGIC", d[d.CUSTOM = 4] = "CUSTOM";
let D = [{
    name: "Boulder",
    primary: "#8c8d8d",
    secondary: "#d0d0d1"
  }, {
    name: "Cascade",
    primary: "#43abe9",
    secondary: "#8ad3e8"
  }, {
    name: "Thunder",
    primary: "#e8c02f",
    secondary: "#e8d387"
  }, {
    name: "Soul",
    primary: "#e72282",
    secondary: "#e875ad"
  }, {
    name: "Marsh",
    primary: "#e86e1d",
    secondary: "#e89055"
  }, {
    name: "Volcano",
    primary: "#e81d1e",
    secondary: "#e86868"
  }, {
    name: "Earth",
    primary: "#406601",
    secondary: "#d3e65e"
  }, {
    name: "Zephyr",
    primary: "#4892d5",
    secondary: "#78b6f0"
  }],
  b = "United States",
  U = "English"