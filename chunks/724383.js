n.d(t, {
  A: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var s = n(143927),
  a = n(252618),
  r = n(823379),
  l = n(836768),
  o = n(626426),
  c = n(916177),
  d = n(91630),
  u = n(754420),
  _ = n(49898),
  E = n(689938),
  h = n(738014);

function I() {
  let e = (0, l.d)(e => e.selectedPage, s.Z),
    t = function(e) {
      switch (e) {
        case _.S.SERVERS:
          return (0, i.jsx)(d.U, {});
        case _.S.APPS:
          return (0, i.jsx)(o.z, {});
        case _.S.QUESTS:
          return (0, i.jsx)(c.K, {});
        case _.S.SHOP:
          return (0, i.jsx)(u.t, {});
        default:
          (0, r.vE)(e)
      }
    }(e);
  return (0, i.jsxs)("section", {
    className: h.container,
    children: [(0, i.jsx)(a.yY, {
      location: function(e) {
        switch (e) {
          case _.S.SERVERS:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
          case _.S.APPS:
            return E.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
          case _.S.QUESTS:
            return E.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
          case _.S.SHOP:
            return E.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE;
          default:
            (0, r.vE)(e)
        }
      }(e)
    }), (0, i.jsx)("div", {
      className: h.dragRegion
    }), t]
  })
}