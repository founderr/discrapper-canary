"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("153832"),
  o = s("866442"),
  d = s("692547"),
  u = s("481060"),
  c = s("699682"),
  S = s("44315"),
  E = s("703685"),
  T = s("586791"),
  _ = s("654904"),
  I = s("981631"),
  N = s("689938"),
  f = s("395495");

function g(e) {
  let {
    onChange: t,
    onClose: s,
    color: l,
    suggestedColors: g,
    disabled: m,
    label: C,
    colorPickerMiddle: A,
    colorPickerFooter: h,
    showEyeDropper: O
  } = e, p = n.useRef(null), R = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), x = d.default.colors.BACKGROUND_ACCENT.css, M = (0, _.isColorDark)(l), D = (0, o.int2hex)(l), L = D === R ? x : D, P = (0, S.getColor)(M ? I.Color.WHITE_500 : I.Color.PRIMARY_530), b = (0, c.default)(A), v = (0, c.default)(h), [U, j] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (b !== A || v !== h) && j((0, r.v4)())
  }, [h, A, v, b]), (0, a.jsx)(u.Popout, {
    positionKey: U,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: l,
      onChange: t,
      suggestedColors: g,
      middle: A,
      footer: h,
      showEyeDropper: O
    }),
    onRequestClose: s,
    children: e => {
      let {
        onClick: t,
        ...s
      } = e;
      return (0, a.jsxs)("div", {
        ref: p,
        className: i()(f.colorSwatch, {
          [f.disabled]: m
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: m ? -1 : 0,
          onClick: m ? I.NOOP : t,
          style: {
            backgroundColor: D,
            borderColor: L
          },
          className: f.swatch,
          "aria-label": N.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: p
          },
          children: (0, a.jsx)(T.default, {
            className: f.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        }), C]
      })
    }
  })
}