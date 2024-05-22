"use strict";
s.r(t), s.d(t, {
  deleteWebAuthnCredential: function() {
    return d
  },
  editWebAuthnCredential: function() {
    return u
  },
  fetchWebAuthnConditionalChallenge: function() {
    return i
  },
  fetchWebAuthnCredentials: function() {
    return o
  },
  fetchWebAuthnPasswordlessChallenge: function() {
    return r
  },
  finishRegisterWebAuthnCredential: function() {
    return S
  },
  startRegisterWebAuthnCredential: function() {
    return c
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("981631");
async function i() {
  return (await a.HTTP.post(l.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
}
async function r() {
  return (await a.HTTP.post(l.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body
}

function o() {
  n.default.dispatch({
    type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
  }), a.HTTP.get(l.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
    n.default.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function d(e) {
  a.HTTP.del(l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
    n.default.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function u(e, t) {
  let s = await a.HTTP.patch({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    }
  });
  n.default.dispatch({
    type: "AUTHENTICATOR_UPDATE",
    credential: s.body
  })
}
async function c() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await a.HTTP.post({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {}
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function S(e, t, s) {
  let i = await a.HTTP.post({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: s
    }
  });
  n.default.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: i.body
  }), n.default.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: i.body.backup_codes
  })
}