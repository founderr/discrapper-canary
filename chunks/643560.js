n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(239091),
    r = n(299206),
    o = n(726521),
    c = n(99325),
    u = n(683818),
    d = n(689938);
function h(e) {
    let { entry: t, onSelect: h, closePopout: m, hideEditButton: p = !1 } = e,
        { isEntryAdmin: _, canEdit: f, canRemove: E } = (0, u.Z)(t),
        g = (0, r.Z)({
            id: t.guildId,
            label: d.Z.Messages.COPY_ID_GUILD,
            onSuccess: m
        });
    s.useEffect(() => {
        !f && !E && null == g && (0, l.Zy)();
    });
    let C = () => {
        c.kx(t.channelId, t.guildId);
    };
    function I() {
        (0, l.Zy)(), null == m || m();
    }
    return (0, i.jsxs)(a.Menu, {
        navId: 'guild-entry-context',
        onClose: I,
        'aria-label': d.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
        onSelect: h,
        children: [
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    f && !p
                        ? (0, i.jsx)(a.MenuItem, {
                              id: 'update-entry',
                              label: d.Z.Messages.HUB_ENTRY_UPDATE,
                              action: function () {
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              entry: t
                                          });
                                  }),
                                      I();
                              }
                          })
                        : null,
                    E
                        ? (0, i.jsx)(a.MenuItem, {
                              id: 'remove-from-hub',
                              label: d.Z.Messages.HUB_ENTRY_REMOVE,
                              action: function () {
                                  (0, a.openModal)((e) =>
                                      (0, i.jsx)(a.ConfirmModal, {
                                          header: d.Z.Messages.HUB_ENTRY_REMOVE,
                                          confirmText: d.Z.Messages.REMOVE,
                                          cancelText: d.Z.Messages.CANCEL,
                                          onConfirm: C,
                                          ...e,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: d.Z.Messages.HUB_ENTRY_REMOVE_BODY.format({ guildName: t.name })
                                          })
                                      })
                                  ),
                                      I();
                              },
                              color: 'danger'
                          })
                        : null,
                    _
                        ? null
                        : (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(a.MenuItem, {
                                  id: 'report-server-listing',
                                  label: d.Z.Messages.REPORT_SERVER_NO_NAME,
                                  action: function () {
                                      null != t && ((0, o.sq)(t), I());
                                  },
                                  icon: a.FlagIcon,
                                  color: 'danger'
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.MenuGroup, { children: g })
        ]
    });
}
