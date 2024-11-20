n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    s = n(410575),
    a = n(933557),
    u = n(471445),
    d = n(430824),
    c = n(19780),
    h = n(699516),
    f = n(594174),
    p = n(981631),
    m = n(388032),
    v = n(549584);
function g(e) {
    let { recentVoiceChannels: t, currentVoiceChannel: n, onClose: g, onSelect: E } = e,
        Z = l.useCallback(
            (e) => {
                E(e), g();
            },
            [E, g]
        ),
        C = (0, o.e7)([c.Z], () => c.Z.getQuality()),
        x = {
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
                    let l = (0, u.KS)(e),
                        o = e.id === (null == n ? void 0 : n.id);
                    return (0, i.jsx)(
                        r.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsxs)(r.Text, {
                                variant: 'text-sm/semibold',
                                className: v.label,
                                color: o ? 'text-positive' : 'text-normal',
                                children: [
                                    null != l
                                        ? (0, i.jsx)(l, {
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : void 0,
                                    (0, a.F6)(e, f.default, h.Z)
                                ]
                            }),
                            subtext: null != e.getGuildId() ? (null === (t = d.Z.getGuild(e.getGuildId())) || void 0 === t ? void 0 : t.name) : void 0,
                            subtextLineClamp: 1,
                            icon: o ? x : void 0,
                            action: () => Z(e)
                        },
                        e.id
                    );
                })
            })
        })
    });
}
