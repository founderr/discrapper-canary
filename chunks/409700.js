n.d(t, {
  I: function() {
    return o
  },
  g: function() {
    return d
  }
}), n(411104);
var s = n(544891),
  a = n(570140),
  i = n(981631),
  l = n(689938);

function r(e) {
  return null != e && null != e.body && a.Z.dispatch({
    type: "UPDATE_CONSENTS",
    consents: {
      ...e.body
    }
  }), e.body
}

function c(e) {
  let t;
  throw Error(t = e.status >= 500 && e.status <= 599 ? l.Z.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED : null != e && null != e.body && null != e.body.message ? e.body.message : l.Z.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED)
}

function o() {
  return s.tn.get({
    url: i.ANM.SETTINGS_CONSENT,
    oldFormErrors: !0
  }).then(r, e => Promise.reject(Error(e.body.message)))
}

function d(e, t) {
  return s.tn.post({
    url: i.ANM.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: !0
  }).then(r, c)
}