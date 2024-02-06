"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("272030"),
  s = n("861370"),
  a = n("970755"),
  u = n("782340");

function o(e) {
  let {
    channel: t,
    integration: n,
    onSelect: o
  } = e, c = (0, s.default)({
    id: t.id,
    label: u.default.Messages.COPY_ID_APPLICATION
  });
  return (0, l.jsxs)(i.Menu, {
    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
    navId: "manage-integration",
    onClose: r.closeContextMenu,
    onSelect: o,
    children: [(0, l.jsx)(i.MenuGroup, {
      children: (0, l.jsx)(i.MenuItem, {
        id: "remove-integration",
        label: u.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
        action: () => {
          (0, a.deletePrivateChannelIntegration)(t.id, n.application.id), null != o && o()
        },
        color: "danger"
      })
    }), (0, l.jsx)(i.MenuGroup, {
      children: c
    })]
  })
}