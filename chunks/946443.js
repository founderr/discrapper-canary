"use strict";
n.r(t), n.d(t, {
  UnreadsCrashed: function() {
    return x
  },
  default: function() {
    return O
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
  T = n("724757"),
  m = n("837062"),
  I = n("626135"),
  N = n("585483"),
  p = n("143316"),
  h = n("240126"),
  S = n("791914"),
  C = n("147522"),
  A = n("809780"),
  g = n("981631"),
  M = n("689938"),
  R = n("953214");

function O(e) {
  let {
    setTab: t,
    onJump: n,
    showTutorial: l,
    setSeenTutorial: r,
    closePopout: O,
    badgeState: x
  } = e, L = a.useRef(null), [P, D] = (0, A.default)(L), {
    loadState: y,
    channels: U
  } = P, {
    maybeLoadMore: j,
    markAllRead: b
  } = D;
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
  })(L, P, D),
  function(e, t) {
    a.useEffect(() => {
      let n = () => {
        let n = e.channels.find(e => !e.collapsed);
        null != n && t.markChannelRead(n)
      };
      return N.ComponentDispatch.subscribe(g.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
        N.ComponentDispatch.unsubscribe(g.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
      }
    }, [t, e.channels])
  }(P, D), a.useEffect(() => {
    I.default.track(g.AnalyticEvents.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), a.useEffect(() => (E.default.subscribe("CONNECTION_OPEN", O), () => {
    E.default.unsubscribe("CONNECTION_OPEN", O)
  }), [O]);
  let G = (0, d.useStateFromStores)([_.default], () => _.default.messageGroupSpacing),
    F = (0, T.default)("unreads", L);
  if (0 === U.length) {
    var B;
    return (0, s.jsxs)("div", {
      className: R.container,
      children: [(0, s.jsx)(S.default, {
        tab: c.InboxTab.UNREADS,
        setTab: t,
        badgeState: x,
        closePopout: O
      }), (0, s.jsx)(h.default, {
        Icon: m.default,
        header: M.default.Messages.UNREADS_EMPTY_STATE_HEADER,
        tip: (null === (B = o().os) || void 0 === B ? void 0 : B.family) === "OS X" ? M.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : M.default.Messages.UNREADS_EMPTY_STATE_TIP
      })]
    })
  }
  return (0, s.jsxs)("div", {
    className: i()(R.container, "group-spacing-".concat(G)),
    "aria-label": M.default.Messages.UNREADS_TAB_LABEL,
    children: [(0, s.jsx)(S.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: x,
      closePopout: O,
      children: (0, s.jsx)(p.default, {
        type: "top-header",
        onClick: b
      })
    }), (0, s.jsx)(u.ListNavigatorProvider, {
      navigator: F,
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
            onScroll: y === A.LoadState.Done ? void 0 : j,
            className: R.scroller,
            children: [l ? (0, s.jsx)(v, {
              setSeenTutorial: r
            }) : null, (0, C.default)(U, D, n), y === A.LoadState.Done ? null : (0, s.jsx)(f.Spinner, {
              className: R.spinner
            })]
          })
        }
      })
    })]
  })
}

function v(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, s.jsxs)("div", {
    className: R.tutorial,
    children: [(0, s.jsx)("div", {
      className: R.tutorialIcon,
      children: (0, s.jsx)(m.default, {
        width: 24,
        height: 24
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(f.Heading, {
        className: R.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: M.default.Messages.UNREADS_TUTORIAL_HEADER
      }), (0, s.jsx)(f.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: M.default.Messages.UNREADS_TUTORIAL_BODY
      }), (0, s.jsx)(f.Button, {
        className: R.tutorialButton,
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
    className: R.container,
    children: [(0, s.jsx)(S.default, {
      tab: c.InboxTab.UNREADS,
      setTab: t,
      badgeState: n,
      closePopout: a
    }), (0, s.jsx)(h.default, {
      Icon: m.default,
      disableStars: !0,
      header: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
      tip: M.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
    })]
  })
}