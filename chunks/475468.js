t.d(e, {
  K: function() {
    return o
  },
  z: function() {
    return d
  }
});
var i = t(481060),
  l = t(475179),
  a = t(925549),
  u = t(905423),
  r = t(981631);

function o(n, e) {
  let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!(0, i.hasAnyModalOpen)()) t && a.Z.channelListScrollTo(n, e), o && null != e && l.Z.updateChatOpen(e, !0), u.Z.getState().updatePath(r.Z5c.CHANNEL(n, e))
}

function d(n) {
  if (!(0, i.hasAnyModalOpen)()) u.Z.getState().updatePath(n)
}