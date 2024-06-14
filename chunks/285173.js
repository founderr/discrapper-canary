"use strict";
E.r(t), E.d(t, {
  default: function() {
    return n
  }
});
var s = E("735250"),
  _ = E("470079"),
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
  } = e, l = (0, T.useToken)(T.tokens.unsafe_rawColors.PRIMARY_300).hex(), L = null !== (t = null == n ? void 0 : n.colorString) && void 0 !== t ? t : l, o = _.useMemo(() => ({
    backgroundColor: "".concat(L, "27")
  }), [L]);
  return null == n ? null : (0, s.jsx)(T.Clickable, {
    children: (0, s.jsx)(a.MemberRole, {
      className: I,
      style: o,
      role: n,
      guildId: E,
      canRemove: u,
      onRemove: i
    })
  })
}