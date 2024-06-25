var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(749210),
  r = n(210887),
  o = n(514611),
  c = n(469988),
  u = n(689938),
  d = n(143960);
t.Z = e => {
  let {
    guilds: t
  } = e, n = (0, i.e7)([r.Z], () => r.Z.theme), E = t.map(e => (0, s.jsx)(o.Z, {
    className: d.__invalid_guildCard,
    onView: () => a.Z.transitionToGuildSync(e.id),
    guild: {
      ...e,
      presenceCount: void 0,
      memberCount: void 0,
      premiumSubscriptionCount: void 0,
      emojis: void 0
    },
    theme: n
  }, e.id));
  return (0, s.jsx)("section", {
    className: d.guildListSection,
    children: t.length > 0 ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(l.Heading, {
        className: d.__invalid_title,
        variant: "heading-lg/semibold",
        children: u.Z.Messages.YOUR_HUB
      }), (0, s.jsxs)("div", {
        className: d.guildList,
        children: [E, (0, s.jsx)(c.Z, {
          hasHub: !0
        })]
      })]
    }) : (0, s.jsx)("div", {
      className: d.guildList,
      children: (0, s.jsx)(c.Z, {
        hasHub: !1
      })
    })
  })
}