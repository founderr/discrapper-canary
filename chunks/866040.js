t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(411104);
var l = t(735250),
    i = t(470079),
    a = t(442837),
    r = t(481060),
    o = t(239091),
    s = t(751688),
    c = t(184301),
    u = t(347475),
    d = t(210887),
    m = t(5192),
    f = t(684201);
function _(e) {
    let { participants: n, channel: i } = e;
    return (0, l.jsx)(r.Scroller, {
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
function p(e) {
    let { children: n, participants: t, channel: o, onPopoutClosed: s } = e,
        m = (0, a.e7)([d.Z], () => d.Z.theme),
        f = 1 === t.length ? t[0] : null,
        p = (0, i.useCallback)(
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
                    return (0, l.jsx)(_, {
                        participants: t,
                        channel: o
                    });
                throw Error('One of participant or participants is required');
            },
            [o, s, t, f]
        );
    return (0, l.jsx)(r.ThemeContextProvider, {
        theme: m,
        children: (0, l.jsx)(r.Popout, {
            renderPopout: p,
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
