n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(410575),
    s = n(933557),
    u = n(471445),
    c = n(430824),
    d = n(19780),
    h = n(699516),
    f = n(594174),
    p = n(981631),
    m = n(388032),
    E = n(549584);
function g(e) {
    let { recentVoiceChannels: t, currentVoiceChannel: n, onClose: g, onSelect: v } = e,
        _ = r.useCallback(
            (e) => {
                v(e), g();
            },
            [v, g]
        ),
        C = (0, l.e7)([d.Z], () => d.Z.getQuality()),
        S = {
            [p.IE4.FINE]: o.ConnectionFineIcon,
            [p.IE4.AVERAGE]: o.ConnectionAverageIcon,
            [p.IE4.BAD]: o.ConnectionBadIcon,
            [p.IE4.UNKNOWN]: o.ConnectionUnknownIcon
        }[C];
    return (0, i.jsx)(a.Z, {
        section: p.jXE.CONTEXT_MENU,
        children: (0, i.jsx)(o.Menu, {
            onSelect: g,
            navId: 'manage-streams',
            onClose: g,
            'aria-label': m.intl.string(m.t['+9QSnp']),
            children: (0, i.jsx)(o.MenuGroup, {
                children: t.map((e) => {
                    var t;
                    let r = (0, u.KS)(e),
                        l = e.id === (null == n ? void 0 : n.id);
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: e.id,
                            label: (0, i.jsxs)(o.Text, {
                                variant: 'text-sm/semibold',
                                className: E.label,
                                color: l ? 'text-positive' : 'text-normal',
                                children: [
                                    null != r
                                        ? (0, i.jsx)(r, {
                                              color: 'currentColor',
                                              size: 'xs'
                                          })
                                        : void 0,
                                    (0, s.F6)(e, f.default, h.Z)
                                ]
                            }),
                            subtext: null != e.getGuildId() ? (null === (t = c.Z.getGuild(e.getGuildId())) || void 0 === t ? void 0 : t.name) : void 0,
                            subtextLineClamp: 1,
                            icon: l ? S : void 0,
                            action: () => _(e)
                        },
                        e.id
                    );
                })
            })
        })
    });
}
