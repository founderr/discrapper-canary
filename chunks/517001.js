"use strict";
n.r(t), n.d(t, {
  validatePremiumType: function() {
    return a
  },
  isStaffEnv: function() {
    return E
  },
  isStaffEnvRawData: function() {
    return _
  },
  getPremiumTypeFromRawValue: function() {
    return c
  }
}), n("702976");
var r = n("627445"),
  i = n.n(r),
  o = n("568734"),
  l = n("963903"),
  u = n("49111");

function a(e, t, n) {
  !e && void 0 !== t && i(n === t, "Premium type should not change for non-staff users")
}

function s(e) {
  return "production" === l.Environments.TEST && null != e ? e : "production"
}

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = s(t) === l.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.Environments.STAGING;
  if (n) return !0;
  if (null == e) return !1;
  let r = e.isStaff() || e.isStaffPersonal();
  return r
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
    n = s(t) === l.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === l.Environments.STAGING;
  return !!n || null != e && (!!(null != e.flags && (0, o.hasFlag)(e.flags, u.UserFlags.STAFF)) || null != e.personal_connection_id)
}

function c(e) {
  return void 0 !== e ? e === u.PREMIUM_TYPE_NONE ? null : e : e
}