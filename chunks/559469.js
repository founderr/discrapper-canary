"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryUpsellClans: function() {
    return r
  }
});
var a = n("470079"),
  s = n("116175"),
  i = n("308083");

function l(e) {
  let {
    id: t,
    gameId: n,
    preset: a,
    banner: l,
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
    playstyle: i.ClanPlaystyles.CASUAL,
    tag: "",
    traits: [],
    banner: l,
    badge: {
      badgeKind: o,
      primaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    branding: {
      primaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].primary,
      secondaryColor: i.CLAN_BRAND_PALETTE_PRESETS_BY_NAME[a].secondary
    },
    wildcardDescriptors: i.CLAN_WILDCARD_PLACEHOLDERS,
    ...r
  }
}

function r(e) {
  return a.useMemo(() => [l({
    id: "1239910082150400001",
    icon: "bea185f5c9dbde7ba2f0c50363c16ec6",
    gameId: e,
    preset: i.ClanBrandPresets.VOLCANO,
    banner: i.ClanBannerKind.WORLD_MAP,
    name: "Retro Rebels",
    description: "Reviving nostalgia, one pixel at a time. Join fellow rebels in celebrating retro gaming classics.",
    tag: "RR",
    wildcardDescriptors: ["retro", "nostalgia", "rebels"],
    traits: ["30+", "Inclusive", "cooking", "podcasts", "hiking"],
    memberCount: 98
  }), l({
    id: "1239910082150400002",
    icon: "fe5e3c39b398965133d24d3c5d72b06c",
    gameId: e,
    preset: i.ClanBrandPresets.THUNDER,
    banner: i.ClanBannerKind.CASTLE,
    name: "Midnight Musicians",
    description: "Jamming through the virtual night, where music and gaming collide in harmonious melodies.",
    tag: "MUSE",
    wildcardDescriptors: ["music", "harmony", "nightowl"],
    traits: ["All Ages", "Streamers", "study buddies", "sleepy cats", "lo-fi chilling"],
    memberCount: 112
  }), l({
    id: "1239910082150400003",
    icon: "fc7bdf17dadd9a59014fc2a41dd88613",
    gameId: e,
    preset: i.ClanBrandPresets.MARSH,
    banner: i.ClanBannerKind.WARP_TUNNEL,
    name: "Epic Gamer Squad",
    description: "Yo, welcome to the coolest Guild ever! We're all about epic gaming moments, memes, and chilling together like a bunch of boss gamers. Join us for some lit gaming sessions and mad vibes!",
    tag: "EPIC",
    wildcardDescriptors: ["epic", "lit", "boss"],
    traits: ["20+", "Streamers", "venting", "late night tacos", "voice chat", "anime"],
    memberCount: 45
  }), l({
    id: "1239910082150400004",
    icon: "7b7a2a06e7852e7cdb7f301fb86c3e18",
    gameId: e,
    preset: i.ClanBrandPresets.EARTH,
    banner: i.ClanBannerKind.SEA_FOAM,
    name: "Eco Explorers",
    description: "Green gaming enthusiasts, navigating virtual worlds while advocating for a sustainable future.",
    tag: "eco",
    wildcardDescriptors: ["ecofriendly", "explorers", "advocates"],
    traits: ["20+", "Inclusive", "PUGs", "board games", "pirate shows", "drip", "cups", "houseplants"],
    memberCount: 32
  }), l({
    id: "1239910082150400005",
    icon: "5ca93390d20f7b96a0f0c3702fceec8e",
    gameId: e,
    preset: i.ClanBrandPresets.CASCADE,
    banner: i.ClanBannerKind.NIGHT_SKY,
    name: "Moewtopia",
    description: "Welcome to the purrfect haven for gamers and cat lovers alike! Join our whiskered warriors as we embark on epic quests and cozy adventures.",
    tag: "meow",
    wildcardDescriptors: ["Whiskered", "Purrfect", "Cozy"],
    traits: ["All Ages", "Streamers", "Parent Friendly", "sleepy cats", "DnD", "travel", "sleeping"],
    memberCount: 94
  })], [e])
}