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
    guild: t,
    selectedGame: a
  } = e, o = (0, l.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), u = n.useMemo(() => null == o ? [] : [o], [o]);
  return n.useMemo(() => {
    var e;
    return null == t ? null : {
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : "",
      memberCount: 0,
      games: u,
      playstyle: r.ClanPlaystyles.CASUAL,
      traits: [],
      tag: (0, s.getAcronym)(t.name),
      banner: r.ClanBannerKind.WARP_TUNNEL,
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
  }, [u, t])
}