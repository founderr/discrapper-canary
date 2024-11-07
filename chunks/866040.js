l.d(n, {
    Z: function () {
        return x;
    }
}),
    l(411104);
var t = l(200651),
    i = l(192379),
    r = l(442837),
    a = l(481060),
    s = l(239091),
    o = l(751688),
    u = l(184301),
    c = l(347475),
    d = l(210887),
    m = l(5192),
    p = l(846921);
function f(e) {
    let { participants: n, channel: i } = e;
    return (0, t.jsx)(a.Scroller, {
        className: p.popout,
        children: n.map((e) =>
            (0, t.jsx)(
                o.Z,
                {
                    guildId: null == i ? void 0 : i.guild_id,
                    user: e,
                    nick: m.ZP.getNickname(null == i ? void 0 : i.guild_id, null == i ? void 0 : i.id, e),
                    onContextMenu: (n) => {
                        (0, s.jW)(n, async () => {
                            let { default: n } = await Promise.all([l.e('79695'), l.e('69220'), l.e('44378')]).then(l.bind(l, 881351));
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
function x(e) {
    let { children: n, participants: l, channel: s, onPopoutClosed: o } = e,
        m = (0, r.e7)([d.Z], () => d.Z.theme),
        p = 1 === l.length ? l[0] : null,
        x = (0, i.useCallback)(
            (e) => {
                if (null != p)
                    return (0, t.jsx)(c.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == o || o();
                        },
                        userId: p.id,
                        guildId: null == s ? void 0 : s.guild_id,
                        channelId: null == s ? void 0 : s.id
                    });
                if (null != l)
                    return (0, t.jsx)(f, {
                        participants: l,
                        channel: s
                    });
                throw Error('One of participant or participants is required');
            },
            [s, o, l, p]
        );
    return (0, t.jsx)(a.ThemeContextProvider, {
        theme: m,
        children: (0, t.jsx)(a.Popout, {
            renderPopout: x,
            preload: () =>
                null != p
                    ? (0, u.Z)(p, {
                          guildId: null == s ? void 0 : s.guild_id,
                          channelId: null == s ? void 0 : s.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
