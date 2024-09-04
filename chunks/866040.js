l.d(n, {
    Z: function () {
        return E;
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
    c = l(347475),
    d = l(210887),
    m = l(5192),
    p = l(303540);
function f(e) {
    let { participants: n, channel: r } = e;
    return (0, t.jsx)(a.Scroller, {
        className: p.popout,
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
function E(e) {
    let { children: n, participants: l, channel: s, onPopoutClosed: u } = e,
        m = (0, i.e7)([d.Z], () => d.Z.theme),
        p = 1 === l.length ? l[0] : null,
        E = (0, r.useCallback)(
            (e) => {
                if (null != p)
                    return (0, t.jsx)(c.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == u || u();
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
            [s, u, l, p]
        );
    return (0, t.jsx)(a.ThemeContextProvider, {
        theme: m,
        children: (0, t.jsx)(a.Popout, {
            renderPopout: E,
            preload: () =>
                null != p
                    ? (0, o.Z)(p, {
                          guildId: null == s ? void 0 : s.guild_id,
                          channelId: null == s ? void 0 : s.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
