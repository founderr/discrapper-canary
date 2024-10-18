l.d(n, {
    W: function () {
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
let c = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ];
n.Z = i.memo((e) => {
    var n;
    let { entry: l, channel: i, selected: o, hovered: h } = e,
        { largeImage: m } = (0, r.rv)({
            entry: l,
            showCoverImage: !1
        });
    return (0, t.jsxs)(d.Zb, {
        selected: o,
        children: [
            (0, t.jsxs)(d.e$, {
                children: [
                    (0, t.jsx)(d.F9, {
                        entry: l,
                        channelId: i.id,
                        guildId: i.guild_id
                    }),
                    (0, t.jsx)(d.ll, { children: l.extra.game_name }),
                    (0, t.jsx)(s.Gk, {
                        location: s.Gt.CARD,
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
