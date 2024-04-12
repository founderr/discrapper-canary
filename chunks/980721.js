"use strict";
n.r(t), n.d(t, {
  buildClanFromServer: function() {
    return r
  },
  getClanDiscoveryAffinity: function() {
    return d
  },
  isLoadedSearchResult: function() {
    return o
  },
  isUnloadedSearchResult: function() {
    return u
  }
}), n("536091");
var a = n("924801"),
  s = n("854698"),
  l = n("116175"),
  i = n("308083");

function r(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    memberCount: e.member_count,
    games: e.game_ids,
    playstyle: e.playstyle,
    traits: e.search_terms,
    primetime: e.primetime,
    tag: e.tag,
    badge: {
      badgeKind: l.ClanBadgeKind.SWORD,
      primaryColor: "#FF69B4",
      secondaryColor: "#FF69B4"
    },
    branding: {
      primaryColor: "#FF69B4",
      secondaryColor: "#FF69B4"
    },
    location: i.PLACEHOLDER_CLAN_LOCATION,
    language: i.PLACEHOLDER_CLAN_LANGUAGE
  }
}

function o(e) {
  return "loaded" === e.status
}

function u(e) {
  return "unloaded" === e.status
}

function d(e, t) {
  let n = 0;
  if (null != t.games && (n += 2 * t.games.filter(t => e.games.includes(t)).length), null != t.playstyle && (t.playstyle === e.playstyle ? n += 2 : i.PLAYSTYLE_GROUPS[e.playstyle] === i.PLAYSTYLE_GROUPS[t.playstyle] && (n += 1)), null != t.traits && (n += 2 * Array.from(t.traits).filter(t => e.traits.includes(t)).length), null != t.primetimes) {
    let l = e.primetime.map(e => (0, s.getRRule)(e).between(new Date, new Date(Date.now() + 6048e5))).flat();
    n += 2 * (0, a.getTimeRangesInNextWeek)(t.primetimes).filter(e => l.some(t => e.start.subtract(1).isBefore(t) && e.end.add(1).isAfter(t))).length
  }
  return n
}