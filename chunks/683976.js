"use strict";
n.r(t), n.d(t, {
  QuickSelect: function() {
    return f
  },
  QuickSelectBase: function() {
    return E
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("924826"),
  l = n("481060"),
  u = n("285952"),
  d = n("153124"),
  _ = n("736439");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: r
    } = this.props;
    return (0, i.jsxs)(u.default, {
      className: a()(_.quickSelect, r),
      align: u.default.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: _.quickSelectLabel,
        children: e
      }), (0, i.jsxs)(u.default, {
        align: u.default.Align.CENTER,
        className: _.quickSelectClick,
        children: [(0, i.jsx)("div", {
          className: _.quickSelectValue,
          children: null != n ? n(t) : t.label
        }), (0, i.jsx)("div", {
          className: _.quickSelectArrow
        })]
      })]
    })
  }
}
class I extends r.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, i.jsx)(o.ListNavigatorItem, {
      id: n.key,
      children: r => (0, i.jsx)(l.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: a()(_.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ...r,
        role: "option",
        children: t(n, e)
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "handleClick", () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}

function T(e) {
  let {
    options: t,
    value: n,
    scroller: r,
    renderOption: s,
    onChange: u,
    className: c
  } = e, E = a()(_.quickSelectPopout, c, {
    [_.quickSelectPopoutScroll]: r
  }), T = t.map(e => {
    let t = null != n && e.value === n.value,
      r = t ? void 0 : u;
    return (0, i.jsx)(I, {
      className: _.quickSelectPopoutOption,
      renderOption: s,
      option: e,
      onChange: r,
      selected: t
    }, e.key || e.value)
  }), f = (0, d.useUID)(), S = (0, o.default)({
    id: f,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: h,
    ...A
  } = S.containerProps;
  return (0, l.useFocusLock)(h), (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: S,
    children: (0, i.jsx)("div", {
      ref: h,
      className: E,
      ...A,
      role: "listbox",
      children: r ? (0, i.jsx)(l.Scroller, {
        className: _.quickSelectScroller,
        children: T
      }) : T
    })
  })
}
class f extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: r,
      popoutProps: s
    } = this.props;
    return (0, i.jsx)(l.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: (s, a) => {
        let {
          isShown: o
        } = a;
        return (0, i.jsx)(l.Clickable, {
          ...s,
          className: r,
          "aria-haspopup": "listbox",
          "aria-expanded": o,
          children: (0, i.jsx)(E, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), c(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: r,
        renderOption: s,
        popoutClassName: a,
        scroller: o
      } = this.props;
      return (0, i.jsx)(T, {
        scroller: !!o,
        className: a,
        options: n,
        value: r,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), c(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}