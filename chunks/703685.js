"use strict";
n.r(t), n.d(t, {
  CustomColorButton: function() {
    return j
  },
  CustomColorPicker: function() {
    return O
  },
  DefaultColorButton: function() {
    return C
  },
  default: function() {
    return E
  }
}), n("47120");
var r = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  a = n("924826"),
  o = n("866442"),
  c = n("481060"),
  u = n("408886"),
  d = n("44315"),
  p = n("671862"),
  h = n("263704"),
  g = n("214623"),
  f = n("502568"),
  v = n("981631"),
  m = n("689938"),
  x = n("894545");
let D = () => Promise.resolve();

function b(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: s = !1,
    isSelected: i = !1,
    disabled: u = !1,
    style: p = {},
    onClick: f,
    "aria-label": m
  } = e, D = (0, a.useListItem)("color-".concat(t)), b = null != t ? (0, o.int2hex)(t) : p.backgroundColor, C = !1;
  return s && !i ? C = !0 : (s || i) && (C = (0, o.getDarkness)(t) > .1), (0, r.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, r.jsxs)("button", {
      type: "button",
      className: l()(x.colorPickerSwatch, {
        [x.disabled]: u,
        [x.default]: n,
        [x.custom]: s,
        [x.noColor]: null == t
      }),
      disabled: u,
      onClick: () => null == f ? void 0 : f(t),
      style: {
        ...p,
        backgroundColor: b
      },
      "aria-label": null != m ? m : b,
      ...D,
      children: [s ? (0, r.jsx)(g.default, {
        className: x.colorPickerDropper,
        foreground: x.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(C ? v.Color.WHITE_500 : v.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((s || n) && (e = 32, t = 24), i) return (0, r.jsx)(h.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(C ? v.Color.WHITE_500 : v.Color.BLACK_500)
        })
      }()]
    })
  })
}
class C extends s.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: s
    } = this.props;
    return (0, r.jsx)(b, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: s
    })
  }
}
class j extends s.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": s
    } = this.props;
    return (0, r.jsx)(b, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": s
    })
  }
}
let O = s.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: i,
    onClose: a,
    suggestedColors: d,
    middle: h,
    footer: v,
    showEyeDropper: D,
    wrapperComponentType: b,
    className: C
  } = e, j = (0, u.default)(), O = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), E = null != O ? O : 0, L = (0, o.int2hex)(E), w = (0, o.int2hslRaw)(E), [N, _] = s.useState({
    current: E,
    pending: {
      hex: L,
      hsl: w
    },
    input: L
  });
  s.useEffect(() => {
    if (null == O || O === N.current) return;
    let e = (0, o.int2hex)(O),
      t = (0, o.int2hslRaw)(O);
    _({
      current: O,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [O, N]), s.useEffect(() => a, [a]);
  let k = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        _(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, o.hex2int)(t),
        r = (0, o.int2hslRaw)(n);
      _({
        current: n,
        pending: {
          hex: t,
          hsl: r
        },
        input: t
      }), i(n)
    },
    y = async () => {
      if (null != j) try {
        let {
          sRGBHex: e
        } = await j.open();
        k(e)
      } catch {}
    }, P = s.useCallback(e => {
      _(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && i((0, o.hex2int)(e.hex))
    }, [n, i]), A = e => {
      i((0, o.hex2int)(e))
    }, T = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.default, {
        onChange: P,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return A(t)
        },
        color: N.pending.hsl
      }), h, (0, r.jsxs)("div", {
        className: x.customColorPickerInputContainer,
        children: [D && null != j && (0, r.jsx)(f.Icon, {
          onClick: y,
          tooltip: m.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: x.customColorPickerEyeDropper,
          icon: g.default
        }), (0, r.jsx)(c.TextInput, {
          className: x.customColorPickerInput,
          value: N.input,
          onChange: k,
          maxLength: 7
        })]
      }), null != d && d.length > 0 && (0, r.jsx)("div", {
        className: x.suggestedColors,
        children: d.map((e, t) => (0, r.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: x.suggestedColor,
          onClick: () => k(e)
        }, "".concat(e, "-").concat(t)))
      }), v]
    }), R = null != b ? b : c.Dialog;
  return (0, r.jsx)(R, {
    "aria-label": m.default.Messages.PICK_A_COLOR,
    className: l()(x.customColorPicker, C),
    children: T
  })
});

function E(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: s,
    colors: i,
    value: o,
    disabled: c,
    onChange: u,
    renderDefaultButton: d,
    renderCustomButton: p,
    colorContainerClassName: h
  } = e, g = e => (0, r.jsx)("div", {
    className: x.colorPickerRow,
    children: e.map(e => (0, r.jsx)(b, {
      color: e,
      isSelected: e === o,
      onClick: u,
      disabled: c
    }, e))
  }), f = i.slice(0, i.length / 2), v = i.slice(i.length / 2, i.length), m = (0, a.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: D,
    scrollToEnd: D
  });
  return (0, r.jsx)(a.ListNavigatorProvider, {
    navigator: m,
    children: (0, r.jsx)(a.ListNavigatorContainer, {
      children: e => {
        let {
          ref: i,
          ...a
        } = e;
        return (0, r.jsxs)("div", {
          className: l()(x.container, t),
          ref: i,
          ...a,
          children: [(0, r.jsx)("div", {
            className: l()(x.defaultContainer, h),
            children: d({
              value: o,
              color: n,
              onChange: u,
              disabled: c
            })
          }), (0, r.jsx)("div", {
            className: l()(x.customContainer, h),
            children: p({
              value: o,
              customColor: s,
              disabled: c
            })
          }), (0, r.jsxs)("div", {
            className: x.__invalid_presets,
            children: [g(f), g(v)]
          })]
        })
      }
    })
  })
}