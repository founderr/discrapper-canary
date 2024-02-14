"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  u = n.n(l),
  a = n("77078"),
  s = n("945330"),
  o = n("745049"),
  d = n("782340"),
  c = n("689560");

function f(e) {
  let {
    onClose: t,
    selectedTab: n,
    onTabSelected: l,
    userCount: f,
    hasBanner: E,
    isHub: _ = !1
  } = e, S = r.useRef(null);
  r.useEffect(() => {
    var e, t, n;
    return null === (n = S.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let T = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    I = [(0, i.jsx)(a.TabBar.Item, {
      className: c.tabBarItem,
      id: o.EventDetailSections.EVENT_INFO,
      children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !_ && I.push((0, i.jsx)(a.TabBar.Item, {
    className: c.tabBarItem,
    id: o.EventDetailSections.RSVP_LIST,
    children: T
  }, "is-hub")), (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(a.Clickable, {
      ref: S,
      onClick: t,
      className: c.closeButton,
      "aria-label": d.default.Messages.CLOSE,
      children: (0, i.jsx)(s.default, {
        className: u(c.closeIcon, E && c.closeIconBanner)
      })
    }), (0, i.jsx)(a.TabBar, {
      className: c.tabBar,
      "aria-label": d.default.Messages.OPTIONS,
      selectedItem: n,
      type: "top",
      onItemSelect: l,
      children: I
    })]
  })
}