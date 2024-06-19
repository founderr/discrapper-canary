t.d(n, {
  Lb: function() {
    return l
  },
  gP: function() {
    return u
  },
  sF: function() {
    return a
  }
});
var i = t(626135),
  r = t(981631);

function l(e, n, t) {
  i.default.track(r.rMx.FORWARD_MESSAGE_STARTED, {
    channel_id: e,
    message_id: n,
    source: t
  })
}

function a(e, n) {
  i.default.track(r.rMx.FORWARD_MESSAGE_CANCELLED, {
    channel_id: e,
    message_id: n
  })
}

function u(e, n, t, l) {
  i.default.track(r.rMx.FORWARD_MESSAGE_SENT, {
    channel_id: e,
    message_id: n,
    has_error: t,
    num_destinations: l
  })
}