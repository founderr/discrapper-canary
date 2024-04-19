"use strict";
a.r(t), a.d(t, {
  ClanGuildExperiment: function() {
    return l
  }
});
var n = a("818083"),
  s = a("308083");
let l = (0, n.createExperiment)({
  kind: "guild",
  id: "2024-04_clan_guilds",
  label: "Clans guild experiment",
  defaultConfig: {
    enableClanCreation: !1,
    defaultGameId: null
  },
  treatments: [{
    id: 1,
    label: "Show Guild Creation entrypoint - Generic",
    config: {
      enableClanCreation: !0,
      defaultGameId: null
    }
  }, {
    id: 2,
    label: "Show Guild Creation entrypoint - Valorant",
    config: {
      enableClanCreation: !0,
      defaultGameId: s.VALORANT_ID
    }
  }, {
    id: 3,
    label: "Show Guild Creation entrypoint - Genshin Impact",
    config: {
      enableClanCreation: !0,
      defaultGameId: s.GENSHIN_ID
    }
  }]
})