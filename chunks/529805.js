"use strict";
n.r(e), n.d(e, {
  createPendingReply: function() {
    return i
  },
  setPendingReplyShouldMention: function() {
    return r
  },
  deletePendingReply: function() {
    return a
  }
});
var u = n("913144");

function i(t) {
  let {
    message: e,
    channel: n,
    shouldMention: i,
    showMentionToggle: r,
    source: a
  } = t;
  u.default.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: e,
    channel: n,
    shouldMention: i,
    showMentionToggle: r,
    source: a
  })
}

function r(t, e) {
  u.default.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: t,
    shouldMention: e
  })
}

function a(t) {
  u.default.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: t
  })
}