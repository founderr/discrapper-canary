"use strict";
n.r(t), n.d(t, {
  MODAL_KEY: function() {
    return c
  },
  openGuildRoleConnectionsModal: function() {
    return r
  },
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  o = n("83900"),
  s = n("535013"),
  i = n("782340");
let c = "guild-connection-roles";

function r(e) {
  (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("918771").then(n.bind(n, "918771"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e
    })
  }, {
    modalKey: c,
    contextKey: a.DEFAULT_MODAL_CONTEXT,
    onCloseRequest: () => {
      (0, a.closeModal)(c, a.DEFAULT_MODAL_CONTEXT)
    }
  })
}

function d(e) {
  let t = (0, s.isVerifiedRolesChannelVisible)(e);
  return t ? (0, l.jsx)(a.MenuItem, {
    id: "guild-connection-roles",
    label: i.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
    icon: o.default,
    action: () => r(e.id)
  }) : null
}