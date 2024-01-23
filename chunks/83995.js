"use strict";
n.r(t), n.d(t, {
  PollsExperiment: function() {
    return i
  },
  PollsUserExperiment: function() {
    return r
  }
});
var a, l, s = n("862205");
(a = l || (l = {}))[a.MEDIA_VIEWER = 0] = "MEDIA_VIEWER", a[a.OMNI_BUTTON = 1] = "OMNI_BUTTON";
let i = (0, s.createExperiment)({
    kind: "guild",
    id: "2023-09_guild_polls",
    label: "Polls",
    defaultConfig: {
      enabled: !1,
      mobileEntryPoint: 1
    },
    treatments: [{
      id: 1,
      label: "Enables creation of polls from the media picker",
      config: {
        enabled: !0,
        mobileEntryPoint: 0
      }
    }, {
      id: 2,
      label: "Enables creation of polls from the omni button",
      config: {
        enabled: !0,
        mobileEntryPoint: 1
      }
    }]
  }),
  r = (0, s.createExperiment)({
    kind: "user",
    id: "2023-10_poll_users",
    label: "Polls User Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enables poll messages",
      config: {
        enabled: !0
      }
    }]
  })