"use strict";
n.r(t), n.d(t, {
  EmptyStateCenter: function() {
    return y
  },
  Header: function() {
    return P
  },
  ItemsPopout: function() {
    return b
  },
  default: function() {
    return F
  }
}), n("47120"), n("653041");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("481060"),
  f = n("668781"),
  E = n("904245"),
  _ = n("724757"),
  m = n("294218"),
  T = n("703656"),
  I = n("210887"),
  p = n("592125"),
  h = n("375954"),
  N = n("496675"),
  S = n("933429"),
  C = n("451478"),
  g = n("387204"),
  A = n("465670"),
  M = n("626135"),
  v = n("585483"),
  R = n("981631"),
  O = n("689938"),
  x = n("114267");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function D(e) {
  e.stopPropagation()
}
let P = e => {
    let {
      title: t,
      children: n,
      className: a
    } = e;
    return (0, s.jsxs)("div", {
      className: i()(a, x.header),
      children: [null == t ? null : (0, s.jsx)(c.Heading, {
        variant: "heading-md/medium",
        children: t
      }), n]
    })
  },
  y = e => {
    let {
      msg: t,
      image: n
    } = e;
    return (0, s.jsxs)("div", {
      className: x.emptyPlaceholder,
      children: [(0, s.jsx)("div", {
        className: x.image,
        style: {
          backgroundImage: "url(".concat(n, ")")
        }
      }), (0, s.jsx)("div", {
        className: x.body,
        children: t
      })]
    })
  };
class U extends a.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, s.jsxs)(c.Clickable, {
      className: x.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, s.jsx)("div", {
        className: i()(x.__invalid_text, {
          hidden: e
        }),
        children: O.default.Messages.JUMP
      }), (0, s.jsx)(c.Spinner, {
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        className: i()(x.loading, {
          [x.visible]: e
        })
      })]
    })
  }
  renderCloseButton() {
    let {
      onCloseMessage: e,
      canCloseAllMessages: t,
      canManageMessages: n,
      channel: a
    } = this.props;
    return null != e && (t || n || null != a && a.isPrivate()) ? (0, s.jsx)(c.Button, {
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, s.jsx)(A.default, {
        className: x.closeIcon
      })
    }) : null
  }
  render() {
    return (0, s.jsxs)("div", {
      className: x.actionButtons,
      children: [this.renderJumpButton(), this.renderCloseButton()]
    })
  }
  constructor(...e) {
    super(...e), L(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), L(this, "handleClickClose", e => {
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
})(U);

function b(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: l,
    loading: r,
    loadMore: f,
    renderHeader: E,
    renderEmptyState: m,
    renderItem: T,
    getProTip: p,
    scrollerClassName: h,
    className: N,
    listName: A
  } = e, L = a.useRef(null), P = (0, _.default)(A, L), y = (0, d.useStateFromStores)([S.default], () => S.default.hasNotice()), U = (0, d.useStateFromStores)([C.default], () => C.default.windowSize());
  a.useEffect(() => {
    M.default.track(R.AnalyticEvents.OPEN_POPOUT, {
      type: t
    })
  }, [t]), a.useEffect(() => {
    function e() {
      var e;
      null === (e = L.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }

    function t() {
      var e;
      null === (e = L.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }
    return v.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), v.ComponentDispatch.subscribe(R.ComponentActions.SCROLL_PAGE_UP, e), () => {
      v.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_DOWN, t), v.ComponentDispatch.unsubscribe(R.ComponentActions.SCROLL_PAGE_UP, e)
    }
  }, []);
  let j = a.useCallback(() => {
      var e;
      let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerState();
      null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && l && !r && (null == f || f())
    }, [l, f, r]),
    b = [],
    F = !0;
  null == n ? b = [(0, s.jsx)("div", {
    className: i()(x.emptyPlaceholder, x.loadingPlaceholder),
    children: (0, s.jsx)(c.Spinner, {})
  }, "spinner")] : 0 === n.length ? b.push((0, s.jsx)(a.Fragment, {
    children: m(I.default.theme)
  }, "empty-state")) : (F = !1, b = [], o().each(n, e => {
    b.push(...T(e))
  }));
  let B = null;
  null != n && n.length > 0 && null != f && (B = r ? (0, s.jsx)("div", {
    className: x.loadingMore,
    children: (0, s.jsx)(c.Spinner, {})
  }, "loading-more-after") : l ? (0, s.jsx)("div", {
    className: x.hasMore,
    children: (0, s.jsx)(c.Button, {
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.PRIMARY,
      size: c.Button.Sizes.MAX,
      onClick: f,
      children: O.default.Messages.LOAD_MORE_MESSAGES
    })
  }) : (0, s.jsx)("div", {
    className: x.scrollingFooterWrap,
    children: m(I.default.theme)
  }));
  let G = null == p ? void 0 : p(),
    k = F && null != G ? (0, s.jsx)("div", {
      className: x.footer,
      children: (0, s.jsx)(g.default, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: G
      })
    }) : null,
    w = {
      maxHeight: U.height - 43 - 25
    };
  y && (w.maxHeight -= 40);
  let H = null != f && l;
  return (0, s.jsx)("div", {
    className: i()(N, x.messagesPopoutWrap),
    style: w,
    onClick: D,
    onDoubleClick: D,
    "aria-label": e["aria-label"],
    children: (0, s.jsxs)(c.HeadingLevel, {
      component: E(),
      children: [(0, s.jsxs)(c.AdvancedScroller, {
        className: i()(x.messagesPopout, h),
        onScroll: H ? j : void 0,
        ref: L,
        children: [(0, s.jsx)(u.ListNavigatorProvider, {
          navigator: P,
          children: (0, s.jsx)(u.ListNavigatorContainer, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, s.jsx)("div", {
                ref: t,
                ...n,
                children: b
              })
            }
          })
        }), B]
      }), k]
    })
  })
}

function F(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: l,
    messages: i,
    hasMore: r,
    loading: o,
    loadMore: u,
    onJump: c,
    canCloseAllMessages: _ = !1,
    renderHeader: I,
    renderEmptyState: N,
    renderMessage: S,
    getProTip: C,
    scrollerClassName: g,
    className: A,
    onCloseMessage: M,
    listName: v
  } = e, L = (0, d.useStateFromStores)([h.default], () => {
    let e = null != l ? h.default.getMessages(l.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function D(e, n) {
    let {
      id: s,
      blocked: a,
      author: l,
      channel_id: i
    } = e;
    if (a) f.default.show({
      title: O.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: O.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: l.username
      }),
      confirmText: O.default.Messages.OKAY
    });
    else if (!L) {
      let e = p.default.getChannel(i);
      null != e && (E.default.trackJump(i, s, t), (0, T.transitionTo)(R.Routes.CHANNEL(e.getGuildId(), i, s))), null == c || c(n)
    }
  }
  a.useEffect(() => {
    n(l)
  }, [l, n]);
  let P = a.useMemo(() => null == i ? void 0 : i.map(e => ({
    message: e,
    channel: l
  })), [i, l]);
  return (0, s.jsx)(b, {
    className: A,
    scrollerClassName: g,
    items: P,
    loading: o,
    analyticsName: t,
    renderEmptyState: N,
    renderHeader: I,
    hasMore: r,
    loadMore: u,
    getProTip: C,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != S) return S(t, e => D(t, e));
      let a = [];
      return null == n ? [] : (a.push((0, s.jsxs)("div", {
        className: x.messageGroupWrapper,
        children: [(0, s.jsx)(m.default, {
          className: x.messageGroupCozy,
          message: t,
          channel: n
        }), (0, s.jsx)(j, {
          channel: l,
          message: t,
          jumping: L,
          canCloseAllMessages: _,
          jumpTo: D,
          onCloseMessage: M
        })]
      }, t.id)), a)
    },
    listName: v,
    "aria-label": e["aria-label"]
  })
}