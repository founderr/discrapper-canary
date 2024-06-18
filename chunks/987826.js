"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(154921),
  l = n(483853);

function u(e) {
  var t;
  let {
    name: n,
    className: r,
    state: u,
    isInline: _,
    onClick: c
  } = e, d = null, E = a.Z.Colors.HEADER_PRIMARY;
  (null == u ? void 0 : u.isActive) && !_ ? d = l.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? d = l.error : (null == u ? void 0 : u.hasValue) && !_ && (d = l.set);
  let I = (0, i.jsx)(a.Z, {
    size: _ ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
    color: E,
    className: s()(l.option, {
      [l.inline]: _
    }, d, r),
    children: n + (_ ? ":" : "")
  });
  return null == c ? I : (0, i.jsx)(o.Clickable, {
    className: l.clickable,
    onClick: () => c(n),
    children: I
  })
}