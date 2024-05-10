"use strict";
n.r(t), n.d(t, {
  useGuildHasLiveChannelNotice: function() {
    return u
  }
});
var a = n("442837"),
  s = n("427679"),
  i = n("517334"),
  l = n("592125"),
  r = n("151864"),
  o = n("554747");

function u(e) {
  var t;
  let n = (0, i.default)(e),
    u = l.default.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
    d = (0, a.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(null == u ? void 0 : u.id), [u]),
    c = (0, o.useGuildActiveEvent)(e),
    {
      isStageNoticeHidden: f,
      isEventNoticeHidden: E
    } = (0, a.useStateFromStoresObject)([r.default], () => ({
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