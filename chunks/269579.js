"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2024-02_emoji_suggestions",
  label: "Emoji Suggestions Experiment",
  defaultConfig: {
    isEmojiSuggestionsEnabled: !1,
    isEmojiCaptionsEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enables Emoji Suggestions without Captions",
    config: {
      isEmojiSuggestionsEnabled: !0,
      isEmojiCaptionsEnabled: !1
    }
  }, {
    id: 2,
    label: "Enables Emoji Suggestions with Captions",
    config: {
      isEmojiSuggestionsEnabled: !0,
      isEmojiCaptionsEnabled: !0
    }
  }]
});
var l = a