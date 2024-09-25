var a = n(735250),
    l = n(470079),
    i = n(379357),
    r = n(442550),
    s = n(297781),
    o = n(443487),
    u = n(494399);
let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
t.Z = l.memo((e) => {
    let { entry: t, channel: n, selected: l, hovered: d } = e,
        { largeImage: h } = (0, i.rv)({
            entry: t,
            showCoverImage: !1
        });
    return (0, a.jsxs)(o.Zb, {
        selected: l,
        children: [
            (0, a.jsxs)(o.e$, {
                children: [
                    (0, a.jsx)(o.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, a.jsx)(o.ll, { children: t.extra.activity_name }),
                    (0, a.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: c.map((e, n) =>
                            (0, a.jsx)(
                                e,
                                {
                                    entry: t,
                                    hovered: d
                                },
                                n
                            )
                        )
                    })
                ]
            }),
            (0, a.jsx)(r.f, {
                alt: null == h ? void 0 : h.alt,
                src: null == h ? void 0 : h.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
