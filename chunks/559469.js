"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryUpsellScreens: function() {
    return s
  },
  FAKE_DISCOVERY_UPSELL_CLANS: function() {
    return o
  }
});
var n, s, l = a("116175"),
  i = a("308083");

function r(e) {
  let {
    id: t,
    preset: a,
    banner: n
  } = e;
  return {
    id: t,
    name: "",
    description: "",
    memberCount: 0,
    games: [i.VALORANT_ID],
    playstyle: i.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    banner: n,
    badge: {
      badgeKind: l.ClanBadgeKind.SWORD,
      primaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    branding: {
      primaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    wildcardDescriptors: []
  }
}(n = s || (s = {})).ADMIN_UPSELL = "admin_upsell", n.USER_UPSELL = "user_upsell", n.USER_ONBOARDING = "user_onboarding";
let o = [r({
  id: "1",
  preset: i.ClanBrandPresets.ZEPHYR,
  banner: i.ClanBannerKind.TEXTURED
}), r({
  id: "2",
  preset: i.ClanBrandPresets.THUNDER,
  banner: i.ClanBannerKind.SCANLINES
}), r({
  id: "3",
  preset: i.ClanBrandPresets.MARSH,
  banner: i.ClanBannerKind.MAGIC
}), r({
  id: "4",
  preset: i.ClanBrandPresets.BOULDER,
  banner: i.ClanBannerKind.PIXEL_RUSH
}), r({
  id: "5",
  preset: i.ClanBrandPresets.SOUL,
  banner: i.ClanBannerKind.MAGIC
})]