"use strict";
n.r(t), n.d(t, {
  getEventChannelsByType: function() {
    return s
  },
  useGetEventChannelsByType: function() {
    return r
  }
}), n("222007"), n("424973");
var l = n("446674"),
  a = n("817963");
n("834052");
var i = n("923959");

function s(e, t) {
  let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default];
  if (null == t) return [];
  let l = n.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY],
    s = [];
  for (let {
      channel: e
    }
    of l) {
    let {
      canCreateGuildEvent: n,
      canManageAllEvents: l
    } = (0, a.getManageResourcePermissions)(e), i = n || l;
    e.type === t && (e.isGuildVoice() && i ? s.push(e) : e.isGuildStageVoice() && i && s.push(e))
  }
  return s
}

function r(e, t) {
  return (0, l.useStateFromStoresArray)([i.default], () => s(e, t, [i.default]), [e, t])
}
n("957255"), n("270161")