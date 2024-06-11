"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
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
  E = s("586791"),
  T = s("654904"),
  _ = s("981631"),
  I = s("689938"),
  N = s("395495");

function g(e) {
  let {
    onChange: t,
    onClose: s,
    color: i,
    suggestedColors: g,
    disabled: f,
    label: m,
    colorPickerMiddle: A,
    colorPickerFooter: C,
    showEyeDropper: O
  } = e, h = n.useRef(null), R = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), p = d.default.colors.BACKGROUND_ACCENT.css, M = (0, T.isColorDark)(i), D = (0, o.int2hex)(i), x = D === R ? p : D, L = (0, S.getColor)(M ? _.Color.WHITE_500 : _.Color.PRIMARY_530), P = (0, c.default)(A), b = (0, c.default)(C), [v, U] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (P !== A || b !== C) && U((0, r.v4)())
  }, [C, A, b, P]), (0, a.jsx)(u.Popout, {
    positionKey: v,
    renderPopout: e => (0, a.jsx)(u.CustomColorPicker, {
      ...e,
      value: i,
      onChange: t,
      suggestedColors: g,
      middle: A,
      footer: C,
      showEyeDropper: O
    }),
    onRequestClose: s,
    children: e => {
      let {
        onClick: t,
        ...s
      } = e;
      return (0, a.jsxs)("div", {
        ref: h,
        className: l()(N.colorSwatch, {
          [N.disabled]: f
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: f ? -1 : 0,
          onClick: f ? _.NOOP : t,
          style: {
            backgroundColor: D,
            borderColor: x
          },
          className: N.swatch,
          "aria-label": I.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: h
          },
          children: (0, a.jsx)(E.default, {
            className: N.editPencilIcon,
            width: 14,
            height: 14,
            color: L
          })
        }), m]
      })
    }
  })
}