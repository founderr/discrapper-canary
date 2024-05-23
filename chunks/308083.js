"use strict";
n.r(t), n.d(t, {
  AGE_TRAITS: function() {
    return w
  },
  ALL_TRAITS_SET: function() {
    return B
  },
  CLAN_BRAND_PALETTE_PRESETS: function() {
    return j
  },
  CLAN_BRAND_PALETTE_PRESETS_BY_NAME: function() {
    return z
  },
  CLAN_BRAND_PRIMARY_DEFAULT: function() {
    return W
  },
  CLAN_BRAND_SECONDARY_DEFAULT: function() {
    return K
  },
  CLAN_SETTINGS_MODAL_LAYER_KEY: function() {
    return A
  },
  CLAN_SETUP_MODAL_LAYER_KEY: function() {
    return h
  },
  CLAN_WILDCARD_PLACEHOLDERS: function() {
    return v
  },
  ClanBannerKind: function() {
    return r
  },
  ClanBrandPresets: function() {
    return s
  },
  ClanPlaystyles: function() {
    return T.ClanPlaystyles
  },
  ClanSetupSteps: function() {
    return i
  },
  ClanTagBadgeSize: function() {
    return a
  },
  EMPTY_WILDCARD: function() {
    return L
  },
  FAKE_CLAN_APP_IDS: function() {
    return q
  },
  GENSHIN_ID: function() {
    return P
  },
  GENSHIN_TRAITS: function() {
    return b
  },
  HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY: function() {
    return J
  },
  IDENTITY_TRAITS: function() {
    return k
  },
  LANGUAGES_SET: function() {
    return V
  },
  MAX_DESCRIPTION_LENGTH: function() {
    return C
  },
  MAX_GAMES_TO_DISPLAY: function() {
    return R
  },
  MAX_INTEREST_LENGTH: function() {
    return p
  },
  MAX_NUM_INTERESTS: function() {
    return N
  },
  MAX_NUM_SELECTED_GAMES: function() {
    return m
  },
  MAX_TAG_LENGTH: function() {
    return S
  },
  MAX_TRAITS_TO_DISPLAY: function() {
    return g
  },
  MAX_WILDCARD_LENGTH: function() {
    return O
  },
  SUGGESTED_TRAITS_SET: function() {
    return H
  },
  VALORANT_ID: function() {
    return y
  },
  VALORANT_TRAITS: function() {
    return U
  },
  ensureUserClanData: function() {
    return X
  },
  getPlaystyleOptions: function() {
    return M
  },
  getPlaystyleTitle: function() {
    return D
  },
  getRandomClanBannerKind: function() {
    return Y
  },
  getRandomClanBrandPreset: function() {
    return Z
  },
  getSortedTraits: function() {
    return F
  },
  isCustomInterest: function() {
    return x
  },
  toServerClanData: function() {
    return Q
  }
}), n("47120");
var i, r, s, a, o, l, u, d, _ = n("392711"),
  c = n.n(_),
  E = n("913527"),
  I = n.n(E),
  T = n("137920"),
  f = n("689938");
let S = 4,
  h = "ClanSetupModal",
  A = "ClanSettingsModal",
  m = 20,
  N = 30,
  p = 24,
  O = 12,
  C = 300,
  R = 3,
  g = 5;
I()("2024-01-01T00:00:00");
let L = "",
  v = ["cozy", "crunchy", "chaos"];

function D(e) {
  switch (e) {
    case T.ClanPlaystyles.SOCIAL:
      return f.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
    case T.ClanPlaystyles.CASUAL:
      return f.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
    case T.ClanPlaystyles.COMPETITIVE:
      return f.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
    case T.ClanPlaystyles.VERY_HARDCORE:
      return f.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
    case T.ClanPlaystyles.CREATIVE:
    case T.ClanPlaystyles.NONE:
    default:
      return null
  }
}

function M() {
  return {
    [T.ClanPlaystyles.SOCIAL]: {
      type: T.ClanPlaystyles.SOCIAL,
      emoji: "\uD83D\uDC4B",
      title: f.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
      subtitle: f.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
    },
    [T.ClanPlaystyles.CASUAL]: {
      type: T.ClanPlaystyles.CASUAL,
      emoji: "\uD83C\uDFAE",
      title: f.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
      subtitle: f.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
    },
    [T.ClanPlaystyles.COMPETITIVE]: {
      type: T.ClanPlaystyles.COMPETITIVE,
      emoji: "⚔️",
      title: f.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
      subtitle: f.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
    },
    [T.ClanPlaystyles.VERY_HARDCORE]: {
      type: T.ClanPlaystyles.VERY_HARDCORE,
      emoji: "\uD83D\uDC80",
      title: f.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
      subtitle: f.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
    }
  }
}(o = i || (i = {}))[o.GAMES = 0] = "GAMES", o[o.PLAYSTYLE = 1] = "PLAYSTYLE", o[o.UTILITY_TRAITS = 2] = "UTILITY_TRAITS", o[o.INTERESTS = 3] = "INTERESTS", o[o.DESCRIPTION = 4] = "DESCRIPTION", o[o.CUSTOMIZE_TAG_BADGE = 5] = "CUSTOMIZE_TAG_BADGE", o[o.CUSTOMIZE_BANNER = 6] = "CUSTOMIZE_BANNER", o[o.MEMBER_APPLICATION = 7] = "MEMBER_APPLICATION";
let y = "700136079562375258",
  P = "762434991303950386",
  U = ["Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF", "Unrated", "All Ranks", "Bronze+", "Silver+", "Gold+", "Platinum+", "Diamond+"],
  b = ["Server: NA", "Server: EU", "Server: Asia", "Server: TW/HK/MO", "Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "F2P", "Spenders", "Co-op", "Support"],
  G = new Set([...U, ...b]),
  w = ["20+", "30+", "40+", "All Ages"],
  k = ["Beginner Friendly", "PUGs", "Inclusive", "Parent Friendly", "Work-life Balance", "Streamers"],
  B = new Set([...U, ...w, ...k]),
  V = new Set(["Bulgarian", "Chinese (Simplified)", "Chinese (Traditional)", "Croatian", "Czech", "Danish", "Dutch", "English", "Finnish", "French", "German", "Greek", "Hindi", "Hungarian", "Italian", "Japanese", "Korean", "Lithuanian", "Norwegian", "Polish", "Portuguese", "Romanian", "Russian", "Spanish", "Swedish", "Thai", "Turkish", "Ukrainian", "Vietnamese"]);

function x(e) {
  return !B.has(e) && !H.has(e) && !V.has(e)
}

function F(e, t) {
  var n;
  return c().sortBy(e, (n = t, e => -(((null == n ? void 0 : n.includes(e)) ? 1 : 0) << 4 | (x(e) ? 1 : 0) << 3 | (G.has(e) ? 1 : 0) << 2 | (w.includes(e) ? 1 : 0) << 1 | (k.includes(e) ? 1 : 0) << 0)))
}
let H = new Set(["anime", "fanart", "venting", "movie nights", "pirate shows", "skincare", "microwaved food", "board games", "sci-fi books", "sleeping", "brunch pics", "pet pics", "recipes", "speedrunning", "eating on mic", "k-pop", "deafened", "programming", "study buddies", "DnD", "lore dumping", "sleepy cats", "podcasts", "houseplants", "knitting", "tech", "keyboards", "horses", "bad movies", "hiking", "lo-fi chilling", "watch together", "listen alongs", "late night tacos", "drip", "trading", "travel", "cups", "coffee", "F1", "roman history", "ssense doomscrolling", "skibidi toilet", "capcut editing", "tiktok rizz party", "industrial grade glycine", "frutiger aero", "y2k", "sanrio", "nuzlockes", "small form factor pcs", "esports", "game modding", "chiikawa", "underground rap", "pc music", "homestuck", "horse hoof cleaning", "analog horror", "pimple popping", "asmr", "ya fiction", "fanfiction", "cosplay", "fanart", "zines", "vtubers", "jrpgs", "retro gaming", "collecting", "coquette", "true crime", "critical role", "cottagecore", "goblincore", "renfaire", "letterboxd"]);

function Y() {
  let e = Object.keys(r).filter(e => isNaN(Number(e)));
  return r[e[Math.round(Math.random() * e.length - 1)]]
}(l = r || (r = {}))[l.NIGHT_SKY = 0] = "NIGHT_SKY", l[l.CASTLE = 1] = "CASTLE", l[l.WORLD_MAP = 2] = "WORLD_MAP", l[l.SEA_FOAM = 3] = "SEA_FOAM", l[l.WARP_TUNNEL = 4] = "WARP_TUNNEL", l[l.HOUSE = 5] = "HOUSE", l[l.HEIGHTMAP = 6] = "HEIGHTMAP", l[l.MESH = 7] = "MESH", l[l.SPATTER = 8] = "SPATTER", (u = s || (s = {})).BOULDER = "Boulder", u.CASCADE = "Cascade", u.THUNDER = "Thunder", u.SOUL = "Soul", u.MARSH = "Marsh", u.VOLCANO = "Volcano", u.EARTH = "Earth", u.ZEPHYR = "Zephyr";
let j = [{
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
  W = j[0].primary,
  K = j[0].secondary,
  z = Object.fromEntries(j.map(e => [e.name, {
    primary: e.primary,
    secondary: e.secondary
  }]));

function Z() {
  return j[Math.floor(Math.random() * j.length)]
}

function X(e) {
  return null == e ? null : "identityGuildId" in e ? e : {
    identityGuildId: e.identity_guild_id,
    identityEnabled: e.identity_enabled,
    tag: e.tag,
    badge: e.badge
  }
}

function Q(e) {
  return {
    tag: e.tag
  }
}
let q = {
    AGE_OF_EMPIRES_2: "720771660768084008",
    VALORANT: "700136079562375258",
    HELLDIVERS_2: "1205090671527071784",
    APEX: "542075586886107149",
    LETHAL_COMPANY: "1167674267748540516",
    SIMS_4: "359509007423242240",
    ROBLOX: "363445589247131668",
    BALDURS_GATE_3: "1137125502985961543",
    AIMLAB: "506950362461110273",
    HONKAI_STAR_RAIL: "1121201675240210523"
  },
  J = new Map(["432980957394370572", "363445589247131668", "356869127241072640", "700136079562375258", "356875570916753438", "1158877933042143272", "1197827812623650866", "356876176465199104", "1167674267748540516", "542075586886107149", "356875221078245376", "1149118246826561609", "356877880938070016", "356875988589740042", "762434991303950386", "356873622985506820", "356876590342340608", "1205090671527071784", "1182713227491147776", "631914894446297148", "1137125502985961543", "357607478105604096", "359509007423242240", "1121201675240210523", "643897785271189524", "742897755160313986", "356888738724446208", "1199745463918788740", "1116835216464543946", "406637848297472017", "356888961353908224", "905961880789590076", "367827983903490050", "356944273133928458", "356942674672091136", "946609449680908348", "356875762940379136", "615752773690064908", "357607133254254632", "356943499456937984", "477175586805252107", "787443973538971748", "359508713658253318", "356877880938070016", "422772752647323649", "356954277803065354", "359509387670192128", "428055627030331402", "363447565905166336", "372438022647578634", "614380482620293151", "506950362461110273", "356879032584896512", "1161772875901051042", "535371564850479134", "363413743335374859", "385538724592746496", "426526722322726912", "1174041358995042375", "1124351876033425529", "477152881196269569", "1113966530531704943", "425778010222886912", "356875890958925834", "1124358970618953818", "356888577310851072", "398632010442211348", "1124349969906815007", "770314100885422095", "1080277149623271444", "428054228511227914", "358420454764969994", "358421669603311616", "363430548028522496", "1129504162200166401", "1200228630245159032", "356889262362329098", "356887282982191114", "363409643973771264", "1164697075582238730", "940810636273795162", "982316905262120990", "359510095811444736", "363411421553360896", "359509332490059776", "1162076274622222346", "1162085521816813721", "359507724196773888", "359801269008859136", "569253958967885828", "457301824110723113", "1140238527980916757", "1124353632758939688", "542075586886107149", "512699108809637890", "653432003798106122"].map((e, t, n) => [e, n.length - t]));
(d = a || (a = {}))[d.SIZE_12 = 12] = "SIZE_12", d[d.SIZE_16 = 16] = "SIZE_16", d[d.SIZE_24 = 24] = "SIZE_24", d[d.SIZE_32 = 32] = "SIZE_32", d[d.SIZE_36 = 36] = "SIZE_36"