"use strict";
E.r(t), E.d(t, {
  QuickSelectPopout: function() {
    return o
  }
}), E("47120");
var s = E("735250"),
  _ = E("470079"),
  a = E("120356"),
  T = E.n(a),
  n = E("924826"),
  A = E("481060"),
  I = E("285952"),
  u = E("153124"),
  i = E("84546");
class l extends _.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: E,
      className: _
    } = this.props;
    return (0, s.jsxs)(I.default, {
      className: T()(i.quickSelect, _),
      align: I.default.Align.CENTER,
      children: [(0, s.jsx)("div", {
        className: i.quickSelectLabel,
        children: e
      }), (0, s.jsxs)(I.default, {
        align: I.default.Align.CENTER,
        className: i.quickSelectClick,
        children: [(0, s.jsx)("div", {
          className: i.quickSelectValue,
          children: null != E ? E(t) : t.label
        }), (0, s.jsx)("div", {
          className: i.quickSelectArrow
        })]
      })]
    })
  }
}
class L extends _.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: E
    } = this.props;
    return (0, s.jsx)(n.ListNavigatorItem, {
      id: E.key,
      children: _ => (0, s.jsx)(A.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: T()(i.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ..._,
        role: "option",
        children: t(E, e)
      })
    })
  }
  constructor(...e) {
    var t, E, s;
    super(...e), t = this, E = "handleClick", s = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }, E in t ? Object.defineProperty(t, E, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[E] = s
  }
}

function o(e) {
  let {
    options: t,
    value: E,
    scroller: _,
    renderOption: a,
    onChange: I,
    className: l
  } = e, o = T()(i.quickSelectPopout, l, {
    [i.quickSelectPopoutScroll]: _
  }), r = t.map(e => {
    let t = null != E && e.value === E.value,
      _ = t ? void 0 : I;
    return (0, s.jsx)(L, {
      className: i.quickSelectPopoutOption,
      renderOption: a,
      option: e,
      onChange: _,
      selected: t
    }, e.key || e.value)
  }), d = (0, u.useUID)(), N = (0, n.default)({
    id: d,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: S,
    ...g
  } = N.containerProps;
  return (0, A.useFocusLock)(S), (0, s.jsx)(n.ListNavigatorProvider, {
    navigator: N,
    children: (0, s.jsx)("div", {
      ref: S,
      className: o,
      ...g,
      role: "listbox",
      children: _ ? (0, s.jsx)(A.Scroller, {
        className: i.quickSelectScroller,
        children: r
      }) : r
    })
  })
}
t.default = l