n.d(t, {
  A: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(143927),
  l = n(252618),
  a = n(823379),
  r = n(836768),
  o = n(626426),
  c = n(916177),
  u = n(91630),
  d = n(754420),
  E = n(49898),
  h = n(689938),
  _ = n(738014);

function I() {
  let e = (0, r.d)(e => e.selectedPage, i.Z),
    t = function(e) {
      switch (e) {
        case E.S.SERVERS:
          return (0, s.jsx)(u.U, {});
        case E.S.APPS:
          return (0, s.jsx)(o.z, {});
        case E.S.QUESTS:
          return (0, s.jsx)(c.K, {});
        case E.S.SHOP:
          return (0, s.jsx)(d.t, {});
        default:
          (0, a.vE)(e)
      }
    }(e);
  return (0, s.jsxs)("section", {
    className: _.container,
    children: [(0, s.jsx)(l.yY, {
      location: function(e) {
        switch (e) {
          case E.S.SERVERS:
            return h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
          case E.S.APPS:
            return h.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
          case E.S.QUESTS:
            return h.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
          case E.S.SHOP:
            return h.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE;
          default:
            (0, a.vE)(e)
        }
      }(e)
    }), (0, s.jsx)("div", {
      className: _.dragRegion
    }), t]
  })
}