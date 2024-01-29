"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("748820"),
  o = n("509043"),
  u = n("669491"),
  d = n("77078"),
  c = n("634634"),
  f = n("449918"),
  E = n("973262"),
  h = n("832132"),
  _ = n("771325"),
  C = n("49111"),
  p = n("782340"),
  S = n("727125");

function I(e) {
  let {
    onChange: t,
    onClose: n,
    color: r,
    suggestedColors: I,
    disabled: R,
    label: m,
    colorPickerMiddle: g,
    colorPickerFooter: v,
    showEyeDropper: L
  } = e, T = l.useRef(null), N = (0, d.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), A = u.default.colors.BACKGROUND_ACCENT.css, M = (0, _.isColorDark)(r), x = (0, o.int2hex)(r), y = x === N ? A : x, P = (0, f.getColor)(M ? C.Color.WHITE_500 : C.Color.PRIMARY_530), O = (0, c.default)(g), F = (0, c.default)(v), [b, U] = l.useState((0, a.v4)());
  return l.useEffect(() => {
    (O !== g || F !== v) && U((0, a.v4)())
  }, [v, g, F, O]), (0, i.jsx)(d.Popout, {
    positionKey: b,
    renderPopout: e => (0, i.jsx)(E.CustomColorPicker, {
      ...e,
      value: r,
      onChange: t,
      suggestedColors: I,
      middle: g,
      footer: v,
      showEyeDropper: L
    }),
    onRequestClose: n,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, i.jsxs)("div", {
        ref: T,
        className: s(S.colorSwatch, {
          [S.disabled]: R
        }),
        children: [(0, i.jsx)(d.Clickable, {
          ...n,
          tabIndex: R ? -1 : 0,
          onClick: R ? C.NOOP : t,
          style: {
            backgroundColor: x,
            borderColor: y
          },
          className: S.swatch,
          "aria-label": p.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: T
          },
          children: (0, i.jsx)(h.default, {
            className: S.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        }), m]
      })
    }
  })
}