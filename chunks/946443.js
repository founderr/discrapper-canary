n.d(t, {
  Z: function() {
    return O
  },
  h: function() {
    return x
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(525654),
  o = n.n(r),
  c = n(91192),
  u = n(442837),
  d = n(524437),
  E = n(481060),
  _ = n(570140),
  I = n(607070),
  T = n(724757),
  m = n(626135),
  N = n(585483),
  h = n(143316),
  C = n(240126),
  S = n(791914),
  A = n(207950),
  g = n(809780),
  p = n(981631),
  f = n(689938),
  R = n(608777);

function O(e) {
  let {
    setTab: t,
    onJump: n,
    showTutorial: l,
    setSeenTutorial: r,
    closePopout: O,
    badgeState: x
  } = e, v = i.useRef(null), [L, Z] = (0, g.ZP)(v), {
    loadState: P,
    channels: D
  } = L, {
    maybeLoadMore: j,
    markAllRead: U
  } = Z;
  (function(e, t, n) {
    i.useLayoutEffect(() => {
      var s;
      let {
        scrollToChannelIndex: i
      } = t;
      n.clearScrollToChannelIndex();
      let {
        current: l
      } = e;
      if (null == l || null == i) return;
      let a = null === (s = l.getScrollerNode()) || void 0 === s ? void 0 : s.children;
      if (null == a) return;
      let r = a[i];
      if (null == r) return;
      let {
        scrollTop: o,
        scrollHeight: c
      } = l.getScrollerState();
      (r.offsetTop < o || r.offsetTop > o + c) && l.scrollTo({
        to: r.offsetTop
      })
    })
  })(v, L, Z),
  function(e, t) {
    i.useEffect(() => {
      let n = () => {
        let n = e.channels.find(e => !e.collapsed);
        null != n && t.markChannelRead(n)
      };
      return N.S.subscribe(p.CkL.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
        N.S.unsubscribe(p.CkL.MARK_TOP_INBOX_CHANNEL_READ, n)
      }
    }, [t, e.channels])
  }(L, Z), i.useEffect(() => {
    m.default.track(p.rMx.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), i.useEffect(() => (_.Z.subscribe("CONNECTION_OPEN", O), () => {
    _.Z.unsubscribe("CONNECTION_OPEN", O)
  }), [O]);
  let b = (0, u.e7)([I.Z], () => I.Z.messageGroupSpacing),
    y = (0, T.Z)("unreads", v);
  if (0 === D.length) {
    var B;
    return (0, s.jsxs)("div", {
      className: R.container,
      children: [(0, s.jsx)(S.Z, {
        tab: d.X.UNREADS,
        setTab: t,
        badgeState: x,
        closePopout: O
      }), (0, s.jsx)(C.Z, {
        Icon: E.InboxIcon,
        header: f.Z.Messages.UNREADS_EMPTY_STATE_HEADER,
        tip: (null === (B = o().os) || void 0 === B ? void 0 : B.family) === "OS X" ? f.Z.Messages.UNREADS_EMPTY_STATE_TIP_MAC : f.Z.Messages.UNREADS_EMPTY_STATE_TIP
      })]
    })
  }
  return (0, s.jsxs)("div", {
    className: a()(R.container, "group-spacing-".concat(b)),
    "aria-label": f.Z.Messages.UNREADS_TAB_LABEL,
    children: [(0, s.jsx)(S.Z, {
      tab: d.X.UNREADS,
      setTab: t,
      badgeState: x,
      closePopout: O,
      children: (0, s.jsx)(h.Z, {
        type: "top-header",
        onClick: U
      })
    }), (0, s.jsx)(c.bG, {
      navigator: y,
      children: (0, s.jsx)(c.SJ, {
        children: e => {
          let {
            ref: t,
            ...i
          } = e;
          return (0, s.jsxs)(E.AdvancedScrollerThin, {
            ref: e => {
              var n;
              v.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
            },
            ...i,
            onScroll: P === g.jd.Done ? void 0 : j,
            className: R.scroller,
            children: [l ? (0, s.jsx)(M, {
              setSeenTutorial: r
            }) : null, (0, A.Z)(D, Z, n), P === g.jd.Done ? null : (0, s.jsx)(E.Spinner, {
              className: R.spinner
            })]
          })
        }
      })
    })]
  })
}

function M(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, s.jsxs)("div", {
    className: R.tutorial,
    children: [(0, s.jsx)("div", {
      className: R.tutorialIcon,
      children: (0, s.jsx)(E.InboxIcon, {
        size: "md",
        color: "currentColor"
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(E.Heading, {
        className: R.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: f.Z.Messages.UNREADS_TUTORIAL_HEADER
      }), (0, s.jsx)(E.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: f.Z.Messages.UNREADS_TUTORIAL_BODY
      }), (0, s.jsx)(E.Button, {
        className: R.tutorialButton,
        onClick: t,
        size: E.Button.Sizes.SMALL,
        children: f.Z.Messages.TUTORIAL_CLOSE
      })]
    })]
  })
}

function x(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: i
  } = e;
  return (0, s.jsxs)("div", {
    className: R.container,
    children: [(0, s.jsx)(S.Z, {
      tab: d.X.UNREADS,
      setTab: t,
      badgeState: n,
      closePopout: i
    }), (0, s.jsx)(C.Z, {
      Icon: E.InboxIcon,
      disableStars: !0,
      header: f.Z.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
      tip: f.Z.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
    })]
  })
}