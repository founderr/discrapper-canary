n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(570140),
  u = n(287259),
  d = n(819640),
  E = n(490983),
  h = n(799777),
  _ = n(5967),
  I = n(346329),
  m = n(981631),
  T = n(689938),
  g = n(518494);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class N extends i.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    c.Z.wait(() => u.wX(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    u.wX(null), u.JZ("")
  }
  focusInput() {
    let {
      searchBarRef: e
    } = this;
    null != e && e.focus()
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, s = t.findIndex(e => e.key === n), i = 0;
    s >= 0 && (i = (s + e) % t.length) < 0 && (i = t.length - 1);
    let l = t[i];
    u.wX(null != l ? l.key : null, !0)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, s.jsx)("div", {
      className: a()({
        [g.libraryFilter]: !0,
        [g.focused]: t
      }),
      children: (0, s.jsx)(o.SearchBar, {
        className: g.searchBar,
        ref: this.setRef,
        onChange: u.JZ,
        onFocus: () => this.setState({
          focused: !0
        }),
        onBlur: () => this.setState({
          focused: !1
        }),
        name: "filter",
        onClear: () => {
          this.reset(), this.focusInput()
        },
        maxLength: 100,
        query: e,
        placeholder: T.Z.Messages.APPLICATION_LIBRARY_FILTER_PLACEHOLDER
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "searchBarRef", null), p(this, "state", {
      focused: !1
    }), p(this, "setRef", e => {
      this.searchBarRef = e
    }), p(this, "handleKeyDown", e => {
      var t;
      let {
        activeRowKey: n,
        hasModalOpen: s,
        applicationViewItems: i
      } = this.props, {
        searchBarRef: l
      } = this;
      if (s || e.ctrlKey || e.altKey || e.metaKey || null == l) return;
      let a = null === (t = (0, _.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
      if (!(a !== l.inputRef.current && (0, _.VG)(a))) switch (e.which) {
        case m.yXg.ESCAPE:
          e.target !== l.inputRef.current ? this.reset() : null != l.inputRef.current && l.blur();
          break;
        case m.yXg.ENTER:
          if (null != n) {
            e.preventDefault();
            let t = i.find(e => e.key === n);
            if (null == t) return;
            let s = t.libraryApplication;
            I.performDefaultLibraryApplicationAction(s, {
              analyticsParams: {
                source: m.Sbl.APPLICATION_LIBRARY,
                location: {
                  page: m.ZY5.LIBRARY,
                  section: m.jXE.LIBRARY_APPLICATION_LIST,
                  object: m.qAy.BUTTON_CTA
                }
              }
            })
          }
          break;
        case m.yXg.ARROW_DOWN:
        case m.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === m.yXg.ARROW_DOWN ? 1 : -1);
          break;
        default:
          null != l.inputRef.current && e.target !== l.inputRef.current && l.focus()
      }
    })
  }
}

function S() {
  let e = (0, r.e7)([d.Z], () => d.Z.hasLayers()),
    t = (0, o.useModalsStore)(o.hasAnyModalOpenSelector);
  return (0, s.jsx)(N, {
    activeRowKey: (0, r.e7)([h.Z], () => h.Z.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, r.e7)([E.Z], () => E.Z.applicationFilterQuery),
    applicationViewItems: (0, r.e7)([E.Z], () => E.Z.sortedFilteredLibraryApplicationViewItems)
  })
}