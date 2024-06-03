"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("392711"),
  s = n("290421"),
  a = n("80132"),
  o = n("228168");
let l = {
  [o.UserProfileTypes.BITE_SIZE]: 12,
  [o.UserProfileTypes.FULL_SIZE]: 26,
  [o.UserProfileTypes.PANEL]: 14
};

function u(e) {
  let {
    displayProfile: t,
    profileType: n,
    onClose: o
  } = e, u = (0, s.default)(t);
  return 0 === u.length ? null : (0, i.jsx)(i.Fragment, {
    children: (0, r.chunk)(u, l[n]).map(e => (0, i.jsx)(a.default, {
      badges: e,
      onClose: o
    }, e[0].id))
  })
}