n.d(t, {
  m: function() {
    return c
  }
});
var s = n(442837),
  i = n(427679),
  l = n(517334),
  a = n(592125),
  r = n(151864),
  o = n(554747);

function c(e) {
  var t;
  let n = (0, l.ZP)(e),
    c = a.Z.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
    u = (0, s.e7)([i.Z], () => i.Z.getStageInstanceByChannel(null == c ? void 0 : c.id), [c]),
    d = (0, o.k5)(e),
    {
      isStageNoticeHidden: E,
      isEventNoticeHidden: h
    } = (0, s.cj)([r.Z], () => ({
      isStageNoticeHidden: r.Z.isLiveChannelNoticeHidden({
        stageId: null == u ? void 0 : u.id
      }),
      isEventNoticeHidden: r.Z.isLiveChannelNoticeHidden({
        eventId: null == d ? void 0 : d.id
      })
    }), [u, d]);
  if (null != d) return null != u ? !E : !h;
  return null != u && !E
}