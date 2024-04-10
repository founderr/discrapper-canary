"use strict";
n.r(t), n.d(t, {
  ARBITRARY_MIDNIGHT: function() {
    return S
  },
  CLAN_SETUP_MODAL_LAYER_KEY: function() {
    return E
  },
  ClanPlaystyles: function() {
    return i
  },
  ClanSetupModalPages: function() {
    return r
  },
  ClanSetupSteps: function() {
    return o
  },
  GENSHIN_ID: function() {
    return A
  },
  LOCALE_TIME_FORMAT: function() {
    return I
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
  getPlaystyleOptions: function() {
    return T
  },
  getPlaystyleTitle: function() {
    return p
  }
});
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

function p(e) {
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

function T() {
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
}(a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.SOCIAL = 1] = "SOCIAL", a[a.CASUAL = 2] = "CASUAL", a[a.COMPETITIVE = 3] = "COMPETITIVE", a[a.CREATIVE = 4] = "CREATIVE", a[a.VERY_HARDCORE = 5] = "VERY_HARDCORE", (s = r || (r = {}))[s.INTRO_ANIMATION = 0] = "INTRO_ANIMATION", s[s.SETUP = 1] = "SETUP", s[s.SIGN = 2] = "SIGN", (l = o || (o = {}))[l.FOUNDATIONAL_INTRO = 0] = "FOUNDATIONAL_INTRO", l[l.GAMES = 1] = "GAMES", l[l.PLAYSTYLE = 2] = "PLAYSTYLE", l[l.PERSONALITY_INTRO = 3] = "PERSONALITY_INTRO", l[l.INTERESTS = 4] = "INTERESTS", l[l.DESCRIPTION = 5] = "DESCRIPTION", l[l.PRIMETIME = 6] = "PRIMETIME", l[l.IDENTITY_INTRO = 7] = "IDENTITY_INTRO", l[l.CUSTOMIZE = 8] = "CUSTOMIZE", l[l.APPLICATION_INTRO = 9] = "APPLICATION_INTRO", l[l.MEMBER_APPLICATION = 10] = "MEMBER_APPLICATION";
let g = "700136079562375258",
  A = "762434991303950386"