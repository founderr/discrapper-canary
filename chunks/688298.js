"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("703685"),
  r = n("689938"),
  o = n("109267");

function u(e) {
  let {
    showSecondaryColor: t,
    palette: n,
    onPrimaryColorChange: u,
    onSecondaryColorChange: d
  } = e, c = s.useRef(null);
  return (0, l.useFocusLock)(c), (0, a.jsxs)("div", {
    className: o.popoutContainer,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: o.customColorsHeader,
      children: r.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, a.jsxs)("div", {
      ref: c,
      className: o.colorPickersContainer,
      children: [(0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.primary
          }
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, a.jsx)(i.CustomColorPicker, {
          className: o.colorPicker,
          value: n.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: u
        })]
      }), t && (0, a.jsxs)("div", {
        className: o.colorColumn,
        children: [(0, a.jsx)("div", {
          className: o.colorSwatch,
          style: {
            backgroundColor: n.secondary
          }
        }), (0, a.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: r.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
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
    onRequestClose: s,
    children: i,
    palette: r,
    onPrimaryColorChange: o,
    onSecondaryColorChange: d
  } = e;
  return (0, a.jsx)(l.Popout, {
    renderPopout: () => (0, a.jsx)(u, {
      showSecondaryColor: n,
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