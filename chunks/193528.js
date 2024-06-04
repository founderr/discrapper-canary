"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  f = s("981631"),
  I = s("689938"),
  m = s("395495");

function N(e) {
  let {
    onChange: t,
    onClose: s,
    color: l,
    suggestedColors: N,
    disabled: g,
    label: h,
    colorPickerMiddle: C,
    colorPickerFooter: A,
    showEyeDropper: O
  } = e, p = n.useRef(null), R = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), x = d.default.colors.BACKGROUND_ACCENT.css, M = (0, _.isColorDark)(l), D = (0, o.int2hex)(l), L = D === R ? x : D, v = (0, S.getColor)(M ? f.Color.WHITE_500 : f.Color.PRIMARY_530), P = (0, c.default)(C), b = (0, c.default)(A), [U, j] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (P !== C || b !== A) && j((0, r.v4)())
  }, [A, C, b, P]), (0, a.jsx)(u.Popout, {
    positionKey: U,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: l,
      onChange: t,
      suggestedColors: N,
      middle: C,
      footer: A,
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
        className: i()(m.colorSwatch, {
          [m.disabled]: g
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: g ? -1 : 0,
          onClick: g ? f.NOOP : t,
          style: {
            backgroundColor: D,
            borderColor: L
          },
          className: m.swatch,
          "aria-label": I.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: p
          },
          children: (0, a.jsx)(T.default, {
            className: m.editPencilIcon,
            width: 14,
            height: 14,
            color: v
          })
        }), h]
      })
    }
  })
}