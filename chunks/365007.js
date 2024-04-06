"use strict";
s.r(t), s.d(t, {
  deleteWebAuthnCredential: function() {
    return o
  },
  editWebAuthnCredential: function() {
    return d
  },
  fetchWebAuthnConditionalChallenge: function() {
    return l
  },
  fetchWebAuthnCredentials: function() {
    return u
  },
  fetchWebAuthnPasswordlessChallenge: function() {
    return r
  },
  finishRegisterWebAuthnCredential: function() {
    return E
  },
  startRegisterWebAuthnCredential: function() {
    return c
  }
});
var a = s("544891"),
  n = s("570140"),
  i = s("981631");
async function l() {
  return (await a.HTTP.post(i.Endpoints.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body
}
async function r() {
  return (await a.HTTP.post(i.Endpoints.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body
}

function u() {
  n.default.dispatch({
    type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
  }), a.HTTP.get(i.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
    n.default.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function o(e) {
  a.HTTP.del(i.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
    n.default.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function d(e, t) {
  let s = await a.HTTP.patch({
    url: i.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
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
    url: i.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {}
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function E(e, t, s) {
  let l = await a.HTTP.post({
    url: i.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: s
    }
  });
  n.default.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: l.body
  }), n.default.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: l.body.backup_codes
  })
}