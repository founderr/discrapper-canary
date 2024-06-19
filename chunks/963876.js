var l = n(570140);
t.Z = {
  setCallChatToastsEnabled(e, t) {
    l.Z.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}