t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(772848),
  l = t(866442),
  c = t(692547),
  d = t(481060),
  _ = t(699682),
  E = t(44315),
  u = t(654904),
  T = t(981631),
  S = t(689938),
  I = t(395690);

function N(e) {
  let {
    onChange: s,
    onClose: t,
    color: i,
    suggestedColors: N,
    disabled: C,
    label: A,
    colorPickerMiddle: m,
    colorPickerFooter: O,
    showEyeDropper: g
  } = e, h = a.useRef(null), R = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(), p = c.Z.colors.BACKGROUND_ACCENT.css, x = (0, u.DP)(i), M = (0, l.Rf)(i), D = M === R ? p : M, f = (0, E.Lq)(x ? T.Ilk.WHITE_500 : T.Ilk.PRIMARY_530), L = (0, _.Z)(m), P = (0, _.Z)(O), [Z, v] = a.useState((0, o.Z)());
  return a.useEffect(() => {
    (L !== m || P !== O) && v((0, o.Z)())
  }, [O, m, P, L]), (0, n.jsx)(d.Popout, {
    positionKey: Z,
    renderPopout: e => (0, n.jsx)(d.CustomColorPicker, {
      ...e,
      value: i,
      onChange: s,
      suggestedColors: N,
      middle: m,
      footer: O,
      showEyeDropper: g
    }),
    onRequestClose: t,
    children: e => {
      let {
        onClick: s,
        ...t
      } = e;
      return (0, n.jsxs)("div", {
        ref: h,
        className: r()(I.colorSwatch, {
          [I.disabled]: C
        }),
        children: [(0, n.jsx)(d.Clickable, {
          ...t,
          tabIndex: C ? -1 : 0,
          onClick: C ? T.dG4 : s,
          style: {
            backgroundColor: M,
            borderColor: D
          },
          className: I.swatch,
          "aria-label": S.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: h
          },
          children: (0, n.jsx)(d.PencilIcon, {
            size: "custom",
            className: I.editPencilIcon,
            width: 14,
            height: 14,
            color: f
          })
        }), A]
      })
    }
  })
}