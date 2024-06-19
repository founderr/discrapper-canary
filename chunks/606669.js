n.d(t, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  s = n(481060),
  a = n(857595),
  o = n(607070),
  i = n(689938);

function l() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n
  } = (0, u.cj)([o.Z], () => ({
    saturation: o.Z.saturation,
    useReducedMotion: o.Z.useReducedMotion,
    roleStyle: o.Z.roleStyle
  })), l = [{
    name: i.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
    value: "username"
  }, {
    name: i.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
    value: "dot"
  }, {
    name: i.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
    value: "hidden"
  }];
  return [(0, r.jsx)(s.MenuGroup, {
    children: (0, r.jsx)(s.MenuCheckboxItem, {
      id: "reduced-motion",
      label: i.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
      checked: t,
      action: () => (0, a.Zt)(t ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, r.jsx)(s.MenuGroup, {
    children: (0, r.jsx)(s.MenuControlItem, {
      id: "input",
      label: i.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
      control: (t, n) => (0, r.jsx)(s.MenuSliderControl, {
        ...t,
        ref: n,
        value: 100 * e,
        onChange: e => (0, a.o2)(e / 100),
        "aria-label": i.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
      })
    })
  }, "input"), (0, r.jsx)(s.MenuGroup, {
    children: (0, r.jsx)(s.MenuItem, {
      id: "role-colors",
      label: i.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      children: l.map(e => {
        let {
          name: t,
          value: u
        } = e;
        return (0, r.jsx)(s.MenuRadioItem, {
          id: u,
          group: "role-colors",
          checked: u === n,
          label: t,
          action: () => (0, a.u1)(u)
        }, u)
      })
    })
  }, "role-colors")]
}