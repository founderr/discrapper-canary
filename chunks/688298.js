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
  o = a("109267");

function u(e) {
  let {
    showSecondaryColor: t,
    palette: a,
    onPrimaryColorChange: u,
    onSecondaryColorChange: d
  } = e, c = s.useRef(null);
  return (0, l.useFocusLock)(c), (0, n.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, n.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: r.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, n.jsxs)("div", {
      ref: c,
      className: o.colorPickersContainer,
      children: [(0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: a.primary
          }
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: a.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: u
        })]
      }), t && (0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: a.secondary
          }
        }), (0, n.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: a.secondary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: d
        })]
      })]
    })]
  })
}

function d(e) {
  let {
    shouldShow: t,
    showSecondaryColor: a,
    onRequestClose: s,
    children: i,
    palette: r,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, n.jsx)(l.Popout, {
    renderPopout: () => (0, n.jsx)(u, {
      showSecondaryColor: a,
      palette: r,
      onPrimaryColorChange: o,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: s,
    animation: l.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: i
  })
}