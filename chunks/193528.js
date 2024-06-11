"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  g = s("395495");

function f(e) {
  let {
    onChange: t,
    onClose: s,
    color: i,
    suggestedColors: f,
    disabled: m,
    label: A,
    colorPickerMiddle: C,
    colorPickerFooter: O,
    showEyeDropper: h
  } = e, R = n.useRef(null), p = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), M = d.default.colors.BACKGROUND_ACCENT.css, D = (0, _.isColorDark)(i), x = (0, o.int2hex)(i), L = x === p ? M : x, P = (0, S.getColor)(D ? I.Color.WHITE_500 : I.Color.PRIMARY_530), b = (0, c.default)(C), v = (0, c.default)(O), [U, j] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (b !== C || v !== O) && j((0, r.v4)())
  }, [O, C, v, b]), (0, a.jsx)(u.Popout, {
    positionKey: U,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: i,
      onChange: t,
      suggestedColors: f,
      middle: C,
      footer: O,
      showEyeDropper: h
    }),
    onRequestClose: s,
    children: e => {
      let {
        onClick: t,
        ...s
      } = e;
      return (0, a.jsxs)("div", {
        ref: R,
        className: l()(g.colorSwatch, {
          [g.disabled]: m
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: m ? -1 : 0,
          onClick: m ? I.NOOP : t,
          style: {
            backgroundColor: x,
            borderColor: L
          },
          className: g.swatch,
          "aria-label": N.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: R
          },
          children: (0, a.jsx)(T.default, {
            className: g.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        }), A]
      })
    }
  })
}