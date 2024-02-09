"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var u = n("913144"),
  r = {
    startTyping(e) {
      u.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: e
      })
    },
    stopTyping(e) {
      u.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: e
      })
    }
  }