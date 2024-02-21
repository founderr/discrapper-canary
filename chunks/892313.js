"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("917351"),
  s = n.n(a),
  l = n("49111"),
  i = n("782340");
let {
  CAPTCHA: r,
  EMAIL: o,
  PHONE: u,
  REVERIFY_EMAIL: d,
  REVERIFY_PHONE: c
} = l.VerificationTypes, f = {
  [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [o],
  [l.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
  [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
  [l.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [c],
  [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, u],
  [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
  [l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, c],
  [l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, c],
  [l.UserRequiredActions.REQUIRE_CAPTCHA]: [r],
  [l.UserRequiredActions.AGREEMENTS]: []
};
var E = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === l.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === l.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case l.VerificationTypes.EMAIL:
        return i.default.Messages.VERIFY_BY_EMAIL;
      case l.VerificationTypes.PHONE:
        return i.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case l.VerificationTypes.REVERIFY_EMAIL:
        return i.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case l.VerificationTypes.REVERIFY_PHONE:
        return i.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return i.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => s.isEqual(e, t)
}