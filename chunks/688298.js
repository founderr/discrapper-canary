"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  i = a("470079"),
  r = a("481060"),
  s = a("703685"),
  l = a("689938"),
  o = a("109267");

function c(e) {
  let {
    showSecondaryColor: t,
    palette: a,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d
  } = e, u = i.useRef(null);
  return (0, r.useFocusLock)(u), (0, n.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, n.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: l.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
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
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, n.jsx)(s.CustomColorPicker, {
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
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, n.jsx)(s.CustomColorPicker, {
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
    onRequestClose: i,
    children: s,
    palette: l,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, n.jsx)(r.Popout, {
    renderPopout: () => (0, n.jsx)(c, {
      showSecondaryColor: a,
      palette: l,
      onPrimaryColorChange: o,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: i,
    animation: r.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: s
  })
}