t.d(n, {
  y: function() {
    return l
  }
});
var i, l, s = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  o = t(481060),
  c = t(689938),
  d = t(585069);
(i = l || (l = {})).DENY = "DENY", i.PASSTHROUGH = "PASSTHROUGH", i.ALLOW = "ALLOW";
let u = Object.keys(l);

function I(e) {
  let {
    value: n = "PASSTHROUGH",
    onChange: t,
    labelledBy: i,
    disabled: l = !1
  } = e, a = (0, o.useRadioGroup)({
    orientation: "horizontal",
    isDisabled: l,
    labelledBy: i
  });
  return (0, s.jsx)("div", {
    className: r()(d.group, {
      [d.disabled]: l
    }),
    ...a,
    children: u.map(e => (0, s.jsx)(N, {
      type: e,
      isSelected: n === e,
      onSelect: e => {
        n !== e && !l && t(e)
      }
    }, e))
  })
}

function N(e) {
  let n, t, i, {
    type: l,
    onSelect: a,
    isSelected: u
  } = e;
  switch (l) {
    case "DENY":
      i = c.Z.Messages.PERMISSION_OVERRIDE_DENY, n = o.CloseSmallIcon, t = d.deny;
      break;
    case "ALLOW":
      i = c.Z.Messages.PERMISSION_OVERRIDE_ALLOW, n = o.CheckmarkLargeIcon, t = d.allow;
      break;
    default:
      i = c.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, n = o.SlashIcon, t = d.passthrough
  }
  let I = (0, o.useRadioItem)({
    isSelected: u,
    label: i
  });
  return (0, s.jsx)(o.Clickable, {
    className: r()(d.item, t, {
      [d.selected]: u
    }),
    onClick: () => a(l),
    ...I,
    children: (0, s.jsx)(n, {
      color: "currentColor",
      size: "xs"
    })
  })
}
I.Types = l, n.Z = I