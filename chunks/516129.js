"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(780384),
  r = t(481060),
  o = t(410030),
  c = t(44315),
  d = t(208567),
  u = t(981631),
  E = t(221272);
let _ = u.Ilk.PRIMARY_400,
  I = u.Ilk.PRIMARY_500;

function T(e) {
  let {
    enabled: s,
    imageClassName: t,
    iconWrapperClassName: i,
    ...u
  } = e, T = (0, o.ZP)(), N = (0, a.wj)(T) ? _ : I, m = {
    height: 18,
    width: 18,
    color: (0, c.Lq)(N)
  };
  return (0, n.jsx)(d.Z, {
    className: l()({
      [E.avatarUploader]: s,
      [E.avatarUploaderDisabled]: !s
    }),
    imageClassName: l()(t, E.avatarUploaderInnerSquare, {
      [E.avatarUploaderInnerSquareDisabled]: !s
    }),
    icon: null != u.image && "" !== u.image ? (0, n.jsx)(r.PencilIcon, {
      size: "custom",
      ...m
    }) : (0, n.jsx)(r.ImagePlusIcon, {
      size: "custom",
      ...m
    }),
    iconClassName: l()(E.avatarUploadIcon, E.hideDefaultIcon),
    iconWrapperClassName: i,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...u
  })
}