n.d(t, {
  M: function() {
    return T
  }
}), n(411104);
var s, i, l, a, r = n(735250),
  o = n(470079),
  c = n(120356),
  u = n.n(c),
  d = n(481060),
  E = n(689938),
  _ = n(634936);

function I(e) {
  e.stopPropagation(), e.preventDefault()
}

function T(e, t, n) {
  return {
    id: "".concat(e, "-").concat(t),
    role: "option",
    tabIndex: -1,
    "aria-selected": n
  }
}
class N extends(s = o.PureComponent) {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: s,
      onSelectQuery: i,
      onSelectSearchEverywhere: l,
      onHighlightQuery: a,
      hideQuery: o,
      searchFavorites: c
    } = this.props;
    if (e || o) return null;
    let I = -1 === s;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(d.Clickable, {
        className: u()(_.queryContainer, {
          [_.focused]: I
        }),
        ...T(n, -1, I),
        onMouseEnter: a,
        onClick: i,
        children: [(0, r.jsx)("div", {
          className: _.queryText,
          children: c ? E.Z.Messages.SEARCH_FAVORITES : E.Z.Messages.SEARCH_FOR_VALUE.format({
            value: t
          })
        }), (0, r.jsx)("div", {
          className: _.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(d.KeyCombo, {
            shortcut: "return",
            dim: !0,
            className: _.keyCombo
          })
        })]
      }), c && (0, r.jsxs)(d.Clickable, {
        className: u()(_.queryContainer, {
          [_.focused]: I
        }),
        ...T(n, -1, I),
        onMouseEnter: a,
        onClick: l,
        children: [(0, r.jsx)("div", {
          className: _.queryText,
          children: E.Z.Messages.SEARCH_EVERYWHERE
        }), (0, r.jsx)("div", {
          className: _.queryShortcut,
          "aria-hidden": !0,
          children: (0, r.jsx)(d.KeyCombo, {
            shortcut: "shift+return",
            dim: !0,
            className: _.keyCombo
          })
        })]
      })]
    })
  }
  renderResults(e) {
    let {
      numResults: t,
      renderNoResults: n,
      renderInitialState: s,
      renderResult: i,
      renderCustomResults: l
    } = this.props;
    if (e) return s();
    if (0 === t) return n();
    if (null != i) return Array.from({
      length: t
    }).map((e, t) => i(t));
    if (null != l) return l();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      width: s
    } = this.props, i = "" === e.trim();
    return (0, r.jsxs)("div", {
      className: _.container,
      style: {
        width: s
      },
      onMouseDown: I,
      role: "listbox",
      id: n,
      tabIndex: -1,
      "aria-activedescendant": "".concat(n, "-").concat(t),
      children: [this.renderQuery(i), this.renderResults(i)]
    })
  }
}
a = {
  renderInitialState: () => null,
  hideQuery: !1,
  width: 320
}, (l = "defaultProps") in(i = N) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = N