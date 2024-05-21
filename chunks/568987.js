"use strict";
l.r(t), l("653041"), l("47120"), l("724458");
var s, a = l("735250"),
  n = l("470079"),
  i = l("120356"),
  r = l.n(i),
  o = l("442837"),
  d = l("481060"),
  u = l("607070"),
  c = l("251625"),
  h = l("226951"),
  m = l("981631"),
  f = l("689938"),
  E = l("765970");

function g(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class S extends(s = n.Component) {
  getSelectedSection(e) {
    let {
      selectedSection: t
    } = this.state;
    if (null != t) return t;
    for (let t = 0; t < e.length; t++)
      if (e[t].length > 0) return t;
    return 0
  }
  componentDidMount() {
    this.focus()
  }
  render() {
    let {
      position: e
    } = this.props, t = this.getRows(), l = [];
    if (this.isEmpty()) l.push(1);
    else
      for (let e of t) l.push(e.length);
    return (0, a.jsxs)(d.Dialog, {
      className: r()(E.container, function(e) {
        if ("bottom" === e) return E.positionBottom;
        return E.positionTop
      }(e)),
      "aria-label": this.props["aria-label"],
      children: [(0, a.jsx)("div", {
        className: E.autocompleteShadow
      }), (0, a.jsx)("div", {
        className: E.autocompleteArrowWrapper,
        children: (0, a.jsx)("div", {
          className: E.autocompleteArrow
        })
      }), (0, a.jsxs)("header", {
        className: E.header,
        children: [(0, a.jsx)("div", {
          className: E.autocompleteHeaderBackground
        }), (0, a.jsx)("div", {
          className: E.headerText,
          children: this.props.label
        }), (0, a.jsx)("input", {
          type: "text",
          className: E.input,
          placeholder: this.props.placeholder,
          ref: this.inputRef,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })]
      }), (0, a.jsx)("section", {
        className: E.sectionTag,
        children: (0, a.jsx)(d.List, {
          className: E.autocompleteScroller,
          fade: !0,
          sections: l,
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
    super(...e), g(this, "inputRef", n.createRef()), g(this, "state", {
      query: null,
      selectedSection: null,
      selectedRow: 0
    }), g(this, "memoizedGetRows", (0, c.cachedFunction)((e, t, l) => {
      let s = RegExp("^".concat(h.default.escape(null != e ? e.trim() : "")), "i"),
        a = e => s.test(e);
      return l.map((e, l) => t(a, l))
    })), g(this, "getRows", () => {
      let {
        onFilterResults: e,
        sections: t
      } = this.props, {
        query: l
      } = this.state;
      return this.memoizedGetRows(l, e, t)
    }), g(this, "handleChange", e => {
      var t, l;
      let s = e.target.value;
      null === (t = (l = this.props).onQueryChange) || void 0 === t || t.call(l, s), this.setState({
        query: s,
        selectedSection: null,
        selectedRow: 0
      })
    }), g(this, "handleMouseEnter", (e, t) => {
      this.setState({
        selectedSection: e,
        selectedRow: t
      })
    }), g(this, "handleClick", (e, t) => {
      let l = this.getRows();
      this.props.onSelect(l[e][t], e), this.props.onClose()
    }), g(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t
      } = this.props, {
        selectedRow: l
      } = this.state, s = this.getRows(), a = this.getSelectedSection(s);
      switch (e.keyCode) {
        case m.KeyboardKeys.TAB:
          if (t) break;
        case m.KeyboardKeys.ARROW_DOWN:
          e.preventDefault(), this.props.sections.length > a && ++l >= s[a].length && (++a >= this.props.sections.length && (a = 0), l = 0), this.setState({
            selectedSection: a,
            selectedRow: l
          });
          break;
        case m.KeyboardKeys.ARROW_UP:
          e.preventDefault(), --l < 0 && (--a < 0 && (a = this.props.sections.length - 1), l = s[a].length - 1), this.setState({
            selectedSection: a,
            selectedRow: l
          });
          break;
        case m.KeyboardKeys.ENTER:
          e.preventDefault(), this.props.sections.length > a && s[a].length > l && (this.props.onSelect(s[a][l], a), this.props.onClose());
          break;
        case m.KeyboardKeys.ESCAPE:
          e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
      }
    }), g(this, "isEmpty", () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)), g(this, "getSectionHeight", e => {
      let t = this.props.sections[e];
      return this.isEmpty() || null == t ? 0 : 44
    }), g(this, "renderSection", e => {
      let {
        section: t
      } = e, l = this.props.sections[t];
      return this.isEmpty() || null == l ? null : (0, a.jsx)("div", {
        className: E.section,
        children: l
      }, t)
    }), g(this, "renderRow", e => {
      var t;
      let {
        section: l,
        row: s
      } = e, {
        selectedRow: n
      } = this.state;
      if (this.isEmpty()) return (0, a.jsxs)("div", {
        className: E.empty,
        children: [(0, a.jsx)("p", {
          className: E.noResultsHeader,
          children: f.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
        }), (0, a.jsx)("p", {
          children: f.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
        })]
      }, "empty");
      let i = this.getRows(),
        o = this.getSelectedSection(i),
        u = null === (t = i[l]) || void 0 === t ? void 0 : t[s];
      return (0, a.jsx)(d.Clickable, {
        onClick: this.handleClick.bind(this, l, s),
        onMouseEnter: this.handleMouseEnter.bind(this, l, s),
        className: r()(E.row, {
          [E.selected]: o === l && n === s
        }),
        children: (0, a.jsx)("div", {
          className: E.rowInner,
          children: this.props.onRenderResult(u, l)
        })
      }, "".concat(l, "-").concat(s))
    })
  }
}
g(S, "defaultProps", {
  sections: [null]
}), t.default = o.default.connectStores([u.default], () => ({
  keyboardModeEnabled: u.default.keyboardModeEnabled
}))(S)