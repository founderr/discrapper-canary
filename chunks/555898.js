"use strict";
s.r(t), s.d(t, {
  useCanCustomizeGuildCollectibleItem: function() {
    return l
  }
});
var a = s("862205");
let n = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_per_guild_pfx",
  label: "Per-guild Profile Effects / Avatar Decoration Experiment",
  defaultConfig: {
    isEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      isEnabled: !0
    }
  }]
});

function l(e) {
  let {
    location: t
  } = e;
  return n.useExperiment({
    location: t
  }).isEnabled
}