"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("819855"),
  r = s("841098"),
  o = s("449918"),
  d = s("832132"),
  u = s("818643"),
  c = s("608684"),
  E = s("49111"),
  _ = s("854045");
let I = E.Color.PRIMARY_400,
  T = E.Color.PRIMARY_500;

function f(e) {
  let {
    enabled: t,
    imageClassName: s,
    iconWrapperClassName: l,
    ...E
  } = e, f = (0, r.default)(), S = (0, i.isThemeDark)(f) ? I : T, m = {
    height: 18,
    width: 18,
    color: (0, o.getColor)(S)
  };
  return (0, a.jsx)(c.default, {
    className: n({
      [_.avatarUploader]: t,
      [_.avatarUploaderDisabled]: !t
    }),
    imageClassName: n(s, _.avatarUploaderInnerSquare, {
      [_.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != E.image && "" !== E.image ? (0, a.jsx)(d.default, {
      ...m
    }) : (0, a.jsx)(u.default, {
      ...m
    }),
    iconClassName: n(_.avatarUploadIcon, _.hideDefaultIcon),
    iconWrapperClassName: l,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}