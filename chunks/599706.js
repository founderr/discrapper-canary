n(653041);
var i = n(735250);
n(470079);
var a = n(392711),
    s = n.n(a),
    l = n(481060),
    r = n(100527),
    o = n(184301),
    c = n(347475),
    d = n(463618),
    u = n(823379),
    _ = n(960987);
let E = (e) => {
    let { member: t, empty: n, guildId: a } = e;
    return n
        ? (0, i.jsx)('div', { className: _.partyMemberEmpty })
        : null == t
          ? (0, i.jsx)('div', {
                className: _.partyMemberUnknown,
                children: (0, i.jsx)(d.Z, { className: _.partyMemberUnknownIcon })
            })
          : (0, i.jsx)('div', {
                className: _.partyMemberKnown,
                children: (0, i.jsx)(l.Popout, {
                    preload: () => (0, o.Z)(t.id, t.getAvatarURL(a, 80), { guildId: a }),
                    renderPopout: (e) =>
                        (0, i.jsx)(c.Z, {
                            ...e,
                            userId: t.id,
                            guildId: a,
                            newAnalyticsLocations: [r.Z.AVATAR]
                        }),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)(l.Avatar, {
                            ...e,
                            src: t.getAvatarURL(a, 24),
                            'aria-label': t.username,
                            size: l.AvatarSizes.SIZE_24,
                            className: _.partyMember
                        })
                })
            });
};
t.Z = (e) => {
    let { partySize: t, members: n, minAvatarsShown: a = 1, maxAvatarsShown: l = 2, guildId: r } = e,
        { unknownSize: o, totalSize: c, knownSize: d } = t;
    if (c < a) return null;
    let I = s()(n)
        .filter(u.lm)
        .take(l)
        .map((e) =>
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: r
                },
                e.id
            )
        )
        .value();
    for (let e = 0; e < o && I.length < l; e++) I.push((0, i.jsx)(E, { guildId: r }, 'unknown-member-'.concat(e)));
    let m = c - d - o;
    for (let e = 0; e < m && I.length < l; e++)
        I.push(
            (0, i.jsx)(
                E,
                {
                    empty: !0,
                    guildId: r
                },
                'empty-member-'.concat(e)
            )
        );
    let T = Math.max(Math.min(c - I.length, 99), 0);
    if (1 === T) {
        let e = n[l];
        I.push(
            (0, i.jsx)(
                E,
                {
                    member: e,
                    guildId: r
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
