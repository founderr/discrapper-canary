"use strict";
n.d(t, {
  Am: function() {
    return _
  },
  ZP: function() {
    return c
  },
  s$: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(430824),
  a = n(275759),
  l = n(689938);
let u = "guild-connection-roles";

function _(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("40897").then(n.bind(n, 507294));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: e
    })
  }, {
    modalKey: u,
    contextKey: s.DEFAULT_MODAL_CONTEXT,
    onCloseRequest: () => {
      (0, s.closeModal)(u, s.DEFAULT_MODAL_CONTEXT)
    }
  })
}

function c(e) {
  return (0, r.e7)([o.Z], () => (0, a.kQ)(e, o.Z.getRoles(e.id)), [e]) ? (0, i.jsx)(s.MenuItem, {
    id: "guild-connection-roles",
    label: l.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
    icon: s.LinkIcon,
    action: () => _(e.id)
  }) : null
}