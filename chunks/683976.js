"use strict";
n.d(t, {
  F: function() {
    return I
  },
  n: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(924826),
  u = n(481060),
  _ = n(285952),
  c = n(153124),
  d = n(602618);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends r.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: r
    } = this.props;
    return (0, i.jsxs)(_.Z, {
      className: o()(d.quickSelect, r),
      align: _.Z.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: d.quickSelectLabel,
        children: e
      }), (0, i.jsxs)(_.Z, {
        align: _.Z.Align.CENTER,
        className: d.quickSelectClick,
        children: [(0, i.jsx)("div", {
          className: d.quickSelectValue,
          children: null != n ? n(t) : t.label
        }), (0, i.jsx)("div", {
          className: d.quickSelectArrow
        })]
      })]
    })
  }
}
class T extends r.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, i.jsx)(a.mh, {
      id: n.key,
      children: r => (0, i.jsx)(u.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: o()(d.quickSelectPopoutOption, {
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
    super(...e), E(this, "handleClick", () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}

function h(e) {
  let {
    options: t,
    value: n,
    scroller: r,
    renderOption: s,
    onChange: _,
    className: E
  } = e, I = o()(d.quickSelectPopout, E, {
    [d.quickSelectPopoutScroll]: r
  }), h = t.map(e => {
    let t = null != n && e.value === n.value,
      r = t ? void 0 : _;
    return (0, i.jsx)(T, {
      className: d.quickSelectPopoutOption,
      renderOption: s,
      option: e,
      onChange: r,
      selected: t
    }, e.key || e.value)
  }), f = (0, c.Dt)(), S = (0, l.ZP)({
    id: f,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: A,
    ...N
  } = S.containerProps;
  return (0, u.useFocusLock)(A), (0, i.jsx)(a.bG, {
    navigator: S,
    children: (0, i.jsx)("div", {
      ref: A,
      className: I,
      ...N,
      role: "listbox",
      children: r ? (0, i.jsx)(u.Scroller, {
        className: d.quickSelectScroller,
        children: h
      }) : h
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
    return (0, i.jsx)(u.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: (s, o) => {
        let {
          isShown: a
        } = o;
        return (0, i.jsx)(u.Clickable, {
          ...s,
          className: r,
          "aria-haspopup": "listbox",
          "aria-expanded": a,
          children: (0, i.jsx)(I, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), E(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: r,
        renderOption: s,
        popoutClassName: o,
        scroller: a
      } = this.props;
      return (0, i.jsx)(h, {
        scroller: !!a,
        className: o,
        options: n,
        value: r,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), E(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}