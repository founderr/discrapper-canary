"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("481060"),
  o = l("263704"),
  d = l("465670"),
  u = l("689938"),
  c = l("62012");
let f = [!1, !0];

function I(e) {
  let {
    isDisabled: t,
    currentValue: l,
    onChange: s
  } = e, o = (0, r.useRadioGroup)({
    orientation: "horizontal",
    isDisabled: t
  }), d = a.useCallback(e => {
    !t && e !== l && s(e)
  }, [t, l, s]);
  return (0, n.jsx)("div", {
    className: i()(c.group, {
      [c.disabled]: t
    }),
    ...o,
    children: f.map(e => (0, n.jsx)(m, {
      isSelected: l === e,
      itemValue: e,
      onClick: () => d(e)
    }, e.toString()))
  })
}

function m(e) {
  let {
    isSelected: t,
    itemValue: l,
    onClick: a
  } = e, s = l ? c.allow : c.deny, f = l ? o.default : d.default, I = l ? u.default.Messages.PERMISSION_OVERRIDE_ALLOW : u.default.Messages.PERMISSION_OVERRIDE_DENY, m = (0, r.useRadioItem)({
    isSelected: t,
    label: I
  });
  return (0, n.jsx)(r.Clickable, {
    className: i()(c.item, s, {
      [c.selected]: t
    }),
    onClick: a,
    ...m,
    children: (0, n.jsx)(f, {
      width: 16,
      height: 16
    })
  })
}