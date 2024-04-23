"use strict";
n.r(t), n.d(t, {
  acceptMessageRequest: function() {
    return o
  },
  clearMessageRequestState: function() {
    return l
  },
  fetchUserCountryCode: function() {
    return T
  },
  markAsMessageRequest: function() {
    return d
  },
  rejectMessageRequest: function() {
    return E
  },
  rejectMessageRequestBatch: function() {
    return c
  }
});
var a = n("544891"),
  r = n("570140"),
  i = n("893776"),
  s = n("290323"),
  u = n("981631");
async function o(e) {
  await a.HTTP.put({
    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), r.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function l(e) {
  return a.HTTP.put({
    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function d(e) {
  return a.HTTP.put({
    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function E(e) {
  return a.HTTP.del({
    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function c(e) {
  return a.HTTP.put({
    url: u.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function T() {
  i.default.getLocationMetadata()
}