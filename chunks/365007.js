"use strict";
n.r(t), n.d(t, {
  deleteWebAuthnCredential: function() {
    return u
  },
  editWebAuthnCredential: function() {
    return d
  },
  fetchWebAuthnConditionalChallenge: function() {
    return a
  },
  fetchWebAuthnCredentials: function() {
    return l
  },
  fetchWebAuthnPasswordlessChallenge: function() {
    return o
  },
  finishRegisterWebAuthnCredential: function() {
    return c
  },
  startRegisterWebAuthnCredential: function() {
    return _
  }
});
var i = n("544891"),
  r = n("570140"),
  s = n("981631");
async function a() {
  return (await i.HTTP.post(s.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
}
async function o() {
  let {
    challenge: e,
    ticket: t
  } = (await i.HTTP.post(s.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body;
  return {
    challenge: e,
    ticket: t
  }
}

function l() {
  r.default.dispatch({
    type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
  }), i.HTTP.get(s.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
    r.default.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function u(e) {
  i.HTTP.del(s.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
    r.default.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function d(e, t) {
  let n = await i.HTTP.patch({
    url: s.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    }
  });
  r.default.dispatch({
    type: "AUTHENTICATOR_UPDATE",
    credential: n.body
  })
}
async function _() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await i.HTTP.post({
    url: s.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {}
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function c(e, t, n) {
  let a = await i.HTTP.post({
    url: s.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: n
    }
  });
  r.default.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: a.body
  }), r.default.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: a.body.backup_codes
  })
}