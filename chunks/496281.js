"use strict";
a.r(n), a.d(n, {
  default: function() {
    return d
  }
});
var t = a("735250");
a("470079");
var i = a("481060"),
  l = a("239091"),
  r = a("299206"),
  s = a("943209"),
  u = a("689938");

function d(e) {
  let {
    channel: n,
    integration: a,
    onSelect: d
  } = e, o = (0, r.default)({
    id: n.id,
    label: u.default.Messages.COPY_ID_APPLICATION
  });
  return (0, t.jsxs)(i.Menu, {
    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
    navId: "manage-integration",
    onClose: l.closeContextMenu,
    onSelect: d,
    children: [(0, t.jsx)(i.MenuGroup, {
      children: (0, t.jsx)(i.MenuItem, {
        id: "remove-integration",
        label: u.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
        action: () => {
          (0, s.deletePrivateChannelIntegration)(n.id, a.application.id), null != d && d()
        },
        color: "danger"
      })
    }), (0, t.jsx)(i.MenuGroup, {
      children: o
    })]
  })
}