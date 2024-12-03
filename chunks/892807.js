n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    o = n(192379),
    l = n(442837),
    r = n(481060),
    s = n(410575),
    a = n(933557),
    u = n(471445),
    c = n(430824),
    d = n(19780),
    h = n(699516),
    f = n(594174),
    p = n(981631),
    m = n(388032),
    v = n(693215);
function g(e) {
    let { recentVoiceChannels: t, currentVoiceChannel: n, onClose: g, onSelect: E } = e,
        x = o.useCallback(
            (e) => {
                E(e), g();
            },
            [E, g]
        ),
        C = (0, l.e7)([d.Z], () => d.Z.getQuality()),
        Z = {
            [p.IE4.FINE]: r.ConnectionFineIcon,
            [p.IE4.AVERAGE]: r.ConnectionAverageIcon,
            [p.IE4.BAD]: r.ConnectionBadIcon,
            [p.IE4.UNKNOWN]: r.ConnectionUnknownIcon
        }[C];
    return (0, i.jsx)(s.Z, {
        section: p.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(r.Menu, {
            onSelect: g,
            navId: 'manage-streams',
            onClose: g,
            'aria-label': m.intl.string(m.t['+9QSnp']),
            children: (0, i.jsx)(r.MenuGroup, {
                children: t.map((e) => {
                    var t;
                    let o = (0, u.KS)(e),
                        l = e.id === (null == n ? void 0 : n.id);
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsxs)(r.Text, {
                                variant: 'text-sm/semibold',
                                className: v.label,
                                color: l ? 'text-positive' : 'text-normal',
                                children: [
                                    null != o
                                        ? (0, i.jsx)(o, {
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : void 0,
                                    (0, a.F6)(e, f.default, h.Z)
                                ]
                            }),
                            subtext: null != e.getGuildId() ? (null === (t = c.Z.getGuild(e.getGuildId())) || void 0 === t ? void 0 : t.name) : void 0,
                            subtextLineClamp: 1,
                            icon: l ? Z : void 0,
                            action: () => x(e)
                        },
                        e.id
                    );
                })
            })
        })
    });
}
