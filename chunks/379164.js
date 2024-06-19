var l = n(570140),
  i = n(447543),
  s = n(782605);
t.Z = {
  acceptInvite(e) {
    let t = i.Z.getInviteContext("Desktop Invite Modal", e);
    i.Z.acceptInvite({
      inviteKey: e.code,
      context: t,
      callback: e => {
        null != e && null != e.guild && null != e.channel && !__OVERLAY__ && i.Z.transitionToInvite(e)
      }
    }).then(() => this.close(), e => {
      l.Z.dispatch({
        type: "INVITE_MODAL_ERROR",
        message: (0, s.O)(e.code)
      })
    })
  },
  close() {
    l.Z.dispatch({
      type: "INVITE_MODAL_CLOSE"
    })
  }
}