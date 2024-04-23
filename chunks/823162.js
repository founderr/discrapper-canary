"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return l
  },
  clearMessageRequestState: function() {
    return u
  },
  fetchUserCountryCode: function() {
    return E
  },
  markAsMessageRequest: function() {
    return c
  },
  rejectMessageRequest: function() {
    return S
  },
  rejectMessageRequestBatch: function() {
    return o
  }
});
var i = s("544891"),
  d = s("570140"),
  n = s("893776"),
  a = s("290323"),
  r = s("981631");
async function l(e) {
  await i.HTTP.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), d.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function u(e) {
  return i.HTTP.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function c(e) {
  return i.HTTP.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: a.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function S(e) {
  return i.HTTP.del({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function o(e) {
  return i.HTTP.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function E() {
  n.default.getLocationMetadata()
}