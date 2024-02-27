"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return _
  },
  clearMessageRequestState: function() {
    return l
  },
  markAsMessageRequest: function() {
    return u
  },
  rejectMessageRequest: function() {
    return E
  },
  rejectMessageRequestBatch: function() {
    return c
  },
  fetchUserCountryCode: function() {
    return d
  }
});
var n = s("872717"),
  a = s("913144"),
  o = s("437822"),
  r = s("773163"),
  i = s("49111");
async function _(e) {
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

function l(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function u(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function E(e) {
  return n.default.delete({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function c(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function d() {
  o.default.getLocationMetadata()
}