"use strict";
n.d(t, {
  AG: function() {
    return p
  },
  Z$: function() {
    return C
  },
  jH: function() {
    return g
  },
  zH: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(924826),
  u = n(866442),
  _ = n(1561),
  c = n(507274),
  d = n(84735),
  E = n(463208),
  I = n(481060),
  T = n(408886),
  h = n(44315),
  f = n(502568),
  S = n(534828),
  A = n(981631),
  N = n(689938),
  m = n(19857);
let O = () => Promise.resolve();

function R(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: s = !1,
    disabled: l = !1,
    style: _ = {},
    onClick: c,
    "aria-label": E
  } = e, T = (0, a.JA)("color-".concat(t)), f = null != t ? (0, u.Rf)(t) : _.backgroundColor, S = !1;
  return r && !s ? S = !0 : (r || s) && (S = (0, u.Bd)(t) > .1), (0, i.jsx)(d.t, {
    offset: -2,
    children: (0, i.jsxs)("button", {
      type: "button",
      className: o()(m.colorPickerSwatch, {
        [m.disabled]: l,
        [m.default]: n,
        [m.custom]: r,
        [m.noColor]: null == t
      }),
      disabled: l,
      onClick: () => null == c ? void 0 : c(t),
      style: {
        ..._,
        backgroundColor: f
      },
      "aria-label": null != E ? E : f,
      ...T,
      children: [r ? (0, i.jsx)(I.EyeDropperIcon, {
        size: "custom",
        className: m.colorPickerDropper,
        colorClass: m.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, h.Lq)(S ? A.Ilk.WHITE_500 : A.Ilk.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), s) return (0, i.jsx)(I.CheckmarkLargeIcon, {
          size: "custom",
          width: e,
          height: t,
          color: (0, h.Lq)(S ? A.Ilk.WHITE_500 : A.Ilk.BLACK_500)
        })
      }()]
    })
  })
}
class p extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: r
    } = this.props;
    return (0, i.jsx)(R, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
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
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, i.jsx)(R, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let C = r.memo(function(e) {
  let {
    value: t,
    eagerUpdate: n = !1,
    onChange: s,
    onClose: a,
    suggestedColors: l,
    middle: d,
    footer: h,
    showEyeDropper: A,
    wrapperComponentType: O,
    className: R
  } = e, p = (0, T.Z)(), g = function(e) {
    if (null == e) return null;
    if ("string" == typeof e) return (0, u.FX)(e) ? (0, u._i)(e) : null;
    return e
  }(t), C = null != g ? g : 0, v = (0, u.Rf)(C), L = (0, u.O)(C), [D, M] = r.useState({
    current: C,
    pending: {
      hex: v,
      hsl: L
    },
    input: v
  });
  r.useEffect(() => {
    if (null == g || g === D.current) return;
    let e = (0, u.Rf)(g),
      t = (0, u.O)(g);
    M({
      current: g,
      pending: {
        hex: e,
        hsl: t
      },
      input: e
    })
  }, [g, D]), r.useEffect(() => a, [a]);
  let P = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, u.FX)(t)) {
        M(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, u._i)(t),
        i = (0, u.O)(n);
      M({
        current: n,
        pending: {
          hex: t,
          hsl: i
        },
        input: t
      }), s(n)
    },
    y = async () => {
      if (null != p) try {
        let {
          sRGBHex: e
        } = await p.open();
        P(e)
      } catch {}
    }, U = r.useCallback(e => {
      M(t => ({
        ...t,
        pending: e,
        input: e.hex
      })), n && s((0, u._i)(e.hex))
    }, [n, s]), b = e => {
      s((0, u._i)(e))
    }, G = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(S.Z, {
        onChange: U,
        onChangeComplete: e => {
          let {
            hex: t
          } = e;
          return b(t)
        },
        color: D.pending.hsl
      }), d, (0, i.jsxs)("div", {
        className: m.customColorPickerInputContainer,
        children: [A && null != p && (0, i.jsx)(f.JO, {
          onClick: y,
          tooltip: N.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
          tooltipPosition: "top",
          className: m.customColorPickerEyeDropper,
          icon: I.EyeDropperIcon
        }), (0, i.jsx)(E.o, {
          className: m.customColorPickerInput,
          value: D.input,
          onChange: P,
          maxLength: 7
        })]
      }), null != l && l.length > 0 && (0, i.jsx)("div", {
        className: m.suggestedColors,
        children: l.map((e, t) => (0, i.jsx)(_.P, {
          "aria-label": "",
          style: {
            backgroundColor: e
          },
          className: m.suggestedColor,
          onClick: () => P(e)
        }, "".concat(e, "-").concat(t)))
      }), h]
    }), w = null != O ? O : c.V;
  return (0, i.jsx)(w, {
    "aria-label": N.Z.Messages.PICK_A_COLOR,
    className: o()(m.customColorPicker, R),
    children: G
  })
});

function v(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: s,
    value: u,
    disabled: _,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: E,
    colorContainerClassName: I
  } = e, T = e => (0, i.jsx)("div", {
    className: m.colorPickerRow,
    children: e.map(e => (0, i.jsx)(R, {
      color: e,
      isSelected: e === u,
      onClick: c,
      disabled: _
    }, e))
  }), h = s.slice(0, s.length / 2), f = s.slice(s.length / 2, s.length), S = (0, l.ZP)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: O,
    scrollToEnd: O
  });
  return (0, i.jsx)(a.bG, {
    navigator: S,
    children: (0, i.jsx)(a.SJ, {
      children: e => {
        let {
          ref: s,
          ...a
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(m.container, t),
          ref: s,
          ...a,
          children: [(0, i.jsx)("div", {
            className: o()(m.defaultContainer, I),
            children: d({
              value: u,
              color: n,
              onChange: c,
              disabled: _
            })
          }), (0, i.jsx)("div", {
            className: o()(m.customContainer, I),
            children: E({
              value: u,
              customColor: r,
              disabled: _
            })
          }), (0, i.jsxs)("div", {
            children: [T(h), T(f)]
          })]
        })
      }
    })
  })
}