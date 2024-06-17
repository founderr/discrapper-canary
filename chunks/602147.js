"use strict";
n.r(t), n.d(t, {
  handleDiscoveryButtonClick: function() {
    return g
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("704215"),
  i = n("212093"),
  r = n("963202"),
  o = n("605236"),
  u = n("703656"),
  d = n("683301"),
  c = n("104259"),
  f = n("603592"),
  h = n("981631"),
  m = n("731455"),
  C = n("689938"),
  p = n("427122");

function g() {
  let e = window.location.pathname.startsWith(h.Routes.GUILD_DISCOVERY),
    t = d.default.getCurrentCategoryId() === m.CategoryId.Clans;
  e && !t && ((0, i.clearSearch)(), (0, i.selectCategory)(m.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let n = (0, u.getHistory)().location.search;
  (0, u.transitionTo)(h.Routes.GUILD_DISCOVERY, {
    search: n
  })
}
let E = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a,
    className: i,
    onClick: u
  } = e, {
    clanDiscoveryEnabled: d
  } = (0, r.useClanPilotExperiment)("guild_discovery"), h = (0, o.useIsDismissibleContentDismissed)(s.DismissibleContent.NEW_GAMING_DISCOVERY_NOTIF), m = {
    lowerBadgeSize: {
      width: 12,
      height: 12
    }
  };
  return d && !h && (m.lowerBadge = (0, l.jsx)("div", {
    className: p.guildNotif
  })), (0, l.jsx)(f.default, {
    id: "guild-discover-button",
    ref: t,
    className: i,
    onClick: null != u ? u : g,
    selected: n,
    tooltip: null != a ? a : C.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: c.default,
    ...m
  })
});
t.default = E