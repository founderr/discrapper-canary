l.d(n, {
    t: function () {
        return c;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(379357),
    a = l(442550),
    s = l(297781),
    d = l(443487),
    u = l(494399);
let c = [s.Yl, s.Rg];
n.Z = i.memo((e) => {
    let { entry: n, channel: l, selected: i } = e,
        { largeImage: o } = (0, r.rv)({ entry: n });
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
                    (0, t.jsx)(d.ll, { children: n.extra.media_title }),
                    (0, t.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: c.map((e, l) => (0, t.jsx)(e, { entry: n }, l))
                    })
                ]
            }),
            (0, t.jsx)(a.f, {
                src: null == o ? void 0 : o.src,
                size: 48,
                className: u.thumbnail,
                alt: null == o ? void 0 : o.alt
            })
        ]
    });
});
