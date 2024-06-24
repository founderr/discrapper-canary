t.d(s, {
  Z: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(772848),
  o = t(866442),
  c = t(692547),
  E = t(481060),
  d = t(699682),
  _ = t(44315),
  T = t(654904),
  S = t(981631),
  u = t(689938),
  I = t(395690);

function N(e) {
  let {
    onChange: s,
    onClose: t,
    color: a,
    suggestedColors: N,
    disabled: A,
    label: C,
    colorPickerMiddle: O,
    colorPickerFooter: m,
    showEyeDropper: h
  } = e, g = i.useRef(null), R = (0, E.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(), M = c.Z.colors.BACKGROUND_ACCENT.css, x = (0, T.DP)(a), p = (0, o.Rf)(a), D = p === R ? M : p, L = (0, _.Lq)(x ? S.Ilk.WHITE_500 : S.Ilk.PRIMARY_530), P = (0, d.Z)(O), Z = (0, d.Z)(m), [f, j] = i.useState((0, r.Z)());
  return i.useEffect(() => {
    (P !== O || Z !== m) && j((0, r.Z)())
  }, [m, O, Z, P]), (0, n.jsx)(E.Popout, {
    positionKey: f,
    renderPopout: e => (0, n.jsx)(E.CustomColorPicker, {
      ...e,
      value: a,
      onChange: s,
      suggestedColors: N,
      middle: O,
      footer: m,
      showEyeDropper: h
    }),
    onRequestClose: t,
    children: e => {
      let {
        onClick: s,
        ...t
      } = e;
      return (0, n.jsxs)("div", {
        ref: g,
        className: l()(I.colorSwatch, {
          [I.disabled]: A
        }),
        children: [(0, n.jsx)(E.Clickable, {
          ...t,
          tabIndex: A ? -1 : 0,
          onClick: A ? S.dG4 : s,
          style: {
            backgroundColor: p,
            borderColor: D
          },
          className: I.swatch,
          "aria-label": u.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: g
          },
          children: (0, n.jsx)(E.PencilIcon, {
            size: "custom",
            className: I.editPencilIcon,
            width: 14,
            height: 14,
            color: L
          })
        }), C]
      })
    }
  })
}