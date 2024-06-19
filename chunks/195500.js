var s = n(570140);
t.Z = {
  clearRemoteDisconnectVoiceChannelId() {
    s.Z.dispatch({
      type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID"
    })
  },
  clearLastSessionVoiceChannelId() {
    s.Z.dispatch({
      type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID"
    })
  }
}