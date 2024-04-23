"use strict";
n.r(t), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("512722"),
  o = n.n(r),
  u = n("392711"),
  d = n.n(u),
  c = n("913527"),
  f = n.n(c),
  E = n("608787"),
  _ = n("442837"),
  m = n("481060"),
  T = n("603263"),
  I = n("542051"),
  p = n("349033"),
  h = n("999650"),
  N = n("933557"),
  S = n("471445"),
  C = n("592125"),
  A = n("271383"),
  g = n("699516"),
  M = n("250758"),
  R = n("944486"),
  v = n("914010"),
  O = n("246946"),
  x = n("594174"),
  L = n("396525"),
  D = n("908773"),
  P = n("740727"),
  y = n("585483"),
  U = n("63063"),
  j = n("405656"),
  b = n("51144"),
  B = n("854709"),
  G = n("981631"),
  F = n("689938"),
  k = n("818932");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let H = f()("2015-05-15").local(),
  V = (0, E.makeLazy)({
    createPromise: () => Promise.resolve().then(n.bind(n, "575535")),
    webpackId: "575535"
  }),
  Y = (e, t, n) => {
    var l, a, i;
    let {
      user: r,
      text: o
    } = n;
    if (null == r) return (0, s.jsx)("strong", {
      children: o
    });
    let u = x.default.getUser(r.id),
      d = C.default.getChannel(e),
      c = (null == d ? void 0 : d.isPrivate()) ? g.default.getNickname(r.id) : null,
      f = null !== (a = null !== (l = A.default.getNick(e, r.id)) && void 0 !== l ? l : c) && void 0 !== a ? a : b.default.getName(r),
      E = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
    return [(0, s.jsx)("img", {
      alt: "",
      className: k.displayAvatar,
      src: E
    }, "avatar-".concat(t, "-").concat(r.id)), (0, s.jsx)("span", {
      className: k.displayedNick,
      children: f
    }, "display-nick-".concat(t, "-").concat(r.id)), (0, s.jsx)("span", {
      className: k.displayUsername,
      children: b.default.getUserTag(r, {
        identifiable: O.default.enabled && O.default.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(r.id))]
  },
  K = (e, t, n) => {
    let {
      channel: l,
      text: a
    } = n;
    if (null == l) return (0, s.jsx)("strong", {
      children: a
    });
    let i = C.default.getChannel(l.parent_id),
      r = (0, S.getChannelIconComponent)(l);
    return (0, s.jsxs)("div", {
      className: k.resultChannel,
      children: [null != r ? (0, s.jsx)(r, {
        className: k.searchResultChannelIcon
      }) : null, (0, s.jsx)("strong", {
        children: (0, N.computeChannelName)(l, x.default, g.default)
      }), null != i ? (0, s.jsx)("span", {
        className: k.searchResultChannelCategory,
        children: (0, N.computeChannelName)(i, x.default, g.default)
      }) : null]
    })
  },
  W = e => {
    let t, n, {
      id: l,
      searchId: a,
      result: r,
      group: o,
      className: u,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      onSelect: E,
      onFocus: _,
      showFilter: T,
      renderResult: I
    } = e;
    if (T) {
      var p, N;
      t = (0, s.jsx)("span", {
        className: k.filter,
        children: null !== (N = null === (p = h.default[o]) || void 0 === p ? void 0 : p.key) && void 0 !== N ? N : "addme:"
      })
    }
    return n = null != I ? I(a, o, r) : (0, s.jsx)("strong", {
      children: r.text
    }), (0, s.jsxs)(m.Clickable, {
      tag: "li",
      className: i()(k.option, u),
      onClick: E,
      onFocus: _,
      id: l,
      role: d,
      tabIndex: c,
      "aria-selected": f,
      children: [t, n, (0, s.jsx)(D.default, {
        className: k.plusIcon
      })]
    })
  },
  z = e => (0, s.jsx)(W, {
    ...e,
    className: k.user,
    renderResult: Y
  }),
  Q = {
    [G.SearchTokenTypes.FILTER_FROM]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_FROM,
      component: z
    },
    [G.SearchTokenTypes.FILTER_MENTIONS]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
      component: z
    },
    [G.SearchTokenTypes.FILTER_HAS]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_HAS
    },
    [G.SearchTokenTypes.FILTER_FILE_TYPE]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
    },
    [G.SearchTokenTypes.FILTER_IN]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
      component: e => (0, s.jsx)(W, {
        ...e,
        renderResult: K
      })
    },
    [G.SearchAutocompleteGroups.DATES]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_DATES
    },
    [G.SearchAutocompleteGroups.HISTORY]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, s.jsx)(m.Tooltip, {
          text: F.default.Messages.SEARCH_CLEAR_HISTORY,
          position: "left",
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: l
            } = e;
            return (0, s.jsx)(m.Clickable, {
              onClick: () => (0, T.clearHistory)(t),
              onMouseEnter: n,
              onMouseLeave: l,
              className: k.searchClearHistory,
              title: F.default.Messages.SEARCH_CLEAR_HISTORY,
              "aria-label": F.default.Messages.SEARCH_CLEAR_HISTORY,
              children: (0, s.jsx)(P.default, {})
            })
          }
        })
      },
      component: function(e) {
        let {
          onSelect: t,
          onFocus: n,
          result: a,
          showFilter: r,
          searchId: o,
          renderResult: u,
          group: d,
          ...c
        } = e, f = "", E = l.useMemo(() => {
          var e;
          return e = a.text, j.tokenizeQuery(e).map((e, t, n) => j.filterHasAnswer(e, n[t + 1]) ? e : new p.Token(e.getFullMatch(), p.NON_TOKEN_TYPE))
        }, [a.text]).map(e => {
          let t = e.getFullMatch();
          if ("" === t.trim()) return null;
          let n = G.IS_SEARCH_FILTER_TOKEN.test(e.type),
            l = G.IS_SEARCH_ANSWER_TOKEN.test(e.type);
          return f += t, (0, s.jsx)("span", {
            className: i()({
              [k.filter]: n,
              [k.answer]: l,
              [k.nonText]: !n && !l
            }),
            children: t
          }, e.type + t)
        });
        return (0, s.jsxs)(m.Clickable, {
          className: i()(k.option, k.__invalid_history),
          onClick: t,
          onFocus: n,
          ...c,
          "aria-label": F.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
            suggestion: f
          }),
          children: [E, (0, s.jsx)(D.default, {
            className: k.plusIcon
          })]
        })
      }
    },
    [G.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
      titleText: () => F.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
      groupTip: () => (0, s.jsx)(m.Tooltip, {
        text: F.default.Messages.LEARN_MORE,
        position: "left",
        children: e => (0, s.jsx)("div", {
          className: k.searchLearnMore,
          ...e,
          children: (0, s.jsx)(m.Anchor, {
            href: U.default.getArticleURL(G.HelpdeskArticles.USING_SEARCH),
            title: F.default.Messages.LEARN_MORE,
            children: (0, s.jsx)(L.default, {})
          })
        })
      }),
      component: function(e) {
        var t;
        let {
          result: n,
          onSelect: l,
          onFocus: a,
          showFilter: r,
          searchId: o,
          ...u
        } = e, d = j.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
        return (0, s.jsxs)(m.Clickable, {
          className: i()(k.option, k.searchOption),
          onClick: l,
          onFocus: a,
          ...u,
          children: [(0, s.jsx)("span", {
            className: k.filter,
            children: n.text
          }), (0, s.jsx)("span", {
            className: i()({
              [k.answer]: d
            }),
            children: d
          }), (0, s.jsx)(D.default, {
            className: k.plusIcon
          })]
        })
      }
    }
  };
class q extends l.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: s
    } = this.props, {
      mode: l
    } = n, {
      resultsState: a
    } = e;
    null != l.filter && null == a.mode.filter && s > 0 ? this.setSelectedIndex(0) : l.type === G.SearchPopoutModes.FILTER_ALL && a.mode.type !== l.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
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
      searchId: a
    } = this.props;
    return (0, s.jsx)(I.default, {
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
      searchFavorites: a === G.FAVORITES && (0, B.isFavoriteSearchEnabled)()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, w(this, "state", {
      dateHint: (0, h.getRandomDateShortcut)(),
      selectedIndex: -1
    }), w(this, "handleDateChange", e => {
      this.setSearchQuery(e.format(G.SEARCH_DATE_FORMAT) + " ", !0)
    }), w(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: s,
        totalResults: l
      } = this.props, {
        mode: a,
        autocompletes: i
      } = s, {
        resultsState: r
      } = e;
      if (a.type !== r.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
        let e = j.getFlattenedStringArray(r.autocompletes, r.mode.type)[t.selectedIndex - 1],
          n = j.getFlattenedStringArray(i, a.type).indexOf(e); - 1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= l && this.setSelectedIndex(l - 1)
      }
    }), w(this, "focusNextOption", () => {
      this.focusOtherOption(1)
    }), w(this, "focusPreviousOption", () => {
      this.focusOtherOption(-1)
    }), w(this, "focusOtherOption", e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      !j.showDatePicker(n.mode.filter) && this.focusOption(t + e)
    }), w(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        s = this.shouldShowSearchQuery();
      t < -1 || !s && t < 0 ? t = j.getTotalResults(n) - 1 : s && t >= j.getTotalResults(n) ? t = -1 : !s && t >= j.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
    }), w(this, "selectOption", e => {
      let t = e;
      if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
      let {
        autocompletes: n,
        mode: s
      } = this.props.resultsState;
      if (j.showDatePicker(s.filter)) return;
      let l = j.getFlattenedStringArray(n, s.type);
      if (t >= l.length) return !1;
      let a = l[t],
        i = function(e) {
          let t = !0,
            n = e.trim();
          return d()(h.default).forOwn(e => {
            "" !== e.key && null != e.key && n === e.key && (t = !1)
          }), t
        }(a);
      return this.setSearchQuery(a, i), !0
    }), w(this, "setSearchQuery", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: s,
          cursorScope: l
        } = t.props.resultsState,
        a = 0;
      null != s.token ? a = s.token.start : (null == l ? void 0 : l.currentToken) != null && (a = l.currentToken.end);
      let i = null != s.token ? s.token.end : a;
      y.ComponentDispatch.dispatch(G.ComponentActions.SET_SEARCH_QUERY, {
        query: e,
        anchor: a,
        focus: i,
        performSearch: n
      }), t.setSelectedIndex(-1)
    }), w(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== G.SearchPopoutModes.FILTER && e.type !== G.SearchPopoutModes.EMPTY && !j.showDatePicker(e.filter)
    }), w(this, "renderDatePicker", () => (0, s.jsxs)("div", {
      className: k.datePicker,
      children: [(0, s.jsx)(V, {
        onSelect: this.handleDateChange,
        maxDate: f()().local(),
        minDate: H
      }), (0, s.jsxs)("div", {
        className: k.datePickerHint,
        children: [(0, s.jsxs)("span", {
          className: k.hint,
          children: [F.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
        }), (0, s.jsx)(m.Clickable, {
          tag: "span",
          className: k.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), w(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }), w(this, "performSearch", e => {
      y.ComponentDispatch.dispatch(G.ComponentActions.PERFORM_SEARCH, null != e ? e : {})
    }), w(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: n
      } = this.props, {
        autocompletes: l,
        mode: a
      } = this.props.resultsState;
      if (j.showDatePicker(a.filter)) return this.renderDatePicker();
      let i = -1;
      return l.map(l => {
        var r, o, u;
        let d, c;
        if (null == l || 0 === l.results.length) return null;
        let f = null !== (r = Q[l.group]) && void 0 !== r ? r : {};
        null != f.titleText && (c = "".concat(l.group, "-header"), d = (0, s.jsx)("div", {
          id: c,
          className: k.header,
          children: f.titleText()
        }));
        let E = null !== (o = f.groupTip) && void 0 !== o ? o : null,
          _ = null != E ? (0, s.jsx)(E, {
            searchId: n
          }) : null,
          m = null !== (u = f.component) && void 0 !== u ? u : W,
          T = a.type === G.SearchPopoutModes.FILTER_ALL;
        return (0, s.jsxs)("ul", {
          role: "group",
          "aria-labelledby": c,
          className: k.resultsGroup,
          children: [d, _, l.results.map(a => {
            var r, o;
            if (null == a || null == l) return null;
            let u = e === (i += 1);
            return (0, s.jsx)(m, {
              searchId: n,
              group: null !== (r = a.group) && void 0 !== r ? r : l.group,
              result: a,
              showFilter: T,
              onSelect: this.selectOption.bind(null, i),
              onFocus: this.focusOption.bind(null, i),
              ...(0, I.getListboxOptionProps)(t, i, u)
            }, "".concat(l.group, "-").concat(a.text, "-").concat(null !== (o = a.key) && void 0 !== o ? o : ""))
          })]
        }, l.group)
      })
    })
  }
}
t.default = l.forwardRef((e, t) => {
  let [n, l, a] = (0, _.useStateFromStoresArray)([v.default, R.default, M.default], () => {
    let e = v.default.getGuildId(),
      t = R.default.getChannelId(),
      n = null != e ? e : t;
    o()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
    let s = M.default.getState(n),
      l = j.getTotalResults(s.autocompletes);
    return [n, s, l]
  });
  return (0, s.jsx)(q, {
    ...e,
    searchId: n,
    resultsState: l,
    totalResults: a,
    ref: t
  })
})