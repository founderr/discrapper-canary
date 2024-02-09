"use strict";
n.r(t), n.d(t, {
  acceptMessageRequest: function() {
    return o
  },
  clearMessageRequestState: function() {
    return u
  },
  markAsMessageRequest: function() {
    return d
  },
  rejectMessageRequest: function() {
    return c
  },
  rejectMessageRequestBatch: function() {
    return f
  },
  fetchUserCountryCode: function() {
    return h
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("437822"),
  i = n("773163"),
  r = n("49111");
async function o(e) {
  await s.default.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), a.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function u(e) {
  return s.default.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function d(e) {
  return s.default.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: i.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function c(e) {
  return s.default.delete({
    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function f(e) {
  return s.default.put({
    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function h() {
  l.default.getLocationMetadata()
}