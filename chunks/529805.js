"use strict";
x.r(t), x.d(t, {
  createPendingReply: function() {
    return a
  },
  setPendingReplyShouldMention: function() {
    return o
  },
  deletePendingReply: function() {
    return y
  }
});
var s = x("913144");

function a(i) {
  let {
    message: t,
    channel: x,
    shouldMention: a,
    showMentionToggle: o,
    source: y
  } = i;
  s.default.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: t,
    channel: x,
    shouldMention: a,
    showMentionToggle: o,
    source: y
  })
}

function o(i, t) {
  s.default.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: i,
    shouldMention: t
  })
}

function y(i) {
  s.default.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: i
  })
}