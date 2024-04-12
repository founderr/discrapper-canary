"use strict";
A.r(t), A.d(t, {
  CustomColorButton: function() {
    return I
  },
  CustomColorPicker: function() {
    return E
  },
  DefaultColorButton: function() {
    return v
  },
  default: function() {
    return x
  }
}), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("924826"),
  i = A("866442"),
  o = A("481060"),
  d = A("408886"),
  u = A("44315"),
  c = A("671862"),
  f = A("263704"),
  g = A("214623"),
  C = A("502568"),
  h = A("981631"),
  m = A("689938"),
  T = A("999583");
let p = () => Promise.resolve();

function U(e) {
  let {
    color: t,
    isDefault: A = !1,
    isCustom: l = !1,
    isSelected: s = !1,
    disabled: d = !1,
    style: c = {},
    onClick: C,
    "aria-label": m
  } = e, p = (0, r.useListItem)("color-".concat(t)), U = null != t ? (0, i.int2hex)(t) : c.backgroundColor, v = !1;
  return l && !s ? v = !0 : (l || s) && (v = (0, i.getDarkness)(t) > .1), (0, a.jsx)(o.FocusRing, {
    offset: -2,
    children: (0, a.jsxs)("button", {
      type: "button",
      className: n()(T.colorPickerSwatch, {
        [T.disabled]: d,
        [T.default]: A,
        [T.custom]: l,
        [T.noColor]: null == t
      }),
      disabled: d,
      onClick: () => null == C ? void 0 : C(t),
      style: {
        ...c,
        backgroundColor: U
      },
      "aria-label": null != m ? m : U,
      ...p,
      children: [l ? (0, a.jsx)(g.default, {
        className: T.colorPickerDropper,
        foreground: T.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, u.getColor)(v ? h.Color.WHITE_500 : h.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((l || A) && (e = 32, t = 24), s) return (0, a.jsx)(f.default, {
          width: e,
          height: t,
          color: (0, u.getColor)(v ? h.Color.WHITE_500 : h.Color.BLACK_500)
        })
      }()]
    })
  })
}
class v extends l.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: A,
      disabled: l
    } = this.props;
    return (0, a.jsx)(U, {
      isDefault: !0,
      color: e,
      isSelected: e === A || 0 === A,
      onClick: t,
      disabled: l
    })
  }
}
class I extends l.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: A,
      "aria-label": l
    } = this.props;
    return (0, a.jsx)(U, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: A,
      "aria-label": l
    })
  }
}
let E = l.memo(function(e) {
  let {
    value: t,
    eagerUpdate: A = !1,
    onChange: s,
    onClose: r,
    suggestedColors: u,
    middle: f,
    footer: h,
    showEyeDropper: p,
    wrapperComponentType: U,
    className: v
  } = e, I = (0, d.default)(), E = "string" == typeof t ? (0, i.hex2int)(t) : t, x = null != E ? E : 0, N = (0, i.int2hex)(x), D = (0, i.int2hslRaw)(x), [q, L] = l.useState({
    current: x,
    pending: {
      hex: N,
      hsl: D
    },
    input: N
  });
  l.useEffect(() => {
    if (null == E || E === q.current) return;
    let e = (0, i.int2hex)(E),
      t = (0, i.int2hslRaw)(E);
    L({
      current: E,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [E, q]), l.useEffect(() => r, [r]);
  let O = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, i.isValidHex)(t)) {
        L(e => ({
          ...e,
          input: t
        }));
        return
      }
      let A = (0, i.hex2int)(t),
        a = (0, i.int2hslRaw)(A);
      L({
        current: A,
        pending: {
          hex: t,
          hsl: a
        },
        input: t
      }), s(A)
    },
    R = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        O(e)
      } catch {}
    }, P = l.useCallback(e => {
      L(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), A && s((0, i.hex2int)(e.hex))
    }, [A, s]), V = e => {
      s((0, i.hex2int)(e))
    }, j = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.default, {
        onChange: P,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return V(t)
        },
        color: q.pending.hsl
      }), f, (0, a.jsxs)("div", {
        className: T.customColorPickerInputContainer,
        children: [p && null != I && (0, a.jsx)(C.Icon, {
          onClick: R,
          tooltip: m.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: T.customColorPickerEyeDropper,
          icon: g.default
        }), (0, a.jsx)(o.TextInput, {
          className: T.customColorPickerInput,
          value: q.input,
          onChange: O,
          maxLength: 7
        })]
      }), null != u && u.length > 0 && (0, a.jsx)("div", {
        className: T.suggestedColors,
        children: u.map((e, t) => (0, a.jsx)(o.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: T.suggestedColor,
          onClick: () => O(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), b = null != U ? U : o.Dialog;
  return (0, a.jsx)(b, {
    "aria-label": m.default.Messages.PICK_A_COLOR,
    className: n()(T.customColorPicker, v),
    children: j
  })
});

function x(e) {
  let {
    className: t,
    defaultColor: A,
    customColor: l,
    colors: s,
    value: i,
    disabled: o,
    onChange: d,
    renderDefaultButton: u,
    renderCustomButton: c,
    colorContainerClassName: f
  } = e, g = e => (0, a.jsx)("div", {
    className: T.colorPickerRow,
    children: e.map(e => (0, a.jsx)(U, {
      color: e,
      isSelected: e === i,
      onClick: d,
      disabled: o
    }, e))
  }), C = s.slice(0, s.length / 2), h = s.slice(s.length / 2, s.length), m = (0, r.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: p,
    scrollToEnd: p
  });
  return (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: m,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...r
        } = e;
        return (0, a.jsxs)("div", {
          className: n()(T.container, t),
          ref: s,
          ...r,
          children: [(0, a.jsx)("div", {
            className: n()(T.defaultContainer, f),
            children: u({
              value: i,
              color: A,
              onChange: d,
              disabled: o
            })
          }), (0, a.jsx)("div", {
            className: n()(T.customContainer, f),
            children: c({
              value: i,
              customColor: l,
              disabled: o
            })
          }), (0, a.jsxs)("div", {
            className: T.__invalid_presets,
            children: [g(C), g(h)]
          })]
        })
      }
    })
  })
}