"use strict";
s.r(t), s.d(t, {
  fetchConsents: function() {
    return u
  },
  setConsents: function() {
    return d
  }
}), s("411104");
var a = s("544891"),
  n = s("570140"),
  l = s("981631"),
  i = s("689938");

function r(e) {
  return null != e && null != e.body && n.default.dispatch({
    type: "UPDATE_CONSENTS",
    consents: {
      ...e.body
    }
  }), e.body
}

function o(e) {
  let t;
  throw Error(t = e.status >= 500 && e.status <= 599 ? i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED : null != e && null != e.body && null != e.body.message ? e.body.message : i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED)
}

function u() {
  return a.HTTP.get({
    url: l.Endpoints.SETTINGS_CONSENT,
    oldFormErrors: !0
  }).then(r, e => Promise.reject(Error(e.body.message)))
}

function d(e, t) {
  return a.HTTP.post({
    url: l.Endpoints.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: !0
  }).then(r, o)
}