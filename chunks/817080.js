"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("394846"),
  o = n("77078"),
  u = n("272030"),
  d = n("754474"),
  c = n("315102"),
  f = n("506885"),
  h = n("981601"),
  m = n("155502"),
  p = n("889367");

function E(e) {
  var t;
  let {
    channel: s,
    integration: E
  } = e, S = c.default.getApplicationIconURL({
    id: E.application.id,
    icon: E.application.icon,
    size: 40
  }), g = a.useCallback(e => {
    (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("348866").then(n.bind(n, "348866"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: s,
        integration: E
      })
    })
  }, [E, s]), C = (0, l.jsxs)("div", {
    className: m.listRow,
    onContextMenu: g,
    children: [(0, l.jsx)("img", {
      className: i(m.listAvatar, p.icon),
      alt: "",
      "aria-hidden": !0,
      src: S,
      width: 40,
      height: 40
    }), (0, l.jsx)("div", {
      className: m.listRowContent,
      children: (0, l.jsx)(d.default, {
        name: E.application.name,
        botType: d.BotTypes.BOT,
        botVerified: null === (t = E.application.bot) || void 0 === t ? void 0 : t.isVerifiedBot(),
        className: m.listName
      })
    })]
  }), {
    bot: _
  } = E.application;
  return null == _ ? (0, l.jsx)("li", {
    children: C
  }) : (0, l.jsx)(o.Popout, {
    preload: () => (0, f.default)(_.id, S),
    renderPopout: e => (0, l.jsx)(h.default, {
      ...e,
      userId: _.id,
      channelId: s.id
    }),
    position: r.isMobile ? "window_center" : "left",
    children: e => (0, l.jsx)("li", {
      ...e,
      children: C
    })
  })
}