var l = n(570140);
t.Z = {
  search(e, t) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: e,
      channelId: t
    })
  },
  clear(e) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: "",
      channelId: e
    })
  },
  select(e) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
      row: e
    })
  },
  addUser(e) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
      userId: e
    })
  },
  removeUser(e) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
      userId: e
    })
  },
  open(e) {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
      channelId: e
    })
  },
  close() {
    l.Z.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE"
    })
  }
}