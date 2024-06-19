t(653041), t(47120), t(724458);
var l, n = t(735250),
  i = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(442837),
  d = t(481060),
  c = t(607070),
  u = t(251625),
  h = t(226951),
  m = t(981631),
  g = t(689938),
  E = t(258534);

function N(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class T extends(l = i.Component) {
  getSelectedSection(e) {
    let {
      selectedSection: s
    } = this.state;
    if (null != s) return s;
    for (let s = 0; s < e.length; s++)
      if (e[s].length > 0) return s;
    return 0
  }
  componentDidMount() {
    this.focus()
  }
  render() {
    let {
      position: e
    } = this.props, s = this.getRows(), t = [];
    if (this.isEmpty()) t.push(1);
    else
      for (let e of s) t.push(e.length);
    return (0, n.jsxs)(d.Dialog, {
      className: r()(E.container, function(e) {
        if ("bottom" === e) return E.positionBottom;
        return E.positionTop
      }(e)),
      "aria-label": this.props["aria-label"],
      children: [(0, n.jsx)("div", {
        className: E.autocompleteShadow
      }), (0, n.jsx)("div", {
        className: E.autocompleteArrowWrapper,
        children: (0, n.jsx)("div", {
          className: E.autocompleteArrow
        })
      }), (0, n.jsxs)("header", {
        className: E.header,
        children: [(0, n.jsx)("div", {
          className: E.autocompleteHeaderBackground
        }), (0, n.jsx)("div", {
          className: E.headerText,
          children: this.props.label
        }), (0, n.jsx)("input", {
          type: "text",
          className: E.input,
          placeholder: this.props.placeholder,
          ref: this.inputRef,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })]
      }), (0, n.jsx)("section", {
        className: E.sectionTag,
        children: (0, n.jsx)(d.List, {
          className: E.autocompleteScroller,
          fade: !0,
          sections: t,
          sectionHeight: this.getSectionHeight,
          rowHeight: 40,
          renderRow: this.renderRow,
          renderSection: this.renderSection
        })
      })]
    })
  }
  focus() {
    null != this.inputRef.current && this.inputRef.current.focus()
  }
  constructor(...e) {
    super(...e), N(this, "inputRef", i.createRef()), N(this, "state", {
      query: null,
      selectedSection: null,
      selectedRow: 0
    }), N(this, "memoizedGetRows", (0, u.oH)((e, s, t) => {
      let l = RegExp("^".concat(h.Z.escape(null != e ? e.trim() : "")), "i"),
        n = e => l.test(e);
      return t.map((e, t) => s(n, t))
    })), N(this, "getRows", () => {
      let {
        onFilterResults: e,
        sections: s
      } = this.props, {
        query: t
      } = this.state;
      return this.memoizedGetRows(t, e, s)
    }), N(this, "handleChange", e => {
      var s, t;
      let l = e.target.value;
      null === (s = (t = this.props).onQueryChange) || void 0 === s || s.call(t, l), this.setState({
        query: l,
        selectedSection: null,
        selectedRow: 0
      })
    }), N(this, "handleMouseEnter", (e, s) => {
      this.setState({
        selectedSection: e,
        selectedRow: s
      })
    }), N(this, "handleClick", (e, s) => {
      let t = this.getRows();
      this.props.onSelect(t[e][s], e), this.props.onClose()
    }), N(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: s
      } = this.props, {
        selectedRow: t
      } = this.state, l = this.getRows(), n = this.getSelectedSection(l);
      switch (e.keyCode) {
        case m.yXg.TAB:
          if (s) break;
        case m.yXg.ARROW_DOWN:
          e.preventDefault(), this.props.sections.length > n && ++t >= l[n].length && (++n >= this.props.sections.length && (n = 0), t = 0), this.setState({
            selectedSection: n,
            selectedRow: t
          });
          break;
        case m.yXg.ARROW_UP:
          e.preventDefault(), --t < 0 && (--n < 0 && (n = this.props.sections.length - 1), t = l[n].length - 1), this.setState({
            selectedSection: n,
            selectedRow: t
          });
          break;
        case m.yXg.ENTER:
          e.preventDefault(), this.props.sections.length > n && l[n].length > t && (this.props.onSelect(l[n][t], n), this.props.onClose());
          break;
        case m.yXg.ESCAPE:
          e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
      }
    }), N(this, "isEmpty", () => 0 === this.getRows().reduce((e, s) => e + s.length, 0)), N(this, "getSectionHeight", e => {
      let s = this.props.sections[e];
      return this.isEmpty() || null == s ? 0 : 44
    }), N(this, "renderSection", e => {
      let {
        section: s
      } = e, t = this.props.sections[s];
      return this.isEmpty() || null == t ? null : (0, n.jsx)("div", {
        className: E.section,
        children: t
      }, s)
    }), N(this, "renderRow", e => {
      var s;
      let {
        section: t,
        row: l
      } = e, {
        selectedRow: i
      } = this.state;
      if (this.isEmpty()) return (0, n.jsxs)("div", {
        className: E.empty,
        children: [(0, n.jsx)("p", {
          className: E.noResultsHeader,
          children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
        }), (0, n.jsx)("p", {
          children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
        })]
      }, "empty");
      let a = this.getRows(),
        o = this.getSelectedSection(a),
        c = null === (s = a[t]) || void 0 === s ? void 0 : s[l];
      return (0, n.jsx)(d.Clickable, {
        onClick: this.handleClick.bind(this, t, l),
        onMouseEnter: this.handleMouseEnter.bind(this, t, l),
        className: r()(E.row, {
          [E.selected]: o === t && i === l
        }),
        children: (0, n.jsx)("div", {
          className: E.rowInner,
          children: this.props.onRenderResult(c, t)
        })
      }, "".concat(t, "-").concat(l))
    })
  }
}
N(T, "defaultProps", {
  sections: [null]
}), s.Z = o.ZP.connectStores([c.Z], () => ({
  keyboardModeEnabled: c.Z.keyboardModeEnabled
}))(T)