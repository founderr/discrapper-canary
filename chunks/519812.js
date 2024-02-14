"use strict";
n.r(t), n.d(t, {
  getRecipients: function() {
    return i
  }
}), n("843762");
var l = n("917351"),
  a = n.n(l),
  s = n("449008");

function i(e, t) {
  return a(e).map(t.getUser).unshift(t.getCurrentUser()).filter(s.isNotNullish).sortBy(e => e.username.toLowerCase()).value()
}