"use strict";
s.r(t), s.d(t, {
  BACKUP_CODE_MIN_LENGTH: function() {
    return l
  },
  BACKUP_CODE_MAX_LENGTH: function() {
    return a
  },
  trySubmit: function() {
    return i
  }
}), s("70102");
var n = s("872717");
let l = 8,
  a = 11;
async function r(e) {
  let {
    ticket: t,
    mfaType: s,
    data: l
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  try {
    let e = await n.default.post({
      url: "/mfa/finish",
      body: {
        ticket: t,
        mfa_type: s,
        data: l
      },
      retries: a
    });
    return e.body
  } catch (e) {
    var r;
    if (null === (r = e.body) || void 0 === r ? void 0 : r.message) throw Error(e.body.message);
    throw e
  }
}
async function i(e, t) {
  let {
    token: s
  } = await r(e);
  return new Promise((e, n) => {
    t({
      "X-Discord-MFA-Authorization": s
    }, t => {
      var s, l;
      return (null === (s = t.body) || void 0 === s ? void 0 : s.code) === 60008 || (null === (l = t.body) || void 0 === l ? void 0 : l.code) === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1)
    })
  })
}