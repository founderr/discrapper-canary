e.r(t);
var a = e(200651);
e(192379);
var i = e(481060),
    c = e(239091),
    l = e(37234),
    r = e(108843),
    s = e(100527),
    u = e(299206),
    o = e(703656),
    d = e(852245),
    h = e(388032);
t.default = (0, r.Z)(
    function (n) {
        let { channel: t, onSelect: e } = n,
            r = (0, d.Z)(t),
            s = (0, u.Z)({
                id: t.id,
                label: h.intl.string(h.t.gFHI3t)
            });
        return (0, a.jsxs)(i.Menu, {
            navId: 'channel-context',
            onClose: c.Zy,
            'aria-label': h.intl.string(h.t.Xm41aW),
            onSelect: e,
            children: [
                (0, a.jsxs)(i.MenuGroup, {
                    children: [
                        r,
                        t.isCategory()
                            ? null
                            : (0, a.jsx)(i.MenuItem, {
                                  id: 'jump-to-channel',
                                  label: h.intl.string(h.t['bQIM4+']),
                                  action: () => {
                                      (0, o.XU)(t.guild_id, t.id), (0, l.xf)();
                                  }
                              })
                    ]
                }),
                (0, a.jsx)(i.MenuGroup, { children: s })
            ]
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_AUDIT_LOG_MENU]
);
