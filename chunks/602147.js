"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("212093"),
  i = n("2485"),
  r = n("703656"),
  o = n("104259"),
  u = n("603592"),
  d = n("981631"),
  c = n("731455"),
  f = n("689938"),
  h = n("427122");

function m() {
  window.location.pathname.startsWith(d.Routes.GUILD_DISCOVERY) && ((0, s.clearSearch)(), (0, s.selectCategory)(c.DISCOVERY_ALL_CATEGORIES_ID, !0));
  let e = (0, r.getHistory)().location.search;
  (0, r.transitionTo)(d.Routes.GUILD_DISCOVERY, {
    search: e
  })
}
let p = a.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: a
  } = e, s = (0, i.useClanDiscoveryExperimentEnabled)("guild_discovery_button");
  return (0, l.jsx)(u.default, {
    id: "guild-discover-button",
    ref: t,
    onClick: m,
    selected: n,
    tooltip: null != a ? a : f.default.Messages.GUILD_DISCOVERY_TOOLTIP,
    className: s ? h.icon : void 0,
    icon: o.default
  })
});
t.default = p