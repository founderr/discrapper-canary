"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryUpsellClans: function() {
    return r
  }
});
var a = n("470079"),
  s = n("116175"),
  l = n("308083");

function i(e) {
  let {
    id: t,
    gameId: n,
    preset: a,
    banner: i,
    ...r
  } = e, o = function() {
    let e = Object.keys(s.ClanBadgeKind).filter(e => isNaN(Number(e))),
      t = e[Math.round(Math.random() * e.length - 1)];
    return s.ClanBadgeKind[t]
  }();
  return {
    id: t,
    name: "",
    description: "",
    memberCount: 0,
    games: [n],
    playstyle: l.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    banner: i,
    badge: {
      badgeKind: o,
      primaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    branding: {
      primaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: l.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    wildcardDescriptors: [],
    ...r
  }
}

function r(e) {
  return a.useMemo(() => [i({
    id: "1",
    gameId: e,
    preset: l.ClanBrandPresets.ZEPHYR,
    banner: l.ClanBannerKind.WORLD_MAP
  }), i({
    id: "2",
    gameId: e,
    preset: l.ClanBrandPresets.THUNDER,
    banner: l.ClanBannerKind.CASTLE
  }), i({
    id: "3",
    gameId: e,
    preset: l.ClanBrandPresets.MARSH,
    banner: l.ClanBannerKind.HOUSE
  }), i({
    id: "4",
    gameId: e,
    preset: l.ClanBrandPresets.SOUL,
    banner: l.ClanBannerKind.SEA_FOAM
  }), i({
    id: "5",
    gameId: e,
    preset: l.ClanBrandPresets.CASCADE,
    banner: l.ClanBannerKind.NIGHT_SKY
  })], [e])
}