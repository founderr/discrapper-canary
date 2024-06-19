n.r(s);
var a = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  d = n(239091),
  i = n(995532),
  _ = n(689938);
s.default = e => {
  var s;
  let {
    guildId: o,
    welcomeChannel: E,
    onEdit: u,
    onChannelReorder: c,
    setShowConfirmModal: I,
    index: r,
    onSelect: L
  } = e, M = (0, l.e7)([i.Z], () => i.Z.get(o)), C = (null !== (s = null == M ? void 0 : M.welcome_channels) && void 0 !== s ? s : []).length - 1, N = e => {
    c(E, e, !0)
  };
  return (0, a.jsxs)(t.Menu, {
    navId: "welcome-settings-context",
    "aria-label": _.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: d.Zy,
    onSelect: L,
    children: [(0, a.jsxs)(t.MenuGroup, {
      children: [(0, a.jsx)(t.MenuItem, {
        id: "move-up",
        label: _.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_UP,
        disabled: r <= 0,
        action: () => N(r - 1)
      }), (0, a.jsx)(t.MenuItem, {
        id: "move-down",
        label: _.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_DOWN,
        disabled: r > C,
        action: () => N(r + 1)
      })]
    }), (0, a.jsxs)(t.MenuGroup, {
      children: [(0, a.jsx)(t.MenuItem, {
        id: "edit",
        label: _.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_EDIT,
        action: () => (0, t.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("39143")]).then(n.bind(n, 737868));
          return s => (0, a.jsx)(e, {
            ...s,
            welcomeChannel: E,
            guildId: o,
            onSave: u
          })
        })
      }), (0, a.jsx)(t.MenuItem, {
        id: "delete",
        label: _.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DELETE,
        action: () => I(!0),
        color: "danger"
      })]
    })]
  })
}