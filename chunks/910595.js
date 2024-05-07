"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("493683"),
  r = n("859802"),
  o = n("511642"),
  u = n("931261"),
  d = n("703656"),
  c = n("306680"),
  f = n("356842"),
  h = n("308570"),
  p = n("434479"),
  m = n("981631"),
  C = n("176505"),
  g = n("490897"),
  E = n("689938");

function S(e) {
  let {
    guild: t,
    selected: n
  } = e, {
    showBadge: S
  } = r.GuildHomeBadgeExperiment.useExperiment({
    location: "487e85_1"
  }, {
    autoTrackExposure: !1
  });
  a.useEffect(() => {
    r.GuildHomeBadgeExperiment.trackExposure({
      location: "487e85_2"
    })
  }, []);
  let _ = (0, u.useCanSeeOnboardingHome)(t.id),
    I = (0, s.useStateFromStores)([c.default], () => c.default.hasUnread(t.id, g.ReadStateTypes.GUILD_HOME) && S, [t.id, S]);
  return (0, l.jsx)(p.BasicChannelRow, {
    id: "home-tab-".concat(t.id),
    renderIcon: e => _ ? (0, l.jsx)(h.default, {
      className: e
    }) : (0, l.jsx)(f.default, {
      className: e
    }),
    text: _ ? E.default.Messages.SERVER_GUIDE : E.default.Messages.GUILD_HOME,
    selected: n,
    showUnread: I,
    onMouseDown: function() {
      i.default.preload(t.id, C.StaticChannelRoute.GUILD_HOME)
    },
    onClick: function() {
      (0, o.ackGuildHome)(t.id), (0, d.transitionTo)(m.Routes.CHANNEL(t.id, C.StaticChannelRoute.GUILD_HOME))
    }
  })
}