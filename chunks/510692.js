"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("817963"),
  d = l("398604"),
  r = l("534222"),
  i = l("782340");

function o(e, t, o) {
  var c;
  let {
    canManageGuildEvent: f
  } = (0, s.useManageResourcePermissions)(null != o ? o : t), E = (0, a.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), _ = f(E), T = null != (0, r.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), M = null != E && (0, d.isGuildScheduledEventActive)(E);
  return _ && !M && !T ? (0, n.jsx)(u.MenuItem, {
    id: i.default.Messages.START_EVENT,
    label: i.default.Messages.START_EVENT,
    action: function() {
      null != E && (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("298843").then(l.bind(l, "298843"));
        return t => (0, n.jsx)(e, {
          ...t,
          event: E
        })
      })
    }
  }) : null
}