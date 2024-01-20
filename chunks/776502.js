"use strict";
n.r(t), n.d(t, {
  mapError: function() {
    return o
  },
  openMFAModal: function() {
    return u
  }
}), n("70102"), n("581081");
var i = n("872717"),
  s = n("695501"),
  r = n("49111"),
  a = n("782340");

function o(e) {
  let t = a.default.Messages.MFA_V2_INVALID_CODE;
  switch (e) {
    case "webauthn":
      t = a.default.Messages.MFA_V2_INVALID_WEBAUTHN;
      break;
    case "password":
      t = a.default.Messages.MFA_V2_INVALID_PASSWORD
  }
  return t
}
async function l(e) {
  let {
    ticket: t,
    mfaType: n,
    data: s
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
    let e = await i.default.post({
      url: r.Endpoints.FINISH_MFA_CHECK,
      body: {
        ticket: t,
        mfa_type: n,
        data: s
      },
      retries: a
    });
    return e.body
  } catch (e) {
    var l;
    if ((null === (l = e.body) || void 0 === l ? void 0 : l.code) === r.AbortCodes.MFA_INVALID_CODE) throw Error(o(n));
    throw e
  }
}

function u(e, t, i) {
  let a = async e => {
    let n = await l(e),
      i = {
        "X-Discord-MFA-Authorization": n.token
      };
    return new Promise((n, s) => {
      t(i, (t, i, a) => {
        var l, u;
        return (null === (l = t.body) || void 0 === l ? void 0 : l.code) === r.AbortCodes.MFA_INVALID_CODE || (null === (u = t.body) || void 0 === u ? void 0 : u.code) === r.AbortCodes.MFA_REQUIRED ? (s(Error(o(e.mfaType))), !0) : (n(), !1)
      })
    })
  };
  e.methods = e.methods.filter(e => Object.hasOwn(s.SELECT_NAMES, e.type)), n("24287").openMFAModal(e, a, i)
}