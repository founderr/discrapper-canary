"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  l = a("703685"),
  s = a("689938"),
  o = a("708822");

function c(e) {
  let {
    showSecondaryColor: t,
    palette: a,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d
  } = e, u = r.useRef(null);
  return (0, i.useFocusLock)(u), (0, n.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: s.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, n.jsxs)("div", {
      ref: u,
      className: o.colorPickersContainer,
      children: [(0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: a.primary
          }
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: s.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, n.jsx)(l.CustomColorPicker, {
          className: o.colorPicker,
          value: a.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: c
        })]
      }), t && (0, n.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, n.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: a.secondary
          }
        }), (0, n.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: s.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, n.jsx)(l.CustomColorPicker, {
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
    onRequestClose: r,
    children: l,
    palette: s,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, n.jsx)(i.Popout, {
    renderPopout: () => (0, n.jsx)(c, {
      showSecondaryColor: a,
      palette: s,
      onPrimaryColorChange: o,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: r,
    animation: i.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: l
  })
}