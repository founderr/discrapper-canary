l.d(n, {
  Z: function() {
    return d
  }
}), l(653041);
var t = l(735250),
  i = l(470079),
  r = l(120356),
  s = l.n(r),
  a = l(481060),
  o = l(765305),
  u = l(689938),
  c = l(235098);

function d(e) {
  let {
    onClose: n,
    selectedTab: l,
    onTabSelected: r,
    userCount: d,
    hasBanner: v,
    isHub: h = !1
  } = e, E = i.useRef(null);
  i.useEffect(() => {
    var e, n, l;
    return null === (l = E.current) || void 0 === l ? void 0 : null === (n = l.ref) || void 0 === n ? void 0 : null === (e = n.blur) || void 0 === e ? void 0 : e.call(n)
  }, []);
  let g = u.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: d
    }),
    f = [(0, t.jsx)(a.TabBar.Item, {
      className: c.tabBarItem,
      id: o.fL.EVENT_INFO,
      children: u.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !h && f.push((0, t.jsx)(a.TabBar.Item, {
    className: c.tabBarItem,
    id: o.fL.RSVP_LIST,
    children: g
  }, "is-hub")), (0, t.jsxs)("div", {
    className: c.container,
    children: [(0, t.jsx)(a.Clickable, {
      ref: E,
      onClick: n,
      className: c.closeButton,
      "aria-label": u.Z.Messages.CLOSE,
      children: (0, t.jsx)(a.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: s()(c.closeIcon, v && c.closeIconBanner)
      })
    }), (0, t.jsx)(a.TabBar, {
      className: c.tabBar,
      "aria-label": u.Z.Messages.OPTIONS,
      selectedItem: l,
      type: "top",
      onItemSelect: r,
      children: f
    })]
  })
}