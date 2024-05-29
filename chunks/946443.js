"use strict";
n.r(t), n.d(t, {
  UnreadsCrashed: function() {
    return x
  },
  default: function() {
    return R
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("525654"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("524437"),
  f = n("481060"),
  E = n("570140"),
  _ = n("607070"),
  m = n("724757"),
  T = n("837062"),
  I = n("626135"),
  p = n("585483"),
  h = n("143316"),
  N = n("240126"),
  S = n("791914"),
  C = n("147522"),
  g = n("809780"),
  A = n("981631"),
  M = n("689938"),
  v = n("953214");

function R(e) {
  let {
    setTab: t,
    onJump: n,
    showTutorial: l,
    setSeenTutorial: r,
    closePopout: R,
    badgeState: x
  } = e, L = a.useRef(null), [D, P] = (0, g.default)(L), {
    loadState: y,
    channels: U
  } = D, {
    maybeLoadMore: j,
    markAllRead: b
  } = P;
  (function(e, t, n) {
    a.useLayoutEffect(() => {
      var s;
      let {
        scrollToChannelIndex: a
      } = t;
      n.clearScrollToChannelIndex();
      let {
        current: l
      } = e;
      if (null == l || null == a) return;
      let i = null === (s = l.getScrollerNode()) || void 0 === s ? void 0 : s.children;
      if (null == i) return;
      let r = i[a];
      if (null == r) return;
      let {
        scrollTop: o,
        scrollHeight: u
      } = l.getScrollerState();
      (r.offsetTop < o || r.offsetTop > o + u) && l.scrollTo({
        to: r.offsetTop
      })
    })
  })(L, D, P),
  function(e, t) {
    a.useEffect(() => {
      let n = () => {
        let n = e.channels.find(e => !e.collapsed);
        null != n && t.markChannelRead(n)
      };
      return p.ComponentDispatch.subscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
        p.ComponentDispatch.unsubscribe(A.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
      }
    }, [t, e.channels])
  }(D, P), a.useEffect(() => {
    I.default.track(A.AnalyticEvents.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), a.useEffect(() => (E.default.subscribe("CONNECTION_OPEN", R), () => {
    E.default.unsubscribe("CONNECTION_OPEN", R)
  }), [R]);
  let F = (0, d.useStateFromStores)([_.default], () => _.default.messageGroupSpacing),
    B = (0, m.default)("unreads", L);
  if (0 === U.length) {
    var G;
    return (0, s.jsxs)("div", {
      className: v.container,
      children: [(0, s.jsx)(S.default, {
        tab: c.InboxTab.UNREADS,
        setTab: t,
        badgeState: x,
        closePopout: R
      }), (0, s.jsx)(N.default, {
        Icon: T.default,
        header: M.default.Messages.UNREADS_EMPTY_STATE_HEADER,
        tip: (null === (G = o().os) || void 0 === G ? void 0 : G.family) === "OS X" ? M.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : M.default.Messages.UNREADS_EMPTY_STATE_TIP
      })]
    })
  }
  return (0, s.jsxs)("div", {
    className: i()(v.container, "group-spacing-".concat(F)),
    "aria-label": M.default.Messages.UNREADS_TAB_LABEL,
    children: [(0, s.jsx)(S.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: x,
      closePopout: R,
      children: (0, s.jsx)(h.default, {
        type: "top-header",
        onClick: b
      })
    }), (0, s.jsx)(u.ListNavigatorProvider, {
      navigator: B,
      children: (0, s.jsx)(u.ListNavigatorContainer, {
        children: e => {
          let {
            ref: t,
            ...a
          } = e;
          return (0, s.jsxs)(f.AdvancedScrollerThin, {
            ref: e => {
              var n;
              L.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...a,
            onScroll: y === g.LoadState.Done ? void 0 : j,
            className: v.scroller,
            children: [l ? (0, s.jsx)(O, {
              setSeenTutorial: r
            }) : null, (0, C.default)(U, P, n), y === g.LoadState.Done ? null : (0, s.jsx)(f.Spinner, {
              className: v.spinner
            })]
          })
        }
      })
    })]
  })
}

function O(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, s.jsxs)("div", {
    className: v.tutorial,
    children: [(0, s.jsx)("div", {
      className: v.tutorialIcon,
      children: (0, s.jsx)(T.default, {
        width: 24,
        height: 24
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(f.Heading, {
        className: v.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: M.default.Messages.UNREADS_TUTORIAL_HEADER
      }), (0, s.jsx)(f.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: M.default.Messages.UNREADS_TUTORIAL_BODY
      }), (0, s.jsx)(f.Button, {
        className: v.tutorialButton,
        onClick: t,
        size: f.Button.Sizes.SMALL,
        children: M.default.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}

function x(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: a
  } = e;
  return (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(S.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: n,
      closePopout: a
    }), (0, s.jsx)(N.default, {
      Icon: T.default,
      disableStars: !0,
      header: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
      tip: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
    })]
  })
}