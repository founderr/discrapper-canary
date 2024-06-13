"use strict";
s.r(t), s.d(t, {
  getGenreText: function() {
    return _
  },
  getReadablePreorderReleaseDate: function() {
    return T
  },
  getSKUIdFromURL: function() {
    return c
  }
}), s("757143"), s("47120");
var n = s("913527"),
  r = s.n(n),
  a = s("266067");
s("358085"), s("73346");
var u = s("981631"),
  i = s("689938");
let l = {},
  E = {},
  o = Object.freeze({
    ALL: -1,
    ...u.SKUGenres
  });

function c(e) {
  let t = (0, a.matchPath)(e, {
    path: u.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}

function _(e) {
  switch (e) {
    case u.SKUGenres.ACTION:
      return i.default.Messages.APPLICATION_STORE_GENRE_ACTION;
    case u.SKUGenres.ACTION_RPG:
      return i.default.Messages.APPLICATION_STORE_GENRE_ACTION_RPG;
    case u.SKUGenres.BRAWLER:
      return i.default.Messages.APPLICATION_STORE_GENRE_BRAWLER;
    case u.SKUGenres.HACK_AND_SLASH:
      return i.default.Messages.APPLICATION_STORE_GENRE_HACK_AND_SLASH;
    case u.SKUGenres.PLATFORMER:
      return i.default.Messages.APPLICATION_STORE_GENRE_PLATFORMER;
    case u.SKUGenres.STEALTH:
      return i.default.Messages.APPLICATION_STORE_GENRE_STEALTH;
    case u.SKUGenres.SURVIVAL:
      return i.default.Messages.APPLICATION_STORE_GENRE_SURVIVAL;
    case u.SKUGenres.ADVENTURE:
      return i.default.Messages.APPLICATION_STORE_GENRE_ADVENTURE;
    case u.SKUGenres.ACTION_ADVENTURE:
      return i.default.Messages.APPLICATION_STORE_GENRE_ACTION_ADVENTURE;
    case u.SKUGenres.METROIDVANIA:
      return i.default.Messages.APPLICATION_STORE_GENRE_METROIDVANIA;
    case u.SKUGenres.OPEN_WORLD:
      return i.default.Messages.APPLICATION_STORE_GENRE_OPEN_WORLD;
    case u.SKUGenres.PSYCHOLOGICAL_HORROR:
      return i.default.Messages.APPLICATION_STORE_GENRE_PSYCHOLOGICAL_HORROR;
    case u.SKUGenres.SANDBOX:
      return i.default.Messages.APPLICATION_STORE_GENRE_SANDBOX;
    case u.SKUGenres.SURVIVAL_HORROR:
      return i.default.Messages.APPLICATION_STORE_GENRE_SURVIVAL_HORROR;
    case u.SKUGenres.VISUAL_NOVEL:
      return i.default.Messages.APPLICATION_STORE_GENRE_VISUAL_NOVEL;
    case u.SKUGenres.DRIVING_RACING:
      return i.default.Messages.APPLICATION_STORE_GENRE_DRIVING_RACING;
    case u.SKUGenres.VEHICULAR_COMBAT:
      return i.default.Messages.APPLICATION_STORE_GENRE_VEHICULAR_COMBAT;
    case u.SKUGenres.MASSIVELY_MULTIPLAYER:
      return i.default.Messages.APPLICATION_STORE_GENRE_MASSIVELY_MULTIPLAYER;
    case u.SKUGenres.MMORPG:
      return i.default.Messages.APPLICATION_STORE_GENRE_MMORPG;
    case u.SKUGenres.ROLE_PLAYING:
      return i.default.Messages.APPLICATION_STORE_GENRE_ROLE_PLAYING;
    case u.SKUGenres.DUNGEON_CRAWLER:
      return i.default.Messages.APPLICATION_STORE_GENRE_DUNGEON_CRAWLER;
    case u.SKUGenres.ROGUELIKE:
      return i.default.Messages.APPLICATION_STORE_GENRE_ROGUELIKE;
    case u.SKUGenres.SHOOTER:
      return i.default.Messages.APPLICATION_STORE_GENRE_SHOOTER;
    case u.SKUGenres.LIGHT_GUN:
      return i.default.Messages.APPLICATION_STORE_GENRE_LIGHT_GUN;
    case u.SKUGenres.SHOOT_EM_UP:
      return i.default.Messages.APPLICATION_STORE_GENRE_SHOOT_EM_UP;
    case u.SKUGenres.FPS:
      return i.default.Messages.APPLICATION_STORE_GENRE_FPS;
    case u.SKUGenres.DUAL_JOYSTICK_SHOOTER:
      return i.default.Messages.APPLICATION_STORE_GENRE_DUAL_JOYSTICK_SHOOTER;
    case u.SKUGenres.SIMULATION:
      return i.default.Messages.APPLICATION_STORE_GENRE_SIMULATION;
    case u.SKUGenres.FLIGHT_SIMULATOR:
      return i.default.Messages.APPLICATION_STORE_GENRE_FLIGHT_SIMULATOR;
    case u.SKUGenres.TRAIN_SIMULATOR:
      return i.default.Messages.APPLICATION_STORE_GENRE_TRAIN_SIMULATOR;
    case u.SKUGenres.LIFE_SIMULATOR:
      return i.default.Messages.APPLICATION_STORE_GENRE_LIFE_SIMULATOR;
    case u.SKUGenres.FISHING:
      return i.default.Messages.APPLICATION_STORE_GENRE_FISHING;
    case u.SKUGenres.SPORTS:
      return i.default.Messages.APPLICATION_STORE_GENRE_SPORTS;
    case u.SKUGenres.BASEBALL:
      return i.default.Messages.APPLICATION_STORE_GENRE_BASEBALL;
    case u.SKUGenres.BASKETBALL:
      return i.default.Messages.APPLICATION_STORE_GENRE_BASKETBALL;
    case u.SKUGenres.BILLIARDS:
      return i.default.Messages.APPLICATION_STORE_GENRE_BILLIARDS;
    case u.SKUGenres.BOWLING:
      return i.default.Messages.APPLICATION_STORE_GENRE_BOWLING;
    case u.SKUGenres.BOXING:
      return i.default.Messages.APPLICATION_STORE_GENRE_BOXING;
    case u.SKUGenres.FOOTBALL:
      return i.default.Messages.APPLICATION_STORE_GENRE_FOOTBALL;
    case u.SKUGenres.GOLF:
      return i.default.Messages.APPLICATION_STORE_GENRE_GOLF;
    case u.SKUGenres.HOCKEY:
      return i.default.Messages.APPLICATION_STORE_GENRE_HOCKEY;
    case u.SKUGenres.SKATEBOARDING_SKATING:
      return i.default.Messages.APPLICATION_STORE_GENRE_SKATEBOARDING_SKATING;
    case u.SKUGenres.SNOWBOARDING_SKIING:
      return i.default.Messages.APPLICATION_STORE_GENRE_SNOWBOARDING_SKIING;
    case u.SKUGenres.SOCCER:
      return i.default.Messages.APPLICATION_STORE_GENRE_SOCCER;
    case u.SKUGenres.TRACK_FIELD:
      return i.default.Messages.APPLICATION_STORE_GENRE_TRACK_FIELD;
    case u.SKUGenres.SURFING_WAKEBOARDING:
      return i.default.Messages.APPLICATION_STORE_GENRE_SURFING_WAKEBOARDING;
    case u.SKUGenres.WRESTLING:
      return i.default.Messages.APPLICATION_STORE_GENRE_WRESTLING;
    case u.SKUGenres.STRATEGY:
      return i.default.Messages.APPLICATION_STORE_GENRE_STRATEGY;
    case u.SKUGenres.FOUR_X:
      return i.default.Messages.APPLICATION_STORE_GENRE_FOUR_X;
    case u.SKUGenres.ARTILLERY:
      return i.default.Messages.APPLICATION_STORE_GENRE_ARTILLERY;
    case u.SKUGenres.RTS:
      return i.default.Messages.APPLICATION_STORE_GENRE_RTS;
    case u.SKUGenres.TOWER_DEFENSE:
      return i.default.Messages.APPLICATION_STORE_GENRE_TOWER_DEFENSE;
    case u.SKUGenres.TURN_BASED_STRATEGY:
      return i.default.Messages.APPLICATION_STORE_GENRE_TURN_BASED_STRATEGY;
    case u.SKUGenres.WARGAME:
      return i.default.Messages.APPLICATION_STORE_GENRE_WARGAME;
    case u.SKUGenres.MOBA:
      return i.default.Messages.APPLICATION_STORE_GENRE_MOBA;
    case u.SKUGenres.FIGHTING:
      return i.default.Messages.APPLICATION_STORE_GENRE_FIGHTING;
    case u.SKUGenres.PUZZLE:
      return i.default.Messages.APPLICATION_STORE_GENRE_PUZZLE;
    case u.SKUGenres.CARD_GAME:
      return i.default.Messages.APPLICATION_STORE_GENRE_CARD_GAME;
    case u.SKUGenres.EDUCATION:
      return i.default.Messages.APPLICATION_STORE_GENRE_EDUCATION;
    case u.SKUGenres.FITNESS:
      return i.default.Messages.APPLICATION_STORE_GENRE_FITNESS;
    case u.SKUGenres.GAMBLING:
      return i.default.Messages.APPLICATION_STORE_GENRE_GAMBLING;
    case u.SKUGenres.MUSIC_RHYTHM:
      return i.default.Messages.APPLICATION_STORE_GENRE_MUSIC_RHYTHM;
    case u.SKUGenres.PARTY_MINI_GAME:
      return i.default.Messages.APPLICATION_STORE_GENRE_PARTY_MINI_GAME;
    case u.SKUGenres.PINBALL:
      return i.default.Messages.APPLICATION_STORE_GENRE_PINBALL;
    case u.SKUGenres.TRIVIA_BOARD_GAME:
      return i.default.Messages.APPLICATION_STORE_GENRE_TRIVIA_BOARD_GAME;
    default:
      return i.default.Messages.APPLICATION_STORE_GENRE_MISCELLANEOUS
  }
}
Object.keys(o).forEach(e => {
  let t = e.toLowerCase().replace(/_/g, "-"),
    s = o[e];
  l[t] = s, E[s] = t
});
let d = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"]
];

function T(e) {
  let {
    preorderReleaseAt: t,
    preorderApproximateReleaseDate: s
  } = e;
  if (null != t) return t.format("MMMM DD");
  if (null == s) return null;
  for (let e = 0; e < d.length; e++) {
    let [t, n] = d[e], a = r()(s, t, !0);
    if (a.isValid()) return a.format(n)
  }
  return s
}