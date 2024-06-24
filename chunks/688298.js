t.d(n, {
  Z: function() {
    return c
  }
});
var a = t(735250),
  r = t(470079),
  s = t(481060),
  i = t(689938),
  l = t(318145);

function o(e) {
  let {
    showSecondaryColor: n,
    palette: t,
    onPrimaryColorChange: o,
    onSecondaryColorChange: c
  } = e, d = r.useRef(null);
  return (0, s.useFocusLock)(d), (0, a.jsxs)("div", {
    className: l.popoutContainer,
    children: [(0, a.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: l.customColorsHeader,
      children: i.Z.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS
    }), (0, a.jsxs)("div", {
      ref: d,
      className: l.colorPickersContainer,
      children: [(0, a.jsxs)("div", {
        className: l.colorColumn,
        children: [(0, a.jsx)("div", {
          className: l.colorSwatch,
          style: {
            backgroundColor: t.primary
          }
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: i.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
        }), (0, a.jsx)(s.CustomColorPicker, {
          className: l.colorPicker,
          value: t.primary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: o
        })]
      }), n && (0, a.jsxs)("div", {
        className: l.colorColumn,
        children: [(0, a.jsx)("div", {
          className: l.colorSwatch,
          style: {
            backgroundColor: t.secondary
          }
        }), (0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: i.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
        }), (0, a.jsx)(s.CustomColorPicker, {
          className: l.colorPicker,
          value: t.secondary,
          eagerUpdate: !0,
          wrapperComponentType: "div",
          showEyeDropper: !0,
          onChange: c
        })]
      })]
    })]
  })
}

function c(e) {
  let {
    shouldShow: n,
    showSecondaryColor: t,
    onRequestClose: r,
    children: i,
    palette: l,
    onPrimaryColorChange: c,
    onSecondaryColorChange: d
  } = e;
  return (0, a.jsx)(s.Popout, {
    renderPopout: () => (0, a.jsx)(o, {
      showSecondaryColor: t,
      palette: l,
      onPrimaryColorChange: c,
      onSecondaryColorChange: d
    }),
    position: "left",
    shouldShow: n,
    onRequestClose: r,
    animation: s.Popout.Animation.TRANSLATE,
    animationPosition: "right",
    children: i
  })
}