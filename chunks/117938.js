"use strict";
a.r(t), a.d(t, {
  getBillingAddressLayout: function() {
    return l
  },
  getOverrideBillingAddressLayout: function() {
    return r
  }
});
var o = a("873546"),
  n = a("464179"),
  s = a("981631");
let l = e => [s.PaymentSourceTypes.CARD, s.PaymentSourceTypes.VENMO].includes(e.type) && "US" === e.country ? o.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US : e.type === s.PaymentSourceTypes.CARD && "US" !== e.country ? o.isMobile ? n.default.Layouts.SETTINGS_INTL_MOBILE : n.default.Layouts.SETTINGS_INTL : o.isMobile ? n.default.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : n.default.Layouts.SETTINGS_INTL_NO_NAME,
  r = o.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US