"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return o
  },
  transitionToPage: function() {
    return u
  }
});
var i = n("481060"),
  r = n("475179"),
  a = n("925549"),
  l = n("905423"),
  s = n("981631");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, i.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), o && null != t && r.default.updateChatOpen(t, !0), l.default.getState().updatePath(s.Routes.CHANNEL(e, t)))
}

function u(e) {
  !(0, i.hasAnyModalOpen)() && l.default.getState().updatePath(e)
}