n.d(t, {
  Z: function() {
    return o
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  l = n(481060),
  a = n(857595),
  i = n(607070),
  s = n(689938);

function o() {
  let {
    saturation: e,
    useReducedMotion: t,
    roleStyle: n
  } = (0, u.cj)([i.Z], () => ({
    saturation: i.Z.saturation,
    useReducedMotion: i.Z.useReducedMotion,
    roleStyle: i.Z.roleStyle
  })), o = [{
    name: s.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_USERNAME_LABEL,
    value: "username"
  }, {
    name: s.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_DOT_LABEL,
    value: "dot"
  }, {
    name: s.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_HIDDEN_LABEL,
    value: "hidden"
  }];
  return [(0, r.jsx)(l.MenuGroup, {
    children: (0, r.jsx)(l.MenuCheckboxItem, {
      id: "reduced-motion",
      label: s.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE,
      checked: t,
      action: () => (0, a.Zt)(t ? "no-preference" : "reduce")
    })
  }, "reduced-motion"), (0, r.jsx)(l.MenuGroup, {
    children: (0, r.jsx)(l.MenuControlItem, {
      id: "input",
      label: s.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
      control: (t, n) => (0, r.jsx)(l.MenuSliderControl, {
        ...t,
        ref: n,
        value: 100 * e,
        onChange: e => (0, a.o2)(e / 100),
        "aria-label": s.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE
      })
    })
  }, "input"), (0, r.jsx)(l.MenuGroup, {
    children: (0, r.jsx)(l.MenuItem, {
      id: "role-colors",
      label: s.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
      children: o.map(e => {
        let {
          name: t,
          value: u
        } = e;
        return (0, r.jsx)(l.MenuRadioItem, {
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