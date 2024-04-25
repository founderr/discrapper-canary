"use strict";
a.r(t), a.d(t, {
  useFakeDiscoveryClanForGuild: function() {
    return o
  }
});
var n = a("470079"),
  s = a("468194"),
  l = a("316553"),
  i = a("116175"),
  r = a("308083");

function o(e) {
  let {
    guild: t
  } = e, a = (0, l.useDiscoveryGameApplicationId)(), o = n.useMemo(() => null == a ? [] : [a], [a]);
  return n.useMemo(() => {
    var e;
    return {
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : "",
      memberCount: 0,
      games: o,
      playstyle: r.ClanPlaystyles.CASUAL,
      traits: [],
      tag: (0, s.getAcronym)(t.name),
      banner: r.ClanBannerKind.CUSTOM,
      badge: {
        badgeKind: i.ClanBadgeKind.SWORD,
        primaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].primary,
        secondaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary
      },
      branding: {
        primaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary,
        secondaryColor: r.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[r.ClanBrandPresets.SOUL].secondary
      },
      wildcardDescriptors: []
    }
  }, [o, t.description, t.icon, t.id, t.name])
}