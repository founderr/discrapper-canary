"use strict";
var s, r;
n.r(t), n.d(t, {
  PhoneOrEmailSelectorForceMode: function() {
    return s
  },
  shouldShowCountryCodeSelector: function() {
    return i
  }
}), (r = s || (s = {})).PHONE = "phone", r.EMAIL = "email";
let a = /^[-() \d]+$/,
  o = e => e.startsWith("+");

function i(e, t) {
  return "phone" === e ? !o(t) : "email" !== e && !(t.length < 3) && a.test(t)
}