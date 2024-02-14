"use strict";
E.r(t), E.d(t, {
  QuickSelectPopout: function() {
    return o
  },
  default: function() {
    return r
  }
}), E("222007");
var _ = E("37983"),
  s = E("884691"),
  a = E("414456"),
  T = E.n(a),
  n = E("974667"),
  A = E("77078"),
  u = E("145131"),
  I = E("476765"),
  i = E("172969");
class l extends s.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: E,
      className: s
    } = this.props;
    return (0, _.jsxs)(u.default, {
      className: T(i.quickSelect, s),
      align: u.default.Align.CENTER,
      children: [(0, _.jsx)("div", {
        className: i.quickSelectLabel,
        children: e
      }), (0, _.jsxs)(u.default, {
        align: u.default.Align.CENTER,
        className: i.quickSelectClick,
        children: [(0, _.jsx)("div", {
          className: i.quickSelectValue,
          children: null != E ? E(t) : t.label
        }), (0, _.jsx)("div", {
          className: i.quickSelectArrow
        })]
      })]
    })
  }
}
class L extends s.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: E
    } = this.props;
    return (0, _.jsx)(n.ListNavigatorItem, {
      id: E.key,
      children: s => (0, _.jsx)(A.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: T(i.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ...s,
        role: "option",
        children: t(E, e)
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }
  }
}

function o(e) {
  let {
    options: t,
    value: E,
    scroller: s,
    renderOption: a,
    onChange: u,
    className: l
  } = e, o = T(i.quickSelectPopout, l, {
    [i.quickSelectPopoutScroll]: s
  }), r = t.map(e => {
    let t = null != E && e.value === E.value,
      s = t ? void 0 : u;
    return (0, _.jsx)(L, {
      className: i.quickSelectPopoutOption,
      renderOption: a,
      option: e,
      onChange: s,
      selected: t
    }, e.key || e.value)
  }), d = (0, I.useUID)(), N = (0, n.default)({
    id: d,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: S,
    ...g
  } = N.containerProps;
  return (0, A.useFocusLock)(S), (0, _.jsx)(n.ListNavigatorProvider, {
    navigator: N,
    children: (0, _.jsx)("div", {
      ref: S,
      className: o,
      ...g,
      role: "listbox",
      children: s ? (0, _.jsx)(A.Scroller, {
        className: i.quickSelectScroller,
        children: r
      }) : r
    })
  })
}
var r = l