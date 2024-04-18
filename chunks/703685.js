"use strict";
i.r(t), i.d(t, {
  CustomColorButton: function() {
    return g
  },
  CustomColorPicker: function() {
    return v
  },
  DefaultColorButton: function() {
    return x
  },
  default: function() {
    return R
  }
}), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("924826"),
  o = i("866442"),
  u = i("481060"),
  c = i("408886"),
  d = i("44315"),
  f = i("671862"),
  p = i("263704"),
  C = i("214623"),
  m = i("502568"),
  h = i("981631"),
  _ = i("689938"),
  E = i("999583");
let I = () => Promise.resolve();

function T(e) {
  let {
    color: t,
    isDefault: i = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: c = !1,
    style: f = {},
    onClick: m,
    "aria-label": _
  } = e, I = (0, l.useListItem)("color-".concat(t)), T = null != t ? (0, o.int2hex)(t) : f.backgroundColor, x = !1;
  return r && !s ? x = !0 : (r || s) && (x = (0, o.getDarkness)(t) > .1), (0, n.jsx)(u.FocusRing, {
    offset: -2,
    children: (0, n.jsxs)("button", {
      type: "button",
      className: a()(E.colorPickerSwatch, {
        [E.disabled]: c,
        [E.default]: i,
        [E.custom]: r,
        [E.noColor]: null == t
      }),
      disabled: c,
      onClick: () => null == m ? void 0 : m(t),
      style: {
        ...f,
        backgroundColor: T
      },
      "aria-label": null != _ ? _ : T,
      ...I,
      children: [r ? (0, n.jsx)(C.default, {
        className: E.colorPickerDropper,
        foreground: E.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(x ? h.Color.WHITE_500 : h.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || i) && (e = 32, t = 24), s) return (0, n.jsx)(p.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(x ? h.Color.WHITE_500 : h.Color.BLACK_500)
        })
      }()]
    })
  })
}
class x extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: i,
      disabled: r
    } = this.props;
    return (0, n.jsx)(T, {
      isDefault: !0,
      color: e,
      isSelected: e === i || 0 === i,
      onClick: t,
      disabled: r
    })
  }
}
class g extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: i,
      "aria-label": r
    } = this.props;
    return (0, n.jsx)(T, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: i,
      "aria-label": r
    })
  }
}
let v = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: i = !1,
    onChange: s,
    onClose: l,
    suggestedColors: d,
    middle: p,
    footer: h,
    showEyeDropper: I,
    wrapperComponentType: T,
    className: x
  } = e, g = (0, c.default)(), v = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), R = null != v ? v : 0, A = (0, o.int2hex)(R), N = (0, o.int2hslRaw)(R), [S, M] = r.useState({
    current: R,
    pending: {
      hex: A,
      hsl: N
    },
    input: A
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
  let L = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let i = (0, o.hex2int)(t),
        n = (0, o.int2hslRaw)(i);
      M({
        current: i,
        pending: {
          hex: t,
          hsl: n
        },
        input: t
      }), s(i)
    },
    j = async () => {
      if (null != g) try {
        let {
          sRGBHex: e
        } = await g.open();
        L(e)
      } catch {}
    }, b = r.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), i && s((0, o.hex2int)(e.hex))
    }, [i, s]), O = e => {
      s((0, o.hex2int)(e))
    }, y = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.default, {
        onChange: b,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return O(t)
        },
        color: S.pending.hsl
      }), p, (0, n.jsxs)("div", {
        className: E.customColorPickerInputContainer,
        children: [I && null != g && (0, n.jsx)(m.Icon, {
          onClick: j,
          tooltip: _.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: E.customColorPickerEyeDropper,
          icon: C.default
        }), (0, n.jsx)(u.TextInput, {
          className: E.customColorPickerInput,
          value: S.input,
          onChange: L,
          maxLength: 7
        })]
      }), null != d && d.length > 0 && (0, n.jsx)("div", {
        className: E.suggestedColors,
        children: d.map((e, t) => (0, n.jsx)(u.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: E.suggestedColor,
          onClick: () => L(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), F = null != T ? T : u.Dialog;
  return (0, n.jsx)(F, {
    "aria-label": _.default.Messages.PICK_A_COLOR,
    className: a()(E.customColorPicker, x),
    children: y
  })
});

function R(e) {
  let {
    className: t,
    defaultColor: i,
    customColor: r,
    colors: s,
    value: o,
    disabled: u,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: f,
    colorContainerClassName: p
  } = e, C = e => (0, n.jsx)("div", {
    className: E.colorPickerRow,
    children: e.map(e => (0, n.jsx)(T, {
      color: e,
      isSelected: e === o,
      onClick: c,
      disabled: u
    }, e))
  }), m = s.slice(0, s.length / 2), h = s.slice(s.length / 2, s.length), _ = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: I,
    scrollToEnd: I
  });
  return (0, n.jsx)(l.ListNavigatorProvider, {
    navigator: _,
    children: (0, n.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...l
        } = e;
        return (0, n.jsxs)("div", {
          className: a()(E.container, t),
          ref: s,
          ...l,
          children: [(0, n.jsx)("div", {
            className: a()(E.defaultContainer, p),
            children: d({
              value: o,
              color: i,
              onChange: c,
              disabled: u
            })
          }), (0, n.jsx)("div", {
            className: a()(E.customContainer, p),
            children: f({
              value: o,
              customColor: r,
              disabled: u
            })
          }), (0, n.jsxs)("div", {
            className: E.__invalid_presets,
            children: [C(m), C(h)]
          })]
        })
      }
    })
  })
}