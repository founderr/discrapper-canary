"use strict";
l.r(t), l.d(t, {
  getBlockForChannelAlteration: function() {
    return r
  }
});
var s = l("526120"),
  a = l("563534"),
  n = l("734893"),
  d = l("931261");
async function r(e, t) {
  if (null == e || !(0, d.canSeeOnboardingHome)(e)) return;
  let l = a.default.getSettings(e);
  if (l === a.NO_SETTINGS && (await (0, s.fetchGuildHomeSettings)(e), l = a.default.getSettings(e)), l !== a.NO_SETTINGS && null != l) {
    if (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t)) return n.ChannelEditBlockTypes.TODO;
    if (null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t)) return n.ChannelEditBlockTypes.RESOURCE
  }
}