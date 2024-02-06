"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("817963"),
  d = n("398604"),
  r = n("534222"),
  s = n("782340");

function o(e, t, o) {
  var c;
  let {
    canManageGuildEvent: E
  } = (0, i.useManageResourcePermissions)(null != o ? o : t), f = (0, u.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), _ = E(f), T = null != (0, r.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), v = null != f && (0, d.isGuildScheduledEventActive)(f);
  return _ && !v && !T ? (0, l.jsx)(a.MenuItem, {
    id: s.default.Messages.START_EVENT,
    label: s.default.Messages.START_EVENT,
    action: function() {
      null != f && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: f
        })
      })
    }
  }) : null
}