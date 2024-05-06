"use strict";
n.r(t), n.d(t, {
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
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("924826"),
  o = n("866442"),
  c = n("481060"),
  d = n("408886"),
  u = n("44315"),
  f = n("671862"),
  m = n("263704"),
  h = n("214623"),
  p = n("502568"),
  T = n("981631"),
  E = n("689938"),
  C = n("395788");
let _ = () => Promise.resolve();

function x(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: d = !1,
    style: f = {},
    onClick: p,
    "aria-label": E
  } = e, _ = (0, l.useListItem)("color-".concat(t)), x = null != t ? (0, o.int2hex)(t) : f.backgroundColor, g = !1;
  return r && !s ? g = !0 : (r || s) && (g = (0, o.getDarkness)(t) > .1), (0, a.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, a.jsxs)("button", {
      type: "button",
      className: i()(C.colorPickerSwatch, {
        [C.disabled]: d,
        [C.default]: n,
        [C.custom]: r,
        [C.noColor]: null == t
      }),
      disabled: d,
      onClick: () => null == p ? void 0 : p(t),
      style: {
        ...f,
        backgroundColor: x
      },
      "aria-label": null != E ? E : x,
      ..._,
      children: [r ? (0, a.jsx)(h.default, {
        className: C.colorPickerDropper,
        foreground: C.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, u.getColor)(g ? T.Color.WHITE_500 : T.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), s) return (0, a.jsx)(m.default, {
          width: e,
          height: t,
          color: (0, u.getColor)(g ? T.Color.WHITE_500 : T.Color.BLACK_500)
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
      value: n,
      disabled: r
    } = this.props;
    return (0, a.jsx)(x, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
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
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, a.jsx)(x, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let N = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: s,
    onClose: l,
    suggestedColors: u,
    middle: m,
    footer: T,
    showEyeDropper: _,
    wrapperComponentType: x,
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
  let b = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        R(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, o.hex2int)(t),
        a = (0, o.int2hslRaw)(n);
      R({
        current: n,
        pending: {
          hex: t,
          hsl: a
        },
        input: t
      }), s(n)
    },
    y = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        b(e)
      } catch {}
    }, j = r.useCallback(e => {
      R(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && s((0, o.hex2int)(e.hex))
    }, [n, s]), M = e => {
      s((0, o.hex2int)(e))
    }, O = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        onChange: j,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return M(t)
        },
        color: L.pending.hsl
      }), m, (0, a.jsxs)("div", {
        className: C.customColorPickerInputContainer,
        children: [_ && null != I && (0, a.jsx)(p.Icon, {
          onClick: y,
          tooltip: E.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: C.customColorPickerEyeDropper,
          icon: h.default
        }), (0, a.jsx)(c.TextInput, {
          className: C.customColorPickerInput,
          value: L.input,
          onChange: b,
          maxLength: 7
        })]
      }), null != u && u.length > 0 && (0, a.jsx)("div", {
        className: C.suggestedColors,
        children: u.map((e, t) => (0, a.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: C.suggestedColor,
          onClick: () => b(e)
        }, "".concat(e, "-").concat(t)))
      }), T]
    }), D = null != x ? x : c.Dialog;
  return (0, a.jsx)(D, {
    "aria-label": E.default.Messages.PICK_A_COLOR,
    className: i()(C.customColorPicker, g),
    children: O
  })
});

function v(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: s,
    value: o,
    disabled: c,
    onChange: d,
    renderDefaultButton: u,
    renderCustomButton: f,
    colorContainerClassName: m
  } = e, h = e => (0, a.jsx)("div", {
    className: C.colorPickerRow,
    children: e.map(e => (0, a.jsx)(x, {
      color: e,
      isSelected: e === o,
      onClick: d,
      disabled: c
    }, e))
  }), p = s.slice(0, s.length / 2), T = s.slice(s.length / 2, s.length), E = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: _,
    scrollToEnd: _
  });
  return (0, a.jsx)(l.ListNavigatorProvider, {
    navigator: E,
    children: (0, a.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...l
        } = e;
        return (0, a.jsxs)("div", {
          className: i()(C.container, t),
          ref: s,
          ...l,
          children: [(0, a.jsx)("div", {
            className: i()(C.defaultContainer, m),
            children: u({
              value: o,
              color: n,
              onChange: d,
              disabled: c
            })
          }), (0, a.jsx)("div", {
            className: i()(C.customContainer, m),
            children: f({
              value: o,
              customColor: r,
              disabled: c
            })
          }), (0, a.jsxs)("div", {
            className: C.__invalid_presets,
            children: [h(p), h(T)]
          })]
        })
      }
    })
  })
}