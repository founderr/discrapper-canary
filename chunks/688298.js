"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  E = s("703685"),
  l = s("689938"),
  _ = s("708822");

function r(e) {
  let {
    showSecondaryColor: t,
    palette: s,
    onPrimaryColorChange: r,
    onSecondaryColorChange: u
  } = e, o = n.useRef(null);
  return (0, i.useFocusLock)(o), (0, a.jsxs)("div", {
    className: _.popoutContainer,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: _.customColorsHeader,
      children: l.default.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, a.jsxs)("div", {
      ref: o,
      className: _.colorPickersContainer,
      children: [(0, a.jsxs)("div", {
        className: _.colorColumn,
        children: [(0, a.jsx)("div", {
          className: _.colorSwatch,
          style: {
            backgroundColor: s.primary
          }
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, a.jsx)(E.CustomColorPicker, {
          className: _.colorPicker,
          value: s.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: r
        })]
      }), t && (0, a.jsxs)("div", {
        className: _.colorColumn,
        children: [(0, a.jsx)("div", {
          className: _.colorSwatch,
          style: {
            backgroundColor: s.secondary
          }
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: l.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, a.jsx)(E.CustomColorPicker, {
          className: _.colorPicker,
          value: s.secondary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: u
        })]
      })]
    })]
  })
}

function u(e) {
  let {
    shouldShow: t,
    showSecondaryColor: s,
    onRequestClose: n,
    children: E,
    palette: l,
    onPrimaryColorChange: _,
    onSecondaryColorChange: u
  } = e;
  return (0, a.jsx)(i.Popout, {
    renderPopout: () => (0, a.jsx)(r, {
      showSecondaryColor: s,
      palette: l,
      onPrimaryColorChange: _,
      onSecondaryColorChange: u
    }),
    position: "left",
    shouldShow: t,
    onRequestClose: n,
    animation: i.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: E
  })
}