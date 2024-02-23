"use strict";
n.r(t), n.d(t, {
  ChangePhoneReason: function() {
    return i
  },
  default: function() {
    return f
  }
});
var r, i, s = n("759843"),
  o = n("872717"),
  a = n("913144"),
  l = n("271938"),
  u = n("840707"),
  c = n("482931"),
  d = n("49111");
(r = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync";
var f = {
  setCountryCode(e) {
    a.default.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => o.default.delete({
    url: d.Endpoints.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: !0
  }),
  resendCode(e) {
    let t = {},
      n = l.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), o.default.post({
      url: d.Endpoints.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      }
    })
  },
  beginAddPhone: (e, t) => o.default.post({
    url: d.Endpoints.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  addPhone: (e, t, n) => o.default.post({
    url: d.Endpoints.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  addPhoneWithoutPassword: e => o.default.post({
    url: d.Endpoints.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    }
  }),
  beginReverifyPhone: (e, t) => o.default.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  reverifyPhone: (e, t, n) => o.default.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  validatePhoneForSupport: e => o.default.post({
    url: d.Endpoints.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = {},
      o = l.default.getFingerprint();
    null != o && "" !== o && (i["X-Fingerprint"] = o), r && (i.authorization = "");
    let f = await u.default.post({
      url: d.Endpoints.VERIFY_PHONE,
      headers: i,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: s.NetworkActionNames.USER_VERIFY_PHONE
      }
    });
    return n && a.default.dispatch({
      type: "MODAL_POP",
      key: c.PHONE_VERIFICATION_MODAL_KEY
    }), f.body
  }
}