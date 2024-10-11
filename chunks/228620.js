a.r(e);
var s = a(735250);
a(470079);
var c = a(481060),
    t = a(239091),
    i = a(37234),
    l = a(108843),
    u = a(100527),
    r = a(299206),
    o = a(703656),
    _ = a(852245),
    d = a(689938);
e.default = (0, l.Z)(
    function (n) {
        let { channel: e, onSelect: a } = n,
            l = (0, _.Z)(e),
            u = (0, r.Z)({
                id: e.id,
                label: d.Z.Messages.COPY_ID_CHANNEL
            });
        return (0, s.jsxs)(c.Menu, {
            navId: 'channel-context',
            onClose: t.Zy,
            'aria-label': d.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: a,
            children: [
                (0, s.jsxs)(c.MenuGroup, {
                    children: [
                        l,
                        e.isCategory()
                            ? null
                            : (0, s.jsx)(c.MenuItem, {
                                  id: 'jump-to-channel',
                                  label: d.Z.Messages.JUMP_TO_CHANNEL,
                                  action: () => {
                                      (0, o.XU)(e.guild_id, e.id), (0, i.xf)();
                                  }
                              })
                    ]
                }),
                (0, s.jsx)(c.MenuGroup, { children: u })
            ]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_AUDIT_LOG_MENU]
);
