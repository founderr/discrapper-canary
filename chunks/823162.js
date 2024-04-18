"use strict";
n.r(t), n.d(t, {
  acceptMessageRequest: function() {
    return u
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
    return c
  },
  rejectMessageRequestBatch: function() {
    return E
  }
});
var a = n("544891"),
  i = n("570140"),
  r = n("893776"),
  s = n("290323"),
  o = n("981631");
async function u(e) {
  await a.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), i.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function l(e) {
  return a.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function d(e) {
  return a.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function c(e) {
  return a.HTTP.del({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function E(e) {
  return a.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function T() {
  r.default.getLocationMetadata()
}