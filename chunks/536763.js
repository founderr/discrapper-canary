n.d(t, {
  X: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(749210),
  l = n(469988),
  o = n(526383),
  c = n(210887),
  d = n(514611),
  u = n(374939),
  _ = n(689938),
  E = n(121019);

function h(e) {
  let {
onScroll: t
  } = e, n = (0, o.Z)(), h = (0, s.e7)([c.Z], () => c.Z.theme);
  return (0, i.jsx)(u.Z, {
title: _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
description: _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
onScroll: t,
children: (0, i.jsx)('div', {
  className: E.content,
  children: n.length > 0 ? (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-lg/semibold',
        children: _.Z.Messages.YOUR_HUB
      }),
      n.map(e => (0, i.jsx)(d.Z, {
        onView: () => r.Z.transitionToGuildSync(e.id),
        guild: {
          ...e,
          presenceCount: void 0,
          memberCount: void 0,
          premiumSubscriptionCount: void 0,
          emojis: void 0
        },
        theme: h
      }, e.id)),
      (0, i.jsx)(l.Z, {
        hasHub: !0
      })
    ]
  }) : (0, i.jsx)('div', {
    children: (0, i.jsx)(l.Z, {
      hasHub: !1
    })
  })
})
  });
}