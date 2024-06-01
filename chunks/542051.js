"use strict";
n.r(t), n.d(t, {
  getListboxOptionProps: function() {
    return m
  }
}), n("411104");
var a, l, s, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("481060"),
  f = n("689938"),
  h = n("527186");

function E(e) {
  e.stopPropagation(), e.preventDefault()
}

function m(e, t, n) {
  return {
    id: "".concat(e, "-").concat(t),
    role: "option",
    tabIndex: -1,
    "aria-selected": n
  }
}
class p extends(a = o.PureComponent) {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: a,
      onSelectQuery: l,
      onSelectSearchEverywhere: s,
      onHighlightQuery: i,
      hideQuery: o,
      searchFavorites: u
    } = this.props;
    if (e || o) return null;
    let E = -1 === a;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(c.Clickable, {
        className: d()(h.queryContainer, {
          [h.focused]: E
        }),
        ...m(n, -1, E),
        onMouseEnter: i,
        onClick: l,
        children: [(0, r.jsx)("div", {
          className: h.queryText,
          children: u ? f.default.Messages.SEARCH_FAVORITES : f.default.Messages.SEARCH_FOR_VALUE.format({
            value: t
          })
        }), (0, r.jsx)("div", {
          className: h.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(c.KeyCombo, {
            shortcut: "return",
            dim: !0,
            className: h.keyCombo
          })
        })]
      }), u && (0, r.jsxs)(c.Clickable, {
        className: d()(h.queryContainer, {
          [h.focused]: E
        }),
        ...m(n, -1, E),
        onMouseEnter: i,
        onClick: s,
        children: [(0, r.jsx)("div", {
          className: h.queryText,
          children: f.default.Messages.SEARCH_EVERYWHERE
        }), (0, r.jsx)("div", {
          className: h.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(c.KeyCombo, {
            shortcut: "shift+return",
            dim: !0,
            className: h.keyCombo
          })
        })]
      })]
    })
  }
  renderResults(e) {
    let {
      numResults: t,
      renderNoResults: n,
      renderInitialState: a,
      renderResult: l,
      renderCustomResults: s
    } = this.props;
    if (e) return a();
    if (0 === t) return n();
    if (null != l) return Array.from({
      length: t
    }).map((e, t) => l(t));
    if (null != s) return s();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      width: a
    } = this.props, l = "" === e.trim();
    return (0, r.jsxs)("div", {
      className: h.container,
      style: {
        width: a
      },
      onMouseDown: E,
      role: "listbox",
      id: n,
      tabIndex: -1,
      "aria-activedescendant": "".concat(n, "-").concat(t),
      children: [this.renderQuery(l), this.renderResults(l)]
    })
  }
}
i = {
  renderInitialState: () => null,
  hideQuery: !1,
  width: 320
}, (s = "defaultProps") in(l = p) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = p