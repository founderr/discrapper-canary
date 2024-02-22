"use strict";
l.r(t), l.d(t, {
  isIFrameModalForGuildEnabled: function() {
    return s
  }
});
var n = l("862205"),
  a = l("49111");
let u = (0, n.createExperiment)({
  kind: "guild",
  id: "2023-08_iframe_modal_guild",
  label: "iFrame Modal guild experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iFrame Modal Guild",
    config: {
      enabled: !0
    }
  }]
});

function s(e) {
  return u.getCurrentConfig({
    guildId: null != e ? e : a.EMPTY_STRING_GUILD_ID,
    location: "2d360b_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}