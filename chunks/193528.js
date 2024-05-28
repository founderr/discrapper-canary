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
  f = s("981631"),
  m = s("689938"),
  I = s("395495");

function g(e) {
  let {
    onChange: t,
    onClose: s,
    color: l,
    suggestedColors: g,
    disabled: N,
    label: h,
    colorPickerMiddle: C,
    colorPickerFooter: O,
    showEyeDropper: A
  } = e, p = n.useRef(null), R = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), x = d.default.colors.BACKGROUND_ACCENT.css, M = (0, _.isColorDark)(l), L = (0, o.int2hex)(l), D = L === R ? x : L, P = (0, S.getColor)(M ? f.Color.WHITE_500 : f.Color.PRIMARY_530), v = (0, c.default)(C), b = (0, c.default)(O), [j, U] = n.useState((0, r.v4)());
  return n.useEffect(() => {
    (v !== C || b !== O) && U((0, r.v4)())
  }, [O, C, b, v]), (0, a.jsx)(u.Popout, {
    positionKey: j,
    renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
      ...e,
      value: l,
      onChange: t,
      suggestedColors: g,
      middle: C,
      footer: O,
      showEyeDropper: A
    }),
    onRequestClose: s,
    children: e => {
      let {
        onClick: t,
        ...s
      } = e;
      return (0, a.jsxs)("div", {
        ref: p,
        className: i()(I.colorSwatch, {
          [I.disabled]: N
        }),
        children: [(0, a.jsx)(u.Clickable, {
          ...s,
          tabIndex: N ? -1 : 0,
          onClick: N ? f.NOOP : t,
          style: {
            backgroundColor: L,
            borderColor: D
          },
          className: I.swatch,
          "aria-label": m.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: p
          },
          children: (0, a.jsx)(T.default, {
            className: I.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        }), h]
      })
    }
  })
}