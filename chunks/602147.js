n.d(t, {
  o: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  s = n(704215),
  r = n(481060),
  a = n(212093),
  o = n(963202),
  u = n(605236),
  c = n(703656),
  d = n(683301),
  h = n(603592),
  g = n(981631),
  p = n(731455),
  m = n(689938),
  C = n(356131);

function E() {
  let e = window.location.pathname.startsWith(g.Z5c.GUILD_DISCOVERY),
    t = d.ZP.getCurrentCategoryId() === p.Gj.Clans;
  e && !t && ((0, a.AQ)(), (0, a.uY)(p.Hk, !0));
  let n = (0, c.s1)().location.search;
  (0, c.uL)(g.Z5c.GUILD_DISCOVERY, {
    search: n
  })
}
let f = i.forwardRef(function(e, t) {
  let {
    selected: n,
    tooltip: i,
    className: a,
    onClick: c
  } = e, {
    clanDiscoveryEnabled: d
  } = (0, o.nk)("guild_discovery"), g = (0, u.wE)(s.z.NEW_GAMING_DISCOVERY_NOTIF), p = {
    lowerBadgeSize: {
      width: 12,
      height: 12
    }
  };
  return d && !g && (p.lowerBadge = (0, l.jsx)("div", {
    className: C.guildNotif
  })), (0, l.jsx)(h.Z, {
    id: "guild-discover-button",
    ref: t,
    className: a,
    onClick: null != c ? c : E,
    selected: n,
    tooltip: null != i ? i : m.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
    icon: r.CompassIcon,
    ...p
  })
});
t.Z = f