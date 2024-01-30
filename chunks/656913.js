"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  s = n("819855"),
  r = n("841098"),
  u = n("449918"),
  d = n("832132"),
  o = n("818643"),
  c = n("608684"),
  f = n("49111"),
  E = n("575282");
let I = f.Color.PRIMARY_400,
  _ = f.Color.PRIMARY_500;

function h(e) {
  let {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: a,
    ...f
  } = e, h = (0, r.default)(), T = (0, s.isThemeDark)(h) ? I : _, v = {
    height: 18,
    width: 18,
    color: (0, u.getColor)(T)
  };
  return (0, l.jsx)(c.default, {
    className: i({
      [E.avatarUploader]: t,
      [E.avatarUploaderDisabled]: !t
    }),
    imageClassName: i(n, E.avatarUploaderInnerSquare, {
      [E.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != f.image && "" !== f.image ? (0, l.jsx)(d.default, {
      ...v
    }) : (0, l.jsx)(o.default, {
      ...v
    }),
    iconClassName: i(E.avatarUploadIcon, E.hideDefaultIcon),
    iconWrapperClassName: a,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...f
  })
}