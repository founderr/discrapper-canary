"use strict";
r.r(n), r.d(n, {
  openMFAModal: function() {
    return e
  }
}), r("581081");
var o = r("310379"),
  i = r("695501");

function e(t, n, e) {
  t.methods = t.methods.filter(t => Object.hasOwn(i.SELECT_NAMES, t.type)), r("24287").openMFAModal(t, t => (0, o.trySubmit)(t, n), e)
}