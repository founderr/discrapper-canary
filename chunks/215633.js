"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("505737"),
  s = n("705556"),
  a = n("901952"),
  o = n("228168"),
  l = n("391016");

function u(e) {
  let {
    user: t,
    guildId: n,
    channelId: u,
    onClose: d
  } = e, _ = (0, r.default)(t.id, n);
  return (0, i.jsxs)("footer", {
    className: l.footer,
    children: [_ && (0, i.jsx)(a.default, {
      user: t,
      guildId: n,
      channelId: u,
      onClose: d
    }), !_ && (0, i.jsx)(s.default, {
      user: t,
      guildId: n,
      onClose: d,
      profileType: o.UserProfileTypes.BITE_SIZE
    })]
  })
}