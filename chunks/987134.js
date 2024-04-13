"use strict";
r.r(t), r.d(t, {
  DEFAULT_SELECT_STYLES: function() {
    return f
  },
  default: function() {
    return m
  }
}), r("47120");
var o, a, n, l = r("735250"),
  s = r("470079"),
  i = r("803997"),
  u = r.n(i),
  d = r("137093"),
  c = r("481060"),
  p = r("981631"),
  h = r("689938"),
  v = r("664989");

function g(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}(n = o || (o = {})).TOP = "top", n.BOTTOM = "bottom";
let f = {
  container: (e, t) => {
    let {
      isDisabled: r
    } = t;
    return {
      ...e,
      cursor: r ? "not-allowed" : void 0,
      pointerEvents: void 0,
      fontSize: 16,
      fontWeight: 500,
      width: "100%"
    }
  },
  control: (e, t) => {
    let {
      isDisabled: r,
      menuIsOpen: o
    } = t;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: r ? .6 : 1,
      boxShadow: void 0,
      borderRadius: o ? "4px 4px 0 0" : "4px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: r ? "not-allowed" : void 0,
      pointerEvents: r ? "none" : void 0,
      "&:hover": {
        borderColor: "var(--input-background)"
      }
    }
  },
  singleValue: (e, t) => {
    let {
      isDisabled: r
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      opacity: r ? .5 : 1
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
      isDisabled: r
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      cursor: r ? void 0 : "pointer",
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
      isDisabled: r
    } = t;
    return {
      ...e,
      color: "var(--interactive-normal)",
      cursor: r ? void 0 : "pointer",
      opacity: r ? .3 : 1,
      padding: "8px 8px 8px 0",
      ":hover": {
        color: "var(--interactive-hover)",
        opacity: r ? .3 : 1
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
      isSelected: r,
      isFocused: o
    } = t;
    return {
      ...e,
      ...r ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : o ? {
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
class m extends(a = s.Component) {
  focus() {
    var e;
    null === (e = this._selectRef.current) || void 0 === e || e.focus()
  }
  render() {
    let e;
    let {
      className: t,
      selectClassName: r,
      error: o,
      valueRenderer: a,
      optionRenderer: n,
      multiValueRenderer: s,
      options: i,
      value: p,
      autofocus: g,
      disabled: m,
      clearable: b,
      searchable: E,
      styleOverrides: x,
      isMulti: S,
      placeholder: R,
      filterOption: M,
      closeMenuOnSelect: _ = !0,
      ...y
    } = this.props, C = {
      ...y
    };
    null != g && (C.autoFocus = g), null != m && (C.isDisabled = m), null != b && (C.isClearable = b), null != E && (C.isSearchable = E);
    let k = {
      IndicatorSeparator: () => null
    };
    null != n && (k.Option = e => (0, l.jsx)(d.components.Option, {
      ...e,
      children: n(e.data)
    })), null != a && (k.SingleValue = e => (0, l.jsx)(d.components.SingleValue, {
      ...e,
      children: a(e.data)
    })), null != s && (k.MultiValue = e => s(e.data));
    if (S && Array.isArray(p)) {
      let t = {};
      i.forEach(e => {
        t[String(e.value)] = e
      }), e = p.map(e => t[String(e)])
    } else e = null != p ? i.find(e => e.value === p) : null;
    return (0, l.jsx)(c.FocusRing, {
      focused: this.state.isFocused && !this.state.isOpen,
      ringTarget: this._containerRef,
      children: (0, l.jsxs)("div", {
        className: u()(v.select, t, {
          [v.error]: null != o
        }),
        ref: this._containerRef,
        children: [(0, l.jsx)(d.default, {
          ...C,
          className: r,
          ref: this._selectRef,
          isMulti: S,
          components: k,
          options: i,
          styles: null != x ? x : f,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMenuOpen: this.handleMenuOpen,
          onMenuClose: this.handleMenuClose,
          closeMenuOnSelect: _,
          value: e,
          onKeyDown: this.handleKeyDown,
          placeholder: null != R ? R : h.default.Messages.SELECT,
          noOptionsMessage: () => h.default.Messages.NO_RESULTS_FOUND,
          filterOption: M
        }), null != o ? (0, l.jsx)("div", {
          className: v.errorMessage,
          children: o
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "_selectRef", s.createRef()), g(this, "_containerRef", s.createRef()), g(this, "state", {
      isFocused: !1,
      isOpen: !1
    }), g(this, "handleFocus", e => {
      var t, r;
      this.setState({
        isFocused: !0
      }), null === (t = (r = this.props).onFocus) || void 0 === t || t.call(r, e)
    }), g(this, "handleBlur", e => {
      var t, r;
      this.setState({
        isFocused: !1
      }), null === (t = (r = this.props).onBlur) || void 0 === t || t.call(r, e)
    }), g(this, "handleKeyDown", e => {
      e.which === p.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
    }), g(this, "handleMenuOpen", () => {
      this.setState({
        isOpen: !0
      })
    }), g(this, "handleMenuClose", () => {
      this.setState({
        isOpen: !1
      })
    })
  }
}
g(m, "MenuPlacements", o)