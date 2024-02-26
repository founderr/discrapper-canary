"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("913144"),
  l = {
    startTyping(e) {
      i.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: e
      })
    },
    stopTyping(e) {
      i.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: e
      })
    }
  }