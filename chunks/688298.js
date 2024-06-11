"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  s = a("689938"),
  l = a("708822");

function o(e) {
  let {
    showSecondaryColor: t,
    palette: a,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e, c = r.useRef(null);
  return (0, i.useFocusLock)(c), (0, n.jsxs)("div", {
    className: l.popoutContainer,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: l.customColorsHeader,
      children: s.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, n.jsxs)("div", {
      ref: c,
      className: l.colorPickersContainer,
      children: [(0, n.jsxs)("div", {
        className: l.colorColumn,
        children: [(0, n.jsx)("div", {
          className: l.colorSwatch,
          style: {
            backgroundColor: a.primary
          }
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: s.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: l.colorPicker,
          value: a.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: o
        })]
      }), t && (0, n.jsxs)("div", {
        className: l.colorColumn,
        children: [(0, n.jsx)("div", {
          className: l.colorSwatch,
          style: {
            backgroundColor: a.secondary
          }
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: s.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, n.jsx)(i.CustomColorPicker, {
          className: l.colorPicker,
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
    onRequestClose: r,
    children: s,
    palette: l,
    onPrimaryColorChange: d,
    onSecondaryColorChange: c
  } = e;
  return (0, n.jsx)(i.Popout, {
    renderPopout: () => (0, n.jsx)(o, {
      showSecondaryColor: a,
      palette: l,
      onPrimaryColorChange: d,
      onSecondaryColorChange: c
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: r,
    animation: i.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}