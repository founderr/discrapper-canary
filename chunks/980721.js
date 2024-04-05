"use strict";
n.r(t), n.d(t, {
  GENSHIN_ID: function() {
    return s
  },
  VALORANT_ID: function() {
    return a
  },
  buildClanFromServer: function() {
    return l
  },
  isLoadedSearchResult: function() {
    return i
  },
  isUnloadedSearchResult: function() {
    return r
  }
});
let a = "700136079562375258",
  s = "762434991303950386";

function l(e) {
  return {
    id: "1",
    name: e.name,
    description: e.description,
    memberCount: e.member_count,
    games: e.game_ids,
    playstyle: e.playstyle,
    traits: e.search_terms,
    primetime: {
      start: 20,
      end: 24
    },
    branding: {
      primaryColor: "#FF69B4"
    },
    location: "United States",
    language: "English"
  }
}

function i(e) {
  return "loaded" === e.status
}

function r(e) {
  return "unloaded" === e.status
}