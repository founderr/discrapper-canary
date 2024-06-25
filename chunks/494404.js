n.d(t, {
  ZP: function() {
    return b
  },
  h4: function() {
    return Z
  },
  nH: function() {
    return P
  }
}), n(47120), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(91192),
  u = n(442837),
  d = n(481060),
  E = n(668781),
  _ = n(904245),
  I = n(724757),
  T = n(294218),
  m = n(703656),
  N = n(210887),
  h = n(592125),
  C = n(375954),
  S = n(496675),
  A = n(933429),
  g = n(451478),
  p = n(387204),
  f = n(626135),
  R = n(585483),
  O = n(981631),
  M = n(689938),
  x = n(555194);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function L(e) {
  e.stopPropagation()
}
let Z = e => {
    let {
      title: t,
      children: n,
      className: i
    } = e;
    return (0, s.jsxs)("div", {
      className: a()(i, x.header),
      children: [null == t ? null : (0, s.jsx)(d.Heading, {
        variant: "heading-md/medium",
        children: t
      }), n]
    })
  },
  P = e => {
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
class D extends i.PureComponent {
  renderJumpButton() {
    let {
      jumping: e
    } = this.props;
    return (0, s.jsxs)(d.Clickable, {
      className: x.jumpButton,
      onClick: this.handleClickJump,
      children: [(0, s.jsx)("div", {
        className: a()(x.__invalid_text, {
          hidden: e
        }),
        children: M.Z.Messages.JUMP
      }), (0, s.jsx)(d.Spinner, {
        type: d.Spinner.Type.PULSING_ELLIPSIS,
        className: a()(x.loading, {
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
      channel: i
    } = this.props;
    return null != e && (t || n || null != i && i.isPrivate()) ? (0, s.jsx)(d.Button, {
      look: d.Button.Looks.BLANK,
      size: d.Button.Sizes.NONE,
      onClick: this.handleClickClose,
      children: (0, s.jsx)(d.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
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
    super(...e), v(this, "handleClickJump", e => {
      let {
        jumpTo: t,
        message: n
      } = this.props;
      t(n, e)
    }), v(this, "handleClickClose", e => {
      let {
        onCloseMessage: t,
        message: n
      } = this.props;
      null != t && t(n, e)
    })
  }
}
let j = u.ZP.connectStores([S.Z], e => {
  let {
    channel: t
  } = e;
  return {
    canManageMessages: null != t && S.Z.can(O.Plq.MANAGE_MESSAGES, t)
  }
})(D);

function U(e) {
  let {
    analyticsName: t,
    items: n,
    hasMore: l,
    loading: r,
    loadMore: E,
    renderHeader: _,
    renderEmptyState: T,
    renderItem: m,
    getProTip: h,
    scrollerClassName: C,
    className: S,
    listName: v
  } = e, Z = i.useRef(null), P = (0, I.Z)(v, Z), D = (0, u.e7)([A.Z], () => A.Z.hasNotice()), j = (0, u.e7)([g.Z], () => g.Z.windowSize());
  i.useEffect(() => {
    f.default.track(O.rMx.OPEN_POPOUT, {
      type: t
    })
  }, [t]), i.useEffect(() => {
    function e() {
      var e;
      null === (e = Z.current) || void 0 === e || e.scrollPageUp({
        animate: !0
      })
    }

    function t() {
      var e;
      null === (e = Z.current) || void 0 === e || e.scrollPageDown({
        animate: !0
      })
    }
    return R.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t), R.S.subscribe(O.CkL.SCROLL_PAGE_UP, e), () => {
      R.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), R.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e)
    }
  }, []);
  let U = i.useCallback(() => {
      var e;
      let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
      null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && l && !r && (null == E || E())
    }, [l, E, r]),
    b = [],
    y = !0;
  null == n ? b = [(0, s.jsx)("div", {
    className: a()(x.emptyPlaceholder, x.loadingPlaceholder),
    children: (0, s.jsx)(d.Spinner, {})
  }, "spinner")] : 0 === n.length ? b.push((0, s.jsx)(i.Fragment, {
    children: T(N.Z.theme)
  }, "empty-state")) : (y = !1, b = [], o().each(n, e => {
    b.push(...m(e))
  }));
  let B = null;
  null != n && n.length > 0 && null != E && (B = r ? (0, s.jsx)("div", {
    className: x.loadingMore,
    children: (0, s.jsx)(d.Spinner, {})
  }, "loading-more-after") : l ? (0, s.jsx)("div", {
    className: x.hasMore,
    children: (0, s.jsx)(d.Button, {
      look: d.Button.Looks.FILLED,
      color: d.Button.Colors.PRIMARY,
      size: d.Button.Sizes.MAX,
      onClick: E,
      children: M.Z.Messages.LOAD_MORE_MESSAGES
    })
  }) : (0, s.jsx)("div", {
    className: x.scrollingFooterWrap,
    children: T(N.Z.theme)
  }));
  let k = null == h ? void 0 : h(),
    G = y && null != k ? (0, s.jsx)("div", {
      className: x.footer,
      children: (0, s.jsx)(p.Z, {
        style: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        },
        children: k
      })
    }) : null,
    F = {
      maxHeight: j.height - 43 - 25
    };
  D && (F.maxHeight -= 40);
  let V = null != E && l;
  return (0, s.jsx)("div", {
    className: a()(S, x.messagesPopoutWrap),
    style: F,
    onClick: L,
    onDoubleClick: L,
    "aria-label": e["aria-label"],
    children: (0, s.jsxs)(d.HeadingLevel, {
      component: _(),
      children: [(0, s.jsxs)(d.AdvancedScroller, {
        className: a()(x.messagesPopout, C),
        onScroll: V ? U : void 0,
        ref: Z,
        children: [(0, s.jsx)(c.bG, {
          navigator: P,
          children: (0, s.jsx)(c.SJ, {
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
      }), G]
    })
  })
}

function b(e) {
  let {
    analyticsName: t,
    onFetch: n,
    channel: l,
    messages: a,
    hasMore: r,
    loading: o,
    loadMore: c,
    onJump: d,
    canCloseAllMessages: I = !1,
    renderHeader: N,
    renderEmptyState: S,
    renderMessage: A,
    getProTip: g,
    scrollerClassName: p,
    className: f,
    onCloseMessage: R,
    listName: v
  } = e, L = (0, u.e7)([C.Z], () => {
    let e = null != l ? C.Z.getMessages(l.id) : null;
    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
  });

  function Z(e, n) {
    let {
      id: s,
      blocked: i,
      author: l,
      channel_id: a
    } = e;
    if (i) E.Z.show({
      title: M.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: M.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: l.username
      }),
      confirmText: M.Z.Messages.OKAY
    });
    else if (!L) {
      let e = h.Z.getChannel(a);
      null != e && (_.Z.trackJump(a, s, t), (0, m.uL)(O.Z5c.CHANNEL(e.getGuildId(), a, s))), null == d || d(n)
    }
  }
  i.useEffect(() => {
    n(l)
  }, [l, n]);
  let P = i.useMemo(() => null == a ? void 0 : a.map(e => ({
    message: e,
    channel: l
  })), [a, l]);
  return (0, s.jsx)(U, {
    className: f,
    scrollerClassName: p,
    items: P,
    loading: o,
    analyticsName: t,
    renderEmptyState: S,
    renderHeader: N,
    hasMore: r,
    loadMore: c,
    getProTip: g,
    renderItem: function(e) {
      let {
        message: t,
        channel: n
      } = e;
      if (null == t) return [];
      if (null != A) return A(t, e => Z(t, e));
      let i = [];
      return null == n ? [] : (i.push((0, s.jsxs)("div", {
        className: x.messageGroupWrapper,
        children: [(0, s.jsx)(T.Z, {
          className: x.messageGroupCozy,
          message: t,
          channel: n
        }), (0, s.jsx)(j, {
          channel: l,
          message: t,
          jumping: L,
          canCloseAllMessages: I,
          jumpTo: Z,
          onCloseMessage: R
        })]
      }, t.id)), i)
    },
    listName: v,
    "aria-label": e["aria-label"]
  })
}