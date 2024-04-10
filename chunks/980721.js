"use strict";

function a(e) {
  return {
    id: e.id,
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

function s(e) {
  return "loaded" === e.status
}

function l(e) {
  return "unloaded" === e.status
}
n.r(t), n.d(t, {
  buildClanFromServer: function() {
    return a
  },
  isLoadedSearchResult: function() {
    return s
  },
  isUnloadedSearchResult: function() {
    return l
  }
})