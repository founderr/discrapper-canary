t.d(n, {
  Z: function() {
    return u
  }
});
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(689938),
  c = t(487234);
let d = [!1, !0];

function u(e) {
  let {
    isDisabled: n,
    currentValue: t,
    onChange: l
  } = e, o = (0, r.useRadioGroup)({
    orientation: "horizontal",
    isDisabled: n
  }), u = s.useCallback(e => {
    !n && e !== t && l(e)
  }, [n, t, l]);
  return (0, i.jsx)("div", {
    className: a()(c.group, {
      [c.disabled]: n
    }),
    ...o,
    children: d.map(e => (0, i.jsx)(I, {
      isSelected: t === e,
      itemValue: e,
      onClick: () => u(e)
    }, e.toString()))
  })
}

function I(e) {
  let {
    isSelected: n,
    itemValue: t,
    onClick: s
  } = e, l = t ? c.allow : c.deny, d = t ? r.CheckmarkLargeIcon : r.CloseSmallIcon, u = t ? o.Z.Messages.PERMISSION_OVERRIDE_ALLOW : o.Z.Messages.PERMISSION_OVERRIDE_DENY, I = (0, r.useRadioItem)({
    isSelected: n,
    label: u
  });
  return (0, i.jsx)(r.Clickable, {
    className: a()(c.item, l, {
      [c.selected]: n
    }),
    onClick: s,
    ...I,
    children: (0, i.jsx)(d, {
      size: "xs",
      color: "currentColor"
    })
  })
}