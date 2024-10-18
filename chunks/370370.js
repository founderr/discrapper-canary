l.d(n, {
    j: function () {
        return c;
    }
});
var t = l(735250),
    i = l(470079),
    r = l(379357),
    a = l(442550),
    s = l(297781),
    d = l(443487),
    u = l(494399);
let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
n.Z = i.memo((e) => {
    let { entry: n, channel: l, selected: i, hovered: o } = e,
        { largeImage: h } = (0, r.rv)({
            entry: n,
            showCoverImage: !1
        });
    return (0, t.jsxs)(d.Zb, {
        selected: i,
        children: [
            (0, t.jsxs)(d.e$, {
                children: [
                    (0, t.jsx)(d.F9, {
                        entry: n,
                        channelId: l.id,
                        guildId: l.guild_id
                    }),
                    (0, t.jsx)(d.ll, { children: n.extra.activity_name }),
                    (0, t.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: c.map((e, l) =>
                            (0, t.jsx)(
                                e,
                                {
                                    entry: n,
                                    hovered: o
                                },
                                l
                            )
                        )
                    })
                ]
            }),
            (0, t.jsx)(a.f, {
                alt: null == h ? void 0 : h.alt,
                src: null == h ? void 0 : h.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
