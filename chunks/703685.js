"use strict";
a.r(t), a.d(t, {
  CustomColorButton: function() {
    return I
  },
  CustomColorPicker: function() {
    return N
  },
  DefaultColorButton: function() {
    return g
  },
  default: function() {
    return v
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("924826"),
  o = a("866442"),
  c = a("481060"),
  d = a("408886"),
  u = a("44315"),
  f = a("671862"),
  m = a("263704"),
  h = a("214623"),
  p = a("502568"),
  E = a("981631"),
  T = a("689938"),
  C = a("894545");
let x = () => Promise.resolve();

function _(e) {
  let {
    color: t,
    isDefault: a = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: d = !1,
    style: f = {},
    onClick: p,
    "aria-label": T
  } = e, x = (0, l.useListItem)("color-".concat(t)), _ = null != t ? (0, o.int2hex)(t) : f.backgroundColor, g = !1;
  return r && !s ? g = !0 : (r || s) && (g = (0, o.getDarkness)(t) > .1), (0, n.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, n.jsxs)("button", {
      type: "button",
      className: i()(C.colorPickerSwatch, {
        [C.disabled]: d,
        [C.default]: a,
        [C.custom]: r,
        [C.noColor]: null == t
      }),
      disabled: d,
      onClick: () => null == p ? void 0 : p(t),
      style: {
        ...f,
        backgroundColor: _
      },
      "aria-label": null != T ? T : _,
      ...x,
      children: [r ? (0, n.jsx)(h.default, {
        className: C.colorPickerDropper,
        foreground: C.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, u.getColor)(g ? E.Color.WHITE_500 : E.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || a) && (e = 32, t = 24), s) return (0, n.jsx)(m.default, {
          width: e,
          height: t,
          color: (0, u.getColor)(g ? E.Color.WHITE_500 : E.Color.BLACK_500)
        })
      }()]
    })
  })
}
class g extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: a,
      disabled: r
    } = this.props;
    return (0, n.jsx)(_, {
      isDefault: !0,
      color: e,
      isSelected: e === a || 0 === a,
      onClick: t,
      disabled: r
    })
  }
}
class I extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: a,
      "aria-label": r
    } = this.props;
    return (0, n.jsx)(_, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: a,
      "aria-label": r
    })
  }
}
let N = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: a = !1,
    onChange: s,
    onClose: l,
    suggestedColors: u,
    middle: m,
    footer: E,
    showEyeDropper: x,
    wrapperComponentType: _,
    className: g
  } = e, I = (0, d.default)(), N = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), v = null != N ? N : 0, A = (0, o.int2hex)(v), S = (0, o.int2hslRaw)(v), [L, R] = r.useState({
    current: v,
    pending: {
      hex: A,
      hsl: S
    },
    input: A
  });
  r.useEffect(() => {
    if (null == N || N === L.current) return;
    let e = (0, o.int2hex)(N),
      t = (0, o.int2hslRaw)(N);
    R({
      current: N,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [N, L]), r.useEffect(() => l, [l]);
  let y = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        R(e => ({
          ...e,
          input: t
        }));
        return
      }
      let a = (0, o.hex2int)(t),
        n = (0, o.int2hslRaw)(a);
      R({
        current: a,
        pending: {
          hex: t,
          hsl: n
        },
        input: t
      }), s(a)
    },
    b = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        y(e)
      } catch {}
    }, M = r.useCallback(e => {
      R(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), a && s((0, o.hex2int)(e.hex))
    }, [a, s]), j = e => {
      s((0, o.hex2int)(e))
    }, O = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.default, {
        onChange: M,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return j(t)
        },
        color: L.pending.hsl
      }), m, (0, n.jsxs)("div", {
        className: C.customColorPickerInputContainer,
        children: [x && null != I && (0, n.jsx)(p.Icon, {
          onClick: b,
          tooltip: T.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: C.customColorPickerEyeDropper,
          icon: h.default
        }), (0, n.jsx)(c.TextInput, {
          className: C.customColorPickerInput,
          value: L.input,
          onChange: y,
          maxLength: 7
        })]
      }), null != u && u.length > 0 && (0, n.jsx)("div", {
        className: C.suggestedColors,
        children: u.map((e, t) => (0, n.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: C.suggestedColor,
          onClick: () => y(e)
        }, "".concat(e, "-").concat(t)))
      }), E]
    }), D = null != _ ? _ : c.Dialog;
  return (0, n.jsx)(D, {
    "aria-label": T.default.Messages.PICK_A_COLOR,
    className: i()(C.customColorPicker, g),
    children: O
  })
});

function v(e) {
  let {
    className: t,
    defaultColor: a,
    customColor: r,
    colors: s,
    value: o,
    disabled: c,
    onChange: d,
    renderDefaultButton: u,
    renderCustomButton: f,
    colorContainerClassName: m
  } = e, h = e => (0, n.jsx)("div", {
    className: C.colorPickerRow,
    children: e.map(e => (0, n.jsx)(_, {
      color: e,
      isSelected: e === o,
      onClick: d,
      disabled: c
    }, e))
  }), p = s.slice(0, s.length / 2), E = s.slice(s.length / 2, s.length), T = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: x,
    scrollToEnd: x
  });
  return (0, n.jsx)(l.ListNavigatorProvider, {
    navigator: T,
    children: (0, n.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...l
        } = e;
        return (0, n.jsxs)("div", {
          className: i()(C.container, t),
          ref: s,
          ...l,
          children: [(0, n.jsx)("div", {
            className: i()(C.defaultContainer, m),
            children: u({
              value: o,
              color: a,
              onChange: d,
              disabled: c
            })
          }), (0, n.jsx)("div", {
            className: i()(C.customContainer, m),
            children: f({
              value: o,
              customColor: r,
              disabled: c
            })
          }), (0, n.jsxs)("div", {
            className: C.__invalid_presets,
            children: [h(p), h(E)]
          })]
        })
      }
    })
  })
}