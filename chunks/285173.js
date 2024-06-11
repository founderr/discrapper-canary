"use strict";
E.r(t), E.d(t, {
  default: function() {
    return n
  }
});
var _ = E("735250"),
  s = E("470079"),
  T = E("481060"),
  a = E("412899"),
  A = E("231338");

function n(e) {
  var t;
  let {
    guildId: E,
    role: n,
    className: I,
    canRemove: u = !1,
    onRemove: i = A.NOOP
  } = e, L = (0, T.useToken)(T.tokens.unsafe_rawColors.PRIMARY_300).hex(), l = null !== (t = null == n ? void 0 : n.colorString) && void 0 !== t ? t : L, o = s.useMemo(() => ({
    backgroundColor: "".concat(l, "27")
  }), [l]);
  return null == n ? null : (0, _.jsx)(T.Clickable, {
    children: (0, _.jsx)(a.MemberRole, {
      className: I,
      style: o,
      role: n,
      guildId: E,
      canRemove: u,
      onRemove: i
    })
  })
}