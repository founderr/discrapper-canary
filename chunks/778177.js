n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(392711),
  u = n.n(c),
  d = n(913527),
  E = n.n(d),
  _ = n(608787),
  I = n(442837),
  T = n(481060),
  m = n(603263),
  N = n(542051),
  h = n(349033),
  C = n(999650),
  S = n(933557),
  A = n(471445),
  g = n(592125),
  p = n(271383),
  f = n(699516),
  R = n(250758),
  O = n(944486),
  M = n(914010),
  x = n(246946),
  v = n(594174),
  L = n(585483),
  Z = n(63063),
  P = n(405656),
  D = n(51144),
  j = n(854709),
  U = n(981631),
  b = n(689938),
  y = n(644058);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let k = E()("2015-05-15").local(),
  G = (0, _.Un)({
    createPromise: () => Promise.resolve().then(n.bind(n, 547800)),
    webpackId: 547800
  }),
  F = (e, t, n) => {
    var i, l, a;
    let {
      user: r,
      text: o
    } = n;
    if (null == r) return (0, s.jsx)("strong", {
      children: o
    });
    let c = v.default.getUser(r.id),
      u = g.Z.getChannel(e),
      d = (null == u ? void 0 : u.isPrivate()) ? f.Z.getNickname(r.id) : null,
      E = null !== (l = null !== (i = p.ZP.getNick(e, r.id)) && void 0 !== i ? i : d) && void 0 !== l ? l : D.ZP.getName(r),
      _ = null !== (a = null == c ? void 0 : c.getAvatarURL(e, 20)) && void 0 !== a ? a : r.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
    return [(0, s.jsx)("img", {
      alt: "",
      className: y.displayAvatar,
      src: _
    }, "avatar-".concat(t, "-").concat(r.id)), (0, s.jsx)("span", {
      className: y.displayedNick,
      children: E
    }, "display-nick-".concat(t, "-").concat(r.id)), (0, s.jsx)("span", {
      className: y.displayUsername,
      children: D.ZP.getUserTag(r, {
        identifiable: x.Z.enabled && x.Z.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(r.id))]
  },
  V = (e, t, n) => {
    let {
      channel: i,
      text: l
    } = n;
    if (null == i) return (0, s.jsx)("strong", {
      children: l
    });
    let a = g.Z.getChannel(i.parent_id),
      r = (0, A.KS)(i);
    return (0, s.jsxs)("div", {
      className: y.resultChannel,
      children: [null != r ? (0, s.jsx)(r, {
        className: y.searchResultChannelIcon
      }) : null, (0, s.jsx)("strong", {
        children: (0, S.F6)(i, v.default, f.Z)
      }), null != a ? (0, s.jsx)("span", {
        className: y.searchResultChannelCategory,
        children: (0, S.F6)(a, v.default, f.Z)
      }) : null]
    })
  },
  w = e => {
    let t, n, {
      id: i,
      searchId: l,
      result: r,
      group: o,
      className: c,
      role: u,
      tabIndex: d,
      "aria-selected": E,
      onSelect: _,
      onFocus: I,
      showFilter: m,
      renderResult: N
    } = e;
    if (m) {
      var h, S;
      t = (0, s.jsx)("span", {
        className: y.filter,
        children: null !== (S = null === (h = C.ZP[o]) || void 0 === h ? void 0 : h.key) && void 0 !== S ? S : "addme:"
      })
    }
    return n = null != N ? N(l, o, r) : (0, s.jsx)("strong", {
      children: r.text
    }), (0, s.jsxs)(T.Clickable, {
      tag: "li",
      className: a()(y.option, c),
      onClick: _,
      onFocus: I,
      id: i,
      role: u,
      tabIndex: d,
      "aria-selected": E,
      children: [t, n, (0, s.jsx)(T.PlusSmallIcon, {
        size: "sm",
        color: "currentColor",
        className: y.plusIcon
      })]
    })
  },
  H = e => (0, s.jsx)(w, {
    ...e,
    className: y.user,
    renderResult: F
  }),
  Y = {
    [U.dCx.FILTER_FROM]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_FROM,
      component: H
    },
    [U.dCx.FILTER_MENTIONS]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_MENTIONS,
      component: H
    },
    [U.dCx.FILTER_HAS]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_HAS
    },
    [U.dCx.FILTER_FILE_TYPE]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
    },
    [U.dCx.FILTER_IN]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_CHANNELS,
      component: e => (0, s.jsx)(w, {
        ...e,
        renderResult: V
      })
    },
    [U.rtL.DATES]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_DATES
    },
    [U.rtL.HISTORY]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_HISTORY,
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, s.jsx)(T.Tooltip, {
          text: b.Z.Messages.SEARCH_CLEAR_HISTORY,
          position: "left",
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: i
            } = e;
            return (0, s.jsx)(T.Clickable, {
              onClick: () => (0, m.QQ)(t),
              onMouseEnter: n,
              onMouseLeave: i,
              className: y.searchClearHistory,
              title: b.Z.Messages.SEARCH_CLEAR_HISTORY,
              "aria-label": b.Z.Messages.SEARCH_CLEAR_HISTORY,
              children: (0, s.jsx)(T.TrashIcon, {
                size: "md",
                color: "currentColor"
              })
            })
          }
        })
      },
      component: function(e) {
        let {
          onSelect: t,
          onFocus: n,
          result: l,
          showFilter: r,
          searchId: o,
          renderResult: c,
          group: u,
          ...d
        } = e, E = "", _ = i.useMemo(() => {
          var e;
          return e = l.text, P.kG(e).map((e, t, n) => P.Fr(e, n[t + 1]) ? e : new h.WU(e.getFullMatch(), h.Xe))
        }, [l.text]).map(e => {
          let t = e.getFullMatch();
          if ("" === t.trim()) return null;
          let n = U.TNx.test(e.type),
            i = U.KA4.test(e.type);
          return E += t, (0, s.jsx)("span", {
            className: a()({
              [y.filter]: n,
              [y.answer]: i,
              [y.nonText]: !n && !i
            }),
            children: t
          }, e.type + t)
        });
        return (0, s.jsxs)(T.Clickable, {
          className: a()(y.option, y.__invalid_history),
          onClick: t,
          onFocus: n,
          ...d,
          "aria-label": b.Z.Messages.SEARCH_FROM_SUGGESTIONS.format({
            suggestion: E
          }),
          children: [_, (0, s.jsx)(T.PlusSmallIcon, {
            size: "sm",
            color: "currentColor",
            className: y.plusIcon
          })]
        })
      }
    },
    [U.rtL.SEARCH_OPTIONS]: {
      titleText: () => b.Z.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
      groupTip: () => (0, s.jsx)(T.Tooltip, {
        text: b.Z.Messages.LEARN_MORE,
        position: "left",
        children: e => (0, s.jsx)("div", {
          className: y.searchLearnMore,
          ...e,
          children: (0, s.jsx)(T.Anchor, {
            href: Z.Z.getArticleURL(U.BhN.USING_SEARCH),
            title: b.Z.Messages.LEARN_MORE,
            children: (0, s.jsx)(T.CircleQuestionIcon, {
              size: "md",
              color: "currentColor"
            })
          })
        })
      }),
      component: function(e) {
        var t;
        let {
          result: n,
          onSelect: i,
          onFocus: l,
          showFilter: r,
          searchId: o,
          ...c
        } = e, u = P.Ko(null !== (t = n.token) && void 0 !== t ? t : "");
        return (0, s.jsxs)(T.Clickable, {
          className: a()(y.option, y.searchOption),
          onClick: i,
          onFocus: l,
          ...c,
          children: [(0, s.jsx)("span", {
            className: y.filter,
            children: n.text
          }), (0, s.jsx)("span", {
            className: a()({
              [y.answer]: u
            }),
            children: u
          }), (0, s.jsx)(T.PlusSmallIcon, {
            size: "sm",
            color: "currentColor",
            className: y.plusIcon
          })]
        })
      }
    }
  };
class W extends i.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: s
    } = this.props, {
      mode: i
    } = n, {
      resultsState: l
    } = e;
    null != i.filter && null == l.mode.filter && s > 0 ? this.setSelectedIndex(0) : i.type === U.Sap.FILTER_ALL && l.mode.type !== i.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
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
      totalResults: i,
      searchId: l
    } = this.props;
    return (0, s.jsx)(N.Z, {
      numResults: i,
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
      searchFavorites: l === U.I_8 && (0, j.X)()
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, B(this, "state", {
      dateHint: (0, C.Pr)(),
      selectedIndex: -1
    }), B(this, "handleDateChange", e => {
      this.setSearchQuery(e.format(U.b2L) + " ", !0)
    }), B(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: s,
        totalResults: i
      } = this.props, {
        mode: l,
        autocompletes: a
      } = s, {
        resultsState: r
      } = e;
      if (l.type !== r.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== a.length)) {
        let e = P.zV(r.autocompletes, r.mode.type)[t.selectedIndex - 1],
          n = P.zV(a, l.type).indexOf(e); - 1 !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1)
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
      if (!P.Fz(n.mode.filter)) this.focusOption(t + e)
    }), B(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        s = this.shouldShowSearchQuery();
      t < -1 || !s && t < 0 ? t = P.BU(n) - 1 : s && t >= P.BU(n) ? t = -1 : !s && t >= P.BU(n) && (t = 0), this.setSelectedIndex(t)
    }), B(this, "selectOption", e => {
      let t = e;
      if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
      let {
        autocompletes: n,
        mode: s
      } = this.props.resultsState;
      if (P.Fz(s.filter)) return;
      let i = P.zV(n, s.type);
      if (t >= i.length) return !1;
      let l = i[t],
        a = function(e) {
          let t = !0,
            n = e.trim();
          return u()(C.ZP).forOwn(e => {
            "" !== e.key && null != e.key && n === e.key && (t = !1)
          }), t
        }(l);
      return this.setSearchQuery(l, a), !0
    }), B(this, "setSearchQuery", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: s,
          cursorScope: i
        } = t.props.resultsState,
        l = 0;
      null != s.token ? l = s.token.start : (null == i ? void 0 : i.currentToken) != null && (l = i.currentToken.end);
      let a = null != s.token ? s.token.end : l;
      L.S.dispatch(U.CkL.SET_SEARCH_QUERY, {
        query: e,
        anchor: l,
        focus: a,
        performSearch: n
      }), t.setSelectedIndex(-1)
    }), B(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== U.Sap.FILTER && e.type !== U.Sap.EMPTY && !P.Fz(e.filter)
    }), B(this, "renderDatePicker", () => (0, s.jsxs)("div", {
      className: y.datePicker,
      children: [(0, s.jsx)(G, {
        onSelect: this.handleDateChange,
        maxDate: E()().local(),
        minDate: k
      }), (0, s.jsxs)("div", {
        className: y.datePickerHint,
        children: [(0, s.jsxs)("span", {
          className: y.hint,
          children: [b.Z.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
        }), (0, s.jsx)(T.Clickable, {
          tag: "span",
          className: y.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), B(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }), B(this, "performSearch", e => {
      L.S.dispatch(U.CkL.PERFORM_SEARCH, null != e ? e : {})
    }), B(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: n
      } = this.props, {
        autocompletes: i,
        mode: l
      } = this.props.resultsState;
      if (P.Fz(l.filter)) return this.renderDatePicker();
      let a = -1;
      return i.map(i => {
        var r, o, c;
        let u, d;
        if (null == i || 0 === i.results.length) return null;
        let E = null !== (r = Y[i.group]) && void 0 !== r ? r : {};
        null != E.titleText && (d = "".concat(i.group, "-header"), u = (0, s.jsx)("div", {
          id: d,
          className: y.header,
          children: E.titleText()
        }));
        let _ = null !== (o = E.groupTip) && void 0 !== o ? o : null,
          I = null != _ ? (0, s.jsx)(_, {
            searchId: n
          }) : null,
          T = null !== (c = E.component) && void 0 !== c ? c : w,
          m = l.type === U.Sap.FILTER_ALL;
        return (0, s.jsxs)("ul", {
          role: "group",
          "aria-labelledby": d,
          className: y.resultsGroup,
          children: [u, I, i.results.map(l => {
            var r, o;
            if (null == l || null == i) return null;
            let c = e === (a += 1);
            return (0, s.jsx)(T, {
              searchId: n,
              group: null !== (r = l.group) && void 0 !== r ? r : i.group,
              result: l,
              showFilter: m,
              onSelect: this.selectOption.bind(null, a),
              onFocus: this.focusOption.bind(null, a),
              ...(0, N.M)(t, a, c)
            }, "".concat(i.group, "-").concat(l.text, "-").concat(null !== (o = l.key) && void 0 !== o ? o : ""))
          })]
        }, i.group)
      })
    })
  }
}
t.ZP = i.forwardRef((e, t) => {
  let [n, i, l] = (0, I.Wu)([M.Z, O.Z, R.Z], () => {
    let e = M.Z.getGuildId(),
      t = O.Z.getChannelId(),
      n = null != e ? e : t;
    o()(null != n, "SearchPopout.getStateFromStores - invalid searchId");
    let s = R.Z.getState(n),
      i = P.BU(s.autocompletes);
    return [n, s, i]
  });
  return (0, s.jsx)(W, {
    ...e,
    searchId: n,
    resultsState: i,
    totalResults: l,
    ref: t
  })
})