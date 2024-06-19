n.d(t, {
  _: function() {
    return a
  }
});
var l = n(442837),
  i = n(897473),
  s = n(433355);

function a() {
  let e = (0, l.e7)([s.ZP], () => s.ZP.getSidebarState(s.uZ)),
    t = (null == e ? void 0 : e.type) === i.tI.VIEW_MESSAGE_REQUEST ? e : null,
    n = null == t ? void 0 : t.channelId;
  return {
    channelId: n,
    hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === i.Ff.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
  }
}