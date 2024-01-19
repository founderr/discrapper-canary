"use strict";
n.r(t), n.d(t, {
  acceptMessageRequest: function() {
    return d
  },
  clearMessageRequestState: function() {
    return r
  },
  markAsMessageRequest: function() {
    return o
  },
  rejectMessageRequest: function() {
    return E
  },
  rejectMessageRequestBatch: function() {
    return f
  },
  fetchUserCountryCode: function() {
    return c
  }
});
var a = n("872717"),
  u = n("913144"),
  s = n("437822"),
  l = n("773163"),
  i = n("49111");
async function d(e) {
  await a.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: l.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), u.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function r(e) {
  return a.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: l.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function o(e) {
  return a.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: l.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function E(e) {
  return a.default.delete({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function f(e) {
  return a.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function c() {
  s.default.getLocationMetadata()
}