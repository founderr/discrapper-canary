n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250),
  i = n(470079),
  l = n(143927),
  a = n(481060),
  r = n(836768),
  o = n(49898),
  c = n(689938);

function u() {
  let e = i.useMemo(() => [{
      slug: o.S.SERVERS,
      title: c.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
      icon: (0, s.jsx)(a.ServerIcon, {
        color: "currentColor"
      })
    }, {
      slug: o.S.APPS,
      title: c.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE,
      icon: (0, s.jsx)(a.AppsIcon, {
        color: "currentColor"
      })
    }, {
      slug: o.S.QUESTS,
      title: c.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE,
      icon: (0, s.jsx)(a.QuestsIcon, {
        color: "currentColor"
      })
    }, {
      slug: o.S.SHOP,
      title: c.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE,
      icon: (0, s.jsx)(a.ShopSparkleIcon, {
        color: "currentColor"
      })
    }], []),
    t = (0, r.d)(e => e.selectedPage, l.Z);
  return {
    config: e,
    selectedPage: t,
    handleSelectPage: r.d.getState().setSelectedPage
  }
}