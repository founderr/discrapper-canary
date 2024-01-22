"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("49111"),
  l = n("782340");
let {
  CAPTCHA: r,
  EMAIL: o,
  PHONE: u,
  REVERIFY_EMAIL: d,
  REVERIFY_PHONE: c
} = i.VerificationTypes, f = {
  [i.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [o],
  [i.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
  [i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
  [i.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [c],
  [i.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, u],
  [i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
  [i.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, c],
  [i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, c],
  [i.UserRequiredActions.REQUIRE_CAPTCHA]: [r],
  [i.UserRequiredActions.AGREEMENTS]: []
};
var E = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === i.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === i.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === i.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case i.VerificationTypes.EMAIL:
        return l.default.Messages.VERIFY_BY_EMAIL;
      case i.VerificationTypes.PHONE:
        return l.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case i.VerificationTypes.REVERIFY_EMAIL:
        return l.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case i.VerificationTypes.REVERIFY_PHONE:
        return l.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return l.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => s.isEqual(e, t)
}