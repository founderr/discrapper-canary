l.d(n, {
    Z: function () {
        return N;
    }
}),
    l(411104);
var t = l(735250),
    r = l(470079),
    i = l(442837),
    a = l(481060),
    s = l(239091),
    u = l(751688),
    o = l(184301),
    c = l(103575),
    d = l(210887),
    m = l(5192),
    p = l(981631),
    E = l(303540);
function f(e) {
    let { participants: n, channel: r } = e;
    return (0, t.jsx)(a.Scroller, {
        className: E.popout,
        children: n.map((e) =>
            (0, t.jsx)(
                u.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: m.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (n) => {
                        (0, s.jW)(n, async () => {
                            let { default: n } = await Promise.all([l.e('79695'), l.e('69220'), l.e('46611')]).then(l.bind(l, 881351));
                            return (l) =>
                                (0, t.jsx)(n, {
                                    ...l,
                                    user: e
                                });
                        });
                    }
                },
                e.id
            )
        )
    });
}
function N(e) {
    let { children: n, participants: l, channel: s } = e,
        u = (0, i.e7)([d.Z], () => d.Z.theme),
        m = 1 === l.length ? l[0] : null,
        E = (0, r.useCallback)(
            (e) => {
                if (null != m)
                    return (0, t.jsx)(c.Z, {
                        ...e,
                        location: 'Content Inventory Embed',
                        userId: m.id,
                        guildId: null == s ? void 0 : s.guild_id,
                        channelId: null == s ? void 0 : s.id,
                        analyticsParams: {
                            location: {
                                page: p.ZY5.GUILD_CHANNEL,
                                section: p.jXE.CONTENT_INVENTORY_EMBED
                            }
                        }
                    });
                if (null != l)
                    return (0, t.jsx)(f, {
                        participants: l,
                        channel: s
                    });
                throw Error('One of participant or participants is required');
            },
            [s, l, m]
        );
    return (0, t.jsx)(a.ThemeContextProvider, {
        theme: u,
        children: (0, t.jsx)(a.Popout, {
            renderPopout: E,
            preload: () =>
                null != m
                    ? (0, o.Z)(m, {
                          guildId: null == s ? void 0 : s.guild_id,
                          channelId: null == s ? void 0 : s.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
