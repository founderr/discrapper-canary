var r = n(653041);
var i = n(735250);
n(470079);
var a = n(392711),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    u = n(184301),
    c = n(347475),
    d = n(463618),
    _ = n(823379),
    E = n(960987);
let f = 99,
    h = (e) => {
        let { member: t, empty: n, guildId: r } = e;
        return n
            ? (0, i.jsx)('div', { className: E.partyMemberEmpty })
            : null == t
              ? (0, i.jsx)('div', {
                    className: E.partyMemberUnknown,
                    children: (0, i.jsx)(d.Z, { className: E.partyMemberUnknownIcon })
                })
              : (0, i.jsx)('div', {
                    className: E.partyMemberKnown,
                    children: (0, i.jsx)(s.Popout, {
                        preload: () => (0, u.Z)(t.id, t.getAvatarURL(r, 80), { guildId: r }),
                        renderPopout: (e) =>
                            (0, i.jsx)(c.Z, {
                                ...e,
                                userId: t.id,
                                guildId: r,
                                newAnalyticsLocations: [l.Z.AVATAR]
                            }),
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(s.Avatar, {
                                ...e,
                                src: t.getAvatarURL(r, 24),
                                'aria-label': t.username,
                                size: s.AvatarSizes.SIZE_24,
                                className: E.partyMember
                            })
                    })
                });
    },
    p = (e) => {
        let { partySize: t, members: n, minAvatarsShown: r = 1, maxAvatarsShown: a = 2, guildId: s } = e,
            { unknownSize: l, totalSize: u, knownSize: c } = t;
        if (u < r) return null;
        let d = o()(n)
            .filter(_.lm)
            .take(a)
            .map((e) =>
                (0, i.jsx)(
                    h,
                    {
                        member: e,
                        guildId: s
                    },
                    e.id
                )
            )
            .value();
        for (let e = 0; e < l && d.length < a; e++) d.push((0, i.jsx)(h, { guildId: s }, 'unknown-member-'.concat(e)));
        let p = u - c - l;
        for (let e = 0; e < p && d.length < a; e++)
            d.push(
                (0, i.jsx)(
                    h,
                    {
                        empty: !0,
                        guildId: s
                    },
                    'empty-member-'.concat(e)
                )
            );
        let m = Math.max(Math.min(u - d.length, f), 0);
        if (1 === m) {
            let e = n[a];
            d.push(
                (0, i.jsx)(
                    h,
                    {
                        member: e,
                        guildId: s
                    },
                    e.id
                )
            );
        }
        return (0, i.jsx)('div', {
            className: E.wrapper,
            children: (0, i.jsxs)('div', {
                className: E.partyMembers,
                children: [
                    d,
                    m > 1
                        ? (0, i.jsxs)('div', {
                              className: E.partyMemberOverflow,
                              children: ['+', m]
                          })
                        : null
                ]
            })
        });
    };
t.Z = p;
