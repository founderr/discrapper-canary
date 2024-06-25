n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(923726),
  c = n(689938),
  u = n(80045);

function d(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, l.jsxs)("div", {
    className: a()(u.container, {
      [u.containerHide]: n
    }),
    children: [(0, l.jsx)("div", {
      className: u.notice,
      children: (0, l.jsx)(r.Text, {
        className: u.__invalid_label,
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      })
    }), (0, l.jsx)("div", {
      className: u.noticeArrow
    })]
  })
}

function h(e) {
  let [t, n] = i.useState(), [s, a] = i.useState(), [r, u] = i.useState(!1), [h, m] = i.useState(!1), {
    enabled: E
  } = (0, o.s1)(e);
  return i.useEffect(() => {
    E && null != t && null != s ? u(t < s) : u(!1)
  }, [E, t, s]), {
    horizontalScrollNotice: i.useMemo(() => r ? (0, l.jsx)(d, {
      text: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_LISTINGS_SCROLLABLE_NOTICE,
      hasScrolled: h
    }) : null, [r, h]),
    handleScroll: () => m(!0),
    handleSetScrollerRef: e => {
      var t;
      return a(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
  }
}