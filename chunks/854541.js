"use strict";
n.r(t), n.d(t, {
  ColorPicker: function() {
    return L
  },
  ColorPickerCustomButton: function() {
    return R
  },
  ColorPickerDefaultButton: function() {
    return C
  },
  CustomColorPicker: function() {
    return g
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("924826"),
  l = n("866442"),
  u = n("1561"),
  d = n("507274"),
  _ = n("84735"),
  c = n("463208"),
  E = n("408886"),
  I = n("44315"),
  T = n("263704"),
  f = n("214623"),
  S = n("502568"),
  h = n("534828"),
  A = n("981631"),
  m = n("689938"),
  N = n("451575");
let p = () => Promise.resolve();

function O(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: u = !1,
    style: d = {},
    onClick: c,
    "aria-label": E
  } = e, S = (0, o.useListItem)("color-".concat(t)), h = null != t ? (0, l.int2hex)(t) : d.backgroundColor, m = !1;
  return r && !s ? m = !0 : (r || s) && (m = (0, l.getDarkness)(t) > .1), (0, i.jsx)(_.FocusRing, {
    offset: -2,
    children: (0, i.jsxs)("button", {
      type: "button",
      className: a()(N.colorPickerSwatch, {
        [N.disabled]: u,
        [N.default]: n,
        [N.custom]: r,
        [N.noColor]: null == t
      }),
      disabled: u,
      onClick: () => null == c ? void 0 : c(t),
      style: {
        ...d,
        backgroundColor: h
      },
      "aria-label": null != E ? E : h,
      ...S,
      children: [r ? (0, i.jsx)(f.default, {
        className: N.colorPickerDropper,
        foreground: N.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, I.getColor)(m ? A.Color.WHITE_500 : A.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), s) return (0, i.jsx)(T.default, {
          width: e,
          height: t,
          color: (0, I.getColor)(m ? A.Color.WHITE_500 : A.Color.BLACK_500)
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
    return (0, i.jsx)(O, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: r
    })
  }
}
class R extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, i.jsx)(O, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let g = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: s,
    onClose: o,
    suggestedColors: _,
    middle: I,
    footer: T,
    showEyeDropper: A,
    wrapperComponentType: p,
    className: O
  } = e, C = (0, E.default)(), R = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, l.isValidHex)(e) ? (0, l.hex2int)(e) : null;
    return e
  }(t), g = null != R ? R : 0, L = (0, l.int2hex)(g), v = (0, l.int2hslRaw)(g), [D, M] = r.useState({
    current: g,
    pending: {
      hex: L,
      hsl: v
    },
    input: L
  });
  r.useEffect(() => {
    if (null == R || R === D.current) return;
    let e = (0, l.int2hex)(R),
      t = (0, l.int2hslRaw)(R);
    M({
      current: R,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [R, D]), r.useEffect(() => o, [o]);
  let y = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, l.isValidHex)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, l.hex2int)(t),
        i = (0, l.int2hslRaw)(n);
      M({
        current: n,
        pending: {
          hex: t,
          hsl: i
        },
        input: t
      }), s(n)
    },
    P = async () => {
      if (null != C) try {
        let {
          sRGBHex: e
        } = await C.open();
        y(e)
      } catch {}
    }, U = r.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && s((0, l.hex2int)(e.hex))
    }, [n, s]), b = e => {
      s((0, l.hex2int)(e))
    }, G = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(h.default, {
        onChange: U,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return b(t)
        },
        color: D.pending.hsl
      }), I, (0, i.jsxs)("div", {
        className: N.customColorPickerInputContainer,
        children: [A && null != C && (0, i.jsx)(S.Icon, {
          onClick: P,
          tooltip: m.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: N.customColorPickerEyeDropper,
          icon: f.default
        }), (0, i.jsx)(c.TextInput, {
          className: N.customColorPickerInput,
          value: D.input,
          onChange: y,
          maxLength: 7
        })]
      }), null != _ && _.length > 0 && (0, i.jsx)("div", {
        className: N.suggestedColors,
        children: _.map((e, t) => (0, i.jsx)(u.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: N.suggestedColor,
          onClick: () => y(e)
        }, "".concat(e, "-").concat(t)))
      }), T]
    }), w = null != p ? p : d.Dialog;
  return (0, i.jsx)(w, {
    "aria-label": m.default.Messages.PICK_A_COLOR,
    className: a()(N.customColorPicker, O),
    children: G
  })
});

function L(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: s,
    value: l,
    disabled: u,
    onChange: d,
    renderDefaultButton: _,
    renderCustomButton: c,
    colorContainerClassName: E
  } = e, I = e => (0, i.jsx)("div", {
    className: N.colorPickerRow,
    children: e.map(e => (0, i.jsx)(O, {
      color: e,
      isSelected: e === l,
      onClick: d,
      disabled: u
    }, e))
  }), T = s.slice(0, s.length / 2), f = s.slice(s.length / 2, s.length), S = (0, o.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: p,
    scrollToEnd: p
  });
  return (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: S,
    children: (0, i.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...o
        } = e;
        return (0, i.jsxs)("div", {
          className: a()(N.container, t),
          ref: s,
          ...o,
          children: [(0, i.jsx)("div", {
            className: a()(N.defaultContainer, E),
            children: _({
              value: l,
              color: n,
              onChange: d,
              disabled: u
            })
          }), (0, i.jsx)("div", {
            className: a()(N.customContainer, E),
            children: c({
              value: l,
              customColor: r,
              disabled: u
            })
          }), (0, i.jsxs)("div", {
            children: [I(T), I(f)]
          })]
        })
      }
    })
  })
}