"use strict";
n.r(l), n.d(l, {
  DefaultColorButton: function() {
    return b
  },
  CustomColorButton: function() {
    return N
  },
  CustomColorPicker: function() {
    return k
  },
  default: function() {
    return w
  }
}), n("222007");
var r = n("37983"),
  t = n("884691"),
  a = n("414456"),
  o = n.n(a),
  i = n("974667"),
  s = n("509043"),
  c = n("77078"),
  u = n("248559"),
  d = n("449918"),
  h = n("526975"),
  p = n("36694"),
  f = n("422403"),
  x = n("664336"),
  v = n("49111"),
  m = n("782340"),
  g = n("169225");
let C = () => Promise.resolve();

function j(e) {
  let {
    color: l,
    isDefault: n = !1,
    isCustom: t = !1,
    isSelected: a = !1,
    disabled: u = !1,
    style: h = {},
    onClick: x,
    "aria-label": m
  } = e, C = (0, i.useListItem)("color-".concat(l)), j = null != l ? (0, s.int2hex)(l) : h.backgroundColor, b = !1;
  return t && !a ? b = !0 : (t || a) && (b = (0, s.getDarkness)(l) > .1), (0, r.jsx)(c.FocusRing, {
    offset: -2,
    children: (0, r.jsxs)("button", {
      type: "button",
      className: o(g.colorPickerSwatch, {
        [g.disabled]: u,
        [g.default]: n,
        [g.custom]: t,
        [g.noColor]: null == l
      }),
      disabled: u,
      onClick: () => null == x ? void 0 : x(l),
      style: {
        ...h,
        backgroundColor: j
      },
      "aria-label": null != m ? m : j,
      ...C,
      children: [t ? (0, r.jsx)(f.default, {
        className: g.colorPickerDropper,
        foreground: g.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(b ? v.Color.WHITE_500 : v.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          l = 16;
        if ((t || n) && (e = 32, l = 24), a) return (0, r.jsx)(p.default, {
          width: e,
          height: l,
          color: (0, d.getColor)(b ? v.Color.WHITE_500 : v.Color.BLACK_500)
        })
      }()]
    })
  })
}
class b extends t.PureComponent {
  render() {
    let {
      color: e,
      onChange: l,
      value: n,
      disabled: t
    } = this.props;
    return (0, r.jsx)(j, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: l,
      disabled: t
    })
  }
}
class N extends t.PureComponent {
  render() {
    let {
      customColor: e,
      value: l,
      disabled: n,
      "aria-label": t
    } = this.props;
    return (0, r.jsx)(j, {
      isCustom: !0,
      color: e,
      isSelected: l === e,
      disabled: n,
      "aria-label": t
    })
  }
}
let k = t.memo(e => {
  let {
    value: l,
    onChange: n,
    onClose: a,
    suggestedColors: o,
    middle: i,
    footer: d,
    showEyeDropper: p
  } = e, v = (0, u.default)(), [C, j] = t.useState(() => {
    let e = null != l ? l : 0,
      n = (0, s.int2hex)(e);
    return {
      current: e,
      pending: n,
      input: n
    }
  });
  t.useEffect(() => {
    if (null == l || l === C.current) return;
    let e = (0, s.int2hex)(l);
    j({
      current: l,
      pending: e,
      input: e
    })
  }, [l, C]), t.useEffect(() => a, [a]);
  let b = e => {
      let l = "#" === e[0] ? e : "#".concat(e);
      if (!(0, s.isValidHex)(l)) {
        j(e => ({
          ...e,
          input: l
        }));
        return
      }
      let r = (0, s.hex2int)(l);
      j({
        current: r,
        pending: l,
        input: l
      }), n(r)
    },
    N = async () => {
      if (null != v) try {
        let {
          sRGBHex: e
        } = await v.open();
        b(e)
      } catch {}
    }, k = e => {
      j(l => ({
        ...l,
        pending: e,
        input: e
      }))
    }, w = e => {
      n((0, s.hex2int)(e))
    };
  return (0, r.jsxs)(c.Dialog, {
    "aria-label": m.default.Messages.PICK_A_COLOR,
    className: g.customColorPicker,
    children: [(0, r.jsx)(h.default, {
      onChange: e => {
        let {
          hex: l
        } = e;
        return k(l)
      },
      onChangeComplete: e => {
        let {
          hex: l
        } = e;
        return w(l)
      },
      color: C.pending
    }), i, (0, r.jsxs)("div", {
      className: g.customColorPickerInputContainer,
      children: [p && null != v && (0, r.jsx)(x.Icon, {
        onClick: N,
        tooltip: m.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: g.customColorPickerEyeDropper,
        icon: f.default
      }), (0, r.jsx)(c.TextInput, {
        className: g.customColorPickerInput,
        value: C.input,
        onChange: b,
        maxLength: 7
      })]
    }), null != o && o.length > 0 && (0, r.jsx)("div", {
      className: g.suggestedColors,
      children: o.map((e, l) => (0, r.jsx)(c.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: g.suggestedColor,
        onClick: () => b(e)
      }, "".concat(e, "-").concat(l)))
    }), d]
  })
});

function w(e) {
  let {
    className: l,
    defaultColor: n,
    customColor: t,
    colors: a,
    value: s,
    disabled: c,
    onChange: u,
    renderDefaultButton: d,
    renderCustomButton: h,
    colorContainerClassName: p
  } = e, f = e => (0, r.jsx)("div", {
    className: g.colorPickerRow,
    children: e.map(e => (0, r.jsx)(j, {
      color: e,
      isSelected: e === s,
      onClick: u,
      disabled: c
    }, e))
  }), x = a.slice(0, a.length / 2), v = a.slice(a.length / 2, a.length), m = (0, i.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: C,
    scrollToEnd: C
  });
  return (0, r.jsx)(i.ListNavigatorProvider, {
    navigator: m,
    children: (0, r.jsx)(i.ListNavigatorContainer, {
      children: e => {
        let {
          ref: a,
          ...i
        } = e;
        return (0, r.jsxs)("div", {
          className: o(g.container, l),
          ref: a,
          ...i,
          children: [(0, r.jsx)("div", {
            className: o(g.defaultContainer, p),
            children: d({
              value: s,
              color: n,
              onChange: u,
              disabled: c
            })
          }), (0, r.jsx)("div", {
            className: o(g.customContainer, p),
            children: h({
              value: s,
              customColor: t,
              disabled: c
            })
          }), (0, r.jsxs)("div", {
            className: g.presets,
            children: [f(x), f(v)]
          })]
        })
      }
    })
  })
}