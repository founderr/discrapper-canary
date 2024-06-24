n.d(t, {
  K: function() {
    return o
  },
  z: function() {
    return c
  }
});
var s = n(481060),
  i = n(475179),
  l = n(925549),
  a = n(905423),
  r = n(981631);

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!(0, s.hasAnyModalOpen)()) n && l.Z.channelListScrollTo(e, t), o && null != t && i.Z.updateChatOpen(t, !0), a.Z.getState().updatePath(r.Z5c.CHANNEL(e, t))
}

function c(e) {
  if (!(0, s.hasAnyModalOpen)()) a.Z.getState().updatePath(e)
}