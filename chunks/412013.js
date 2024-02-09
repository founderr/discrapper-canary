"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("37983"),
  s = E("884691"),
  a = E("77078"),
  T = E("581583"),
  n = E("843455");

function A(e) {
  var t;
  let {
    guildId: E,
    role: A,
    className: u
  } = e, I = (0, a.useToken)(a.tokens.unsafe_rawColors.PRIMARY_300).hex(), i = null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : I, l = s.useMemo(() => ({
    backgroundColor: "".concat(i, "27")
  }), [i]);
  return null == A ? null : (0, _.jsx)(T.MemberRole, {
    className: u,
    style: l,
    role: A,
    guildId: E,
    canRemove: !1,
    onRemove: n.NOOP
  })
}