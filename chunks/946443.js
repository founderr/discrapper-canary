"use strict";
n.r(t), n.d(t, {
  UnreadsCrashed: function() {
    return L
  },
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("525654"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("524437"),
  f = n("481060"),
  h = n("570140"),
  E = n("607070"),
  m = n("724757"),
  p = n("837062"),
  g = n("626135"),
  S = n("585483"),
  N = n("143316"),
  _ = n("240126"),
  T = n("791914"),
  I = n("147522"),
  C = n("809780"),
  A = n("981631"),
  v = n("689938"),
  M = n("953214");

function R(e) {
  let {
    setTab: t,
    onJump: n,
    showTutorial: s,
    setSeenTutorial: r,
    closePopout: R,
    badgeState: L
  } = e, O = l.useRef(null), [b, y] = (0, C.default)(O), {
    loadState: j,
    channels: F
  } = b, {
    maybeLoadMore: D,
    markAllRead: U
  } = y;
  (function(e, t, n) {
    l.useLayoutEffect(() => {
      var a;
      let {
        scrollToChannelIndex: l
      } = t;
      n.clearScrollToChannelIndex();
      let {
        current: s
      } = e;
      if (null == s || null == l) return;
      let i = null === (a = s.getScrollerNode()) || void 0 === a ? void 0 : a.children;
      if (null == i) return;
      let r = i[l];
      if (null == r) return;
      let {
        scrollTop: o,
        scrollHeight: u
      } = s.getScrollerState();
      (r.offsetTop < o || r.offsetTop > o + u) && s.scrollTo({
        to: r.offsetTop
      })
    })
  })(O, b, y),
  function(e, t) {
    l.useEffect(() => {
      let n = () => {
        let n = e.channels.find(e => !e.collapsed);
        null != n && t.markChannelRead(n)
      };
      return S.ComponentDispatch.subscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
        S.ComponentDispatch.unsubscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
      }
    }, [t, e.channels])
  }(b, y), l.useEffect(() => {
    g.default.track(A.AnalyticEvents.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), l.useEffect(() => (h.default.subscribe("CONNECTION_OPEN", R), () => {
    h.default.unsubscribe("CONNECTION_OPEN", R)
  }), [R]);
  let P = (0, d.useStateFromStores)([E.default], () => E.default.messageGroupSpacing),
    k = (0, m.default)("unreads", O);
  if (0 === F.length) {
    var w;
    return (0, a.jsxs)("div", {
      className: M.container,
      children: [(0, a.jsx)(T.default, {
        tab: c.InboxTab.UNREADS,
        setTab: t,
        badgeState: L,
        closePopout: R
      }), (0, a.jsx)(_.default, {
        Icon: p.default,
        header: v.default.Messages.UNREADS_EMPTY_STATE_HEADER,
        tip: (null === (w = o().os) || void 0 === w ? void 0 : w.family) === "OS X" ? v.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : v.default.Messages.UNREADS_EMPTY_STATE_TIP
      })]
    })
  }
  return (0, a.jsxs)("div", {
    className: i()(M.container, "group-spacing-".concat(P)),
    "aria-label": v.default.Messages.UNREADS_TAB_LABEL,
    children: [(0, a.jsx)(T.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: L,
      closePopout: R,
      children: (0, a.jsx)(N.default, {
        type: "top-header",
        onClick: U
      })
    }), (0, a.jsx)(u.ListNavigatorProvider, {
      navigator: k,
      children: (0, a.jsx)(u.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...l
          } = e;
          return (0, a.jsxs)(f.AdvancedScrollerThin, {
            ref: e => {
              var n;
              O.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...l,
            onScroll: j === C.LoadState.Done ? void 0 : D,
            className: M.scroller,
            children: [s ? (0, a.jsx)(x, {
              setSeenTutorial: r
            }) : null, (0, I.default)(F, y, n), j === C.LoadState.Done ? null : (0, a.jsx)(f.Spinner, {
              className: M.spinner
            })]
          })
        }
      })
    })]
  })
}

function x(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, a.jsxs)("div", {
    className: M.tutorial,
    children: [(0, a.jsx)("div", {
      className: M.tutorialIcon,
      children: (0, a.jsx)(p.default, {
        width: 24,
        height: 24
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(f.Heading, {
        className: M.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: v.default.Messages.UNREADS_TUTORIAL_HEADER
      }), (0, a.jsx)(f.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: v.default.Messages.UNREADS_TUTORIAL_BODY
      }), (0, a.jsx)(f.Button, {
        className: M.tutorialButton,
        onClick: t,
        size: f.Button.Sizes.SMALL,
        children: v.default.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}

function L(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: l
  } = e;
  return (0, a.jsxs)("div", {
    className: M.container,
    children: [(0, a.jsx)(T.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: n,
      closePopout: l
    }), (0, a.jsx)(_.default, {
      Icon: p.default,
      disableStars: !0,
      header: v.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
      tip: v.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
    })]
  })
}