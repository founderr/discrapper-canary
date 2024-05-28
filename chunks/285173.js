"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var s = E("735250"),
  _ = E("470079"),
  a = E("481060"),
  T = E("412899"),
  n = E("231338");

function A(e) {
  var t;
  let {
    guildId: E,
    role: A,
    className: I,
    canRemove: u = !1,
    onRemove: i = n.NOOP
  } = e, l = (0, a.useToken)(a.tokens.unsafe_rawColors.PRIMARY_300).hex(), L = null !== (t = null == A ? void 0 : A.colorString) && void 0 !== t ? t : l, o = _.useMemo(() => ({
    backgroundColor: "".concat(L, "27")
  }), [L]);
  return null == A ? null : (0, s.jsx)(a.Clickable, {
    children: (0, s.jsx)(T.MemberRole, {
      className: I,
      style: o,
      role: A,
      guildId: E,
      canRemove: u,
      onRemove: i
    })
  })
}