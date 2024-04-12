"use strict";
s.r(t), s.d(t, {
  QuickSelectPopout: function() {
    return o
  }
}), s("47120");
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("924826"),
  u = s("481060"),
  i = s("285952"),
  A = s("153124"),
  l = s("570832");
class I extends _.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: s,
      className: _
    } = this.props;
    return (0, E.jsxs)(i.default, {
      className: n()(l.quickSelect, _),
      align: i.default.Align.CENTER,
      children: [(0, E.jsx)("div", {
        className: l.quickSelectLabel,
        children: e
      }), (0, E.jsxs)(i.default, {
        align: i.default.Align.CENTER,
        className: l.quickSelectClick,
        children: [(0, E.jsx)("div", {
          className: l.quickSelectValue,
          children: null != s ? s(t) : t.label
        }), (0, E.jsx)("div", {
          className: l.quickSelectArrow
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
      option: s
    } = this.props;
    return (0, E.jsx)(T.ListNavigatorItem, {
      id: s.key,
      children: _ => (0, E.jsx)(u.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: n()(l.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ..._,
        role: "option",
        children: t(s, e)
      })
    })
  }
  constructor(...e) {
    var t, s, E;
    super(...e), t = this, s = "handleClick", E = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }, s in t ? Object.defineProperty(t, s, {
      value: E,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = E
  }
}

function o(e) {
  let {
    options: t,
    value: s,
    scroller: _,
    renderOption: a,
    onChange: i,
    className: I
  } = e, o = n()(l.quickSelectPopout, I, {
    [l.quickSelectPopoutScroll]: _
  }), r = t.map(e => {
    let t = null != s && e.value === s.value,
      _ = t ? void 0 : i;
    return (0, E.jsx)(L, {
      className: l.quickSelectPopoutOption,
      renderOption: a,
      option: e,
      onChange: _,
      selected: t
    }, e.key || e.value)
  }), d = (0, A.useUID)(), S = (0, T.default)({
    id: d,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: N,
    ...g
  } = S.containerProps;
  return (0, u.useFocusLock)(N), (0, E.jsx)(T.ListNavigatorProvider, {
    navigator: S,
    children: (0, E.jsx)("div", {
      ref: N,
      className: o,
      ...g,
      role: "listbox",
      children: _ ? (0, E.jsx)(u.Scroller, {
        className: l.quickSelectScroller,
        children: r
      }) : r
    })
  })
}
t.default = I