"use strict";
a.r(t), a.d(t, {
  useGuildHasLiveChannelNotice: function() {
    return u
  }
});
var n = a("442837"),
  s = a("427679"),
  l = a("517334"),
  i = a("592125"),
  r = a("151864"),
  o = a("554747");

function u(e) {
  var t;
  let a = (0, l.default)(e),
    u = i.default.getChannel(null === (t = a[0]) || void 0 === t ? void 0 : t.id),
    d = (0, n.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(null == u ? void 0 : u.id), [u]),
    c = (0, o.useGuildActiveEvent)(e),
    {
      isStageNoticeHidden: f,
      isEventNoticeHidden: E
    } = (0, n.useStateFromStoresObject)([r.default], () => ({
      isStageNoticeHidden: r.default.isLiveChannelNoticeHidden({
        stageId: null == d ? void 0 : d.id
      }),
      isEventNoticeHidden: r.default.isLiveChannelNoticeHidden({
        eventId: null == c ? void 0 : c.id
      })
    }), [d, c]);
  if (null != c) return null != d ? !f : !E;
  return null != d && !f
}