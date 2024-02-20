"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return l
  },
  clearMessageRequestState: function() {
    return u
  },
  markAsMessageRequest: function() {
    return c
  },
  rejectMessageRequest: function() {
    return d
  },
  rejectMessageRequestBatch: function() {
    return N
  },
  fetchUserCountryCode: function() {
    return I
  }
});
var n = s("872717"),
  a = s("913144"),
  o = s("437822"),
  r = s("773163"),
  i = s("49111");
async function l(e) {
  await n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), a.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function u(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function c(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function d(e) {
  return n.default.delete({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function N(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function I() {
  o.default.getLocationMetadata()
}