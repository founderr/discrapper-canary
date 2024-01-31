"use strict";
l.r(t), l.d(t, {
  isInMembersTablesAdditionalFilteringExperiment: function() {
    return s
  },
  useIsInMembersTablesAdditionalFilteringExperiment: function() {
    return i
  }
});
var a = l("862205");
let n = (0, a.createExperiment)({
    kind: "guild",
    id: "2024-01_guild_members_table_additional_filtering",
    label: "Guild Members Table Additional Filtering",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Additional filtering enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: l = !1,
      location: a = "f03bed_10"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: s
    } = n.getCurrentConfig({
      guildId: e,
      location: a
    }, {
      autoTrackExposure: t,
      disable: l
    });
    return s
  },
  i = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: l = !1,
      location: a = "f03bed_10"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: s
    } = n.useExperiment({
      guildId: e,
      location: a
    }, {
      autoTrackExposure: t,
      disable: l
    });
    return s
  }