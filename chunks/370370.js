var a = t(735250),
    l = t(470079),
    i = t(379357),
    r = t(442550),
    s = t(297781),
    o = t(443487),
    u = t(182022);
let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
n.Z = l.memo((e) => {
    let { entry: n, channel: t, selected: l, hovered: d } = e,
        { largeImage: _ } = (0, i.rv)({ entry: n });
    return (0, a.jsxs)(o.Zb, {
        selected: l,
        children: [
            (0, a.jsxs)(o.e$, {
                children: [
                    (0, a.jsx)(o.F9, {
                        entry: n,
                        channelId: t.id,
                        guildId: t.guild_id
                    }),
                    (0, a.jsx)(o.ll, { children: n.extra.activity_name }),
                    (0, a.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: c.map((e, t) =>
                            (0, a.jsx)(
                                e,
                                {
                                    entry: n,
                                    hovered: d
                                },
                                t
                            )
                        )
                    })
                ]
            }),
            (0, a.jsx)(r.f, {
                alt: null == _ ? void 0 : _.alt,
                src: null == _ ? void 0 : _.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
