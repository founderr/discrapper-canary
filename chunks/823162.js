"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return l
  },
  clearMessageRequestState: function() {
    return u
  },
  fetchUserCountryCode: function() {
    return T
  },
  markAsMessageRequest: function() {
    return c
  },
  rejectMessageRequest: function() {
    return S
  },
  rejectMessageRequestBatch: function() {
    return E
  }
});
var i = s("544891"),
  n = s("570140"),
  r = s("893776"),
  a = s("290323"),
  d = s("981631");
async function l(e) {
  await i.HTTP.put({
    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), n.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function u(e) {
  return i.HTTP.put({
    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function c(e) {
  return i.HTTP.put({
    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function S(e) {
  return i.HTTP.del({
    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function E(e) {
  return i.HTTP.put({
    url: d.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function T() {
  r.default.getLocationMetadata()
}