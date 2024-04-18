"use strict";
a.r(t), a.d(t, {
  getPartyMetadata: function() {
    return l
  }
});
var n = a("603113"),
  s = a("122810");

function l(e) {
  return {
    af_voice_chat: e.voiceChannels.length > 0,
    af_people_count: e.partiedMembers.length,
    af_rich_presence: e.currentActivities.some(e => {
      let {
        activity: t
      } = e;
      return (0, s.default)(t)
    }),
    game_platform: e.currentActivities.length > 0 ? (0, n.default)(e.currentActivities[0].activity) : null
  }
}