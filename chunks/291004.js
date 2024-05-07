"use strict";
s.r(t), s.d(t, {
  QuickSelectPopout: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("924826"),
  _ = s("481060"),
  r = s("285952"),
  u = s("153124"),
  o = s("612781");
class T extends n.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: s,
      className: n
    } = this.props;
    return (0, a.jsxs)(r.default, {
      className: E()(o.quickSelect, n),
      align: r.default.Align.CENTER,
      children: [(0, a.jsx)("div", {
        className: o.quickSelectLabel,
        children: e
      }), (0, a.jsxs)(r.default, {
        align: r.default.Align.CENTER,
        className: o.quickSelectClick,
        children: [(0, a.jsx)("div", {
          className: o.quickSelectValue,
          children: null != s ? s(t) : t.label
        }), (0, a.jsx)("div", {
          className: o.quickSelectArrow
        })]
      })]
    })
  }
}
class d extends n.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: s
    } = this.props;
    return (0, a.jsx)(l.ListNavigatorItem, {
      id: s.key,
      children: n => (0, a.jsx)(_.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: E()(o.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ...n,
        role: "option",
        children: t(s, e)
      })
    })
  }
  constructor(...e) {
    var t, s, a;
    super(...e), t = this, s = "handleClick", a = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a
  }
}

function A(e) {
  let {
    options: t,
    value: s,
    scroller: n,
    renderOption: i,
    onChange: r,
    className: T
  } = e, A = E()(o.quickSelectPopout, T, {
    [o.quickSelectPopoutScroll]: n
  }), I = t.map(e => {
    let t = null != s && e.value === s.value,
      n = t ? void 0 : r;
    return (0, a.jsx)(d, {
      className: o.quickSelectPopoutOption,
      renderOption: i,
      option: e,
      onChange: n,
      selected: t
    }, e.key || e.value)
  }), L = (0, u.useUID)(), c = (0, l.default)({
    id: L,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: N,
    ...S
  } = c.containerProps;
  return (0, _.useFocusLock)(N), (0, a.jsx)(l.ListNavigatorProvider, {
    navigator: c,
    children: (0, a.jsx)("div", {
      ref: N,
      className: A,
      ...S,
      role: "listbox",
      children: n ? (0, a.jsx)(_.Scroller, {
        className: o.quickSelectScroller,
        children: I
      }) : I
    })
  })
}
t.default = T