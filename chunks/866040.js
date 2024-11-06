t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(411104);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(239091),
    s = t(751688),
    c = t(184301),
    u = t(347475),
    d = t(210887),
    m = t(5192),
    f = t(684201);
function p(e) {
    let { participants: n, channel: i } = e;
    return (0, l.jsx)(a.Scroller, {
        className: f.popout,
        children: n.map((e) =>
            (0, l.jsx)(
                s.Z,
                {
                    guildId: null == i ? void 0 : i.guild_id,
                    user: e,
                    nick: m.ZP.getNickname(null == i ? void 0 : i.guild_id, null == i ? void 0 : i.id, e),
                    onContextMenu: (n) => {
                        (0, o.jW)(n, async () => {
                            let { default: n } = await Promise.all([t.e('79695'), t.e('69220'), t.e('50261')]).then(t.bind(t, 881351));
                            return (t) =>
                                (0, l.jsx)(n, {
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
function x(e) {
    let { children: n, participants: t, channel: o, onPopoutClosed: s } = e,
        m = (0, r.e7)([d.Z], () => d.Z.theme),
        f = 1 === t.length ? t[0] : null,
        x = (0, i.useCallback)(
            (e) => {
                if (null != f)
                    return (0, l.jsx)(u.Z, {
                        ...e,
                        closePopout: () => {
                            e.closePopout(), null == s || s();
                        },
                        userId: f.id,
                        guildId: null == o ? void 0 : o.guild_id,
                        channelId: null == o ? void 0 : o.id
                    });
                if (null != t)
                    return (0, l.jsx)(p, {
                        participants: t,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, s, t, f]
        );
    return (0, l.jsx)(a.ThemeContextProvider, {
        theme: m,
        children: (0, l.jsx)(a.Popout, {
            renderPopout: x,
            preload: () =>
                null != f
                    ? (0, c.Z)(f, {
                          guildId: null == o ? void 0 : o.guild_id,
                          channelId: null == o ? void 0 : o.id
                      })
                    : Promise.resolve(),
            children: n
        })
    });
}
