"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("272030"),
  r = n("861370"),
  o = n("377114"),
  u = n("907566"),
  d = n("71102"),
  c = n("187163"),
  f = n("782340");

function h(e) {
  let {
    entry: t,
    onSelect: h,
    closePopout: m,
    forceLightTheme: p,
    hideEditButton: E = !1
  } = e, {
    isEntryAdmin: S,
    canEdit: g,
    canRemove: C
  } = (0, c.default)(t), _ = (0, r.default)({
    id: t.guildId,
    label: f.default.Messages.COPY_ID_GUILD,
    onSuccess: m
  });
  a.useEffect(() => {
    !g && !C && null == _ && (0, i.closeContextMenu)()
  });
  let I = () => {
    d.removeDirectoryGuildEntry(t.channelId, t.guildId)
  };

  function T() {
    (0, i.closeContextMenu)(), null == m || m()
  }
  return (0, l.jsxs)(s.Menu, {
    className: p ? "theme-light" : null,
    navId: "guild-entry-context",
    onClose: T,
    "aria-label": f.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [(0, l.jsxs)(s.MenuGroup, {
      children: [g && !E ? (0, l.jsx)(s.MenuItem, {
        id: "update-entry",
        label: f.default.Messages.HUB_ENTRY_UPDATE,
        action: function() {
          (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("895792").then(n.bind(n, "895792"));
            return n => (0, l.jsx)(e, {
              ...n,
              entry: t
            })
          }), T()
        }
      }) : null, C ? (0, l.jsx)(s.MenuItem, {
        id: "remove-from-hub",
        label: f.default.Messages.HUB_ENTRY_REMOVE,
        action: function() {
          (0, s.openModal)(e => (0, l.jsx)(s.ConfirmModal, {
            header: f.default.Messages.HUB_ENTRY_REMOVE,
            confirmText: f.default.Messages.REMOVE,
            cancelText: f.default.Messages.CANCEL,
            onConfirm: I,
            ...e,
            children: (0, l.jsx)(s.Text, {
              variant: "text-md/normal",
              children: f.default.Messages.HUB_ENTRY_REMOVE_BODY.format({
                guildName: t.name
              })
            })
          })), T()
        },
        color: "danger"
      }) : null, S ? null : (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(s.MenuItem, {
          id: "report-server-listing",
          label: f.default.Messages.REPORT_SERVER_NO_NAME,
          action: function() {
            null != t && ((0, o.showReportModalForGuildDirectoryEntry)(t), T())
          },
          icon: u.default,
          color: "danger"
        })
      })]
    }), (0, l.jsx)(s.MenuGroup, {
      children: _
    })]
  })
}