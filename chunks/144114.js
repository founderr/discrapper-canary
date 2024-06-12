"use strict";
n.r(t), n.d(t, {
  ChangePhoneReason: function() {
    return s
  }
});
var r, s, a = n("990547"),
  l = n("544891"),
  i = n("570140"),
  o = n("314897"),
  u = n("573261"),
  c = n("815660"),
  d = n("981631");
(r = s || (s = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", t.default = {
  setCountryCode(e) {
    i.default.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => l.HTTP.del({
    url: d.Endpoints.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: !0
  }),
  resendCode(e) {
    let t = {},
      n = o.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.HTTP.post({
      url: d.Endpoints.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      }
    })
  },
  beginAddPhone: (e, t) => l.HTTP.post({
    url: d.Endpoints.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  addPhone: (e, t, n) => l.HTTP.post({
    url: d.Endpoints.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  addPhoneWithoutPassword: e => l.HTTP.post({
    url: d.Endpoints.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    }
  }),
  beginReverifyPhone: (e, t) => l.HTTP.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    }
  }),
  reverifyPhone: (e, t, n) => l.HTTP.post({
    url: d.Endpoints.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0
  }),
  validatePhoneForSupport: e => l.HTTP.post({
    url: d.Endpoints.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      s = {},
      l = o.default.getFingerprint();
    null != l && "" !== l && (s["X-Fingerprint"] = l), r && (s.authorization = "");
    let p = await u.default.post({
      url: d.Endpoints.VERIFY_PHONE,
      headers: s,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_VERIFY_PHONE
      }
    });
    return n && i.default.dispatch({
      type: "MODAL_POP",
      key: c.PHONE_VERIFICATION_MODAL_KEY
    }), p.body
  }
}