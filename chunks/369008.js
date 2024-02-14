"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("913144"),
  a = {
    search(e, t) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
        query: e,
        channelId: t
      })
    },
    clear(e) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
        query: "",
        channelId: e
      })
    },
    select(e) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
        row: e
      })
    },
    addUser(e) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
        userId: e
      })
    },
    removeUser(e) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
        userId: e
      })
    },
    open(e) {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
        channelId: e
      })
    },
    close() {
      l.default.dispatch({
        type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE"
      })
    }
  }