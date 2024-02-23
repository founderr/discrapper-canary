"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("272030"),
  i = n("824563"),
  r = n("401642"),
  o = n("69682"),
  u = n("49111"),
  d = e => {
    let {
      connection: t
    } = e, {
      user: d
    } = t, c = d.isNonUserBot(), f = (0, a.useStateFromStores)([i.default], () => c ? null : i.default.getStatus(d.id));
    return (0, l.jsx)(o.FriendRow, {
      user: d,
      status: null != f ? f : u.StatusTypes.UNKNOWN,
      onSelect: () => {
        (0, r.openUserProfileModal)({
          userId: d.id,
          analyticsLocation: {
            section: u.AnalyticsSections.DM_PROFILE
          }
        })
      },
      onContextMenu: e => {
        var t, a;
        return t = e, a = d, void(0, s.openContextMenuLazy)(t, async () => {
          let {
            default: e
          } = await n.el("406784").then(n.bind(n, "406784"));
          return t => (0, l.jsx)(e, {
            ...t,
            user: a
          })
        })
      }
    })
  }