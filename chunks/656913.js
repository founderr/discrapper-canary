"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("819855"),
  r = n("841098"),
  u = n("449918"),
  d = n("832132"),
  o = n("818643"),
  c = n("608684"),
  E = n("49111"),
  f = n("854045");
let h = E.Color.PRIMARY_400,
  v = E.Color.PRIMARY_500;

function _(e) {
  let {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: a,
    ...E
  } = e, _ = (0, r.default)(), I = (0, i.isThemeDark)(_) ? h : v, m = {
    height: 18,
    width: 18,
    color: (0, u.getColor)(I)
  };
  return (0, l.jsx)(c.default, {
    className: s({
      [f.avatarUploader]: t,
      [f.avatarUploaderDisabled]: !t
    }),
    imageClassName: s(n, f.avatarUploaderInnerSquare, {
      [f.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != E.image && "" !== E.image ? (0, l.jsx)(d.default, {
      ...m
    }) : (0, l.jsx)(o.default, {
      ...m
    }),
    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
    iconWrapperClassName: a,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}