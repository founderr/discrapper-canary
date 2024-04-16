"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("749210"),
  r = a("210887"),
  o = a("514611"),
  u = a("469988"),
  d = a("689938"),
  c = a("623604");
t.default = e => {
  let {
    guilds: t
  } = e, a = (0, s.useStateFromStores)([r.default], () => r.default.theme), f = t.map(e => (0, n.jsx)(o.default, {
    className: c.__invalid_guildCard,
    onView: () => i.default.transitionToGuildSync(e.id),
    guild: {
      ...e,
      presenceCount: void 0,
      memberCount: void 0,
      premiumSubscriptionCount: void 0,
      emojis: void 0
    },
    theme: a
  }, e.id));
  return (0, n.jsx)("section", {
    className: c.guildListSection,
    children: t.length > 0 ? (0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.Heading, {
        className: c.__invalid_title,
        variant: "heading-lg/semibold",
        children: d.default.Messages.YOUR_HUB
      }), (0, n.jsxs)("div", {
        className: c.guildList,
        children: [f, (0, n.jsx)(u.default, {
          hasHub: !0
        })]
      })]
    }) : (0, n.jsx)("div", {
      className: c.guildList,
      children: (0, n.jsx)(u.default, {
        hasHub: !1
      })
    })
  })
}