r.d(n, {
  Z: function() {
    return m
  },
  v: function() {
    return g
  }
}), r(47120);
var t, o, a, i = r(735250),
  s = r(470079),
  l = r(120356),
  c = r.n(l),
  d = r(536640),
  u = r(481060),
  p = r(981631),
  h = r(689938),
  v = r(362004);

function b(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e
}(a = t || (t = {})).TOP = "top", a.BOTTOM = "bottom";
let g = {
  container: (e, n) => {
    let {
      isDisabled: r
    } = n;
    return {
      ...e,
      cursor: r ? "not-allowed" : void 0,
      pointerEvents: void 0,
      fontSize: 16,
      fontWeight: 500,
      width: "100%"
    }
  },
  control: (e, n) => {
    let {
      isDisabled: r,
      menuIsOpen: t
    } = n;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: r ? .6 : 1,
      boxShadow: void 0,
      borderRadius: t ? "4px 4px 0 0" : "4px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: r ? "not-allowed" : void 0,
      pointerEvents: r ? "none" : void 0,
      "&:hover": {
        borderColor: "var(--input-background)"
      }
    }
  },
  singleValue: (e, n) => {
    let {
      isDisabled: r
    } = n;
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
  clearIndicator: (e, n) => {
    let {
      isDisabled: r
    } = n;
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
  dropdownIndicator: (e, n) => {
    let {
      isDisabled: r
    } = n;
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
  option: (e, n) => {
    let {
      isSelected: r,
      isFocused: t
    } = n;
    return {
      ...e,
      ...r ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : t ? {
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
class m extends(o = s.Component) {
  focus() {
    var e;
    null === (e = this._selectRef.current) || void 0 === e || e.focus()
  }
  render() {
    let e;
    let {
      className: n,
      selectClassName: r,
      error: t,
      valueRenderer: o,
      optionRenderer: a,
      multiValueRenderer: s,
      options: l,
      value: p,
      autofocus: b,
      disabled: m,
      clearable: f,
      searchable: x,
      styleOverrides: k,
      isMulti: C,
      placeholder: y,
      filterOption: E,
      closeMenuOnSelect: O = !0,
      ...M
    } = this.props, _ = {
      ...M
    };
    null != b && (_.autoFocus = b), null != m && (_.isDisabled = m), null != f && (_.isClearable = f), null != x && (_.isSearchable = x);
    let w = {
      IndicatorSeparator: () => null
    };
    null != a && (w.Option = e => (0, i.jsx)(d.wx.Option, {
      ...e,
      children: a(e.data)
    })), null != o && (w.SingleValue = e => (0, i.jsx)(d.wx.SingleValue, {
      ...e,
      children: o(e.data)
    })), null != s && (w.MultiValue = e => s(e.data));
    if (C && Array.isArray(p)) {
      let n = {};
      l.forEach(e => {
        n[String(e.value)] = e
      }), e = p.map(e => n[String(e)])
    } else e = null != p ? l.find(e => e.value === p) : null;
    return (0, i.jsx)(u.FocusRing, {
      focused: this.state.isFocused && !this.state.isOpen,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: c()(v.select, n, {
          [v.error]: null != t
        }),
        ref: this._containerRef,
        children: [(0, i.jsx)(d.ZP, {
          ..._,
          className: r,
          ref: this._selectRef,
          isMulti: C,
          components: w,
          options: l,
          styles: null != k ? k : g,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMenuOpen: this.handleMenuOpen,
          onMenuClose: this.handleMenuClose,
          closeMenuOnSelect: O,
          value: e,
          onKeyDown: this.handleKeyDown,
          placeholder: null != y ? y : h.Z.Messages.SELECT,
          noOptionsMessage: () => h.Z.Messages.NO_RESULTS_FOUND,
          filterOption: E
        }), null != t ? (0, i.jsx)("div", {
          className: v.errorMessage,
          children: t
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "_selectRef", s.createRef()), b(this, "_containerRef", s.createRef()), b(this, "state", {
      isFocused: !1,
      isOpen: !1
    }), b(this, "handleFocus", e => {
      var n, r;
      this.setState({
        isFocused: !0
      }), null === (n = (r = this.props).onFocus) || void 0 === n || n.call(r, e)
    }), b(this, "handleBlur", e => {
      var n, r;
      this.setState({
        isFocused: !1
      }), null === (n = (r = this.props).onBlur) || void 0 === n || n.call(r, e)
    }), b(this, "handleKeyDown", e => {
      e.which === p.yXg.ESCAPE && this.state.isOpen && e.stopPropagation()
    }), b(this, "handleMenuOpen", () => {
      this.setState({
        isOpen: !0
      })
    }), b(this, "handleMenuClose", () => {
      this.setState({
        isOpen: !1
      })
    })
  }
}
b(m, "MenuPlacements", t)