t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(411104);
var a = t(735250),
    r = t(470079),
    s = t(442837),
    i = t(481060),
    o = t(239091),
    l = t(751688),
    c = t(184301),
    d = t(347475),
    u = t(210887),
    _ = t(5192),
    E = t(684201);
function I(e) {
    let { participants: n, channel: r } = e;
    return (0, a.jsx)(i.Scroller, {
        className: E.popout,
        children: n.map((e) =>
            (0, a.jsx)(
                l.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: _.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (n) => {
                        (0, o.jW)(n, async () => {
                            let { default: n } = await Promise.all([t.e('79695'), t.e('69220'), t.e('50261')]).then(t.bind(t, 881351));
                            return (t) =>
                                (0, a.jsx)(n, {
                                    ...t,
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
function m(e) {
    let { children: n, participants: t, channel: o, onPopoutClosed: l } = e,
        _ = (0, s.e7)([u.Z], () => u.Z.theme),
        E = 1 === t.length ? t[0] : null,
        m = (0, r.useCallback)(
            (e) => {
                if (null != E)
                    return (0, a.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == l || l();
                        },
                        userId: E.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: null == o ? void 0 : o.id
                    });
                if (null != t)
                    return (0, a.jsx)(I, {
                        participants: t,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, l, t, E]
        );
    return (0, a.jsx)(i.ThemeContextProvider, {
        theme: _,
        children: (0, a.jsx)(i.Popout, {
            renderPopout: m,
            preload: () =>
                null != E
                    ? (0, c.Z)(E, {
                          guildId: null == o ? void 0 : o.guild_id,
                          channelId: null == o ? void 0 : o.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
