"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
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
  C = s("884737"),
  R = s("770436"),
  x = s("65226"),
  L = s("689938"),
  O = s("233324"),
  p = s("84885");
let A = s("74773"),
  M = s("210657");

function D(e) {
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
          className: O.listContainer,
          children: null == t ? void 0 : t.map(e => {
            let t = n === e.id,
              l = i === e.id;
            return (0, a.jsx)(R.default, {
              guildId: s,
              ref: t ? o : l ? u : null,
              className: O.row,
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

function v() {
  let e, t;
  let {
    guildId: s,
    guild: n,
    isInitialLoading: r,
    isLoading: d,
    isLoadingNextPage: S,
    showLoadMore: R,
    hasError: v,
    hasOlderLogs: j,
    rawLogs: G,
    theme: U,
    hide: P
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
  }), [b, y] = l.useState({
    expandedId: null,
    lastExpandedId: null,
    actionFilterQuery: ""
  }), B = C.transformLogs(G, n), F = !1, H = l.useRef(null), k = (0, T.default)(b), w = (0, T.default)(B), V = () => {
    var e;
    return (null === (e = H.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  };
  R || (null == B ? void 0 : B.length) === (null == w ? void 0 : w.length) || null == H || V();
  let Y = () => {
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
    W = Y(),
    z = (0, I.default)(null, () => {
      let {
        expandedId: s
      } = b;
      null == s || F ? null != s && (F = !1) : (e = null, t = null, y(e => ({
        ...e,
        expandedId: null,
        lastExpandedId: null
      })), W = Y())
    });
  l.useEffect(() => {
    b.expandedId !== (null == k ? void 0 : k.expandedId) && K()
  }, []);
  let K = () => {
      let e = H.current;
      if (null == e) return;
      let t = Y(),
        s = W;
      if (null == t.expanded || null == t.lastExpanded || null == s.expanded || t.expanded.top < t.lastExpanded.top) return;
      let a = s.expanded.height - t.lastExpanded.height,
        l = e.getScrollerState().scrollTop - a;
      e.scrollTo({
        to: l
      })
    },
    Z = s => {
      let {
        expandedId: a
      } = b;
      a !== s.id ? (F = !0, y(e => ({
        ...e,
        expandedId: null == s ? void 0 : s.id,
        lastExpandedId: a
      })), W = Y()) : (e = null, t = null, null != a && (W = Y()), y(e => ({
        ...e,
        expandedId: null,
        lastExpandedId: null
      })))
    },
    X = e => {
      F = !0, e.stopPropagation()
    },
    Q = () => {},
    J = t => {
      e = t
    },
    q = e => {
      t = e
    },
    $ = () => (0, a.jsx)(E.Spinner, {
      type: E.Spinner.Type.SPINNING_CIRCLE,
      className: O.spinner
    });
  return (0, a.jsx)("div", {
    ref: z,
    className: p.customColumn,
    children: (0, a.jsx)("div", {
      className: p.customContainer,
      children: (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: i()(p.customScroller, O.scroller),
        onScroll: () => {
          V() && Q()
        },
        ref: H,
        children: (0, a.jsxs)("div", {
          className: O.content,
          children: [(0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: O.customHeader,
              children: (0, a.jsx)(E.FormTitle, {
                tag: E.FormTitleTags.H1,
                className: O.formTitle,
                children: L.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
              })
            }), (0, a.jsx)(E.FormDivider, {
              className: O.divider
            })]
          }), (0, a.jsx)(x.GuildAuditLogSearch, {
            className: O.__invalid_search
          }), (() => {
            if (P) return (0, a.jsx)(_.default, {});
            if (d || r) return $();
            if ((null == B ? void 0 : B.length) === 0) {
              let e = v ? L.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : L.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
                t = v ? L.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : L.default.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
              return (0, a.jsxs)(E.EmptyState, {
                theme: U,
                className: O.__invalid_empty,
                children: [(0, a.jsx)(E.EmptyStateImage, {
                  darkSrc: A,
                  lightSrc: M,
                  width: 272,
                  height: 130
                }), (0, a.jsx)(E.EmptyStateText, {
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
            } = b;
            return (0, a.jsx)(D, {
              logs: B,
              guildId: s,
              expandedId: e,
              lastExpandedId: t,
              setExpandedRef: J,
              setLastExpandedRef: q,
              onHeaderClick: Z,
              onContentClick: X,
              scroller: H.current
            })
          })(), (() => {
            if (R && j && !P) return (0, a.jsx)(E.Button, {
              color: E.Button.Colors.PRIMARY,
              className: O.__invalid_loadMore,
              onClick: Q,
              children: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
            })
          })(), !S || P || d ? null : $()]
        })
      })
    })
  })
}