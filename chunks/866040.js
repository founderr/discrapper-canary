t.d(e, {
    Z: function () {
        return v;
    }
}),
    t(411104);
var i = t(735250),
    l = t(470079),
    r = t(442837),
    o = t(481060),
    a = t(239091),
    u = t(751688),
    c = t(184301),
    d = t(103575),
    s = t(210887),
    C = t(5192),
    h = t(981631),
    f = t(303540);
function p(n) {
    let { participants: e, channel: l } = n;
    return (0, i.jsx)(o.Scroller, {
        className: f.popout,
        children: e.map((n) =>
            (0, i.jsx)(
                u.Z,
                {
                    guildId: null == l ? void 0 : l.guild_id,
                    user: n,
                    nick: C.ZP.getNickname(null == l ? void 0 : l.guild_id, null == l ? void 0 : l.id, n),
                    onContextMenu: (e) => {
                        (0, a.jW)(e, async () => {
                            let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('46611')]).then(t.bind(t, 881351));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: n
                                });
                        });
                    }
                },
                n.id
            )
        )
    });
}
function v(n) {
    let { children: e, participants: t, channel: a } = n,
        u = (0, r.e7)([s.Z], () => s.Z.theme),
        C = 1 === t.length ? t[0] : null,
        f = (0, l.useCallback)(
            (n) => {
                if (null != C)
                    return (0, i.jsx)(d.Z, {
                        ...n,
                        location: 'Content Inventory Embed',
                        userId: C.id,
                        guildId: null == a ? void 0 : a.guild_id,
                        channelId: null == a ? void 0 : a.id,
                        analyticsParams: {
                            location: {
                                page: h.ZY5.GUILD_CHANNEL,
                                section: h.jXE.CONTENT_INVENTORY_EMBED
                            }
                        }
                    });
                if (null != t)
                    return (0, i.jsx)(p, {
                        participants: t,
                        channel: a
                    });
                throw Error('One of participant or participants is required');
            },
            [a, t, C]
        );
    return (0, i.jsx)(o.ThemeContextProvider, {
        theme: u,
        children: (0, i.jsx)(o.Popout, {
            renderPopout: f,
            preload: () =>
                null != C
                    ? (0, c.Z)(C, {
                          guildId: null == a ? void 0 : a.guild_id,
                          channelId: null == a ? void 0 : a.id
                      })
                    : Promise.resolve(),
            children: e
        })
    });
}
