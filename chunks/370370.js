n.d(t, {
    j: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(379357),
    s = n(442550),
    o = n(297781),
    l = n(443487),
    u = n(830677);
let c = [o.OV, o.EE, o.Af, o.U9, o.n8, o.pQ];
t.Z = i.memo((e) => {
    let { entry: t, channel: n, selected: i, hovered: d } = e,
        { largeImage: f } = (0, a.rv)({
            entry: t,
            showCoverImage: !1
        });
    return (0, r.jsxs)(l.Zb, {
        selected: i,
        children: [
            (0, r.jsxs)(l.e$, {
                children: [
                    (0, r.jsx)(l.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, r.jsx)(l.ll, { children: t.extra.activity_name }),
                    (0, r.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: c.map((e, n) =>
                            (0, r.jsx)(
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
            (0, r.jsx)(s.f, {
                alt: null == f ? void 0 : f.alt,
                src: null == f ? void 0 : f.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
