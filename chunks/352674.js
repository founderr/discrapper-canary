"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
});
var i = n("913144"),
  u = {
    startTyping(t) {
      i.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: t
      })
    },
    stopTyping(t) {
      i.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: t
      })
    }
  }