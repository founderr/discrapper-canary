n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    u = n(751688),
    c = n(184301),
    d = n(347475),
    _ = n(210887),
    E = n(5192),
    f = n(684201);
function h(e) {
    let { participants: t, channel: r } = e;
    return (0, i.jsx)(s.Scroller, {
        className: f.popout,
        children: t.map((e) =>
            (0, i.jsx)(
                u.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: E.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (t) => {
                        (0, l.jW)(t, async () => {
                            let { default: t } = await Promise.all([n.e('79695'), n.e('69220')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
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
function p(e) {
    let { children: t, participants: n, channel: r, onPopoutClosed: l } = e,
        u = (0, o.e7)([_.Z], () => _.Z.theme),
        E = 1 === n.length ? n[0] : null,
        f = (0, a.useCallback)(
            (e) => {
                if (null != E)
                    return (0, i.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == l || l();
                        },
                        userId: E.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: null == r ? void 0 : r.id
                    });
                if (null != n)
                    return (0, i.jsx)(h, {
                        participants: n,
                        channel: r
                    });
                throw Error('One of participant or participants is required');
            },
            [r, l, n, E]
        );
    return (0, i.jsx)(s.ThemeContextProvider, {
        theme: u,
        children: (0, i.jsx)(s.Popout, {
            renderPopout: f,
            preload: () =>
                null != E
                    ? (0, c.Z)(E, {
                          guildId: null == r ? void 0 : r.guild_id,
                          channelId: null == r ? void 0 : r.id
                      })
                    : Promise.resolve(),
            children: t
        })
    });
}
