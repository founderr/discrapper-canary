"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("917351"),
  r = n.n(i),
  o = n("49111"),
  l = n("782340");
let {
  CAPTCHA: s,
  EMAIL: a,
  PHONE: u,
  REVERIFY_EMAIL: c,
  REVERIFY_PHONE: d
} = o.VerificationTypes, f = {
  [o.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [a],
  [o.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
  [o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [c],
  [o.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [d],
  [o.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, u],
  [o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, c],
  [o.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, d],
  [o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
  [o.UserRequiredActions.REQUIRE_CAPTCHA]: [s],
  [o.UserRequiredActions.AGREEMENTS]: []
};
var E = {
  isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === o.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === o.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
  isEmailReverification: e => e === o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === o.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
  getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : f[e],
  getButtonTitle(e) {
    switch (e) {
      case o.VerificationTypes.EMAIL:
        return l.default.Messages.VERIFY_BY_EMAIL;
      case o.VerificationTypes.PHONE:
        return l.default.Messages.START_PHONE_VERIFICATION_BUTTON;
      case o.VerificationTypes.REVERIFY_EMAIL:
        return l.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
      case o.VerificationTypes.REVERIFY_PHONE:
        return l.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
      default:
        return l.default.Messages.START_VERIFICATION_BUTTON
    }
  },
  areVerificationTypesEqual: (e, t) => r.isEqual(e, t)
}