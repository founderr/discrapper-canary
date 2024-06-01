"use strict";
n.r(t), n.d(t, {
  EmptyStateCenter: function() {
    return j
  },
  Header: function() {
    return L
  },
  ItemsPopout: function() {
    return P
  },
  default: function() {
    return k
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
  N = n("375954"),
  _ = n("496675"),
  I = n("933429"),
  T = n("451478"),
  C = n("387204"),
  A = n("465670"),
  v = n("626135"),
  x = n("585483"),
  R = n("981631"),
  M = n("689938"),
  b = n("114267");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  e.stopPropagation()
}
let L = e => {
    let {
      title: t,
      children: n,
      className: l
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(l, b.header),
      children: [null == t ? null : (0, a.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: t
      }), n]
    })
  },
  j = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, a.jsxs)("div", {
      className: b.emptyPlaceholder,
      children: [(0, a.jsx)("div", {
        className: b.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, a.jsx)("div", {
        className: b.body,
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
      className: b.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, a.jsx)("div", {
        className: i()(b.__invalid_text, {
          hidden: e
        }),
        children: M.default.Messages.JUMP
      }), (0, a.jsx)(c.Spinner, {
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        className: i()(b.loading, {
          [b.visible]: e
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
        className: b.closeIcon
      })
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: b.actionButtons,
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
let F = d.default.connectStores([_.default], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && _.default.can(R.Permissions.MANAGE_MESSAGES, t)
  }
})(D);

function P(e) {
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
    scrollerClassName: N,
    className: _,
    listName: A
  } = e, O = l.useRef(null), L = (0, E.default)(A, O), j = (0, d.useStateFromStores)([I.default], () => I.default.hasNotice()), D = (0, d.useStateFromStores)([T.default], () => T.default.windowSize());
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
    return x.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), x.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_UP, e), () => {
      x.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), x.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_UP, e)
    }
  }, []);
  let F = l.useCallback(() => {
      var e;
      let t = null === (e = O.current) || void 0 === e ? void 0 : e.getScrollerState();
      null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
    }, [s, f, r]),
    P = [],
    k = !0;
  null == n ? P = [(0, a.jsx)("div", {
    className: i()(b.emptyPlaceholder, b.loadingPlaceholder),
    children: (0, a.jsx)(c.Spinner, {})
  }, "spinner")] : 0 === n.length ? P.push((0, a.jsx)(l.Fragment, {
    children: m(S.default.theme)
  }, "empty-state")) : (k = !1, P = [], o().each(n, e => {
    P.push(...p(e))
  }));
  let U = null;
  null != n && n.length > 0 && null != f && (U = r ? (0, a.jsx)("div", {
    className: b.loadingMore,
    children: (0, a.jsx)(c.Spinner, {})
  }, "loading-more-after") : s ? (0, a.jsx)("div", {
    className: b.hasMore,
    children: (0, a.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      size: c.Button.Sizes.MAX,
      onClick: f,
      children: M.default.Messages.LOAD_MORE_MESSAGES
    })
  }) : (0, a.jsx)("div", {
    className: b.scrollingFooterWrap,
    children: m(S.default.theme)
  }));
  let w = null == g ? void 0 : g(),
    G = k && null != w ? (0, a.jsx)("div", {
      className: b.footer,
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
  j && (B.maxHeight -= 40);
  let H = null != f && s;
  return (0, a.jsx)("div", {
    className: i()(_, b.messagesPopoutWrap),
    style: B,
    onClick: y,
    onDoubleClick: y,
    "aria-label": e["aria-label"],
    children: (0, a.jsxs)(c.HeadingLevel, {
      component: h(),
      children: [(0, a.jsxs)(c.AdvancedScroller, {
        className: i()(b.messagesPopout, N),
        onScroll: H ? F : void 0,
        ref: O,
        children: [(0, a.jsx)(u.ListNavigatorProvider, {
          navigator: L,
          children: (0, a.jsx)(u.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, a.jsx)("div", {
                ref: t,
                ...n,
                children: P
              })
            }
          })
        }), U]
      }), G]
    })
  })
}

function k(e) {
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
    renderEmptyState: _,
    renderMessage: I,
    getProTip: T,
    scrollerClassName: C,
    className: A,
    onCloseMessage: v,
    listName: x
  } = e, O = (0, d.useStateFromStores)([N.default], () => {
    let e = null != s ? N.default.getMessages(s.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function y(e, n) {
    let {
      id: a,
      blocked: l,
      author: s,
      channel_id: i
    } = e;
    if (l) f.default.show({
      title: M.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: M.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: s.username
      }),
      confirmText: M.default.Messages.OKAY
    });
    else if (!O) {
      let e = g.default.getChannel(i);
      null != e && (h.default.trackJump(i, a, t), (0, p.transitionTo)(R.Routes.CHANNEL(e.getGuildId(), i, a))), null == c || c(n)
    }
  }
  l.useEffect(() => {
    n(s)
  }, [s, n]);
  let L = l.useMemo(() => null == i ? void 0 : i.map(e => ({
    message: e,
    channel: s
  })), [i, s]);
  return (0, a.jsx)(P, {
    className: A,
    scrollerClassName: C,
    items: L,
    loading: o,
    analyticsName: t,
    renderEmptyState: _,
    renderHeader: S,
    hasMore: r,
    loadMore: u,
    getProTip: T,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != I) return I(t, e => y(t, e));
      let l = [];
      return null == n ? [] : (l.push((0, a.jsxs)("div", {
        className: b.messageGroupWrapper,
        children: [(0, a.jsx)(m.default, {
          className: b.messageGroupCozy,
          message: t,
          channel: n
        }), (0, a.jsx)(F, {
          channel: s,
          message: t,
          jumping: O,
          canCloseAllMessages: E,
          jumpTo: y,
          onCloseMessage: v
        })]
      }, t.id)), l)
    },
    listName: x,
    "aria-label": e["aria-label"]
  })
}