var s = n(570140);
t.Z = {
  disableFalsePositiveButton: function(e, t) {
    s.Z.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: t,
      channelId: e
    })
  }
}