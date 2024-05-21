"use strict";
n.r(t);
let l = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_clientside_recently_online_desktop",
  label: "Recently Online Clientside Desktop",
  defaultConfig: {
    isFriendsAndDMsEnabled: !1,
    isGuildMemberListEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Friends/DMs Only",
    config: {
      isFriendsAndDMsEnabled: !0,
      isGuildMemberListEnabled: !1
    }
  }, {
    id: 2,
    label: "Guild Member List Only",
    config: {
      isFriendsAndDMsEnabled: !1,
      isGuildMemberListEnabled: !0
    }
  }, {
    id: 3,
    label: "Friends/DMs and Guild Member List",
    config: {
      isFriendsAndDMsEnabled: !0,
      isGuildMemberListEnabled: !0
    }
  }]
});
t.default = l