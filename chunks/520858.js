n.d(t, {
  Z: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(873546),
  o = n(481060),
  c = n(239091),
  u = n(180828),
  d = n(768581),
  h = n(484459),
  m = n(103575),
  p = n(667589),
  E = n(170935);

function g(e) {
  var t;
  let {
    channel: s,
    integration: g
  } = e, f = d.ZP.getApplicationIconURL({
    id: g.application.id,
    icon: g.application.icon,
    size: 40
  }), C = i.useCallback(e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("37969").then(n.bind(n, 496281));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: s,
        integration: g
      })
    })
  }, [g, s]), _ = (0, l.jsxs)("div", {
    className: p.listRow,
    onContextMenu: C,
    children: [(0, l.jsx)("img", {
      className: a()(p.listAvatar, E.icon),
      alt: "",
      "aria-hidden": !0,
      src: f,
      width: 40,
      height: 40
    }), (0, l.jsx)("div", {
      className: p.listRowContent,
      children: (0, l.jsx)(u.Z, {
        name: g.application.name,
        botType: u.J.BOT,
        botVerified: null === (t = g.application.bot) || void 0 === t ? void 0 : t.isVerifiedBot(),
        className: p.listName
      })
    })]
  }), {
    bot: I
  } = g.application;
  return null == I ? (0, l.jsx)("li", {
    children: _
  }) : (0, l.jsx)(o.Popout, {
    preload: () => (0, h.Z)(I.id, f),
    renderPopout: e => (0, l.jsx)(m.Z, {
      location: "AppProfilePanelItem",
      ...e,
      userId: I.id,
      channelId: s.id
    }),
    position: r.tq ? "window_center" : "left",
    children: e => (0, l.jsx)("li", {
      ...e,
      children: _
    })
  })
}