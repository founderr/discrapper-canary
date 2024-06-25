var s = n(735250);
n(470079);
var i = n(481060),
  l = n(570140),
  a = n(1964),
  r = n(852758),
  o = n(314897),
  c = n(594174),
  u = n(725568),
  d = n(78415),
  E = n(374023),
  h = n(886162),
  _ = n(981631),
  I = n(815660),
  m = n(231338);
let T = "AGREEMENTS_MODAL_KEY";
t.Z = {
  init() {
    l.Z.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.Z.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.Z.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), o.default.addChangeListener(this.handleAuthenticationStoreChanged)
  },
  handleRequiredAction(e) {
    let t = e.requiredAction;
    if (!E.s.isDisallowPopupsSet() && null != c.default.getCurrentUser()) t === _.c2C.REQUIRE_CAPTCHA || t === _.c2C.REQUIRE_VERIFIED_EMAIL || t === _.c2C.REQUIRE_VERIFIED_PHONE || t === _.c2C.REQUIRE_REVERIFIED_PHONE || t === _.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === _.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || a.Z.isEmailReverification(t) ? (0, u.q4)(() => (0, s.jsx)(r.ZP, {}), {
      layerKey: "verification",
      Layer: d.ZP
    }) : t === _.c2C.AGREEMENTS ? (0, i.openModal)(e => (0, s.jsx)(h.Z, {
      ...e
    }), {
      modalKey: T,
      onCloseRequest: m.Vq
    }) : null == t && ((0, u.ob)("verification"), (0, i.hasModalOpen)(T) && (0, i.closeModal)(T))
  },
  handleAuthenticationStoreChanged() {
    null == o.default.getId() && ((0, u.ob)("verification"), (0, i.closeModal)(T), (0, i.closeModal)(r.HR), (0, i.closeModal)(r.F0), (0, i.closeModal)(I.M))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, i.closeModal)(r.F0)
  }
}