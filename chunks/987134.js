"use strict";
s.d(t, {
  Z: function() {
    return m
  },
  v: function() {
    return g
  }
}), s(47120);
var n, r, a, i = s(735250),
  l = s(470079),
  o = s(120356),
  c = s.n(o),
  u = s(536640),
  d = s(481060),
  C = s(981631),
  f = s(689938),
  p = s(362004);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(a = n || (n = {})).TOP = "top", a.BOTTOM = "bottom";
let g = {
  container: (e, t) => {
    let {
      isDisabled: s
    } = t;
    return {
      ...e,
      cursor: s ? "not-allowed" : void 0,
      pointerEvents: void 0,
      fontSize: 16,
      fontWeight: 500,
      width: "100%"
    }
  },
  control: (e, t) => {
    let {
      isDisabled: s,
      menuIsOpen: n
    } = t;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: s ? .6 : 1,
      boxShadow: void 0,
      borderRadius: n ? "4px 4px 0 0" : "4px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: s ? "not-allowed" : void 0,
      pointerEvents: s ? "none" : void 0,
      "&:hover": {
        borderColor: "var(--input-background)"
      }
    }
  },
  singleValue: (e, t) => {
    let {
      isDisabled: s
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      opacity: s ? .5 : 1
    }
  },
  input: e => ({
    ...e,
    color: "var(--interactive-normal)"
  }),
  menu: e => ({
    ...e,
    backgroundColor: "var(--background-secondary)",
    border: "1px solid var(--background-tertiary)",
    borderRadius: "0 0 4px 4px",
    color: "var(--interactive-normal)",
    marginTop: -1,
    marginBottom: -1
  }),
  clearIndicator: (e, t) => {
    let {
      isDisabled: s
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      cursor: s ? void 0 : "pointer",
      opacity: .3,
      padding: "8px 0",
      transform: "scale(0.8)",
      ":hover": {
        color: "var(--text-danger)",
        opacity: 1
      }
    }
  },
  indicatorsContainer: e => ({
    ...e,
    alignItems: "flex-start"
  }),
  dropdownIndicator: (e, t) => {
    let {
      isDisabled: s
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      cursor: s ? void 0 : "pointer",
      opacity: s ? .3 : 1,
      padding: "8px 8px 8px 0",
      ":hover": {
        color: "var(--interactive-hover)",
        opacity: s ? .3 : 1
      }
    }
  },
  menuList: e => ({
    ...e,
    padding: 0,
    "&::-webkit-scrollbar": {
      width: 8,
      padding: "0px 2px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--scrollbar-thin-thumb)",
      border: "2px solid transparent",
      backgroundClip: "padding-box",
      borderRadius: 4
    },
    "&::-webkit-scrollbar-track-piece": {
      backgroundColor: "transparent",
      borderColor: "transparent"
    }
  }),
  option: (e, t) => {
    let {
      isSelected: s,
      isFocused: n
    } = t;
    return {
      ...e,
      ...s ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : n ? {
        backgroundColor: "var(--background-modifier-hover)",
        color: "var(--interactive-hover)"
      } : {
        backgroundColor: "transparent",
        color: "var(--interactive-normal)"
      },
      cursor: "pointer",
      display: "flex",
      padding: 12,
      alignItems: "center",
      minHeight: 40,
      "&:active": {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      }
    }
  },
  placeholder: e => ({
    ...e,
    color: "var(--text-muted)"
  })
};
class m extends(r = l.Component) {
  focus() {
    var e;
    null === (e = this._selectRef.current) || void 0 === e || e.focus()
  }
  render() {
    let e;
    let {
      className: t,
      selectClassName: s,
      error: n,
      valueRenderer: r,
      optionRenderer: a,
      multiValueRenderer: l,
      options: o,
      value: C,
      autofocus: E,
      disabled: m,
      clearable: h,
      searchable: x,
      styleOverrides: I,
      isMulti: _,
      placeholder: L,
      filterOption: T,
      closeMenuOnSelect: S = !0,
      ...N
    } = this.props, b = {
      ...N
    };
    null != E && (b.autoFocus = E), null != m && (b.isDisabled = m), null != h && (b.isClearable = h), null != x && (b.isSearchable = x);
    let v = {
      IndicatorSeparator: () => null
    };
    null != a && (v.Option = e => (0, i.jsx)(u.wx.Option, {
      ...e,
      children: a(e.data)
    })), null != r && (v.SingleValue = e => (0, i.jsx)(u.wx.SingleValue, {
      ...e,
      children: r(e.data)
    })), null != l && (v.MultiValue = e => l(e.data));
    if (_ && Array.isArray(C)) {
      let t = {};
      o.forEach(e => {
        t[String(e.value)] = e
      }), e = C.map(e => t[String(e)])
    } else e = null != C ? o.find(e => e.value === C) : null;
    return (0, i.jsx)(d.FocusRing, {
      focused: this.state.isFocused && !this.state.isOpen,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: c()(p.select, t, {
          [p.error]: null != n
        }),
        ref: this._containerRef,
        children: [(0, i.jsx)(u.ZP, {
          ...b,
          className: s,
          ref: this._selectRef,
          isMulti: _,
          components: v,
          options: o,
          styles: null != I ? I : g,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMenuOpen: this.handleMenuOpen,
          onMenuClose: this.handleMenuClose,
          closeMenuOnSelect: S,
          value: e,
          onKeyDown: this.handleKeyDown,
          placeholder: null != L ? L : f.Z.Messages.SELECT,
          noOptionsMessage: () => f.Z.Messages.NO_RESULTS_FOUND,
          filterOption: T
        }), null != n ? (0, i.jsx)("div", {
          className: p.errorMessage,
          children: n
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "_selectRef", l.createRef()), E(this, "_containerRef", l.createRef()), E(this, "state", {
      isFocused: !1,
      isOpen: !1
    }), E(this, "handleFocus", e => {
      var t, s;
      this.setState({
        isFocused: !0
      }), null === (t = (s = this.props).onFocus) || void 0 === t || t.call(s, e)
    }), E(this, "handleBlur", e => {
      var t, s;
      this.setState({
        isFocused: !1
      }), null === (t = (s = this.props).onBlur) || void 0 === t || t.call(s, e)
    }), E(this, "handleKeyDown", e => {
      e.which === C.yXg.ESCAPE && this.state.isOpen && e.stopPropagation()
    }), E(this, "handleMenuOpen", () => {
      this.setState({
        isOpen: !0
      })
    }), E(this, "handleMenuClose", () => {
      this.setState({
        isOpen: !1
      })
    })
  }
}
E(m, "MenuPlacements", n)