"use strict";
s.r(t), s.d(t, {
  default: function() {
    return G
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("699581"),
  o = s.n(r),
  d = s("924826"),
  u = s("374470"),
  c = s("442837"),
  E = s("481060"),
  _ = s("497321"),
  I = s("351773"),
  T = s("110924"),
  S = s("724757"),
  f = s("987707"),
  m = s("999382"),
  N = s("210887"),
  g = s("430824"),
  h = s("246946"),
  C = s("186095"),
  R = s("884737"),
  x = s("770436"),
  L = s("65226"),
  O = s("689938"),
  p = s("233324"),
  A = s("84885");
let M = s("74773"),
  D = s("210657");

function v(e) {
  let {
    logs: t,
    guildId: s,
    expandedId: n,
    lastExpandedId: i,
    scroller: r,
    setExpandedRef: o,
    setLastExpandedRef: u,
    onHeaderClick: c,
    onContentClick: E
  } = e, _ = l.useRef(r);
  l.useEffect(() => {
    _.current = r
  }, [r]);
  let I = (0, S.default)("audit-log", _);
  return (0, a.jsx)(d.ListNavigatorProvider, {
    navigator: I,
    children: (0, a.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: l,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          ref: l,
          ...r,
          className: p.listContainer,
          children: null == t ? void 0 : t.map(e => {
            let t = n === e.id,
              l = i === e.id;
            return (0, a.jsx)(x.default, {
              guildId: s,
              ref: t ? o : l ? u : null,
              className: p.row,
              onHeaderClick: c,
              onContentClick: E,
              log: e,
              expanded: t
            }, e.id)
          })
        })
      }
    })
  })
}

function G() {
  let e, t;
  let {
    guildId: s,
    guild: n,
    isInitialLoading: r,
    isLoading: d,
    isLoadingNextPage: S,
    showLoadMore: x,
    hasError: G,
    hasOlderLogs: j,
    rawLogs: U,
    theme: P,
    hide: b
  } = (0, c.useStateFromStoresObject)([m.default, g.default, f.default, h.default, N.default], () => {
    let e = m.default.getGuildId(),
      t = g.default.getGuild(e),
      s = f.default.logs;
    return {
      guildId: e,
      guild: t,
      isInitialLoading: f.default.isInitialLoading,
      isLoading: f.default.isLoading,
      isLoadingNextPage: f.default.isLoadingNextPage,
      showLoadMore: f.default.groupedFetchCount > 2,
      hasError: f.default.hasError,
      hasOlderLogs: f.default.hasOlderLogs,
      rawLogs: null != s && null != t ? s : [],
      theme: N.default.theme,
      hide: h.default.enabled
    }
  }), [y, B] = l.useState({
    expandedId: null,
    lastExpandedId: null,
    actionFilterQuery: ""
  }), F = R.transformLogs(U, n), H = !1, k = l.useRef(null), w = (0, T.default)(y), V = (0, T.default)(F), Y = () => {
    var e;
    return (null === (e = k.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  };
  x || (null == F ? void 0 : F.length) === (null == V ? void 0 : V.length) || null == k || Y();
  let W = () => {
      let s = {
        expanded: null,
        lastExpanded: null
      };
      if (null != t) {
        let e = o().findDOMNode(t);
        null != e && (0, u.isElement)(e) && (s.lastExpanded = e.getBoundingClientRect())
      }
      if (null != e) {
        let t = o().findDOMNode(e);
        null != t && (0, u.isElement)(t) && (s.expanded = t.getBoundingClientRect())
      }
      return s
    },
    z = W(),
    K = (0, I.default)(null, () => {
      let {
        expandedId: s
      } = y;
      null == s || H ? null != s && (H = !1) : (e = null, t = null, B(e => ({
        ...e,
        expandedId: null,
        lastExpandedId: null
      })), z = W())
    });
  l.useEffect(() => {
    y.expandedId !== (null == w ? void 0 : w.expandedId) && Z()
  }, []);
  let Z = () => {
      let e = k.current;
      if (null == e) return;
      let t = W(),
        s = z;
      if (null == t.expanded || null == t.lastExpanded || null == s.expanded || t.expanded.top < t.lastExpanded.top) return;
      let a = s.expanded.height - t.lastExpanded.height,
        l = e.getScrollerState().scrollTop - a;
      e.scrollTo({
        to: l
      })
    },
    X = s => {
      let {
        expandedId: a
      } = y;
      a !== s.id ? (H = !0, B(e => ({
        ...e,
        expandedId: null == s ? void 0 : s.id,
        lastExpandedId: a
      })), z = W()) : (e = null, t = null, null != a && (z = W()), B(e => ({
        ...e,
        expandedId: null,
        lastExpandedId: null
      })))
    },
    Q = e => {
      H = !0, e.stopPropagation()
    },
    J = () => {},
    q = t => {
      e = t
    },
    $ = e => {
      t = e
    },
    ee = () => (0, a.jsx)(E.Spinner, {
      type: E.Spinner.Type.SPINNING_CIRCLE,
      className: p.spinner
    });
  return (0, a.jsx)("div", {
    ref: K,
    className: A.customColumn,
    children: (0, a.jsx)("div", {
      className: A.customContainer,
      children: (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: i()(A.customScroller, p.scroller),
        onScroll: () => {
          Y() && J()
        },
        ref: k,
        children: (0, a.jsxs)("div", {
          className: p.content,
          children: [(0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: p.customHeader,
              children: (0, a.jsx)(E.FormTitle, {
                tag: E.FormTitleTags.H1,
                className: p.formTitle,
                children: O.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
              })
            }), (0, a.jsx)(E.FormDivider, {
              className: p.divider
            })]
          }), (0, a.jsx)(L.GuildAuditLogSearch, {
            className: p.__invalid_search
          }), (() => {
            if (b) return (0, a.jsx)(_.default, {});
            if (d || r) return ee();
            if ((null == F ? void 0 : F.length) === 0) {
              let e = G ? O.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : O.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
                t = G ? O.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : O.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
              return (0, a.jsxs)(C.default, {
                theme: P,
                className: p.__invalid_empty,
                children: [(0, a.jsx)(C.EmptyStateImage, {
                  darkSrc: M,
                  lightSrc: D,
                  width: 272,
                  height: 130
                }), (0, a.jsx)(C.EmptyStateText, {
                  note: e,
                  style: {
                    maxWidth: 300
                  },
                  children: t
                })]
              })
            }
            let {
              expandedId: e,
              lastExpandedId: t
            } = y;
            return (0, a.jsx)(v, {
              logs: F,
              guildId: s,
              expandedId: e,
              lastExpandedId: t,
              setExpandedRef: q,
              setLastExpandedRef: $,
              onHeaderClick: X,
              onContentClick: Q,
              scroller: k.current
            })
          })(), (() => {
            if (x && j && !b) return (0, a.jsx)(E.Button, {
              color: E.Button.Colors.PRIMARY,
              className: p.__invalid_loadMore,
              onClick: J,
              children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
            })
          })(), !S || b || d ? null : ee()]
        })
      })
    })
  })
}