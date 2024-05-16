"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("653041");
var n = l("735250"),
  i = l("470079"),
  a = l("120356"),
  r = l.n(a),
  s = l("481060"),
  u = l("465670"),
  d = l("765305"),
  o = l("689938"),
  c = l("987585");

function f(e) {
  let {
    onClose: t,
    selectedTab: l,
    onTabSelected: a,
    userCount: f,
    hasBanner: v,
    isHub: E = !1
  } = e, h = i.useRef(null);
  i.useEffect(() => {
    var e, t, l;
    return null === (l = h.current) || void 0 === l ? void 0 : null === (t = l.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let m = o.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    _ = [(0, n.jsx)(s.TabBar.Item, {
      className: c.tabBarItem,
      id: d.EventDetailSections.EVENT_INFO,
      children: o.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !E && _.push((0, n.jsx)(s.TabBar.Item, {
    className: c.tabBarItem,
    id: d.EventDetailSections.RSVP_LIST,
    children: m
  }, "is-hub")), (0, n.jsxs)("div", {
    className: c.container,
    children: [(0, n.jsx)(s.Clickable, {
      ref: h,
      onClick: t,
      className: c.closeButton,
      "aria-label": o.default.Messages.CLOSE,
      children: (0, n.jsx)(u.default, {
        className: r()(c.closeIcon, v && c.closeIconBanner)
      })
    }), (0, n.jsx)(s.TabBar, {
      className: c.tabBar,
      "aria-label": o.default.Messages.OPTIONS,
      selectedItem: l,
      type: "top",
      onItemSelect: a,
      children: _
    })]
  })
}