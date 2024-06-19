n.d(t, {
  GG: function() {
    return r
  },
  R2: function() {
    return a
  },
  h7: function() {
    return i
  },
  rh: function() {
    return s
  }
});
var l = n(570140);

function i(e, t) {
  return new Promise(n => {
    setTimeout(() => {
      l.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        resolve: n
      })
    }, 0)
  })
}

function s(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function r(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function a(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}