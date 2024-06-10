"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return u
  },
  clearMessageRequestState: function() {
    return l
  },
  fetchUserCountryCode: function() {
    return _
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
  d = s("290323"),
  a = s("981631");
async function u(e) {
  await i.HTTP.put({
    url: a.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: d.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), n.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function l(e) {
  return i.HTTP.put({
    url: a.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: d.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function c(e) {
  return i.HTTP.put({
    url: a.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: d.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function S(e) {
  return i.HTTP.del({
    url: a.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function E(e) {
  return i.HTTP.put({
    url: a.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function _() {
  r.default.getLocationMetadata()
}