"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("913527"),
  f = n.n(c),
  h = n("608787"),
  E = n("442837"),
  m = n("481060"),
  p = n("603263"),
  S = n("542051"),
  g = n("349033"),
  _ = n("999650"),
  N = n("933557"),
  I = n("471445"),
  T = n("592125"),
  C = n("271383"),
  A = n("699516"),
  v = n("250758"),
  R = n("944486"),
  x = n("914010"),
  M = n("246946"),
  L = n("594174"),
  b = n("396525"),
  O = n("908773"),
  y = n("740727"),
  j = n("585483"),
  D = n("63063"),
  F = n("405656"),
  P = n("51144"),
  U = n("854709"),
  k = n("981631"),
  w = n("689938"),
  G = n("818932");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let H = f()("2015-05-15").local(),
  V = (0, h.makeLazy)({
    createPromise: () => Promise.resolve().then(n.bind(n, "575535")),
    webpackId: "575535"
  }),
  Y = (e, t, n) => {
    var l, s, i;
    let {
      user: r,
      text: o
    } = n;
    if (null == r) return (0, a.jsx)("strong", {
      children: o
    });
    let u = L.default.getUser(r.id),
      d = T.default.getChannel(e),
      c = (null == d ? void 0 : d.isPrivate()) ? A.default.getNickname(r.id) : null,
      f = null !== (s = null !== (l = C.default.getNick(e, r.id)) && void 0 !== l ? l : c) && void 0 !== s ? s : P.default.getName(r),
      h = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
    return [(0, a.jsx)("img", {
      alt: "",
      className: G.displayAvatar,
      src: h
    }, "avatar-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: G.displayedNick,
      children: f
    }, "display-nick-".concat(t, "-").concat(r.id)), (0, a.jsx)("span", {
      className: G.displayUsername,
      children: P.default.getUserTag(r, {
        identifiable: M.default.enabled && M.default.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(r.id))]
  },
  z = (e, t, n) => {
    let {
      channel: l,
      text: s
    } = n;
    if (null == l) return (0, a.jsx)("strong", {
      children: s
    });
    let i = T.default.getChannel(l.parent_id),
      r = (0, I.getChannelIconComponent)(l);
    return (0, a.jsxs)("div", {
      className: G.resultChannel,
      children: [null != r ? (0, a.jsx)(r, {
        className: G.searchResultChannelIcon
      }) : null, (0, a.jsx)("strong", {
        children: (0, N.computeChannelName)(l, L.default, A.default)
      }), null != i ? (0, a.jsx)("span", {
        className: G.searchResultChannelCategory,
        children: (0, N.computeChannelName)(i, L.default, A.default)
      }) : null]
    })
  },
  K = e => {
    let t, n, {
      id: l,
      searchId: s,
      result: r,
      group: o,
      className: u,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      onSelect: h,
      onFocus: E,
      showFilter: p,
      renderResult: S
    } = e;
    if (p) {
      var g, N;
      t = (0, a.jsx)("span", {
        className: G.filter,
        children: null !== (N = null === (g = _.default[o]) || void 0 === g ? void 0 : g.key) && void 0 !== N ? N : "addme:"
      })
    }
    return n = null != S ? S(s, o, r) : (0, a.jsx)("strong", {
      children: r.text
    }), (0, a.jsxs)(m.Clickable, {
      tag: "li",
      className: i()(G.option, u),
      onClick: h,
      onFocus: E,
      id: l,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      children: [t, n, (0, a.jsx)(O.default, {
        className: G.plusIcon
      })]
    })
  },
  W = e => (0, a.jsx)(K, {
    ...e,
    className: G.user,
    renderResult: Y
  }),
  Q = {
    [k.SearchTokenTypes.FILTER_FROM]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FROM,
      component: W
    },
    [k.SearchTokenTypes.FILTER_MENTIONS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
      component: W
    },
    [k.SearchTokenTypes.FILTER_HAS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HAS
    },
    [k.SearchTokenTypes.FILTER_FILE_TYPE]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
    },
    [k.SearchTokenTypes.FILTER_IN]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
      component: e => (0, a.jsx)(K, {
        ...e,
        renderResult: z
      })
    },
    [k.SearchAutocompleteGroups.DATES]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_DATES
    },
    [k.SearchAutocompleteGroups.HISTORY]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, a.jsx)(m.Tooltip, {
          text: w.default.Messages.SEARCH_CLEAR_HISTORY,
          position: "left",
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = e;
            return (0, a.jsx)(m.Clickable, {
              onClick: () => (0, p.clearHistory)(t),
              onMouseEnter: n,
              onMouseLeave: l,
              className: G.searchClearHistory,
              title: w.default.Messages.SEARCH_CLEAR_HISTORY,
              "aria-label": w.default.Messages.SEARCH_CLEAR_HISTORY,
              children: (0, a.jsx)(y.default, {})
            })
          }
        })
      },
      component: function(e) {
        let {
          onSelect: t,
          onFocus: n,
          result: s,
          showFilter: r,
          searchId: o,
          renderResult: u,
          group: d,
          ...c
        } = e, f = "", h = l.useMemo(() => {
          var e;
          return e = s.text, F.tokenizeQuery(e).map((e, t, n) => F.filterHasAnswer(e, n[t + 1]) ? e : new g.Token(e.getFullMatch(), g.NON_TOKEN_TYPE))
        }, [s.text]).map(e => {
          let t = e.getFullMatch();
          if ("" === t.trim()) return null;
          let n = k.IS_SEARCH_FILTER_TOKEN.test(e.type),
            l = k.IS_SEARCH_ANSWER_TOKEN.test(e.type);
          return f += t, (0, a.jsx)("span", {
            className: i()({
              [G.filter]: n,
              [G.answer]: l,
              [G.nonText]: !n && !l
            }),
            children: t
          }, e.type + t)
        });
        return (0, a.jsxs)(m.Clickable, {
          className: i()(G.option, G.__invalid_history),
          onClick: t,
          onFocus: n,
          ...c,
          "aria-label": w.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
            suggestion: f
          }),
          children: [h, (0, a.jsx)(O.default, {
            className: G.plusIcon
          })]
        })
      }
    },
    [k.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
      titleText: () => w.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
      groupTip: () => (0, a.jsx)(m.Tooltip, {
        text: w.default.Messages.LEARN_MORE,
        position: "left",
        children: e => (0, a.jsx)("div", {
          className: G.searchLearnMore,
          ...e,
          children: (0, a.jsx)(m.Anchor, {
            href: D.default.getArticleURL(k.HelpdeskArticles.USING_SEARCH),
            title: w.default.Messages.LEARN_MORE,
            children: (0, a.jsx)(b.default, {})
          })
        })
      }),
      component: function(e) {
        var t;
        let {
          result: n,
          onSelect: l,
          onFocus: s,
          showFilter: r,
          searchId: o,
          ...u
        } = e, d = F.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
        return (0, a.jsxs)(m.Clickable, {
          className: i()(G.option, G.searchOption),
          onClick: l,
          onFocus: s,
          ...u,
          children: [(0, a.jsx)("span", {
            className: G.filter,
            children: n.text
          }), (0, a.jsx)("span", {
            className: i()({
              [G.answer]: d
            }),
            children: d
          }), (0, a.jsx)(O.default, {
            className: G.plusIcon
          })]
        })
      }
    }
  };
class X extends l.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: a
    } = this.props, {
      mode: l
    } = n, {
      resultsState: s
    } = e;
    null != l.filter && null == s.mode.filter && a > 0 ? this.setSelectedIndex(0) : l.type === k.SearchPopoutModes.FILTER_ALL && s.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    }, () => this.props.onSelectedIndexChanged(e))
  }
  render() {
    let {
      selectedIndex: e
    } = this.state, {
      navId: t,
      resultsState: n,
      totalResults: l,
      searchId: s
    } = this.props;
    return (0, a.jsx)(S.default, {
      numResults: l,
      query: n.query,
      navId: t,
      hideQuery: !this.shouldShowSearchQuery(),
      focusedIndex: e,
      renderCustomResults: this.renderAutocompletes,
      renderInitialState: this.renderAutocompletes,
      onHighlightQuery: () => this.focusOption(-1),
      onSelectQuery: this.performSearch,
      onSelectSearchEverywhere: () => this.performSearch({
        searchEverywhere: !0
      }),
      renderNoResults: () => null,
      searchFavorites: s === k.FAVORITES && (0, U.isFavoriteSearchEnabled)()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, B(this, "state", {
      dateHint: (0, _.getRandomDateShortcut)(),
      selectedIndex: -1
    }), B(this, "handleDateChange", e => {
      this.setSearchQuery(e.format(k.SEARCH_DATE_FORMAT) + " ", !0)
    }), B(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: a,
        totalResults: l
      } = this.props, {
        mode: s,
        autocompletes: i
      } = a, {
        resultsState: r
      } = e;
      if (s.type !== r.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
        let e = F.getFlattenedStringArray(r.autocompletes, r.mode.type)[t.selectedIndex - 1],
          n = F.getFlattenedStringArray(i, s.type).indexOf(e); - 1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= l && this.setSelectedIndex(l - 1)
      }
    }), B(this, "focusNextOption", () => {
      this.focusOtherOption(1)
    }), B(this, "focusPreviousOption", () => {
      this.focusOtherOption(-1)
    }), B(this, "focusOtherOption", e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      !F.showDatePicker(n.mode.filter) && this.focusOption(t + e)
    }), B(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        a = this.shouldShowSearchQuery();
      t < -1 || !a && t < 0 ? t = F.getTotalResults(n) - 1 : a && t >= F.getTotalResults(n) ? t = -1 : !a && t >= F.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
    }), B(this, "selectOption", e => {
      let t = e;
      if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
      let {
        autocompletes: n,
        mode: a
      } = this.props.resultsState;
      if (F.showDatePicker(a.filter)) return;
      let l = F.getFlattenedStringArray(n, a.type);
      if (t >= l.length) return !1;
      let s = l[t],
        i = function(e) {
          let t = !0,
            n = e.trim();
          return d()(_.default).forOwn(e => {
            "" !== e.key && null != e.key && n === e.key && (t = !1)
          }), t
        }(s);
      return this.setSearchQuery(s, i), !0
    }), B(this, "setSearchQuery", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: a,
          cursorScope: l
        } = t.props.resultsState,
        s = 0;
      null != a.token ? s = a.token.start : (null == l ? void 0 : l.currentToken) != null && (s = l.currentToken.end);
      let i = null != a.token ? a.token.end : s;
      j.ComponentDispatch.dispatch(k.ComponentActions.SET_SEARCH_QUERY, {
        query: e,
        anchor: s,
        focus: i,
        performSearch: n
      }), t.setSelectedIndex(-1)
    }), B(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== k.SearchPopoutModes.FILTER && e.type !== k.SearchPopoutModes.EMPTY && !F.showDatePicker(e.filter)
    }), B(this, "renderDatePicker", () => (0, a.jsxs)("div", {
      className: G.datePicker,
      children: [(0, a.jsx)(V, {
        onSelect: this.handleDateChange,
        maxDate: f()().local(),
        minDate: H
      }), (0, a.jsxs)("div", {
        className: G.datePickerHint,
        children: [(0, a.jsxs)("span", {
          className: G.hint,
          children: [w.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
        }), (0, a.jsx)(m.Clickable, {
          tag: "span",
          className: G.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), B(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }), B(this, "performSearch", e => {
      j.ComponentDispatch.dispatch(k.ComponentActions.PERFORM_SEARCH, null != e ? e : {})
    }), B(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: n
      } = this.props, {
        autocompletes: l,
        mode: s
      } = this.props.resultsState;
      if (F.showDatePicker(s.filter)) return this.renderDatePicker();
      let i = -1;
      return l.map(l => {
        var r, o, u;
        let d, c;
        if (null == l || 0 === l.results.length) return null;
        let f = null !== (r = Q[l.group]) && void 0 !== r ? r : {};
        null != f.titleText && (c = "".concat(l.group, "-header"), d = (0, a.jsx)("div", {
          id: c,
          className: G.header,
          children: f.titleText()
        }));
        let h = null !== (o = f.groupTip) && void 0 !== o ? o : null,
          E = null != h ? (0, a.jsx)(h, {
            searchId: n
          }) : null,
          m = null !== (u = f.component) && void 0 !== u ? u : K,
          p = s.type === k.SearchPopoutModes.FILTER_ALL;
        return (0, a.jsxs)("ul", {
          role: "group",
          "aria-labelledby": c,
          className: G.resultsGroup,
          children: [d, E, l.results.map(s => {
            var r, o;
            if (null == s || null == l) return null;
            let u = e === (i += 1);
            return (0, a.jsx)(m, {
              searchId: n,
              group: null !== (r = s.group) && void 0 !== r ? r : l.group,
              result: s,
              showFilter: p,
              onSelect: this.selectOption.bind(null, i),
              onFocus: this.focusOption.bind(null, i),
              ...(0, S.getListboxOptionProps)(t, i, u)
            }, "".concat(l.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
          })]
        }, l.group)
      })
    })
  }
}
t.default = l.forwardRef((e, t) => {
  let [n, l, s] = (0, E.useStateFromStoresArray)([x.default, R.default, v.default], () => {
    let e = x.default.getGuildId(),
      t = R.default.getChannelId(),
      n = null != e ? e : t;
    o()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
    let a = v.default.getState(n),
      l = F.getTotalResults(a.autocompletes);
    return [n, a, l]
  });
  return (0, a.jsx)(X, {
    ...e,
    searchId: n,
    resultsState: l,
    totalResults: s,
    ref: t
  })
})