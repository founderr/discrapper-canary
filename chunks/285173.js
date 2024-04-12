"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var E = s("735250"),
  _ = s("470079"),
  a = s("481060"),
  n = s("412899"),
  T = s("231338");

function u(e) {
  var t;
  let {
    guildId: s,
    role: u,
    className: i,
    canRemove: A = !1,
    onRemove: l = T.NOOP
  } = e, I = (0, a.useToken)(a.tokens.unsafe_rawColors.PRIMARY_300).hex(), L = null !== (t = null == u ? void 0 : u.colorString) && void 0 !== t ? t : I, o = _.useMemo(() => ({
    backgroundColor: "".concat(L, "27")
  }), [L]);
  return null == u ? null : (0, E.jsx)(a.Clickable, {
    children: (0, E.jsx)(n.MemberRole, {
      className: i,
      style: o,
      role: u,
      guildId: s,
      canRemove: A,
      onRemove: l
    })
  })
}