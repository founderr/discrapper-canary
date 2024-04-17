"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return o
  },
  transitionToPage: function() {
    return u
  }
});
var s = n("481060"),
  i = n("475179"),
  l = n("925549"),
  r = n("905423"),
  a = n("981631");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, s.hasAnyModalOpen)() && (n && l.default.channelListScrollTo(e, t), o && null != t && i.default.updateChatOpen(t, !0), r.default.getState().updatePath(a.Routes.CHANNEL(e, t)))
}

function u(e) {
  !(0, s.hasAnyModalOpen)() && r.default.getState().updatePath(e)
}