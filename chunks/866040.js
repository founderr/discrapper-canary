a.d(n, {
    Z: function () {
        return I;
    }
}),
    a(411104);
var t = a(735250),
    r = a(470079),
    s = a(442837),
    i = a(481060),
    o = a(239091),
    l = a(751688),
    c = a(184301),
    d = a(347475),
    u = a(210887),
    _ = a(5192),
    E = a(684201);
function m(e) {
    let { participants: n, channel: r } = e;
    return (0, t.jsx)(i.Scroller, {
        className: E.popout,
        children: n.map((e) =>
            (0, t.jsx)(
                l.Z,
                {
                    guildId: null == r ? void 0 : r.guild_id,
                    user: e,
                    nick: _.ZP.getNickname(null == r ? void 0 : r.guild_id, null == r ? void 0 : r.id, e),
                    onContextMenu: (n) => {
                        (0, o.jW)(n, async () => {
                            let { default: n } = await Promise.all([a.e('79695'), a.e('69220'), a.e('50261')]).then(a.bind(a, 881351));
                            return (a) =>
                                (0, t.jsx)(n, {
                                    ...a,
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
    let { children: n, participants: a, channel: o, onPopoutClosed: l } = e,
        _ = (0, s.e7)([u.Z], () => u.Z.theme),
        E = 1 === a.length ? a[0] : null,
        I = (0, r.useCallback)(
            (e) => {
                if (null != E)
                    return (0, t.jsx)(d.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == l || l();
                        },
                        userId: E.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: null == o ? void 0 : o.id
                    });
                if (null != a)
                    return (0, t.jsx)(m, {
                        participants: a,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, l, a, E]
        );
    return (0, t.jsx)(i.ThemeContextProvider, {
        theme: _,
        children: (0, t.jsx)(i.Popout, {
            renderPopout: I,
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
