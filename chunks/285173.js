"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var E = s("735250"),
  _ = s("470079"),
  a = s("481060"),
  n = s("412899"),
  T = s("231338");

function A(e) {
  var t;
  let {
    guildId: s,
    role: A,
    className: u,
    canRemove: i = !1,
    onRemove: l = T.NOOP
  } = e, I = (0, a.useToken)(a.tokens.unsafe_rawColors.PRIMARY_300).hex(), L = null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : I, o = _.useMemo(() => ({
    backgroundColor: "".concat(L, "27")
  }), [L]);
  return null == A ? null : (0, E.jsx)(a.Clickable, {
    children: (0, E.jsx)(n.MemberRole, {
      className: u,
      style: o,
      role: A,
      guildId: s,
      canRemove: i,
      onRemove: l
    })
  })
}