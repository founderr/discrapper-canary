"use strict";
n.r(t), n.d(t, {
  transitionToChannel: function() {
    return o
  },
  transitionToPage: function() {
    return s
  }
});
var i = n("481060"),
  a = n("475179"),
  l = n("925549"),
  r = n("905423"),
  u = n("981631");

function o(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  !(0, i.hasAnyModalOpen)() && (n && l.default.channelListScrollTo(e, t), o && null != t && a.default.updateChatOpen(t, !0), r.default.getState().updatePath(u.Routes.CHANNEL(e, t)))
}

function s(e) {
  !(0, i.hasAnyModalOpen)() && r.default.getState().updatePath(e)
}