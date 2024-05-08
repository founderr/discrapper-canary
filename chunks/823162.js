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
    return E
  },
  rejectMessageRequestBatch: function() {
    return c
  }
});
var r = n("544891"),
  a = n("570140"),
  i = n("893776"),
  s = n("290323"),
  o = n("981631");
async function u(e) {
  await r.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), a.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function l(e) {
  return r.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function d(e) {
  return r.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function E(e) {
  return r.HTTP.del({
    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function c(e) {
  return r.HTTP.put({
    url: o.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function T() {
  i.default.getLocationMetadata()
}