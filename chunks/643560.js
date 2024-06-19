n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(239091),
  r = n(299206),
  o = n(726521),
  c = n(99325),
  u = n(683818),
  d = n(689938);

function h(e) {
  let {
    entry: t,
    onSelect: h,
    closePopout: m,
    forceLightTheme: p,
    hideEditButton: E = !1
  } = e, {
    isEntryAdmin: g,
    canEdit: f,
    canRemove: C
  } = (0, u.Z)(t), _ = (0, r.Z)({
    id: t.guildId,
    label: d.Z.Messages.COPY_ID_GUILD,
    onSuccess: m
  });
  i.useEffect(() => {
    !f && !C && null == _ && (0, a.Zy)()
  });
  let I = () => {
    c.kx(t.channelId, t.guildId)
  };

  function x() {
    (0, a.Zy)(), null == m || m()
  }
  return (0, l.jsxs)(s.Menu, {
    className: p ? "theme-light" : null,
    navId: "guild-entry-context",
    onClose: x,
    "aria-label": d.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [(0, l.jsxs)(s.MenuGroup, {
      children: [f && !E ? (0, l.jsx)(s.MenuItem, {
        id: "update-entry",
        label: d.Z.Messages.HUB_ENTRY_UPDATE,
        action: function() {
          (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("34191")]).then(n.bind(n, 303647));
            return n => (0, l.jsx)(e, {
              ...n,
              entry: t
            })
          }), x()
        }
      }) : null, C ? (0, l.jsx)(s.MenuItem, {
        id: "remove-from-hub",
        label: d.Z.Messages.HUB_ENTRY_REMOVE,
        action: function() {
          (0, s.openModal)(e => (0, l.jsx)(s.ConfirmModal, {
            header: d.Z.Messages.HUB_ENTRY_REMOVE,
            confirmText: d.Z.Messages.REMOVE,
            cancelText: d.Z.Messages.CANCEL,
            onConfirm: I,
            ...e,
            children: (0, l.jsx)(s.Text, {
              variant: "text-md/normal",
              children: d.Z.Messages.HUB_ENTRY_REMOVE_BODY.format({
                guildName: t.name
              })
            })
          })), x()
        },
        color: "danger"
      }) : null, g ? null : (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(s.MenuItem, {
          id: "report-server-listing",
          label: d.Z.Messages.REPORT_SERVER_NO_NAME,
          action: function() {
            null != t && ((0, o.sq)(t), x())
          },
          icon: s.FlagIcon,
          color: "danger"
        })
      })]
    }), (0, l.jsx)(s.MenuGroup, {
      children: _
    })]
  })
}