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
  l = n("475179"),
  a = n("925549"),
  i = n("905423"),
  r = n("981631");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, s.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), o && null != t && l.default.updateChatOpen(t, !0), i.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
}

function u(e) {
  !(0, s.hasAnyModalOpen)() && i.default.getState().updatePath(e)
}