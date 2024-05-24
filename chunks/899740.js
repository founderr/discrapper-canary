"use strict";
n.r(t), n.d(t, {
  useMessageRequestsCount: function() {
    return d
  },
  useNewMessageRequestsCount: function() {
    return c
  }
});
var l = n("442837"),
  a = n("306680"),
  s = n("709054"),
  i = n("879041"),
  r = n("355298"),
  o = n("177033"),
  u = n("490897");

function d() {
  return (0, l.useStateFromStores)([r.default], () => r.default.getMessageRequestsCount())
}

function c() {
  let e = (0, i.useIsNewMessageRequestHomeCountEnabled)({
      location: "use-message-requests-count"
    }),
    t = (0, l.useStateFromStores)([a.default], () => a.default.getNonChannelAckId(u.ReadStateTypes.MESSAGE_REQUESTS)),
    n = (0, o.default)();
  return e ? n.filter(e => s.default.compare(e.channel.id, t) > 0).length : n.length
}