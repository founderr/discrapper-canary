"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("703685"),
  r = a("689938"),
  o = a("598029");

function u(e) {
  let {
    palette: t,
    onPrimaryColorChange: a,
    onSecondaryColorChange: u
  } = e, d = s.useRef(null);
  return (0, l.useFocusLock)(d), (0, n.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: r.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, n.jsxs)("div", {
      ref: d,
      className: o.colorPickersContainer,
      children: [(0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: t.primary
          }
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: t.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: a
        })]
      }), (0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: t.secondary
          }
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: t.secondary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: u
        })]
      })]
    })]
  })
}

function d(e) {
  let {
    shouldShow: t,
    onRequestClose: a,
    children: s,
    palette: i,
    onPrimaryColorChange: r,
    onSecondaryColorChange: o
  } = e;
  return (0, n.jsx)(l.Popout, {
    renderPopout: () => (0, n.jsx)(u, {
      palette: i,
      onPrimaryColorChange: r,
      onSecondaryColorChange: o
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: a,
    animation: l.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}