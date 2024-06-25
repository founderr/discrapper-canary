t.d(n, {
  Xy: function() {
    return N
  },
  e4: function() {
    return c
  },
  gN: function() {
    return l
  },
  hi: function() {
    return I
  },
  qR: function() {
    return E
  },
  r_: function() {
    return u
  }
});
var s = t(544891),
  o = t(570140),
  r = t(893776),
  a = t(290323),
  i = t(981631);
async function c(e) {
  await s.tn.put({
    url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.h.ACCEPTED
    }
  }), o.Z.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function E(e) {
  return s.tn.put({
    url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.h.UNSPECIFIED
    }
  })
}

function N(e) {
  return s.tn.put({
    url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.h.PENDING
    }
  })
}

function l(e) {
  return s.tn.del({
    url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function u(e) {
  return s.tn.put({
    url: i.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function I() {
  r.Z.getLocationMetadata()
}