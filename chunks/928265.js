"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("913144"),
  a = {
    viewPrompt: function(e, t) {
      l.default.wait(() => {
        l.default.dispatch({
          type: "GUILD_PROMPT_VIEWED",
          prompt: e,
          guildId: t
        })
      })
    }
  }