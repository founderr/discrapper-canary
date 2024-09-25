n.d(t, {
    W: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(379357),
    o = n(442550),
    s = n(297781),
    l = n(443487),
    u = n(494399);
let c = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
    d = (e) => {
        var t;
        let { entry: n, channel: i, selected: d, hovered: _ } = e,
            { largeImage: E } = (0, a.rv)({
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
                        (0, r.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: c.map((e, t) =>
                                (0, r.jsx)(
                                    e,
                                    {
                                        entry: n,
                                        hovered: _
                                    },
                                    t
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(o.f, {
                    alt: null !== (t = null == E ? void 0 : E.text) && void 0 !== t ? t : null == E ? void 0 : E.alt,
                    src: null == E ? void 0 : E.src,
                    size: 48,
                    className: u.thumbnail,
                    showTooltip: (null == E ? void 0 : E.text) != null
                })
            ]
        });
    };
t.Z = i.memo(d);
