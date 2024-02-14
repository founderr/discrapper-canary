"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("913144"),
  a = {
    setCallChatToastsEnabled(e, t) {
      l.default.dispatch({
        type: "CALL_CHAT_TOASTS_SET_ENABLED",
        channelId: e,
        toastsEnabled: t
      })
    }
  }