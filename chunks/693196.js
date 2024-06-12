"use strict";
n.r(t), n.d(t, {
  getBlockForChannelAlteration: function() {
    return d
  }
});
var l = n("526120"),
  u = n("563534"),
  i = n("734893"),
  a = n("931261");
async function d(e, t) {
  if (null == e || !(0, a.canSeeOnboardingHome)(e)) return;
  let n = u.default.getSettings(e);
  if (n === u.NO_SETTINGS && (await (0, l.fetchGuildHomeSettings)(e), n = u.default.getSettings(e)), n !== u.NO_SETTINGS && null != n) {
    if (null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t)) return i.ChannelEditBlockTypes.TODO;
    if (null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t)) return i.ChannelEditBlockTypes.RESOURCE
  }
}