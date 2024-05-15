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
    icon: null,
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
    wildcardDescriptors: l.CLAN_WILDCARD_PLACEHOLDERS,
    ...r
  }
}

function r(e) {
  return a.useMemo(() => [i({
    id: "1239910082150400001",
    icon: "bea185f5c9dbde7ba2f0c50363c16ec6",
    gameId: e,
    preset: l.ClanBrandPresets.VOLCANO,
    banner: l.ClanBannerKind.WORLD_MAP,
    name: "Retro Rebels",
    description: "Are you a console collector? Rare game curator? Be a rebel and join us in celebrating retro gaming classics \uD83D\uDE0E",
    tag: "RR",
    wildcardDescriptors: ["collector", "nostalgia", "classic"],
    traits: ["30+", "Inclusive", "cooking", "podcasts", "hiking"],
    memberCount: 98
  }), i({
    id: "1239910082150400002",
    icon: "fe5e3c39b398965133d24d3c5d72b06c",
    gameId: e,
    preset: l.ClanBrandPresets.THUNDER,
    banner: l.ClanBannerKind.CASTLE,
    name: "the lofi tavern",
    description: "~ hosting chill beats and study rooms every night ~ join the tavern to kick back and meet other cozy gamers ~",
    tag: "MUSE",
    wildcardDescriptors: ["creative", "harmony", "nightowl"],
    traits: ["Streamers", "study buddies", "sleepy cats", "lo-fi chilling"],
    memberCount: 112
  }), i({
    id: "1239910082150400003",
    icon: "fc7bdf17dadd9a59014fc2a41dd88613",
    gameId: e,
    preset: l.ClanBrandPresets.MARSH,
    banner: l.ClanBannerKind.WARP_TUNNEL,
    name: "midnight tacos",
    description: "gamers and doritos tacos enthusiasts pls apply",
    tag: "CHZZ",
    wildcardDescriptors: ["crunchy", "chaotic", "gamba"],
    traits: ["20+", "Streamers", "ranking bottled water", "late night tacos", "voice chat", "anime"],
    memberCount: 45
  }), i({
    id: "1239910082150400004",
    icon: "7b7a2a06e7852e7cdb7f301fb86c3e18",
    gameId: e,
    preset: l.ClanBrandPresets.EARTH,
    banner: l.ClanBannerKind.SEA_FOAM,
    name: "Eco ELO",
    description: "If you like growing plants or gardening, in game and IRL, then this is the place for you! Welcome home \uD83C\uDF31 \uD83D\uDC9A",
    tag: "eco",
    wildcardDescriptors: ["ecofriendly", "explorers", "advocates"],
    traits: ["20+", "Inclusive", "PUGs", "board games", "going outside", "PvP", "the stalk market", "growing stuff"],
    memberCount: 32
  }), i({
    id: "1239910082150400005",
    icon: "5ca93390d20f7b96a0f0c3702fceec8e",
    gameId: e,
    preset: l.ClanBrandPresets.CASCADE,
    banner: l.ClanBannerKind.NIGHT_SKY,
    name: "Moewtopia",
    description: "the purrfect place for a pawsitive and hissterical time :D are you kitten me...i feline like that’s too many puns...",
    tag: "meow",
    wildcardDescriptors: ["Meow", "Meow", "Meow"],
    traits: ["All Ages", "Streamers", "Parent Friendly", "sleepy cats", "DnD", "travel", "catnaps"],
    memberCount: 94
  })], [e])
}