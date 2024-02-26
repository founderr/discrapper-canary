"use strict";
s.r(t), s.d(t, {
  acceptMessageRequest: function() {
    return l
  },
  clearMessageRequestState: function() {
    return u
  },
  markAsMessageRequest: function() {
    return _
  },
  rejectMessageRequest: function() {
    return c
  },
  rejectMessageRequestBatch: function() {
    return d
  },
  fetchUserCountryCode: function() {
    return E
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

function _(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: r.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function c(e) {
  return n.default.delete({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function d(e) {
  return n.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function E() {
  o.default.getLocationMetadata()
}