"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  r = n("470079"),
  s = n("481060"),
  i = n("703685"),
  l = n("689938"),
  o = n("109267");

function c(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d
  } = e, u = r.useRef(null);
  return (0, s.useFocusLock)(u), (0, a.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: l.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, a.jsxs)("div", {
      ref: u,
      className: o.colorPickersContainer,
      children: [(0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.primary
          }
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, a.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: n.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: c
        })]
      }), t && (0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.secondary
          }
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, a.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: n.secondary,
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
    showSecondaryColor: n,
    onRequestClose: r,
    children: i,
    palette: l,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, a.jsx)(s.Popout, {
    renderPopout: () => (0, a.jsx)(c, {
      showSecondaryColor: n,
      palette: l,
      onPrimaryColorChange: o,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: r,
    animation: s.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: i
  })
}