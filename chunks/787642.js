"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("212093"),
  r = a("703656"),
  o = a("769654"),
  u = a("430824"),
  d = a("104259"),
  c = a("626135"),
  f = a("768581"),
  E = a("125631"),
  h = a("981631"),
  _ = a("689938"),
  C = a("385702");

function m(e, t, a) {
  return (0, n.jsxs)("button", {
    className: C.container,
    onClick: a,
    children: ["function" == typeof e ? (0, n.jsx)("div", {
      className: C.icon,
      children: (0, n.jsx)(e, {
        className: C.__invalid_iconInner,
        color: l.tokens.colors.WHITE.css
      })
    }) : (0, n.jsx)("img", {
      className: C.icon,
      alt: "",
      src: e
    }), (0, n.jsx)(l.Text, {
      className: C.text,
      variant: "text-md/medium",
      children: t
    }), (0, n.jsx)(E.default, {
      className: C.arrow
    })]
  }, t)
}

function S() {
  let e = Object.values(u.default.getGuilds()).filter(e => e.hasFeature(h.GuildFeatures.HUB)),
    t = e => {
      c.default.track(h.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
        guild_id: e
      }), (0, o.transitionToGuild)(e)
    };
  return (0, n.jsxs)(s.Fragment, {
    children: [(0, n.jsx)("header", {
      className: C.header,
      children: (0, n.jsx)(l.FormTitle, {
        tag: "h2",
        className: C.title,
        children: _.default.Messages.ADD_FRIEND_MAKE_FRIENDS
      })
    }), (0, n.jsxs)("div", {
      className: C.grid,
      children: [e.map(e => m(f.default.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        t(e.id)
      })), m(d.default, _.default.Messages.ADD_FRIEND_EXPLORE_PUBLIC_SERVERS, () => {
        (0, i.clearSearch)(), c.default.track(h.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, r.transitionTo)(h.Routes.GUILD_DISCOVERY)
      })]
    })]
  })
}