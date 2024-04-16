"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("1964"),
  r = a("852758"),
  o = a("314897"),
  u = a("594174"),
  d = a("725568"),
  c = a("78415"),
  f = a("374023"),
  E = a("886162"),
  h = a("981631"),
  _ = a("815660"),
  C = a("231338");
let m = "AGREEMENTS_MODAL_KEY";
t.default = {
  init() {
    l.default.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.default.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.default.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), o.default.addChangeListener(this.handleAuthenticationStoreChanged)
  },
  handleRequiredAction(e) {
    let t = e.requiredAction;
    !f.ProcessArgs.isDisallowPopupsSet() && null != u.default.getCurrentUser() && (t === h.UserRequiredActions.REQUIRE_CAPTCHA || t === h.UserRequiredActions.REQUIRE_VERIFIED_EMAIL || t === h.UserRequiredActions.REQUIRE_VERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === h.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || i.default.isEmailReverification(t) ? (0, d.openFullScreenLayer)(() => (0, n.jsx)(r.default, {}), {
      layerKey: "verification",
      Layer: c.default
    }) : t === h.UserRequiredActions.AGREEMENTS ? (0, s.openModal)(e => (0, n.jsx)(E.default, {
      ...e
    }), {
      modalKey: m,
      onCloseRequest: C.NOOP_NULL
    }) : null == t && ((0, d.closeFullScreenLayer)("verification"), (0, s.hasModalOpen)(m) && (0, s.closeModal)(m)))
  },
  handleAuthenticationStoreChanged() {
    null == o.default.getId() && ((0, d.closeFullScreenLayer)("verification"), (0, s.closeModal)(m), (0, s.closeModal)(r.PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY), (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY), (0, s.closeModal)(_.PHONE_VERIFICATION_MODAL_KEY))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, s.closeModal)(r.EMAIL_VERIFICATION_MODAL_KEY)
  }
}