"use strict";
n.r(t), n.d(t, {
  ChangePhoneReason: function() {
    return r
  },
  default: function() {
    return f
  }
});
var i, r, o = n("759843"),
  s = n("872717"),
  l = n("913144"),
  a = n("271938"),
  u = n("840707"),
  c = n("482931"),
  d = n("49111");
(i = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required", i.USER_SETTINGS_UPDATE = "user_settings_update", i.GUILD_PHONE_REQUIRED = "guild_phone_required", i.MFA_PHONE_UPDATE = "mfa_phone_update", i.CONTACT_SYNC = "contact_sync";
var f = {
  setCountryCode(e) {
    l.default.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => s.default.delete({
    url: d.Endpoints.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: !0
  }),
  resendCode(e) {
    let t = {},
      n = a.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), s.default.post({
      url: d.Endpoints.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      }
    })
  },
  beginAddPhone: (e, t) => s.default.post({
    url: d.Endpoints.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  addPhone: (e, t, n) => s.default.post({
    url: d.Endpoints.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  addPhoneWithoutPassword: e => s.default.post({
    url: d.Endpoints.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    }
  }),
  beginReverifyPhone: (e, t) => s.default.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  reverifyPhone: (e, t, n) => s.default.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  validatePhoneForSupport: e => s.default.post({
    url: d.Endpoints.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      r = {},
      s = a.default.getFingerprint();
    null != s && "" !== s && (r["X-Fingerprint"] = s), i && (r.authorization = "");
    let f = await u.default.post({
      url: d.Endpoints.VERIFY_PHONE,
      headers: r,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_VERIFY_PHONE
      }
    });
    return n && l.default.dispatch({
      type: "MODAL_POP",
      key: c.PHONE_VERIFICATION_MODAL_KEY
    }), f.body
  }
}