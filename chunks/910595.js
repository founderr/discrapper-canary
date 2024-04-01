"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("442837"),
  r = n("493683"),
  o = n("859802"),
  u = n("511642"),
  d = n("931261"),
  c = n("703656"),
  f = n("306680"),
  h = n("356842"),
  p = n("308570"),
  C = n("434479"),
  m = n("981631"),
  g = n("176505"),
  E = n("490897"),
  _ = n("689938");

function I(e) {
  let {
    guild: t,
    selected: n
  } = e, I = (0, s.useListItem)("home-tab-".concat(t.id)), {
    showBadge: S
  } = o.GuildHomeBadgeExperiment.useExperiment({
    location: "487e85_1"
  }, {
    autoTrackExposure: !1
  });
  a.useEffect(() => {
    o.GuildHomeBadgeExperiment.trackExposure({
      location: "487e85_2"
    })
  }, []);
  let N = (0, d.useCanSeeOnboardingHome)(t.id),
    T = (0, i.useStateFromStores)([f.default], () => f.default.hasUnread(t.id, E.ReadStateTypes.GUILD_HOME) && S, [t.id, S]);
  return (0, l.jsx)(C.default, {
    ...I,
    renderIcon: e => N ? (0, l.jsx)(p.default, {
      className: e
    }) : (0, l.jsx)(h.default, {
      className: e
    }),
    text: N ? _.default.Messages.SERVER_GUIDE : _.default.Messages.GUILD_HOME,
    showUnread: T,
    selected: n,
    onMouseDown: function() {
      r.default.preload(t.id, g.StaticChannelRoute.GUILD_HOME)
    },
    onClick: function() {
      (0, u.ackGuildHome)(t.id), (0, c.transitionTo)(m.Routes.CHANNEL(t.id, g.StaticChannelRoute.GUILD_HOME))
    }
  })
}