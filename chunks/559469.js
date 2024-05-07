"use strict";
n.r(t), n.d(t, {
  FAKE_DISCOVERY_UPSELL_CLANS: function() {
    return l
  }
});
var a = n("116175"),
  s = n("308083");

function i(e) {
  let {
    id: t,
    preset: n,
    banner: i
  } = e;
  return {
    id: t,
    name: "",
    description: "",
    memberCount: 0,
    games: [s.VALORANT_ID],
    playstyle: s.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    banner: i,
    badge: {
      badgeKind: a.ClanBadgeKind.SWORD,
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    branding: {
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[n].secondary
    },
    wildcardDescriptors: []
  }
}
let l = [i({
  id: "1",
  preset: s.ClanBrandPresets.ZEPHYR,
  banner: s.ClanBannerKind.WORLD_MAP
}), i({
  id: "2",
  preset: s.ClanBrandPresets.THUNDER,
  banner: s.ClanBannerKind.CASTLE
}), i({
  id: "3",
  preset: s.ClanBrandPresets.MARSH,
  banner: s.ClanBannerKind.SEA_FOAM
}), i({
  id: "4",
  preset: s.ClanBrandPresets.BOULDER,
  banner: s.ClanBannerKind.NIGHT_SKY
}), i({
  id: "5",
  preset: s.ClanBrandPresets.SOUL,
  banner: s.ClanBannerKind.SEA_FOAM
})]