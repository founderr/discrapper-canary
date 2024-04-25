"use strict";
a.r(t), a.d(t, {
  FAKE_DISCOVERY_UPSELL_CLANS: function() {
    return i
  }
});
var n = a("116175"),
  s = a("308083");

function l(e) {
  let {
    id: t,
    preset: a,
    banner: l
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
    banner: l,
    badge: {
      badgeKind: n.ClanBadgeKind.SWORD,
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    branding: {
      primaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: s.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    wildcardDescriptors: []
  }
}
let i = [l({
  id: "1",
  preset: s.ClanBrandPresets.ZEPHYR,
  banner: s.ClanBannerKind.TEXTURED
}), l({
  id: "2",
  preset: s.ClanBrandPresets.THUNDER,
  banner: s.ClanBannerKind.SCANLINES
}), l({
  id: "3",
  preset: s.ClanBrandPresets.MARSH,
  banner: s.ClanBannerKind.MAGIC
}), l({
  id: "4",
  preset: s.ClanBrandPresets.BOULDER,
  banner: s.ClanBannerKind.PIXEL_RUSH
}), l({
  id: "5",
  preset: s.ClanBrandPresets.SOUL,
  banner: s.ClanBannerKind.MAGIC
})]