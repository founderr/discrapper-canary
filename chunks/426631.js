"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("446674"),
  a = n("191225");

function s(e) {
  let {
    channelId: t
  } = e;
  return (0, l.useStateFromStores)([a.default], () => a.default.getEmbeddedActivitiesForChannel(t).some(e => e.userIds.size > 0))
}