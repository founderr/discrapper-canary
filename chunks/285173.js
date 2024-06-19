e.d(_, {
  Z: function() {
    return N
  }
});
var T = e(735250),
  s = e(470079),
  I = e(481060),
  A = e(412899),
  n = e(231338);

function N(E) {
  var _;
  let {
    guildId: e,
    role: N,
    className: t,
    canRemove: r = !1,
    onRemove: a = n.dG
  } = E, L = (0, I.useToken)(I.tokens.unsafe_rawColors.PRIMARY_300).hex(), D = null !== (_ = null == N ? void 0 : N.colorString) && void 0 !== _ ? _ : L, S = s.useMemo(() => ({
    backgroundColor: "".concat(D, "27")
  }), [D]);
  return null == N ? null : (0, T.jsx)(I.Clickable, {
    children: (0, T.jsx)(A.UB, {
      className: t,
      style: S,
      role: N,
      guildId: e,
      canRemove: r,
      onRemove: a
    })
  })
}