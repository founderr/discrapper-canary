"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("446674"),
  i = n("913144"),
  o = n("517001"),
  l = n("646718");
let u = "OverridePremiumTypeStore",
  a = {
    premiumTypeOverride: l.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
    premiumTypeActual: l.UNSELECTED_PREMIUM_TYPE_OVERRIDE
  };

function s(e) {
  let {
    user: t
  } = e;
  a.premiumTypeActual = (0, o.getPremiumTypeFromRawValue)(t.premium_type)
}
class E extends r.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      a = e;
      return
    }
    a.premiumTypeOverride = l.UNSELECTED_PREMIUM_TYPE_OVERRIDE
  }
  getPremiumTypeOverride() {
    return a.premiumTypeOverride
  }
  getPremiumTypeActual() {
    return a.premiumTypeActual
  }
  getState() {
    return a
  }
  get premiumType() {
    return a.premiumTypeOverride
  }
}
E.displayName = u, E.persistKey = u;
var _ = new E(i.default, {
  SET_PREMIUM_TYPE_OVERRIDE: function(e) {
    let {
      premiumType: t
    } = e;
    a.premiumTypeOverride = t
  },
  CURRENT_USER_UPDATE: s,
  CONNECTION_OPEN: s
})