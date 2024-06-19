t.d(n, {
  Xy: function() {
    return c
  },
  e4: function() {
    return o
  },
  gN: function() {
    return d
  },
  hi: function() {
    return I
  },
  qR: function() {
    return u
  },
  r_: function() {
    return _
  }
});
var i = t(544891),
  l = t(570140),
  s = t(893776),
  r = t(290323),
  a = t(981631);
async function o(e) {
  await i.tn.put({
    url: a.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.h.ACCEPTED
    }
  }), l.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function u(e) {
  return i.tn.put({
    url: a.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.h.UNSPECIFIED
    }
  })
}

function c(e) {
  return i.tn.put({
    url: a.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.h.PENDING
    }
  })
}

function d(e) {
  return i.tn.del({
    url: a.ANM.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function _(e) {
  return i.tn.put({
    url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function I() {
  s.Z.getLocationMetadata()
}