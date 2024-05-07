"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  E = s("412899"),
  l = s("231338");

function _(e) {
  var t;
  let {
    guildId: s,
    role: _,
    className: r,
    canRemove: u = !1,
    onRemove: o = l.NOOP
  } = e, T = (0, i.useToken)(i.tokens.unsafe_rawColors.PRIMARY_300).hex(), d = null !== (t = null == _ ? void 0 : _.colorString) && void 0 !== t ? t : T, A = n.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == _ ? null : (0, a.jsx)(i.Clickable, {
    children: (0, a.jsx)(E.MemberRole, {
      className: r,
      style: A,
      role: _,
      guildId: s,
      canRemove: u,
      onRemove: o
    })
  })
}