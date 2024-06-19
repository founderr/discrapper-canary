t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(866442),
  a = t(692547),
  l = t(481060),
  r = t(220082),
  o = t(193528),
  c = t(993413),
  E = t(689938);

function d(e) {
  var s;
  let {
    user: t,
    savedUserColor: d,
    pendingColor: _,
    setPendingAccentColor: T
  } = e, S = t.getAvatarURL(null, 80), u = (0, l.useToken)(a.Z.unsafe_rawColors.PRIMARY_530).hex(), I = (0, r.Cf)(S, u, !1), N = (0, i._i)(I[0]);
  return (0, n.jsx)(c.Z, {
    title: E.Z.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
    children: (0, n.jsx)(o.Z, {
      onChange: e => T(e),
      color: null !== (s = null != _ ? _ : d) && void 0 !== s ? s : N,
      suggestedColors: I,
      showEyeDropper: !0
    })
  })
}