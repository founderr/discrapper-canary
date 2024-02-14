"use strict";
s.r(t), s.d(t, {
  DefaultColorButton: function() {
    return R
  },
  CustomColorButton: function() {
    return T
  },
  CustomColorPicker: function() {
    return m
  },
  default: function() {
    return L
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  o = s("414456"),
  r = s.n(o),
  i = s("974667"),
  a = s("509043"),
  u = s("77078"),
  c = s("248559"),
  d = s("449918"),
  E = s("526975"),
  f = s("36694"),
  C = s("422403"),
  _ = s("664336"),
  h = s("49111"),
  I = s("782340"),
  N = s("939342");
let p = () => Promise.resolve();

function g(e) {
  let {
    color: t,
    isDefault: s = !1,
    isCustom: l = !1,
    isSelected: o = !1,
    disabled: c = !1,
    style: E = {},
    onClick: _,
    "aria-label": I
  } = e, p = (0, i.useListItem)("color-".concat(t)), g = null != t ? (0, a.int2hex)(t) : E.backgroundColor, R = !1;
  return l && !o ? R = !0 : (l || o) && (R = (0, a.getDarkness)(t) > .1), (0, n.jsx)(u.FocusRing, {
    offset: -2,
    children: (0, n.jsxs)("button", {
      type: "button",
      className: r(N.colorPickerSwatch, {
        [N.disabled]: c,
        [N.default]: s,
        [N.custom]: l,
        [N.noColor]: null == t
      }),
      disabled: c,
      onClick: () => null == _ ? void 0 : _(t),
      style: {
        ...E,
        backgroundColor: g
      },
      "aria-label": null != I ? I : g,
      ...p,
      children: [l ? (0, n.jsx)(C.default, {
        className: N.colorPickerDropper,
        foreground: N.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(R ? h.Color.WHITE_500 : h.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((l || s) && (e = 32, t = 24), o) return (0, n.jsx)(f.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(R ? h.Color.WHITE_500 : h.Color.BLACK_500)
        })
      }()]
    })
  })
}
class R extends l.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: s,
      disabled: l
    } = this.props;
    return (0, n.jsx)(g, {
      isDefault: !0,
      color: e,
      isSelected: e === s || 0 === s,
      onClick: t,
      disabled: l
    })
  }
}
class T extends l.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: s,
      "aria-label": l
    } = this.props;
    return (0, n.jsx)(g, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: s,
      "aria-label": l
    })
  }
}
let m = l.memo(e => {
  let {
    value: t,
    onChange: s,
    onClose: o,
    suggestedColors: r,
    middle: i,
    footer: d,
    showEyeDropper: f
  } = e, h = (0, c.default)(), [p, g] = l.useState(() => {
    let e = null != t ? t : 0,
      s = (0, a.int2hex)(e);
    return {
      current: e,
      pending: s,
      input: s
    }
  });
  l.useEffect(() => {
    if (null == t || t === p.current) return;
    let e = (0, a.int2hex)(t);
    g({
      current: t,
      pending: e,
      input: e
    })
  }, [t, p]), l.useEffect(() => o, [o]);
  let R = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, a.isValidHex)(t)) {
        g(e => ({
          ...e,
          input: t
        }));
        return
      }
      let n = (0, a.hex2int)(t);
      g({
        current: n,
        pending: t,
        input: t
      }), s(n)
    },
    T = async () => {
      if (null != h) try {
        let {
          sRGBHex: e
        } = await h.open();
        R(e)
      } catch {}
    }, m = e => {
      g(t => ({
        ...t,
        pending: e,
        input: e
      }))
    }, L = e => {
      s((0, a.hex2int)(e))
    };
  return (0, n.jsxs)(u.Dialog, {
    "aria-label": I.default.Messages.PICK_A_COLOR,
    className: N.customColorPicker,
    children: [(0, n.jsx)(E.default, {
      onChange: e => {
        let {
          hex: t
        } = e;
        return m(t)
      },
      onChangeComplete: e => {
        let {
          hex: t
        } = e;
        return L(t)
      },
      color: p.pending
    }), i, (0, n.jsxs)("div", {
      className: N.customColorPickerInputContainer,
      children: [f && null != h && (0, n.jsx)(_.Icon, {
        onClick: T,
        tooltip: I.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: N.customColorPickerEyeDropper,
        icon: C.default
      }), (0, n.jsx)(u.TextInput, {
        className: N.customColorPickerInput,
        value: p.input,
        onChange: R,
        maxLength: 7
      })]
    }), null != r && r.length > 0 && (0, n.jsx)("div", {
      className: N.suggestedColors,
      children: r.map((e, t) => (0, n.jsx)(u.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: N.suggestedColor,
        onClick: () => R(e)
      }, "".concat(e, "-").concat(t)))
    }), d]
  })
});

function L(e) {
  let {
    className: t,
    defaultColor: s,
    customColor: l,
    colors: o,
    value: a,
    disabled: u,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: E,
    colorContainerClassName: f
  } = e, C = e => (0, n.jsx)("div", {
    className: N.colorPickerRow,
    children: e.map(e => (0, n.jsx)(g, {
      color: e,
      isSelected: e === a,
      onClick: c,
      disabled: u
    }, e))
  }), _ = o.slice(0, o.length / 2), h = o.slice(o.length / 2, o.length), I = (0, i.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: p,
    scrollToEnd: p
  });
  return (0, n.jsx)(i.ListNavigatorProvider, {
    navigator: I,
    children: (0, n.jsx)(i.ListNavigatorContainer, {
      children: e => {
        let {
          ref: o,
          ...i
        } = e;
        return (0, n.jsxs)("div", {
          className: r(N.container, t),
          ref: o,
          ...i,
          children: [(0, n.jsx)("div", {
            className: r(N.defaultContainer, f),
            children: d({
              value: a,
              color: s,
              onChange: c,
              disabled: u
            })
          }), (0, n.jsx)("div", {
            className: r(N.customContainer, f),
            children: E({
              value: a,
              customColor: l,
              disabled: u
            })
          }), (0, n.jsxs)("div", {
            className: N.presets,
            children: [C(_), C(h)]
          })]
        })
      }
    })
  })
}