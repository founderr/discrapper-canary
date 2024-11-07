l.d(n, {
    W: function () {
        return c;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(379357),
    a = l(442550),
    d = l(297781),
    s = l(443487),
    u = l(404720);
let c = [d.OV, d.EE, d.Af, d.U9, d.wO, d.f, d.n8, d.v1, d.pQ];
n.Z = i.memo((e) => {
    var n;
    let { entry: l, channel: i, selected: o, hovered: h } = e,
        { largeImage: m } = (0, r.rv)({
            entry: l,
            showCoverImage: !1
        });
    return (0, t.jsxs)(s.Zb, {
        selected: o,
        children: [
            (0, t.jsxs)(s.e$, {
                children: [
                    (0, t.jsx)(s.F9, {
                        entry: l,
                        channelId: i.id,
                        guildId: i.guild_id
                    }),
                    (0, t.jsx)(s.ll, { children: l.extra.game_name }),
                    (0, t.jsx)(d.Gk, {
                        location: d.Gt.CARD,
                        children: c.map((e, n) =>
                            (0, t.jsx)(
                                e,
                                {
                                    entry: l,
                                    hovered: h
                                },
                                n
                            )
                        )
                    })
                ]
            }),
            (0, t.jsx)(a.f, {
                alt: null !== (n = null == m ? void 0 : m.text) && void 0 !== n ? n : null == m ? void 0 : m.alt,
                src: null == m ? void 0 : m.src,
                size: 48,
                className: u.thumbnail,
                showTooltip: (null == m ? void 0 : m.text) != null
            })
        ]
    });
});
