n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(212093),
  r = n(703656),
  o = n(769654),
  c = n(430824),
  u = n(626135),
  d = n(768581),
  E = n(125631),
  h = n(981631),
  _ = n(689938),
  I = n(387259);

function m(e, t, n) {
  return (0, s.jsxs)("button", {
    className: I.container,
    onClick: n,
    children: ["function" == typeof e ? (0, s.jsx)("div", {
      className: I.icon,
      children: (0, s.jsx)(e, {
        className: I.__invalid_iconInner,
        color: l.tokens.colors.WHITE.css
      })
    }) : (0, s.jsx)("img", {
      className: I.icon,
      alt: "",
      src: e
    }), (0, s.jsx)(l.Text, {
      className: I.text,
      variant: "text-md/medium",
      children: t
    }), (0, s.jsx)(E.Z, {
      className: I.arrow
    })]
  }, t)
}

function T() {
  let e = Object.values(c.Z.getGuilds()).filter(e => e.hasFeature(h.oNc.HUB)),
    t = e => {
      u.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
        guild_id: e
      }), (0, o.X)(e)
    };
  return (0, s.jsxs)(i.Fragment, {
    children: [(0, s.jsx)("header", {
      className: I.header,
      children: (0, s.jsx)(l.FormTitle, {
        tag: "h2",
        className: I.title,
        children: _.Z.Messages.ADD_FRIEND_MAKE_FRIENDS
      })
    }), (0, s.jsxs)("div", {
      className: I.grid,
      children: [e.map(e => m(d.ZP.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        t(e.id)
      })), m(l.CompassIcon, _.Z.Messages.ADD_FRIEND_EXPLORE_PUBLIC_SERVERS, () => {
        (0, a.AQ)(), u.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, r.uL)(h.Z5c.GUILD_DISCOVERY)
      })]
    })]
  })
}