"use strict";
s.r(t), s.d(t, {
  useSortedMemberApplications: function() {
    return r
  }
}), s("47120");
var a = s("470079"),
  l = s("442837"),
  i = s("826581"),
  n = s("246364");

function r(e) {
  let {
    guildId: t,
    applicationStatus: s,
    sortOrder: r
  } = e, u = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]);
  return {
    guildJoinRequests: a.useMemo(() => r === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...u].reverse() : u, [r, u])
  }
}