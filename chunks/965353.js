"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("77078"),
  u = n("945330"),
  o = n("745049"),
  c = n("782340"),
  d = n("689560");

function f(e) {
  let {
    onClose: t,
    selectedTab: n,
    onTabSelected: l,
    userCount: f,
    hasBanner: h,
    isHub: v = !1
  } = e, E = r.useRef(null);
  r.useEffect(() => {
    var e, t, n;
    return null === (n = E.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let C = c.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    S = [(0, i.jsx)(a.TabBar.Item, {
      className: d.tabBarItem,
      id: o.EventDetailSections.EVENT_INFO,
      children: c.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !v && S.push((0, i.jsx)(a.TabBar.Item, {
    className: d.tabBarItem,
    id: o.EventDetailSections.RSVP_LIST,
    children: C
  }, "is-hub")), (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsx)(a.Clickable, {
      ref: E,
      onClick: t,
      className: d.closeButton,
      "aria-label": c.default.Messages.CLOSE,
      children: (0, i.jsx)(u.default, {
        className: s(d.closeIcon, h && d.closeIconBanner)
      })
    }), (0, i.jsx)(a.TabBar, {
      className: d.tabBar,
      "aria-label": c.default.Messages.OPTIONS,
      selectedItem: n,
      type: "top",
      onItemSelect: l,
      children: S
    })]
  })
}