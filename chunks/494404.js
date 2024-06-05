"use strict";
n.r(t), n.d(t, {
  EmptyStateCenter: function() {
    return F
  },
  Header: function() {
    return y
  },
  ItemsPopout: function() {
    return U
  },
  default: function() {
    return P
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("481060"),
  f = n("668781"),
  h = n("904245"),
  E = n("724757"),
  m = n("294218"),
  p = n("703656"),
  S = n("210887"),
  g = n("592125"),
  _ = n("375954"),
  N = n("496675"),
  T = n("933429"),
  I = n("451478"),
  C = n("387204"),
  A = n("465670"),
  v = n("626135"),
  M = n("585483"),
  R = n("981631"),
  x = n("689938"),
  L = n("114267");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  e.stopPropagation()
}
let y = e => {
    let {
      title: t,
      children: n,
      className: l
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(l, L.header),
      children: [null == t ? null : (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: t
      }), n]
    })
  },
  F = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, a.jsxs)("div", {
      className: L.emptyPlaceholder,
      children: [(0, a.jsx)("div", {
        className: L.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, a.jsx)("div", {
        className: L.body,
        children: t
      })]
    })
  };
class D extends l.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, a.jsxs)(c.Clickable, {
      className: L.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, a.jsx)("div", {
        className: i()(L.__invalid_text, {
          hidden: e
        }),
        children: x.default.Messages.JUMP
      }), (0, a.jsx)(c.Spinner, {
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        className: i()(L.loading, {
          [L.visible]: e
        })
      })]
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: l
    } = this.props;
    return null != e && (t || n || null != l && l.isPrivate()) ? (0, a.jsx)(c.Button, {
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, a.jsx)(A.default, {
        className: L.closeIcon
      })
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: L.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), O(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), O(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let j = d.default.connectStores([N.default], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && N.default.can(R.Permissions.MANAGE_MESSAGES, t)
  }
})(D);

function U(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: s,
    loading: r,
    loadMore: f,
    renderHeader: h,
    renderEmptyState: m,
    renderItem: p,
    getProTip: g,
    scrollerClassName: _,
    className: N,
    listName: A
  } = e, O = l.useRef(null), y = (0, E.default)(A, O), F = (0, d.useStateFromStores)([T.default], () => T.default.hasNotice()), D = (0, d.useStateFromStores)([I.default], () => I.default.windowSize());
  l.useEffect(() => {
    v.default.track(R.AnalyticEvents.OPEN_POPOUT, {
      type: t
    })
  }, [t]), l.useEffect(() => {
    function e() {
      var e;
      null === (e = O.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }

    function t() {
      var e;
      null === (e = O.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }
    return M.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_UP, e), () => {
      M.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_UP, e)
    }
  }, []);
  let j = l.useCallback(() => {
      var e;
      let t = null === (e = O.current) || void 0 === e ? void 0 : e.getScrollerState();
      null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
    }, [s, f, r]),
    U = [],
    P = !0;
  null == n ? U = [(0, a.jsx)("div", {
    className: i()(L.emptyPlaceholder, L.loadingPlaceholder),
    children: (0, a.jsx)(c.Spinner, {})
  }, "spinner")] : 0 === n.length ? U.push((0, a.jsx)(l.Fragment, {
    children: m(S.default.theme)
  }, "empty-state")) : (P = !1, U = [], o().each(n, e => {
    U.push(...p(e))
  }));
  let k = null;
  null != n && n.length > 0 && null != f && (k = r ? (0, a.jsx)("div", {
    className: L.loadingMore,
    children: (0, a.jsx)(c.Spinner, {})
  }, "loading-more-after") : s ? (0, a.jsx)("div", {
    className: L.hasMore,
    children: (0, a.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      size: c.Button.Sizes.MAX,
      onClick: f,
      children: x.default.Messages.LOAD_MORE_MESSAGES
    })
  }) : (0, a.jsx)("div", {
    className: L.scrollingFooterWrap,
    children: m(S.default.theme)
  }));
  let w = null == g ? void 0 : g(),
    G = P && null != w ? (0, a.jsx)("div", {
      className: L.footer,
      children: (0, a.jsx)(C.default, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: w
      })
    }) : null,
    B = {
      maxHeight: D.height - 43 - 25
    };
  F && (B.maxHeight -= 40);
  let H = null != f && s;
  return (0, a.jsx)("div", {
    className: i()(N, L.messagesPopoutWrap),
    style: B,
    onClick: b,
    onDoubleClick: b,
    "aria-label": e["aria-label"],
    children: (0, a.jsxs)(c.HeadingLevel, {
      component: h(),
      children: [(0, a.jsxs)(c.AdvancedScroller, {
        className: i()(L.messagesPopout, _),
        onScroll: H ? j : void 0,
        ref: O,
        children: [(0, a.jsx)(u.ListNavigatorProvider, {
          navigator: y,
          children: (0, a.jsx)(u.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, a.jsx)("div", {
                ref: t,
                ...n,
                children: U
              })
            }
          })
        }), k]
      }), G]
    })
  })
}

function P(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: s,
    messages: i,
    hasMore: r,
    loading: o,
    loadMore: u,
    onJump: c,
    canCloseAllMessages: E = !1,
    renderHeader: S,
    renderEmptyState: N,
    renderMessage: T,
    getProTip: I,
    scrollerClassName: C,
    className: A,
    onCloseMessage: v,
    listName: M
  } = e, O = (0, d.useStateFromStores)([_.default], () => {
    let e = null != s ? _.default.getMessages(s.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function b(e, n) {
    let {
      id: a,
      blocked: l,
      author: s,
      channel_id: i
    } = e;
    if (l) f.default.show({
      title: x.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: x.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: s.username
      }),
      confirmText: x.default.Messages.OKAY
    });
    else if (!O) {
      let e = g.default.getChannel(i);
      null != e && (h.default.trackJump(i, a, t), (0, p.transitionTo)(R.Routes.CHANNEL(e.getGuildId(), i, a))), null == c || c(n)
    }
  }
  l.useEffect(() => {
    n(s)
  }, [s, n]);
  let y = l.useMemo(() => null == i ? void 0 : i.map(e => ({
    message: e,
    channel: s
  })), [i, s]);
  return (0, a.jsx)(U, {
    className: A,
    scrollerClassName: C,
    items: y,
    loading: o,
    analyticsName: t,
    renderEmptyState: N,
    renderHeader: S,
    hasMore: r,
    loadMore: u,
    getProTip: I,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != T) return T(t, e => b(t, e));
      let l = [];
      return null == n ? [] : (l.push((0, a.jsxs)("div", {
        className: L.messageGroupWrapper,
        children: [(0, a.jsx)(m.default, {
          className: L.messageGroupCozy,
          message: t,
          channel: n
        }), (0, a.jsx)(j, {
          channel: s,
          message: t,
          jumping: O,
          canCloseAllMessages: E,
          jumpTo: b,
          onCloseMessage: v
        })]
      }, t.id)), l)
    },
    listName: M,
    "aria-label": e["aria-label"]
  })
}