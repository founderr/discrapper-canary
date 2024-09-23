t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(411104);
var a = t(735250),
    r = t(470079),
    s = t(442837),
    o = t(481060),
    l = t(239091),
    i = t(751688),
    c = t(184301),
    d = t(347475),
    u = t(210887),
    _ = t(5192),
    E = t(684201);
function I(e) {
    let { participants: n, channel: r } = e;
    return (0, a.jsx)(o.Scroller, {
        className: E.popout,
        children: n.map((e) =>
            (0, a.jsx)(
                i.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: _.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (n) => {
                        (0, l.jW)(n, async () => {
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
function A(e) {
    let { children: n, participants: t, channel: l, onPopoutClosed: i } = e,
        _ = (0, s.e7)([u.Z], () => u.Z.theme),
        E = 1 === t.length ? t[0] : null,
        A = (0, r.useCallback)(
            (e) => {
                if (null != E)
                    return (0, a.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == i || i();
                        },
                        userId: E.id,
                        guildId: null == l ? void 0 : l.guild_id,
                        channelId: null == l ? void 0 : l.id
                    });
                if (null != t)
                    return (0, a.jsx)(I, {
                        participants: t,
                        channel: l
                    });
                throw Error('One of participant or participants is required');
            },
            [l, i, t, E]
        );
    return (0, a.jsx)(o.ThemeContextProvider, {
        theme: _,
        children: (0, a.jsx)(o.Popout, {
            renderPopout: A,
            preload: () =>
                null != E
                    ? (0, c.Z)(E, {
                          guildId: null == l ? void 0 : l.guild_id,
                          channelId: null == l ? void 0 : l.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
