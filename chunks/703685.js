"use strict";
a.r(t), a.d(t, {
  CustomColorButton: function() {
    return I
  },
  CustomColorPicker: function() {
    return v
  },
  DefaultColorButton: function() {
    return x
  },
  default: function() {
    return N
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("924826"),
  o = a("866442"),
  c = a("481060"),
  d = a("408886"),
  u = a("44315"),
  f = a("671862"),
  m = a("263704"),
  h = a("214623"),
  E = a("502568"),
  T = a("981631"),
  p = a("689938"),
  _ = a("395788");
let C = () => Promise.resolve();

function g(e) {
  let {
    color: t,
    isDefault: a = !1,
    isCustom: i = !1,
    isSelected: r = !1,
    disabled: d = !1,
    style: f = {},
    onClick: E,
    "aria-label": p
  } = e, C = (0, l.useListItem)("color-".concat(t)), g = null != t ? (0, o.int2hex)(t) : f.backgroundColor, x = !1;
  return i && !r ? x = !0 : (i || r) && (x = (0, o.getDarkness)(t) > .1), (0, n.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, n.jsxs)("button", {
      type: "button",
      className: s()(_.colorPickerSwatch, {
        [_.disabled]: d,
        [_.default]: a,
        [_.custom]: i,
        [_.noColor]: null == t
      }),
      disabled: d,
      onClick: () => null == E ? void 0 : E(t),
      style: {
        ...f,
        backgroundColor: g
      },
      "aria-label": null != p ? p : g,
      ...C,
      children: [i ? (0, n.jsx)(h.default, {
        className: _.colorPickerDropper,
        foreground: _.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, u.getColor)(x ? T.Color.WHITE_500 : T.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((i || a) && (e = 32, t = 24), r) return (0, n.jsx)(m.default, {
          width: e,
          height: t,
          color: (0, u.getColor)(x ? T.Color.WHITE_500 : T.Color.BLACK_500)
        })
      }()]
    })
  })
}
class x extends i.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: a,
      disabled: i
    } = this.props;
    return (0, n.jsx)(g, {
      isDefault: !0,
      color: e,
      isSelected: e === a || 0 === a,
      onClick: t,
      disabled: i
    })
  }
}
class I extends i.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: a,
      "aria-label": i
    } = this.props;
    return (0, n.jsx)(g, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: a,
      "aria-label": i
    })
  }
}
let v = i.memo(function(e) {
  let {
    value: t,
    eagerUpdate: a = !1,
    onChange: r,
    onClose: l,
    suggestedColors: u,
    middle: m,
    footer: T,
    showEyeDropper: C,
    wrapperComponentType: g,
    className: x
  } = e, I = (0, d.default)(), v = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, o.isValidHex)(e) ? (0, o.hex2int)(e) : null;
    return e
  }(t), N = null != v ? v : 0, A = (0, o.int2hex)(N), S = (0, o.int2hslRaw)(N), [R, L] = i.useState({
    current: N,
    pending: {
      hex: A,
      hsl: S
    },
    input: A
  });
  i.useEffect(() => {
    if (null == v || v === R.current) return;
    let e = (0, o.int2hex)(v),
      t = (0, o.int2hslRaw)(v);
    L({
      current: v,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [v, R]), i.useEffect(() => l, [l]);
  let M = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        L(e => ({
          ...e,
          input: t
        }));
        return
      }
      let a = (0, o.hex2int)(t),
        n = (0, o.int2hslRaw)(a);
      L({
        current: a,
        pending: {
          hex: t,
          hsl: n
        },
        input: t
      }), r(a)
    },
    b = async () => {
      if (null != I) try {
        let {
          sRGBHex: e
        } = await I.open();
        M(e)
      } catch {}
    }, j = i.useCallback(e => {
      L(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), a && r((0, o.hex2int)(e.hex))
    }, [a, r]), y = e => {
      r((0, o.hex2int)(e))
    }, O = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.default, {
        onChange: j,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return y(t)
        },
        color: R.pending.hsl
      }), m, (0, n.jsxs)("div", {
        className: _.customColorPickerInputContainer,
        children: [C && null != I && (0, n.jsx)(E.Icon, {
          onClick: b,
          tooltip: p.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: _.customColorPickerEyeDropper,
          icon: h.default
        }), (0, n.jsx)(c.TextInput, {
          className: _.customColorPickerInput,
          value: R.input,
          onChange: M,
          maxLength: 7
        })]
      }), null != u && u.length > 0 && (0, n.jsx)("div", {
        className: _.suggestedColors,
        children: u.map((e, t) => (0, n.jsx)(c.Clickable, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: _.suggestedColor,
          onClick: () => M(e)
        }, "".concat(e, "-").concat(t)))
      }), T]
    }), D = null != g ? g : c.Dialog;
  return (0, n.jsx)(D, {
    "aria-label": p.default.Messages.PICK_A_COLOR,
    className: s()(_.customColorPicker, x),
    children: O
  })
});

function N(e) {
  let {
    className: t,
    defaultColor: a,
    customColor: i,
    colors: r,
    value: o,
    disabled: c,
    onChange: d,
    renderDefaultButton: u,
    renderCustomButton: f,
    colorContainerClassName: m
  } = e, h = e => (0, n.jsx)("div", {
    className: _.colorPickerRow,
    children: e.map(e => (0, n.jsx)(g, {
      color: e,
      isSelected: e === o,
      onClick: d,
      disabled: c
    }, e))
  }), E = r.slice(0, r.length / 2), T = r.slice(r.length / 2, r.length), p = (0, l.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: C,
    scrollToEnd: C
  });
  return (0, n.jsx)(l.ListNavigatorProvider, {
    navigator: p,
    children: (0, n.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: r,
          ...l
        } = e;
        return (0, n.jsxs)("div", {
          className: s()(_.container, t),
          ref: r,
          ...l,
          children: [(0, n.jsx)("div", {
            className: s()(_.defaultContainer, m),
            children: u({
              value: o,
              color: a,
              onChange: d,
              disabled: c
            })
          }), (0, n.jsx)("div", {
            className: s()(_.customContainer, m),
            children: f({
              value: o,
              customColor: i,
              disabled: c
            })
          }), (0, n.jsxs)("div", {
            className: _.__invalid_presets,
            children: [h(E), h(T)]
          })]
        })
      }
    })
  })
}