var a = t(735250),
    l = t(470079),
    i = t(297781),
    r = t(443487),
    s = t(43205),
    o = t(797342),
    u = t(182022);
let c = [i.OV, i.EE, i.Af, i.U9, i.n8, i.pQ];
n.Z = l.memo((e) => {
    let { entry: n, channel: t, selected: l, hovered: d } = e,
        { iconUrl: m, iconTitle: _ } = (0, o.n)(n);
    return (0, a.jsxs)(r.Zb, {
        selected: l,
        children: [
            (0, a.jsxs)(r.e$, {
                children: [
                    (0, a.jsx)(r.F9, {
                        entry: n,
                        channelId: t.id,
                        guildId: t.guild_id
                    }),
                    (0, a.jsx)(r.ll, { children: n.extra.activity_name }),
                    (0, a.jsx)(i.Gk, {
                        location: i.Gt.CARD,
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
            (0, a.jsx)(s.f, {
                alt: _,
                src: m,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
