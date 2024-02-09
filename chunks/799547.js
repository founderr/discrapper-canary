"use strict";
n.r(t), n.d(t, {
  getEventChannelsByType: function() {
    return r
  },
  useGetEventChannelsByType: function() {
    return i
  }
}), n("222007"), n("424973");
var l = n("446674"),
  a = n("817963");
n("834052");
var s = n("923959");

function r(e, t) {
  let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
  if (null == t) return [];
  let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
    r = [];
  for (let {
      channel: e
    }
    of l) {
    let {
      canCreateGuildEvent: n,
      canManageAllEvents: l
    } = (0, a.getManageResourcePermissions)(e), s = n || l;
    e.type === t && (e.isGuildVoice() && s ? r.push(e) : e.isGuildStageVoice() && s && r.push(e))
  }
  return r
}

function i(e, t) {
  return (0, l.useStateFromStoresArray)([s.default], () => r(e, t, [s.default]), [e, t])
}
n("957255"), n("270161")