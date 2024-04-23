"use strict";
n.r(t), n.d(t, {
  showSafetyToast: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("820644");

function i(e) {
  let {
    text: t,
    id: n
  } = e;
  (0, l.showToast)((0, l.createToast)(t, l.ToastType.CUSTOM, {
    component: (0, s.jsx)(a.SafetyToast, {
      text: t
    }, n)
  }))
}