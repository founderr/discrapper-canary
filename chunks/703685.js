"use strict";
r.r(t), r.d(t, {
  CustomColorButton: function() {
    return N
  },
  CustomColorPicker: function() {
    return I
  },
  DefaultColorButton: function() {
    return S
  },
  default: function() {
    return E
  }
}), r("47120");
var s = r("735250"),
  n = r("470079"),
  l = r("120356"),
  i = r.n(l),
  a = r("924826"),
  o = r("866442"),
  c = r("481060"),
  u = r("408886"),
  d = r("44315"),
  f = r("671862"),
  p = r("263704"),
  h = r("214623"),
  g = r("502568"),
  m = r("981631"),
  x = r("689938"),
  v = r("894545");
let b = () => Promise.resolve();

function C(e) {
  let {
    color: t,
    isDefault: r = !1,
    isCustom: n = !1,
    isSelected: l = !1,
    disabled: u = !1,
    style: f = {},
    onClick: g,
    "aria-label": x
  } = e, b = (0, a.useListItem)("color-".concat(t)), C = null != t ? (0, o.int2hex)(t) : f.backgroundColor, S = !1;
  return n && !l ? S = !0 : (n || l) && (S = (0, o.getDarkness)(t) > .1), (0, s.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, s.jsxs)("button", {
      type: "button",
      className: i()(v.colorPickerSwatch, {
        [v.disabled]: u,
        [v.default]: r,
        [v.custom]: n,
        [v.noColor]: null == t
      }),
      disabled: u,
      onClick: () => null == g ? void 0 : g(t),
      style: {
        ...f,
        backgroundColor: C
      },
      "aria-label": null != x ? x : C,
      ...b,
      children: [n ? (0, s.jsx)(h.default, {
        className: v.colorPickerDropper,
        foreground: v.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(S ? m.Color.WHITE_500 : m.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((n || r) && (e = 32, t = 24), l) return (0, s.jsx)(p.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(S ? m.Color.WHITE_500 : m.Color.BLACK_500)
        })
      }()]
    })
  })
}
class S extends n.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: r,
      disabled: n
    } = this.props;
    return (0, s.jsx)(C, {
      isDefault: !0,
      color: e,
      isSelected: e === r || 0 === r,
      onClick: t,
      disabled: n
    })
  }
}
class N extends n.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: r,
      "aria-label": n
    } = this.props;
    return (0, s.jsx)(C, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: r,
      "aria-label": n
    })
  }
}
let I = n.memo(function(e) {
  let {
    value: t,
    eagerUpdate: r = !1,
    onChange: l,
    onClose: a,
    suggestedColors: d,
    middle: p,
    footer: m,
    showEyeDropper: b,
    wrapperComponentType: C,
    className: S
  } = e, N = (0, u.default)(), I = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), E = null != I ? I : 0, T = (0, o.int2hex)(E), j = (0, o.int2hslRaw)(E), [_, A] = n.useState({
    current: E,
    pending: {
      hex: T,
      hsl: j
    },
    input: T
  });
  n.useEffect(() => {
    if (null == I || I === _.current) return;
    let e = (0, o.int2hex)(I),
      t = (0, o.int2hslRaw)(I);
    A({
      current: I,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [I, _]), n.useEffect(() => a, [a]);
  let P = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        A(e => ({
          ...e,
          input: t
        }));
        return
      }
      let r = (0, o.hex2int)(t),
        s = (0, o.int2hslRaw)(r);
      A({
        current: r,
        pending: {
          hex: t,
          hsl: s
        },
        input: t
      }), l(r)
    },
    L = async () => {
      if (null != N) try {
        let {
          sRGBHex: e
        } = await N.open();
        P(e)
      } catch {}
    }, w = n.useCallback(e => {
      A(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), r && l((0, o.hex2int)(e.hex))
    }, [r, l]), B = e => {
      l((0, o.hex2int)(e))
    }, D = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(f.default, {
        onChange: w,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return B(t)
        },
        color: _.pending.hsl
      }), p, (0, s.jsxs)("div", {
        className: v.customColorPickerInputContainer,
        children: [b && null != N && (0, s.jsx)(g.Icon, {
          onClick: L,
          tooltip: x.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: v.customColorPickerEyeDropper,
          icon: h.default
        }), (0, s.jsx)(c.TextInput, {
          className: v.customColorPickerInput,
          value: _.input,
          onChange: P,
          maxLength: 7
        })]
      }), null != d && d.length > 0 && (0, s.jsx)("div", {
        className: v.suggestedColors,
        children: d.map((e, t) => (0, s.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: v.suggestedColor,
          onClick: () => P(e)
        }, "".concat(e, "-").concat(t)))
      }), m]
    }), M = null != C ? C : c.Dialog;
  return (0, s.jsx)(M, {
    "aria-label": x.default.Messages.PICK_A_COLOR,
    className: i()(v.customColorPicker, S),
    children: D
  })
});

function E(e) {
  let {
    className: t,
    defaultColor: r,
    customColor: n,
    colors: l,
    value: o,
    disabled: c,
    onChange: u,
    renderDefaultButton: d,
    renderCustomButton: f,
    colorContainerClassName: p
  } = e, h = e => (0, s.jsx)("div", {
    className: v.colorPickerRow,
    children: e.map(e => (0, s.jsx)(C, {
      color: e,
      isSelected: e === o,
      onClick: u,
      disabled: c
    }, e))
  }), g = l.slice(0, l.length / 2), m = l.slice(l.length / 2, l.length), x = (0, a.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: b,
    scrollToEnd: b
  });
  return (0, s.jsx)(a.ListNavigatorProvider, {
    navigator: x,
    children: (0, s.jsx)(a.ListNavigatorContainer, {
      children: e => {
        let {
          ref: l,
          ...a
        } = e;
        return (0, s.jsxs)("div", {
          className: i()(v.container, t),
          ref: l,
          ...a,
          children: [(0, s.jsx)("div", {
            className: i()(v.defaultContainer, p),
            children: d({
              value: o,
              color: r,
              onChange: u,
              disabled: c
            })
          }), (0, s.jsx)("div", {
            className: i()(v.customContainer, p),
            children: f({
              value: o,
              customColor: n,
              disabled: c
            })
          }), (0, s.jsxs)("div", {
            className: v.__invalid_presets,
            children: [h(g), h(m)]
          })]
        })
      }
    })
  })
}