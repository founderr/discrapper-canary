"use strict";
E.r(s), E.d(s, {
  getGenreText: function() {
    return N
  },
  getReadablePreorderReleaseDate: function() {
    return n
  },
  getSKUIdFromURL: function() {
    return T
  }
}), E("757143"), E("47120");
var r = E("913527"),
  _ = E.n(r),
  A = E("266067");
E("358085"), E("73346");
var a = E("981631"),
  I = E("689938");
let R = {},
  t = {},
  O = Object.freeze({
    ALL: -1,
    ...a.SKUGenres
  });

function T(e) {
  let s = (0, A.matchPath)(e, {
    path: a.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != s ? s.params.skuId : null
}

function N(e) {
  switch (e) {
    case a.SKUGenres.ACTION:
      return I.default.Messages.APPLICATION_STORE_GENRE_ACTION;
    case a.SKUGenres.ACTION_RPG:
      return I.default.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
    case a.SKUGenres.BRAWLER:
      return I.default.Messages.APPLICATION_STORE_GENRE_BRAWLER;
    case a.SKUGenres.HACK_AND_SLASH:
      return I.default.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
    case a.SKUGenres.PLATFORMER:
      return I.default.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
    case a.SKUGenres.STEALTH:
      return I.default.Messages.APPLICATION_STORE_GENRE_STEALTH;
    case a.SKUGenres.SURVIVAL:
      return I.default.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
    case a.SKUGenres.ADVENTURE:
      return I.default.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
    case a.SKUGenres.ACTION_ADVENTURE:
      return I.default.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
    case a.SKUGenres.METROIDVANIA:
      return I.default.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
    case a.SKUGenres.OPEN_WORLD:
      return I.default.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
    case a.SKUGenres.PSYCHOLOGICAL_HORROR:
      return I.default.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
    case a.SKUGenres.SANDBOX:
      return I.default.Messages.APPLICATION_STORE_GENRE_SANDBOX;
    case a.SKUGenres.SURVIVAL_HORROR:
      return I.default.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
    case a.SKUGenres.VISUAL_NOVEL:
      return I.default.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
    case a.SKUGenres.DRIVING_RACING:
      return I.default.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
    case a.SKUGenres.VEHICULAR_COMBAT:
      return I.default.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
    case a.SKUGenres.MASSIVELY_MULTIPLAYER:
      return I.default.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
    case a.SKUGenres.MMORPG:
      return I.default.Messages.APPLICATION_STORE_GENRE_MMORPG;
    case a.SKUGenres.ROLE_PLAYING:
      return I.default.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
    case a.SKUGenres.DUNGEON_CRAWLER:
      return I.default.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
    case a.SKUGenres.ROGUELIKE:
      return I.default.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
    case a.SKUGenres.SHOOTER:
      return I.default.Messages.APPLICATION_STORE_GENRE_SHOOTER;
    case a.SKUGenres.LIGHT_GUN:
      return I.default.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
    case a.SKUGenres.SHOOT_EM_UP:
      return I.default.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
    case a.SKUGenres.FPS:
      return I.default.Messages.APPLICATION_STORE_GENRE_FPS;
    case a.SKUGenres.DUAL_JOYSTICK_SHOOTER:
      return I.default.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
    case a.SKUGenres.SIMULATION:
      return I.default.Messages.APPLICATION_STORE_GENRE_SIMULATION;
    case a.SKUGenres.FLIGHT_SIMULATOR:
      return I.default.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
    case a.SKUGenres.TRAIN_SIMULATOR:
      return I.default.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
    case a.SKUGenres.LIFE_SIMULATOR:
      return I.default.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
    case a.SKUGenres.FISHING:
      return I.default.Messages.APPLICATION_STORE_GENRE_FISHING;
    case a.SKUGenres.SPORTS:
      return I.default.Messages.APPLICATION_STORE_GENRE_SPORTS;
    case a.SKUGenres.BASEBALL:
      return I.default.Messages.APPLICATION_STORE_GENRE_BASEBALL;
    case a.SKUGenres.BASKETBALL:
      return I.default.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
    case a.SKUGenres.BILLIARDS:
      return I.default.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
    case a.SKUGenres.BOWLING:
      return I.default.Messages.APPLICATION_STORE_GENRE_BOWLING;
    case a.SKUGenres.BOXING:
      return I.default.Messages.APPLICATION_STORE_GENRE_BOXING;
    case a.SKUGenres.FOOTBALL:
      return I.default.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
    case a.SKUGenres.GOLF:
      return I.default.Messages.APPLICATION_STORE_GENRE_GOLF;
    case a.SKUGenres.HOCKEY:
      return I.default.Messages.APPLICATION_STORE_GENRE_HOCKEY;
    case a.SKUGenres.SKATEBOARDING_SKATING:
      return I.default.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
    case a.SKUGenres.SNOWBOARDING_SKIING:
      return I.default.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
    case a.SKUGenres.SOCCER:
      return I.default.Messages.APPLICATION_STORE_GENRE_SOCCER;
    case a.SKUGenres.TRACK_FIELD:
      return I.default.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
    case a.SKUGenres.SURFING_WAKEBOARDING:
      return I.default.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
    case a.SKUGenres.WRESTLING:
      return I.default.Messages.APPLICATION_STORE_GENRE_WRESTLING;
    case a.SKUGenres.STRATEGY:
      return I.default.Messages.APPLICATION_STORE_GENRE_STRATEGY;
    case a.SKUGenres.FOUR_X:
      return I.default.Messages.APPLICATION_STORE_GENRE_FOUR_X;
    case a.SKUGenres.ARTILLERY:
      return I.default.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
    case a.SKUGenres.RTS:
      return I.default.Messages.APPLICATION_STORE_GENRE_RTS;
    case a.SKUGenres.TOWER_DEFENSE:
      return I.default.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
    case a.SKUGenres.TURN_BASED_STRATEGY:
      return I.default.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
    case a.SKUGenres.WARGAME:
      return I.default.Messages.APPLICATION_STORE_GENRE_WARGAME;
    case a.SKUGenres.MOBA:
      return I.default.Messages.APPLICATION_STORE_GENRE_MOBA;
    case a.SKUGenres.FIGHTING:
      return I.default.Messages.APPLICATION_STORE_GENRE_FIGHTING;
    case a.SKUGenres.PUZZLE:
      return I.default.Messages.APPLICATION_STORE_GENRE_PUZZLE;
    case a.SKUGenres.CARD_GAME:
      return I.default.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
    case a.SKUGenres.EDUCATION:
      return I.default.Messages.APPLICATION_STORE_GENRE_EDUCATION;
    case a.SKUGenres.FITNESS:
      return I.default.Messages.APPLICATION_STORE_GENRE_FITNESS;
    case a.SKUGenres.GAMBLING:
      return I.default.Messages.APPLICATION_STORE_GENRE_GAMBLING;
    case a.SKUGenres.MUSIC_RHYTHM:
      return I.default.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
    case a.SKUGenres.PARTY_MINI_GAME:
      return I.default.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
    case a.SKUGenres.PINBALL:
      return I.default.Messages.APPLICATION_STORE_GENRE_PINBALL;
    case a.SKUGenres.TRIVIA_BOARD_GAME:
      return I.default.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
    case a.SKUGenres.TACTICAL:
      return I.default.Messages.APPLICATION_STORE_GENRE_TACTICAL;
    case a.SKUGenres.INDIE:
      return I.default.Messages.APPLICATION_STORE_GENRE_INDIE;
    case a.SKUGenres.ARCADE:
      return I.default.Messages.APPLICATION_STORE_GENRE_ARCADE;
    case a.SKUGenres.POINT_AND_CLICK:
      return I.default.Messages.APPLICATION_STORE_GENRE_POINT_AND_CLICK;
    default:
      return I.default.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS
  }
}
Object.keys(O).forEach(e => {
  let s = e.toLowerCase().replace(/_/g, "-"),
    E = O[e];
  R[s] = E, t[E] = s
});
let S = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"]
];

function n(e) {
  let {
    preorderReleaseAt: s,
    preorderApproximateReleaseDate: E
  } = e;
  if (null != s) return s.format("MMMM DD");
  if (null == E) return null;
  for (let e = 0; e < S.length; e++) {
    let [s, r] = S[e], A = _()(E, s, !0);
    if (A.isValid()) return A.format(r)
  }
  return E
}