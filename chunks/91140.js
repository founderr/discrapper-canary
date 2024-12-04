n.d(t, {
    W: function () {
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
let c = [o.OV, o.EE, o.Af, o.U9, o.wO, o.f, o.n8, o.v1, o.pQ];
t.Z = i.memo((e) => {
    var t;
    let { entry: n, channel: i, selected: d, hovered: f } = e,
        { largeImage: _ } = (0, a.rv)({
            entry: n,
            showCoverImage: !1
        });
    return (0, r.jsxs)(l.Zb, {
        selected: d,
        children: [
            (0, r.jsxs)(l.e$, {
                children: [
                    (0, r.jsx)(l.F9, {
                        entry: n,
                        channelId: i.id,
                        guildId: i.guild_id
                    }),
                    (0, r.jsx)(l.ll, { children: n.extra.game_name }),
                    (0, r.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: c.map((e, t) =>
                            (0, r.jsx)(
                                e,
                                {
                                    entry: n,
                                    hovered: f
                                },
                                t
                            )
                        )
                    })
                ]
            }),
            (0, r.jsx)(s.f, {
                alt: null !== (t = null == _ ? void 0 : _.text) && void 0 !== t ? t : null == _ ? void 0 : _.alt,
                src: null == _ ? void 0 : _.src,
                size: 48,
                className: u.thumbnail,
                showTooltip: (null == _ ? void 0 : _.text) != null
            })
        ]
    });
});
