s.d(t, {
  Z: function() {
    return u
  }
}), s(627341);
var i = s(735250);
s(470079);
var l = s(120356),
  n = s.n(l),
  a = s(278074),
  r = s(979554),
  o = s(481060),
  d = s(689938),
  c = s(638544);

function u(e) {
  var t;
  let {
    product: s,
    isDarkText: l = !1
  } = e;
  let u = (t = s.type, (0, a.EQ)(t).with(r.Z.AVATAR_DECORATION, () => d.Z.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.Z.PROFILE_EFFECT, () => d.Z.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, i.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: n()([c.container, l ? c.darkText : c.lightText]),
    children: u
  })
}