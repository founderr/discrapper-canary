"use strict";
n.r(t), n.d(t, {
  CustomColorButton: function() {
    return x
  },
  CustomColorPicker: function() {
    return v
  },
  DefaultColorButton: function() {
    return C
  },
  default: function() {
    return N
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("924826"),
  o = n("866442"),
  u = n("481060"),
  c = n("408886"),
  d = n("44315"),
  f = n("671862"),
  p = n("263704"),
  m = n("214623"),
  E = n("502568"),
  I = n("981631"),
  _ = n("689938"),
  h = n("395788");
let T = () => Promise.resolve();

function g(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: c = !1,
    style: f = {},
    onClick: E,
    "aria-label": _
  } = e, T = (0, l.useListItem)("color-".concat(t)), g = null != t ? (0, o.int2hex)(t) : f.backgroundColor, C = !1;
  return r && !s ? C = !0 : (r || s) && (C = (0, o.getDarkness)(t) > .1), (0, i.jsx)(u.FocusRing, {
    offset: -2,
    children: (0, i.jsxs)("button", {
      type: "button",
      className: a()(h.colorPickerSwatch, {
        [h.disabled]: c,
        [h.default]: n,
        [h.custom]: r,
        [h.noColor]: null == t
      }),
      disabled: c,
      onClick: () => null == E ? void 0 : E(t),
      style: {
        ...f,
        backgroundColor: g
      },
      "aria-label": null != _ ? _ : g,
      ...T,
      children: [r ? (0, i.jsx)(m.default, {
        className: h.colorPickerDropper,
        foreground: h.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(C ? I.Color.WHITE_500 : I.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), s) return (0, i.jsx)(p.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(C ? I.Color.WHITE_500 : I.Color.BLACK_500)
        })
      }()]
    })
  })
}
class C extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: r
    } = this.props;
    return (0, i.jsx)(g, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: r
    })
  }
}
class x extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, i.jsx)(g, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let v = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: s,
    onClose: l,
    suggestedColors: d,
    middle: p,
    footer: I,
    showEyeDropper: T,
    wrapperComponentType: g,
    className: C
  } = e, x = (0, c.default)(), v = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), N = null != v ? v : 0, R = (0, o.int2hex)(N), A = (0, o.int2hslRaw)(N), [S, M] = r.useState({
    current: N,
    pending: {
      hex: R,
      hsl: A
    },
    input: R
  });
  r.useEffect(() => {
    if (null == v || v === S.current) return;
    let e = (0, o.int2hex)(v),
      t = (0, o.int2hslRaw)(v);
    M({
      current: v,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [v, S]), r.useEffect(() => l, [l]);
  let b = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, o.hex2int)(t),
        i = (0, o.int2hslRaw)(n);
      M({
        current: n,
        pending: {
          hex: t,
          hsl: i
        },
        input: t
      }), s(n)
    },
    O = async () => {
      if (null != x) try {
        let {
          sRGBHex: e
        } = await x.open();
        b(e)
      } catch {}
    }, L = r.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && s((0, o.hex2int)(e.hex))
    }, [n, s]), F = e => {
      s((0, o.hex2int)(e))
    }, y = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(f.default, {
        onChange: L,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return F(t)
        },
        color: S.pending.hsl
      }), p, (0, i.jsxs)("div", {
        className: h.customColorPickerInputContainer,
        children: [T && null != x && (0, i.jsx)(E.Icon, {
          onClick: O,
          tooltip: _.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: h.customColorPickerEyeDropper,
          icon: m.default
        }), (0, i.jsx)(u.TextInput, {
          className: h.customColorPickerInput,
          value: S.input,
          onChange: b,
          maxLength: 7
        })]
      }), null != d && d.length > 0 && (0, i.jsx)("div", {
        className: h.suggestedColors,
        children: d.map((e, t) => (0, i.jsx)(u.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: h.suggestedColor,
          onClick: () => b(e)
        }, "".concat(e, "-").concat(t)))
      }), I]
    }), D = null != g ? g : u.Dialog;
  return (0, i.jsx)(D, {
    "aria-label": _.default.Messages.PICK_A_COLOR,
    className: a()(h.customColorPicker, C),
    children: y
  })
});

function N(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: s,
    value: o,
    disabled: u,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: f,
    colorContainerClassName: p
  } = e, m = e => (0, i.jsx)("div", {
    className: h.colorPickerRow,
    children: e.map(e => (0, i.jsx)(g, {
      color: e,
      isSelected: e === o,
      onClick: c,
      disabled: u
    }, e))
  }), E = s.slice(0, s.length / 2), I = s.slice(s.length / 2, s.length), _ = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: T,
    scrollToEnd: T
  });
  return (0, i.jsx)(l.ListNavigatorProvider, {
    navigator: _,
    children: (0, i.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...l
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(h.container, t),
          ref: s,
          ...l,
          children: [(0, i.jsx)("div", {
            className: a()(h.defaultContainer, p),
            children: d({
              value: o,
              color: n,
              onChange: c,
              disabled: u
            })
          }), (0, i.jsx)("div", {
            className: a()(h.customContainer, p),
            children: f({
              value: o,
              customColor: r,
              disabled: u
            })
          }), (0, i.jsxs)("div", {
            className: h.__invalid_presets,
            children: [m(E), m(I)]
          })]
        })
      }
    })
  })
}