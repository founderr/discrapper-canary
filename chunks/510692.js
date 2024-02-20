"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("817963"),
  d = l("398604"),
  r = l("534222"),
  i = l("49111"),
  o = l("782340");

function c(e, t, c) {
  var E;
  let {
    canManageGuildEvent: f
  } = (0, s.useManageResourcePermissions)(null != c ? c : t), _ = (0, a.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), T = f(_), M = null != (0, r.useActiveEvent)(null !== (E = null == c ? void 0 : c.id) && void 0 !== E ? E : i.EMPTY_STRING_CHANNEL_ID), v = null != _ && (0, d.isGuildScheduledEventActive)(_);
  return T && !v && !M ? (0, n.jsx)(u.MenuItem, {
    id: o.default.Messages.START_EVENT,
    label: o.default.Messages.START_EVENT,
    action: function() {
      null != _ && (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("298843").then(l.bind(l, "298843"));
        return t => (0, n.jsx)(e, {
          ...t,
          event: _
        })
      })
    }
  }) : null
}