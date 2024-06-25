t.d(s, {
  Z: function() {
    return u
  }
}), t(627341);
var i = t(735250);
t(470079);
var l = t(120356),
  n = t.n(l),
  a = t(278074),
  r = t(979554),
  o = t(481060),
  d = t(689938),
  c = t(638544);

function u(e) {
  var s;
  let {
    product: t,
    isDarkText: l = !1
  } = e;
  let u = (s = t.type, (0, a.EQ)(s).with(r.Z.AVATAR_DECORATION, () => d.Z.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.Z.PROFILE_EFFECT, () => d.Z.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, i.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: n()([c.container, l ? c.darkText : c.lightText]),
    children: u
  })
}