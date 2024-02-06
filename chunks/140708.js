"use strict";
i.r(t), i.d(t, {
  addReactionPickerAnimation: function() {
    return s
  },
  clearReactionPickerAnimation: function() {
    return l
  }
});
var n = i("913144");

function s(e, t, i, s) {
  n.default.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
    messageId: e,
    emojiName: t,
    emojiId: i,
    startPosition: s
  })
}

function l(e, t, i) {
  n.default.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
    messageId: e,
    emojiName: t,
    emojiId: i
  })
}