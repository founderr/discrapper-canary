n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(411104);
var a = n(200651),
    r = n(192379),
    s = n(442837),
    i = n(481060),
    o = n(239091),
    l = n(751688),
    c = n(184301),
    d = n(347475),
    u = n(210887),
    _ = n(5192),
    E = n(684201);
function m(e) {
    let { participants: t, channel: r } = e;
    return (0, a.jsx)(i.Scroller, {
        className: E.popout,
        children: t.map((e) =>
            (0, a.jsx)(
                l.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: _.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (t) => {
                        (0, o.jW)(t, async () => {
                            let { default: t } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, a.jsx)(t, {
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
function I(e) {
    let { children: t, participants: n, channel: o, onPopoutClosed: l } = e,
        _ = (0, s.e7)([u.Z], () => u.Z.theme),
        E = 1 === n.length ? n[0] : null,
        I = (0, r.useCallback)(
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
                if (null != n)
                    return (0, a.jsx)(m, {
                        participants: n,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, l, n, E]
        );
    return (0, a.jsx)(i.ThemeContextProvider, {
        theme: _,
        children: (0, a.jsx)(i.Popout, {
            renderPopout: I,
            preload: () =>
                null != E
                    ? (0, c.Z)(E, {
                          guildId: null == o ? void 0 : o.guild_id,
                          channelId: null == o ? void 0 : o.id
                      })
                    : Promise.resolve(),
            children: t
        })
    });
}
