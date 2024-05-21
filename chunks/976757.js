"use strict";
n.r(t), n.d(t, {
  buildClanFromServer: function() {
    return s
  },
  isLoadedSearchResult: function() {
    return o
  }
}), n("945124");
var i = n("116175"),
  r = n("308083");

function a(e, t) {
  return void 0 === e || "" === e ? t : e
}

function s(e) {
  let t = (0, i.getRandomClanBadgePreset)(),
    n = (0, r.getRandomClanBrandPreset)();
  return {
    id: e.id,
    name: e.name,
    icon: e.icon_hash,
    description: e.description,
    memberCount: e.member_count,
    games: e.game_ids,
    playstyle: e.playstyle,
    traits: e.search_terms,
    tag: e.tag,
    banner: e.banner,
    bannerHash: e.banner_hash,
    badge: {
      badgeKind: e.badge,
      primaryColor: a(e.badge_color_primary, t.primary),
      secondaryColor: a(e.badge_color_secondary, t.secondary),
      imageHash: e.badge_hash
    },
    branding: {
      primaryColor: a(e.brand_color_primary, n.primary),
      secondaryColor: a(e.brand_color_secondary, n.secondary)
    },
    wildcardDescriptors: e.wildcard_descriptors
  }
}

function o(e) {
  return "loaded" === e.status
}