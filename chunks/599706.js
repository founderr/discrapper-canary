n(653041);
var i = n(200651);
n(192379);
var a = n(392711),
    s = n.n(a),
    r = n(481060),
    l = n(100527),
    o = n(184301),
    c = n(347475),
    u = n(463618),
    d = n(823379),
    _ = n(960987);
let E = (e) => {
    let { member: t, empty: n, guildId: a } = e;
    return n
        ? (0, i.jsx)('div', { className: _.partyMemberEmpty })
        : null == t
          ? (0, i.jsx)('div', {
                className: _.partyMemberUnknown,
                children: (0, i.jsx)(u.Z, { className: _.partyMemberUnknownIcon })
            })
          : (0, i.jsx)('div', {
                className: _.partyMemberKnown,
                children: (0, i.jsx)(r.Popout, {
                    preload: () => (0, o.Z)(t.id, t.getAvatarURL(a, 80), { guildId: a }),
                    renderPopout: (e) =>
                        (0, i.jsx)(c.Z, {
                            ...e,
                            userId: t.id,
                            guildId: a,
                            newAnalyticsLocations: [l.Z.AVATAR]
                        }),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)(r.Avatar, {
                            ...e,
                            src: t.getAvatarURL(a, 24),
                            'aria-label': t.username,
                            size: r.AvatarSizes.SIZE_24,
                            className: _.partyMember
                        })
                })
            });
};
t.Z = (e) => {
    let { partySize: t, members: n, minAvatarsShown: a = 1, maxAvatarsShown: r = 2, guildId: l } = e,
        { unknownSize: o, totalSize: c, knownSize: u } = t;
    if (c < a) return null;
    let I = s()(n)
        .filter(d.lm)
        .take(r)
        .map((e) =>
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: l
                },
                e.id
            )
        )
        .value();
    for (let e = 0; e < o && I.length < r; e++) I.push((0, i.jsx)(E, { guildId: l }, 'unknown-member-'.concat(e)));
    let m = c - u - o;
    for (let e = 0; e < m && I.length < r; e++)
        I.push(
            (0, i.jsx)(
                E,
                {
                    empty: !0,
                    guildId: l
                },
                'empty-member-'.concat(e)
            )
        );
    let T = Math.max(Math.min(c - I.length, 99), 0);
    if (1 === T) {
        let e = n[r];
        I.push(
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: l
                },
                e.id
            )
        );
    }
    return (0, i.jsx)('div', {
        className: _.wrapper,
        children: (0, i.jsxs)('div', {
            className: _.partyMembers,
            children: [
                I,
                T > 1
                    ? (0, i.jsxs)('div', {
                          className: _.partyMemberOverflow,
                          children: ['+', T]
                      })
                    : null
            ]
        })
    });
};
