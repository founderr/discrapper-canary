"use strict";
n.r(e), n.d(e, {
  createPendingReply: function() {
    return r
  },
  setPendingReplyShouldMention: function() {
    return i
  },
  deletePendingReply: function() {
    return a
  }
});
var u = n("913144");

function r(t) {
  let {
    message: e,
    channel: n,
    shouldMention: r,
    showMentionToggle: i,
    source: a
  } = t;
  u.default.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: e,
    channel: n,
    shouldMention: r,
    showMentionToggle: i,
    source: a
  })
}

function i(t, e) {
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