"use strict";
s.r(t), s.d(t, {
  BACKUP_CODE_MAX_LENGTH: function() {
    return a
  },
  BACKUP_CODE_MIN_LENGTH: function() {
    return n
  },
  SMS_CODE_LENGTH: function() {
    return o
  },
  TOTP_CODE_LENGTH: function() {
    return i
  },
  trySubmit: function() {
    return u
  }
}), s("411104");
var l = s("544891");
let n = 8,
  a = 11,
  i = 6,
  o = 6;
async function r(e) {
  let {
    ticket: t,
    mfaType: s,
    data: n
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
    return (await l.HTTP.post({
      url: "/mfa/finish",
      body: {
        ticket: t,
        mfa_type: s,
        data: n
      },
      retries: a
    })).body
  } catch (e) {
    var i;
    if (null === (i = e.body) || void 0 === i ? void 0 : i.message) throw Error(e.body.message);
    throw e
  }
}
async function u(e, t) {
  let {
    token: s
  } = await r(e);
  return new Promise((e, l) => {
    t({
      "X-Discord-MFA-Authorization": s
    }, t => {
      var s, n;
      return (null === (s = t.body) || void 0 === s ? void 0 : s.code) === 60008 || (null === (n = t.body) || void 0 === n ? void 0 : n.code) === 60003 ? (l(Error(t.body.message)), !0) : (e(), !1)
    })
  })
}